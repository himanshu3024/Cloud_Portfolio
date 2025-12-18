'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

interface SceneProps {
    children: React.ReactNode;
    className?: string;
}

export default function Scene3D({ children, className = '' }: SceneProps) {
    return (
        <div className={`absolute inset-0 pointer-events-none z-0 ${className}`}>
            <Canvas
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                camera={{ position: [0, 0, 5], fov: 45 }}
            >
                <Suspense fallback={null}>
                    {children}
                </Suspense>
            </Canvas>
        </div>
    );
}
