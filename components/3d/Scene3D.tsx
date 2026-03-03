'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, Component, ReactNode } from 'react';

// Silent error boundary — if WebGL fails or Three.js throws,
// render nothing rather than propagating to the page layout.
class SilentErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
    state = { failed: false };
    static getDerivedStateFromError() {
        return { failed: true };
    }
    render() {
        if (this.state.failed) return null;
        return this.props.children;
    }
}

interface SceneProps {
    children: React.ReactNode;
    className?: string;
}

export default function Scene3D({ children, className = '' }: SceneProps) {
    return (
        <SilentErrorBoundary>
            <div className={`absolute inset-0 pointer-events-none z-0 ${className}`}>
                <Canvas
                    dpr={[1, 1.5]}
                    gl={{ antialias: false, alpha: true, failIfMajorPerformanceCaveat: false }}
                    camera={{ position: [0, 0, 5], fov: 45 }}
                    onCreated={({ gl }) => {
                        // Recover gracefully on WebGL context loss
                        gl.domElement.addEventListener('webglcontextlost', (e) => {
                            e.preventDefault();
                        }, false);
                    }}
                >
                    <Suspense fallback={null}>
                        {children}
                    </Suspense>
                </Canvas>
            </div>
        </SilentErrorBoundary>
    );
}
