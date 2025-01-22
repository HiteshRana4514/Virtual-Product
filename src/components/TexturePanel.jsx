import React from 'react';
import styles from './TexturePanel.module.css';

const TexturePanel = ({ title, textures, onTextureSelect }) => {
  return (
    <div className={styles.textureSection}>
      <h3>{title}</h3>
      <div className={styles.textureGrid}>
        {textures.map((texture, index) => {
          if (texture.type === 'texture') {
            return (
              <div
                key={index}
                className={styles.textureItem}
                onClick={() => onTextureSelect(texture)}
              >
                <img src={texture.image} alt={texture.label} />
                <div className={styles.textureLabel}>{texture.label}</div>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className={styles.colorItem}
                style={{ backgroundColor: texture.color }}
                onClick={() => onTextureSelect(texture)}
              >
                <div className={styles.colorLabel}>{texture.label}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TexturePanel;
