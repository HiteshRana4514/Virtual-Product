import { useState, useCallback } from 'react';
import * as THREE from 'three';
import ThreeScene from './components/ThreeScene';
import TexturePanel from './components/TexturePanel';
import texture1 from './assets/images/texture-1.jpg';
import texture2 from './assets/images/texture-2.jpg';
import texture3 from './assets/images/texture-3.jpg';
import texture4 from './assets/images/texture-4.jpg';
import texture5 from './assets/images/texture-5.jpg';
import texture6 from './assets/images/texture-6.webp';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('customize');
  const [modelScale, setModelScale] = useState(1);
  const [sceneData, setSceneData] = useState(null);

  const handleSceneReady = useCallback((data) => {
    setSceneData(data);
  }, []);

  const handleDownloadImage = () => {
    if (sceneData && sceneData.renderer) {
      // Render the scene
      sceneData.renderer.render(sceneData.scene, sceneData.camera);
      
      // Get the canvas element
      const canvas = sceneData.renderer.domElement;
      
      // Convert the canvas to a data URL
      const dataUrl = canvas.toDataURL('image/jpeg', 1.0);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'office-chair.jpg';
      
      // Trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const cushionTextures = [
    { type: 'texture', image: texture1, label: 'Base Fabric 1' },
    { type: 'texture', image: texture2, label: 'Base Fabric 2' },
    { type: 'texture', image: texture3, label: 'Base Fabric 3' },
    { type: 'texture', image: texture4, label: 'Base Fabric 4' },
    { type: 'texture', image: texture5, label: 'Base Fabric 5' },
    { type: 'texture', image: texture6, label: 'Base Fabric 6' },
  ];

  const cushionColors = [
    { type: 'color', color: '#FF0000', label: 'Red' },
    { type: 'color', color: '#00FF00', label: 'Green' },
    { type: 'color', color: '#0000FF', label: 'Blue' },
    { type: 'color', color: '#FFFF00', label: 'Yellow' },
    { type: 'color', color: '#FF00FF', label: 'Pink' },
    { type: 'color', color: '#00FFFF', label: 'Cyan' },
    { type: 'color', color: '#FFFFFF', label: 'White' },
    { type: 'color', color: '#000000', label: 'Black' },
  ];

  const frameTextures = [
    { color: '#808080', label: 'Gray' },
    { color: '#A0522D', label: 'Brown' },
    { color: '#CD853F', label: 'Light Brown' },
    { color: '#8B4513', label: 'Dark Brown' },
    { color: '#D2691E', label: 'Chocolate' },
    { color: '#F4A460', label: 'Sandy Brown' },
    { color: '#000000', label: 'Black' },
    { color: '#FFFFFF', label: 'White' },
  ];

  const fullModelTextures = [
    { color: '#808080', label: 'Gray' },
    { color: '#A0522D', label: 'Brown' },
    { color: '#CD853F', label: 'Light Brown' },
    { color: '#8B4513', label: 'Dark Brown' },
    { color: '#D2691E', label: 'Chocolate' },
    { color: '#F4A460', label: 'Sandy Brown' },
    { color: '#000000', label: 'Black' },
    { color: '#FFFFFF', label: 'White' },
  ];

  const handleCushionTextureChange = useCallback((texture) => {
    if (sceneData?.model) {
      const textureLoader = new THREE.TextureLoader();
      
      sceneData.model.traverse((child) => {
        if (child instanceof THREE.Mesh && child.name.includes('Box015')) {
          console.log("child information cushion", child.name, child.material, child.geometry);
          if (child.material) {
            if (texture.type === 'texture') {
              // Load and apply texture
              const loadedTexture = textureLoader.load(texture.image);
              loadedTexture.wrapS = THREE.RepeatWrapping;
              loadedTexture.wrapT = THREE.RepeatWrapping;
              loadedTexture.repeat.set(1, 1);

              if (Array.isArray(child.material)) {
                child.material.forEach(mat => {
                  mat.map = loadedTexture;
                  mat.color.setStyle('#FFFFFF'); 
                  mat.needsUpdate = true;
                });
              } else {
                child.material.map = loadedTexture;
                child.material.color.setStyle('#FFFFFF');
                child.material.needsUpdate = true;
              }
            } else {
              // Apply color without removing texture
              const color = texture.color === '#000000' ? '#151515' : texture.color; // Use very dark gray instead of pure black
              
              if (Array.isArray(child.material)) {
                child.material.forEach(mat => {
                  mat.color.setStyle(color);
                  mat.needsUpdate = true;
                });
              } else {
                child.material.color.setStyle(color);
                child.material.needsUpdate = true;
              }
            }
          }
        }
      });
    }
  }, [sceneData]);

  const handleFrameTextureChange = useCallback((texture) => {
    if (sceneData?.model) {
      sceneData.model.traverse((child) => {
        if (child instanceof THREE.Mesh && child.name.includes('Cylinder')) {
          console.log("child information frame",child.name, child.material, child.geometry);
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(mat => mat.color.setStyle(texture.color));
            } else {
              child.material.color.setStyle(texture.color);
            }
          }
        }
      });
    }
  }, [sceneData]);

  const handleFullModelTextureChange = useCallback((texture) => {
    if (sceneData?.model) {
      sceneData.model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(mat => mat.color.setStyle(texture.color));
            } else {
              child.material.color.setStyle(texture.color);
            }
          }
        }
      });
    }
  }, [sceneData]);

  return (
    <div className="app-container">
      <div className="viewer-section">
        <div className="view-wrap">
          <span className="tag-360"># view 360</span>
        </div>
        <ThreeScene modelScale={modelScale} onSceneReady={handleSceneReady} />
      </div>
      <div className="controls-section">
        <div className="product-header">
          <h1>Office Chair</h1>
          <p className="product-subtitle">Premium Ergonomic Design</p>
        </div>
        
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'customize' ? 'active' : ''}`}
            onClick={() => setActiveTab('customize')}
          >
            Customize
          </button>
          <button 
            className={`tab ${activeTab === 'details' ? 'active' : ''}`}
            onClick={() => setActiveTab('details')}
          >
            Product Details
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'customize' ? (
            <div className="customize-panel">
              <div className="control-group">
                <label>Model Scale</label>
                <div className="scale-control">
                  <input
                    type="range"
                    className="scale-slider"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={modelScale}
                    onChange={(e) => setModelScale(parseFloat(e.target.value))}
                  />
                  <div className="scale-marks">
                    <span>50%</span>
                    <span>100%</span>
                    <span>200%</span>
                  </div>
                  <div className="scale-value">{(modelScale * 100).toFixed(0)}%</div>
                </div>
              </div>
              <div className="texture-section">
                <h3>Base Fabric</h3>
                <div className="texture-grid">
                  {cushionTextures.map((texture, index) => (
                    <div
                      key={`texture-${index}`}
                      className="texture-item"
                      onClick={() => handleCushionTextureChange(texture)}
                      style={{
                        backgroundImage: `url(${texture.image})`,
                        backgroundSize: 'cover',
                        width: '50px',
                        height: '50px',
                        cursor: 'pointer',
                        border: '2px solid #ccc',
                        borderRadius: '4px',
                        margin: '4px'
                      }}
                      title={texture.label}
                    />
                  ))}
                </div>
              </div>
              <div className="texture-section">
                <h3>Cushion Colors</h3>
                <div className="texture-grid">
                  {cushionColors.map((texture, index) => (
                    <div
                      key={`color-${index}`}
                      className="color-item"
                      onClick={() => handleCushionTextureChange(texture)}
                      style={{
                        backgroundColor: texture.color,
                        width: '50px',
                        height: '50px',
                        cursor: 'pointer',
                        border: '2px solid #ccc',
                        borderRadius: '4px',
                        margin: '4px'
                      }}
                      title={texture.label}
                    />
                  ))}
                </div>
              </div>
              <div className="texture-section">
                <h3>Frame Colors</h3>
                <div className="texture-grid">
                  {frameTextures.map((texture, index) => (
                    <div
                      key={`frame-${index}`}
                      className="color-item"
                      onClick={() => handleFrameTextureChange(texture)}
                      style={{
                        backgroundColor: texture.color,
                        width: '50px',
                        height: '50px',
                        cursor: 'pointer',
                        border: '2px solid #ccc',
                        borderRadius: '4px',
                        margin: '4px'
                      }}
                      title={texture.label}
                    />
                  ))}
                </div>
              </div>
              <div className="texture-section">
                <h3>Full Model Colors</h3>
                <div className="texture-grid">
                  {fullModelTextures.map((texture, index) => (
                    <div
                      key={`model-${index}`}
                      className="color-item"
                      onClick={() => handleFullModelTextureChange(texture)}
                      style={{
                        backgroundColor: texture.color,
                        width: '50px',
                        height: '50px',
                        cursor: 'pointer',
                        border: '2px solid #ccc',
                        borderRadius: '4px',
                        margin: '4px'
                      }}
                      title={texture.label}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="product-details">
              <div className="detail-item">
                <h3>Description</h3>
                <p>Premium ergonomic office chair designed for maximum comfort during long work hours. Features adjustable height, tilt mechanism, and premium materials.</p>
              </div>
              <div className="detail-item">
                <h3>Specifications</h3>
                <ul>
                  <li>Dimensions: 26"W x 26"D x 38-42"H</li>
                  <li>Weight Capacity: 300 lbs</li>
                  <li>Material: High-grade mesh and aluminum</li>
                  <li>Adjustable Height: 17-21 inches</li>
                </ul>
              </div>
              <div className="detail-item">
                <h3>Features</h3>
                <ul>
                  <li>360° Swivel</li>
                  <li>Adjustable Lumbar Support</li>
                  <li>Breathable Mesh Back</li>
                  <li>Multi-tilt Mechanism</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
