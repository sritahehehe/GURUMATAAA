import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingBalloonProps {
  position: [number, number, number];
  color: string;
  scale?: number;
}

export function FloatingBalloon({ position, color, scale = 1 }: FloatingBalloonProps) {
  const balloonRef = useRef<THREE.Mesh>(null);
  const stringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (balloonRef.current) {
      balloonRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.3;
      balloonRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
    if (stringRef.current) {
      stringRef.current.position.y = position[1] - 1 + Math.sin(state.clock.elapsedTime * 0.6) * 0.3;
    }
  });

  return (
    <group position={position}>
      {/* Balloon */}
      <Sphere ref={balloonRef} args={[0.5 * scale, 16, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color={color} 
          metalness={0.1} 
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </Sphere>
      
      {/* String */}
      <Cylinder 
        ref={stringRef} 
        args={[0.01, 0.01, 2 * scale]} 
        position={[0, -1, 0]}
      >
        <meshBasicMaterial color="#333" />
      </Cylinder>
      
      {/* Glow effect */}
      <pointLight 
        position={[0, 0, 0]} 
        color={color} 
        intensity={0.3} 
        distance={4} 
      />
    </group>
  );
}