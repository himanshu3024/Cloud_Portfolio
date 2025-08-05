'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { tracks, type Track, type Day } from './learning-journey-data';

// ... [Previous interfaces and data remain the same]

export default function LearningJourneySection() {
  const [selectedTrack, setSelectedTrack] = useState<Track>(tracks[0]);
  const [selectedDay, setSelectedDay] = useState<Day | null>(null);
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('list');

  return (
    <section className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Learning <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Follow my 60-day challenge as I deep dive into Cloud Computing and DevOps practices.
            Each day brings new learning and hands-on implementation.
          </p>
        </motion.div>

        {/* View Toggle & Track Selection */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex bg-card rounded-lg border border-border p-1">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-md transition-colors ${
                viewMode === 'list'
                  ? 'bg-primary-500 text-white'
                  : 'text-foreground/70 hover:text-primary-500'
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-4 py-2 rounded-md transition-colors ${
                viewMode === 'calendar'
                  ? 'bg-primary-500 text-white'
                  : 'text-foreground/70 hover:text-primary-500'
              }`}
            >
              Calendar View
            </button>
          </div>

          <div className="flex gap-4">
            {tracks.map((track) => (
              <motion.button
                key={track.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTrack(track)}
                className={`flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedTrack.id === track.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-card text-foreground/70 hover:text-primary-500 border border-border hover:border-primary-500'
                }`}
              >
                <track.icon className="w-5 h-5" />
                <span>{track.title}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8"
        >
          {viewMode === 'list' ? (
            // List View
            <div className="space-y-12">
              {selectedTrack.weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="space-y-6">
                  <h3 className="text-xl font-semibold">{week.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {week.days.map((day) => (
                      <motion.div
                        key={day.day}
                        whileHover={{ scale: 1.02 }}
                        className="project-card group cursor-pointer p-6 rounded-xl bg-card border border-border hover:border-primary-500 transition-all"
                        onClick={() => setSelectedDay(day)}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${selectedTrack.color}`}>
                            <day.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-foreground/60">Day {day.day}</div>
                            <div className="font-semibold">{day.title}</div>
                          </div>
                        </div>
                        <div className="text-sm text-foreground/60">
                          Click to view detailed learning journey and implementation
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Calendar View
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="grid grid-cols-7 gap-px bg-border">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="p-2 text-center text-sm font-semibold">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 42 }).map((_, index) => {
                  const dayNumber = index + 1;
                  const day = selectedTrack.weeks
                    .flatMap(week => week.days)
                    .find(d => d.day === dayNumber);
                  
                  return (
                    <div
                      key={index}
                      className={`p-2 min-h-[100px] border-t border-border ${
                        day ? 'cursor-pointer hover:bg-primary-500/5' : ''
                      }`}
                      onClick={() => day && setSelectedDay(day)}
                    >
                      <div className="text-sm text-foreground/60 mb-1">{dayNumber}</div>
                      {day && (
                        <div className="space-y-1">
                          <div className={`p-1 rounded bg-gradient-to-r ${selectedTrack.color}`}>
                            <day.icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="text-xs font-medium line-clamp-2">{day.title}</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>

        {/* Modal for detailed view */}
        {selectedDay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedDay(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${selectedTrack.color}`}>
                    <selectedDay.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60">Day {selectedDay.day}</div>
                    <h3 className="text-xl font-bold">{selectedDay.title}</h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDay(null)}
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-foreground/70">
                    {selectedDay.description || "Coming soon! Check back for detailed content about this day's learning journey."}
                  </p>
                </div>

                {selectedDay.learnings && (
                  <div>
                    <h4 className="font-semibold mb-2">Key Learnings</h4>
                    <ul className="list-disc list-inside space-y-1 text-foreground/70">
                      {selectedDay.learnings.map((learning, index) => (
                        <li key={index}>{learning}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedDay.implementation && (
                  <div>
                    <h4 className="font-semibold mb-2">Implementation</h4>
                    <div className="bg-secondary/30 rounded-lg p-4">
                      <pre className="text-sm text-foreground/70 whitespace-pre-wrap">
                        {selectedDay.implementation}
                      </pre>
                    </div>
                  </div>
                )}

                {selectedDay.resources && (
                  <div>
                    <h4 className="font-semibold mb-2">Resources</h4>
                    <div className="space-y-2">
                      {selectedDay.resources.map((resource, index) => (
                        <a
                          key={index}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-primary-500 hover:underline"
                        >
                          {resource.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
