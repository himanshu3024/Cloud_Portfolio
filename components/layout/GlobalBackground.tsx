'use client';

import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), { ssr: false });
const CloudScene = dynamic(() => import('@/components/3d/CloudScene'), { ssr: false });

export default function GlobalBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Scene3D className="absolute inset-0 opacity-60 dark:opacity-40">
                <CloudScene />
            </Scene3D>
        </div>
    );
}
