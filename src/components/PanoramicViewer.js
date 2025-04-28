import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Sphere component that will display the 360° image
function PanoramaSphere({ imageUrl }) {
  const meshRef = useRef();
  const texture = useTexture(imageUrl);
  
  // Create sphere geometry with the image as a texture
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

// Controls component with auto-rotation
function AutoRotateControls({ autoRotate, autoRotateSpeed }) {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  
  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      autoRotate={autoRotate}
      autoRotateSpeed={autoRotateSpeed}
      enableZoom={false}
      enablePan={false}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={3 * Math.PI / 4}
      target={[0, 0, 0]}
      args={[camera, gl.domElement]}
    />
  );
}

// Main component
export default function PanoramicViewer({ 
  imageUrl, 
  autoRotate = true, 
  autoRotateSpeed = 0.5 
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device for responsive adjustments
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div style={{ 
      width: '100%', 
      height: isMobile ? '300px' : '500px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
        <PanoramaSphere imageUrl={imageUrl} />
        <AutoRotateControls 
          autoRotate={autoRotate} 
          autoRotateSpeed={autoRotateSpeed} 
        />
      </Canvas>
    </div>
  );
}