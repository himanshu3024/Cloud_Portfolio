'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cloud, Stars } from '@react-three/drei';
import { Group } from 'three';

export default function CloudScene() {
    const groupRef = useRef<Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        // Gentle floating rotation
        groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        // Subtle breathing/floating effect
        groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    });

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#38bdf8" />

            {/* Background Stars - Subtle */}
            <Stars radius={100} depth={50} count={300} factor={4} saturation={0} fade speed={1} />

            {/* Main Cloud Cluster - Updated props for compat */}
            <Cloud
                opacity={0.6}
                speed={0.2}
                segments={20}
                color="#e0f2fe"
            // Using bounds instead of width/depth if needed, or just let it be default
            />

            {/* Secondary Accent Cloud - Darker/Cyan */}
            <group position={[-4, 2, -2]}>
                <Cloud
                    opacity={0.3}
                    speed={0.1}
                    segments={10}
                    color="#0ea5e9"
                />
            </group>
        </group>
    );
}
