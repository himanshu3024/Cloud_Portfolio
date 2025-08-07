'use client';

import { motion } from 'framer-motion';
import type { ComponentType } from 'react';
import {
  Cloud,
  Server,
  Database,
  Lock,
  GitBranch,
  Network,
  Boxes,
  Cog
} from 'lucide-react';

type IconSpec = {
  id: string;
  side: 'left' | 'right';
  Icon: ComponentType<{ className?: string }>;
  top: string;
  delay: number;
};

const icons: IconSpec[] = [
  { id: 'cloud', side: 'left', Icon: Cloud, top: '10%', delay: 0 },
  { id: 'server', side: 'left', Icon: Server, top: '28%', delay: 0.2 },
  { id: 'database', side: 'left', Icon: Database, top: '50%', delay: 0.4 },
  { id: 'lock', side: 'left', Icon: Lock, top: '72%', delay: 0.6 },
  { id: 'git', side: 'right', Icon: GitBranch, top: '15%', delay: 0.1 },
  { id: 'network', side: 'right', Icon: Network, top: '35%', delay: 0.3 },
  { id: 'boxes', side: 'right', Icon: Boxes, top: '57%', delay: 0.5 },
  { id: 'cog', side: 'right', Icon: Cog, top: '78%', delay: 0.7 },
];

export default function FloatingDevOpsIcons() {
  return (
    <div className="pointer-events-none select-none z-10">
      {icons.map(({ id, side, Icon, top, delay }) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: 0.8,
            x: [0, side === 'left' ? 12 : -12, 6, 0],
            y: [0, -10, -4, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, delay, ease: 'easeInOut' }}
          className={`absolute ${side === 'left' ? 'left-3 sm:left-6' : 'right-3 sm:right-6'} z-10`}
          style={{ top }}
        >
          <div className="rounded-xl icon-surface p-2 sm:p-3 shadow-md">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-500 icon-theme" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}


