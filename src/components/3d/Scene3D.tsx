import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import { FloatingCodeBlock } from './FloatingCodeBlock';
import { FloatingBalloon } from './FloatingBalloon';

interface Scene3DProps {
  variant: 'home' | 'achi' | 'kutkuti' | 'gurumata' | 'meow';
}

export function Scene3D({ variant }: Scene3DProps) {
  const getSceneContent = () => {
    switch (variant) {
      case 'home':
        return (
          <>
            <FloatingCodeBlock 
              position={[-3, 2, -2]} 
              code="const ankita = { awesome: true };" 
              color="#64ffda"
            />
            <FloatingCodeBlock 
              position={[3, -1, -1]} 
              code="console.log('Happy Birthday!');" 
              color="#ff6b9d"
            />
            <FloatingCodeBlock 
              position={[0, 3, -3]} 
              code="function celebrate() { party(); }" 
              color="#c77dff"
            />
            <FloatingBalloon position={[-2, 1, 1]} color="#ff6b9d" />
            <FloatingBalloon position={[2, 2, 0]} color="#64ffda" />
            <FloatingBalloon position={[0, -2, 2]} color="#c77dff" />
          </>
        );
      
      case 'achi':
        return (
          <>
            <FloatingCodeBlock 
              position={[-2, 1, -1]} 
              code="ankita.kindness = Infinity;" 
              color="#4ade80"
            />
            <FloatingCodeBlock 
              position={[2, -1, -2]} 
              code="help(everyone);" 
              color="#fbbf24"
            />
            <FloatingBalloon position={[-1, 2, 1]} color="#4ade80" />
            <FloatingBalloon position={[1, -2, 0]} color="#fbbf24" />
          </>
        );
      
      case 'kutkuti':
        return (
          <>
            <FloatingCodeBlock 
              position={[-2, 0, -1]} 
              code="if(bug) { ankita.rage++; }" 
              color="#ef4444"
            />
            <FloatingCodeBlock 
              position={[2, 1, -2]} 
              code="ERROR 404: Patience Not Found" 
              color="#f97316"
            />
            <FloatingCodeBlock 
              position={[0, -2, -1]} 
              code="throw new AngryException();" 
              color="#dc2626"
            />
          </>
        );
      
      case 'gurumata':
        return (
          <>
            <FloatingCodeBlock 
              position={[-3, 2, -1]} 
              code="class Guru extends Ankita {}" 
              color="#22c55e"
            />
            <FloatingCodeBlock 
              position={[3, -1, -2]} 
              code="solve(impossible_bug);" 
              color="#10b981"
            />
            <FloatingCodeBlock 
              position={[0, 1, -3]} 
              code="while(coding) { teach(); }" 
              color="#059669"
            />
            <FloatingCodeBlock 
              position={[-1, -2, 0]} 
              code="matrix.decode(reality);" 
              color="#047857"
            />
          </>
        );
      
      case 'meow':
        return (
          <>
            <FloatingCodeBlock 
              position={[-2, 1, -1]} 
              code="console.log('MEOW');" 
              color="#ec4899"
            />
            <FloatingCodeBlock 
              position={[2, -1, -2]} 
              code="meow.repeat(Infinity);" 
              color="#f472b6"
            />
            <FloatingCodeBlock 
              position={[0, 2, -1]} 
              code="typeof mystery = 'meow';" 
              color="#f97316"
            />
            <FloatingBalloon position={[-1, 0, 1]} color="#ec4899" />
            <FloatingBalloon position={[1, 1, 0]} color="#f472b6" />
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <Stars 
            radius={100} 
            depth={50} 
            count={1000} 
            factor={4} 
            saturation={0} 
            fade 
          />
          {getSceneContent()}
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}