import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei'; // Removed unused Sphere

const DistortedIcosahedron = () => { // Renamed for clarity
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Slow rotation
      meshRef.current.rotation.x += delta * 0.05;
      meshRef.current.rotation.y += delta * 0.07;
      meshRef.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <Icosahedron args={[1, 0]} ref={meshRef} scale={2.0}> {/* detail=0 for basic icosahedron */}
      <MeshDistortMaterial
        color="#fde68a" // Accent Soft Yellow - main color
        emissive="#f472b6" // Accent Pink for glow
        emissiveIntensity={0.6} // Glow intensity
        roughness={0.3} // Less shiny
        metalness={0.2} // Slightly metallic
        distort={0.35} // Amount of distortion
        speed={1.5}    // Speed of the distortion animation
      />
    </Icosahedron>
  );
};

const RotatingShapeCanvas = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-70 md:opacity-50">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 35 }}>
        <ambientLight intensity={Math.PI / 4} color="#ffffff" />
        <directionalLight position={[3, 2, 5]} intensity={2.5} color="#ffffff" />
        <pointLight position={[0, 1, 3]} intensity={1.5} color="#f472b6" distance={10} decay={1.5} />
        <pointLight position={[0, -2, -3]} intensity={1} color="#7c3aed" distance={10} decay={2} />

        <Suspense fallback={null}>
          <DistortedIcosahedron />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default RotatingShapeCanvas;
