# Virtual Product Customizer

A React-based 3D product customization application that allows users to interact with and customize 3D models in real-time. Built with Three.js for 3D rendering and modern React practices.

## Features

- **Interactive 3D Viewer**
  - 360-degree rotation view
  - Zoom in/out functionality
  - Smooth model manipulation
  - Responsive canvas sizing

- **Product Customization**
  - Model scale adjustment
  - Texture customization for different parts
  - Color variations for cushions
  - Frame color options
  - Real-time preview of changes

- **Product Information**
  - Detailed product specifications
  - Features list
  - Product dimensions
  - Material information

- **Image Export**
  - Download current view as JPG
  - High-quality image capture
  - Custom filename

- **User Interface**
  - Clean, modern design
  - Tabbed interface (Customize/Product Details)
  - Intuitive controls
  - Responsive layout

## Technology Stack

- React
- Three.js
- CSS Modules
- Modern JavaScript (ES6+)

## Project Structure

```
virtual-product-2/
├── src/
│   ├── components/
│   │   ├── ThreeScene.jsx       # 3D viewer component
│   │   ├── ThreeScene.module.css
│   │   └── LoadingSpinner.jsx
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # Global styles
│   └── assets/                  # Textures and 3D models
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. **View Model**: Use mouse/touch to rotate and zoom the 3D model
2. **Customize**:
   - Adjust model scale using the slider
   - Apply different textures to cushions
   - Change frame colors
   - Try different color combinations
3. **View Details**: Switch to the Product Details tab for specifications
4. **Download**: Capture the current view using the Download Image button

## Development Notes

- The 3D viewer is implemented using Three.js with React integration
- Texture loading is optimized for performance
- State management is handled with React hooks
- CSS Modules are used for component-specific styling
- Responsive design principles are followed throughout

## Future Enhancements

- Additional model support
- More customization options
- AR/VR integration
- Save/load customization presets
- Share functionality

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
