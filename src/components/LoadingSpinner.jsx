import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerOverlay}>
      <div className={styles.spinner}>
        <div className={styles.dot1}></div>
        <div className={styles.dot2}></div>
      </div>
      <div className={styles.loadingText}>Loading 3D Model...</div>
    </div>
  );
};

export default LoadingSpinner;
