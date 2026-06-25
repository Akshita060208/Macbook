import React from 'react';
import clsx from 'clsx';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import '../index.css';
import useMacbookStore from '../store';

const RotatingBox = ({ color, scale }) => {
  const boxColor = color === 'silver' ? '#d8d8d8' : '#101010';
  const boxScale = scale === 0.06 ? 1.1 : 1.4;

  return (
    <mesh scale={boxScale}>
      <boxGeometry args={[1.6, 1.2, 1.2]} />
      <meshStandardMaterial color={boxColor} metalness={0.8} roughness={0.2} />
    </mesh>
  );
};

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>

      <div className="controls">
        <p className="info">Macbook Pro {scale === 0.06 ? '14"' : '16"'} in {color === 'silver' ? 'Silver' : 'Space Black'}</p>

        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor('silver')}
              className={clsx('bg-neutral-300', color === 'silver' && 'active')}
            />
            <div
              onClick={() => setColor('space-black')}
              className={clsx('bg-neutral-900', color === 'space-black' && 'active')}
            />
          </div>

          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx('bg-neutral-300', scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.8)}
              className={clsx('bg-neutral-300', scale === 0.8 ? 'bg-white text-black' : 'bg-transparent text-white')}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas camera={{ position: [0, 0, 5], fov: 40 }} style={{ width: '100%', height: '420px', marginTop: '2rem' }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 3, 5]} intensity={2.5} />
        <directionalLight position={[-3, 1, -2]} intensity={0.7} />
        <pointLight position={[0, 2, 3]} intensity={1.2} />

        <RotatingBox color={color} scale={scale} />
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.4} />
      </Canvas>
    </section>
  );
};

export default ProductViewer;