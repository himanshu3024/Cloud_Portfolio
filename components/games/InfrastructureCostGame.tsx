'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, Server, Database, Globe } from 'lucide-react';

const infrastructureScenarios = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'High-availability setup with auto-scaling web servers, managed database, and CDN',
    components: [
      { name: 'Web Servers (Auto-scaling)', icon: Server },
      { name: 'Managed Database', icon: Database },
      { name: 'CDN', icon: Globe }
    ],
    actualCost: 2500,
    hints: ['24/7 operation', 'Variable traffic', 'Global distribution']
  },
  // Add more scenarios
];

export default function InfrastructureCostGame() {
  const [currentScenario, setCurrentScenario] = useState(infrastructureScenarios[0]);
  const [guess, setGuess] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleGuess = () => {
    const guessNumber = Number(guess);
    const accuracy = Math.abs((guessNumber - currentScenario.actualCost) / currentScenario.actualCost);
    if (accuracy <= 0.1) { // Within 10%
      setScore(score + 100);
    } else if (accuracy <= 0.2) { // Within 20%
      setScore(score + 50);
    }
    setShowResult(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl p-6 shadow-lg border border-border"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">Guess the Infrastructure Cost</h3>
        <div className="bg-primary-500/10 px-4 py-2 rounded-full">
          <span className="text-primary-500 font-semibold">Score: {score}</span>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-xl font-semibold mb-2">{currentScenario.title}</h4>
          <p className="text-foreground/70">{currentScenario.description}</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {currentScenario.components.map((component, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-secondary/30 rounded-lg"
            >
              <component.icon className="h-8 w-8 text-primary-500 mb-2" />
              <span className="text-sm text-center">{component.name}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-foreground/70">Your guess (monthly cost in USD):</label>
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40" />
              <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-secondary/30 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                placeholder="Enter your guess..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGuess}
              className="px-6 py-2 bg-primary-500 text-white rounded-lg font-semibold"
            >
              Submit
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-secondary/30 rounded-lg"
            >
              <p className="text-center">
                Actual cost: ${currentScenario.actualCost}/month
                <br />
                {Math.abs(Number(guess) - currentScenario.actualCost) <= currentScenario.actualCost * 0.1
                  ? '🎉 Great guess! Within 10% of actual cost!'
                  : Math.abs(Number(guess) - currentScenario.actualCost) <= currentScenario.actualCost * 0.2
                  ? '👍 Not bad! Within 20% of actual cost.'
                  : '💡 Keep trying! Consider the scale of operations.'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
