import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { TbRotate360, TbDownload } from 'react-icons/tb';
import LoadingSpinner from './LoadingSpinner';
import styles from './ThreeScene.module.css';
import chairMtl from '../assets/chair-mtl.mtl?url';
import chairObj from '../assets/chair-obj.obj?url';

const ThreeScene = ({ modelScale, onSceneReady }) => {
  const [isLoading, setIsLoading] = useState(true);
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const modelRef = useRef(null);
  const initialCameraPosition = useRef(null);
  const backgroundScene = useRef(null);
  const backgroundCamera = useRef(null);

  const resetView = () => {
    if (cameraRef.current && controlsRef.current && initialCameraPosition.current) {
      const { position, target } = initialCameraPosition.current;
      
      // Animate camera position
      const startPosition = cameraRef.current.position.clone();
      const startTarget = controlsRef.current.target.clone();
      const duration = 1000; // 1 second
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Smooth easing
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        // Interpolate camera position
        cameraRef.current.position.lerpVectors(startPosition, position, easeProgress);
        controlsRef.current.target.lerpVectors(startTarget, target, easeProgress);
        controlsRef.current.update();

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }
  };

  const handleDownload = () => {
    if (rendererRef.current) {
      // Ensure the scene is rendered with latest state
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      rendererRef.current.render(backgroundScene.current, backgroundCamera.current);
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      
      const link = document.createElement('a');
      link.download = 'virtual-product.jpg';
      // Use JPEG format with high quality (0.9)
      link.href = rendererRef.current.domElement.toDataURL('image/jpeg', 0.9);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // Main scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Background scene setup
    const bgScene = new THREE.Scene();
    backgroundScene.current = bgScene;

    // Create gradient background
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      uniform vec3 colorA;
      uniform vec3 colorB;
      void main() {
        gl_FragColor = vec4(mix(colorA, colorB, vUv.y), 1.0);
      }
    `;

    const uniforms = {
      colorA: { value: new THREE.Color(0xE0F7FF) },
      colorB: { value: new THREE.Color(0xFFFFFF) }
    };

    // Create a plane for the background
    const bgGeometry = new THREE.PlaneGeometry(2, 2);
    const bgMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      depthWrite: false
    });

    const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial);
    bgScene.add(bgMesh);

    // Background camera
    const bgCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 0);
    backgroundCamera.current = bgCamera;

    // Main camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / 2 / window.innerHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.set(0, 0, 5);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      preserveDrawingBuffer: true, // Required for image download with background
      alpha: false // Ensure background is not transparent
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.autoClear = false; // Important for rendering two scenes
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add Raycaster for click detection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleClick = (event) => {
      // Calculate mouse position in normalized device coordinates
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      // Update the picking ray with the camera and mouse position
      raycaster.setFromCamera(mouse, camera);

      // Calculate objects intersecting the picking ray
      if (modelRef.current) {
        const intersects = raycaster.intersectObjects(modelRef.current.children, true);
        if (intersects.length > 0) {
          const clickedMesh = intersects[0].object;
          console.log('Clicked part name:', clickedMesh.name);
        }
      }
    };

    renderer.domElement.addEventListener('click', handleClick);

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    
    // Configure controls for full rotation
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 1.0;
    controls.minDistance = 2;
    controls.maxDistance = 10;
    controls.enablePan = false;
    controls.enableZoom = true;
    
    // Allow full spherical rotation
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI;
    controls.minAzimuthAngle = -Infinity;
    controls.maxAzimuthAngle = Infinity;
    
    // Set the pivot point
    controls.target.set(0, 0, 0);
    controls.update();

    // Add event listeners for cursor changes
    const canvas = renderer.domElement;
    
    const handleDragStart = () => {
      canvas.classList.add('grabbing');
    };
    
    const handleDragEnd = () => {
      canvas.classList.remove('grabbing');
    };

    controls.addEventListener('dragstart', handleDragStart);
    controls.addEventListener('dragend', handleDragEnd);

    // Add cursor change listeners
    canvas.addEventListener('mousedown', () => {
      canvas.classList.add('grabbing');
    });
    
    canvas.addEventListener('mouseup', () => {
      canvas.classList.remove('grabbing');
    });
    
    canvas.addEventListener('mouseleave', () => {
      canvas.classList.remove('grabbing');
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light with soft shadows
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;
    directionalLight.shadow.bias = -0.0001;
    scene.add(directionalLight);

    // Add a soft fill light from the opposite side
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-5, 3, -5);
    scene.add(fillLight);

    // Load model with materials
    const mtlLoader = new MTLLoader();
    mtlLoader.load(
      chairMtl,
      (materials) => {
        materials.preload();

        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(
          chairObj,
          (object) => {
            console.log('OBJ loaded successfully', object);
            
            // Create a container for the model
            const modelContainer = new THREE.Group();
            
            // Calculate bounding box before any transformations
            const boundingBox = new THREE.Box3().setFromObject(object);
            const modelCenter = boundingBox.getCenter(new THREE.Vector3());
            const modelSize = boundingBox.getSize(new THREE.Vector3());
            const maxDim = Math.max(modelSize.x, modelSize.y, modelSize.z);
            
            // Calculate base scale
            const baseScale = 2 / maxDim;
            modelContainer.userData.maxDim = maxDim;
            modelContainer.userData.baseScale = baseScale;
            
            // Center the model geometry
            object.position.sub(modelCenter);
            
            // Add object to container and apply transformations
            modelContainer.add(object);
            modelContainer.scale.setScalar(baseScale);
            
            modelRef.current = modelContainer;
            scene.add(modelContainer);

            // Store initial camera position for reset
            const cameraDistance = maxDim * baseScale * 2;
            initialCameraPosition.current = {
              position: new THREE.Vector3(cameraDistance, cameraDistance / 2, cameraDistance),
              target: new THREE.Vector3(0, 0, 0)
            };

            // Position camera to view the entire model
            camera.position.copy(initialCameraPosition.current.position);
            camera.lookAt(initialCameraPosition.current.target);
            controls.update();

            setIsLoading(false);

            if (onSceneReady) {
              onSceneReady({ scene, model: modelContainer });
            }

            // Render a frame immediately
            renderer.render(scene, camera);
          },
          (xhr) => {
            const progress = (xhr.loaded / xhr.total) * 100;
            console.log(`OBJ ${progress.toFixed(2)}% loaded`);
          },
          (error) => {
            console.error('Error loading OBJ:', error);
          }
        );
      },
      (xhr) => {
        const progress = (xhr.loaded / xhr.total) * 100;
        console.log(`MTL ${progress.toFixed(2)}% loaded`);
      },
      (error) => {
        console.error('Error loading MTL:', error);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // First render the background
      renderer.clear();
      renderer.render(backgroundScene.current, backgroundCamera.current);
      
      // Then render the main scene
      renderer.render(scene, camera);
      
      controls.update();
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const container = mountRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height, false);
    };

    window.addEventListener('resize', handleResize);
    // Initial resize
    handleResize();

    // Cleanup
    return () => {
      renderer.domElement.removeEventListener('click', handleClick);
      controls.removeEventListener('dragstart', handleDragStart);
      controls.removeEventListener('dragend', handleDragEnd);
      
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) {
            object.geometry.dispose();
          }
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });
      
      renderer.dispose();
      if (modelRef.current) {
        modelRef.current.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            if (object.geometry) {
              object.geometry.dispose();
            }
            if (object.material) {
              if (Array.isArray(object.material)) {
                object.material.forEach(material => material.dispose());
              } else {
                object.material.dispose();
              }
            }
          }
        });
      }
    };
  }, []);

  // Update model scale when the prop changes
  useEffect(() => {
    if (modelRef.current) {
      const baseScale = modelRef.current.userData.baseScale;
      modelRef.current.scale.setScalar(baseScale * modelScale);
    }
  }, [modelScale]);

  return (
    <div ref={mountRef} className={styles.sceneContainer}>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <>
          <button className={styles.resetViewButton} onClick={resetView} title="Reset View">
            <TbRotate360 />
          </button>
          <button className={styles.downloadButton} onClick={handleDownload} title="Download Image">
            <TbDownload />
          </button>
        </>
      )}
    </div>
  );
};

export default ThreeScene;
