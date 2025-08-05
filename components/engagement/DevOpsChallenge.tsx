'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const challenges = [
  {
    id: 1,
    title: 'Container Optimization',
    description: 'Optimize a Docker container image to reduce its size by at least 50%',
    difficulty: 'Medium',
    points: 100,
    timeEstimate: '30 mins'
  },
  {
    id: 2,
    title: 'Kubernetes Debugging',
    description: 'Debug a failing pod and identify the root cause',
    difficulty: 'Hard',
    points: 150,
    timeEstimate: '45 mins'
  },
  // Add more challenges here
];

export default function DevOpsChallenge() {
  const [currentChallenge, setCurrentChallenge] = useState(challenges[0]);
  const [timeLeft, setTimeLeft] = useState(7 * 24 * 60 * 60); // 1 week in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 7 * 24 * 60 * 60));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl p-6 shadow-lg border border-border"
    >
      <h3 className="text-2xl font-bold mb-4">DevOps Challenge of the Week</h3>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-foreground/70">Time Remaining:</span>
        <span className="font-mono text-primary-500">
          {Math.floor(timeLeft / (24 * 60 * 60))}d {Math.floor((timeLeft % (24 * 60 * 60)) / 3600)}h{' '}
          {Math.floor((timeLeft % 3600) / 60)}m {timeLeft % 60}s
        </span>
      </div>
      <div className="space-y-4">
        <h4 className="text-xl font-semibold">{currentChallenge.title}</h4>
        <p className="text-foreground/70">{currentChallenge.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm bg-primary-500/10 text-primary-500 px-3 py-1 rounded-full">
            {currentChallenge.difficulty}
          </span>
          <span className="text-sm text-foreground/60">
            Est. Time: {currentChallenge.timeEstimate}
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-2 bg-primary-500 text-white rounded-lg font-semibold mt-4"
        >
          Accept Challenge
        </motion.button>
      </div>
    </motion.div>
  );
}
