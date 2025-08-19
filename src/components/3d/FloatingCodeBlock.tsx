import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingCodeBlockProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  code: string;
  color?: string;
}

export function FloatingCodeBlock({ 
  position, 
  rotation = [0, 0, 0], 
  code, 
  color = "#64ffda" 
}: FloatingCodeBlockProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      <Box ref={meshRef} args={[2, 1.2, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#1a1a2e" 
          transparent 
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </Box>
      <Text
        ref={textRef}
        position={[0, 0, 0.06]}
        fontSize={0.15}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="/fonts/FiraCode-Regular.woff"
        maxWidth={1.8}
      >
        {code}
      </Text>
      {/* Glowing effect */}
      <pointLight 
        position={[0, 0, 0.2]} 
        color={color} 
        intensity={0.5} 
        distance={3} 
      />
    </group>
  );
}