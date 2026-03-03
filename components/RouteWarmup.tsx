'use client';

import { useEffect } from 'react';

// All routes that have serverless functions behind them on Azure SWA.
// We fire lightweight HEAD requests to each after the page is idle so
// the functions are warm before the user clicks a nav link.
const ROUTES = [
  '/about',
  '/skills',
  '/projects',
  '/experience',
  '/education',
  '/certifications',
  '/contact',
];

export default function RouteWarmup() {
  useEffect(() => {
    const warm = () => {
      ROUTES.forEach((route, i) => {
        // Stagger by 300 ms per route to avoid a burst of concurrent requests
        setTimeout(() => {
          fetch(route, {
            method: 'HEAD',
            cache: 'no-store',
            // Keep-alive so the underlying TCP connection is reused
            keepalive: true,
          }).catch(() => {
            // Silently ignore — this is a best-effort warmup
          });
        }, i * 300);
      });
    };

    // Use requestIdleCallback when available so warmup never competes
    // with the main-thread work needed to render the landing page.
    if (typeof requestIdleCallback !== 'undefined') {
      requestIdleCallback(warm, { timeout: 5000 });
    } else {
      // Fallback: wait 2 s after mount on browsers without rIC
      const t = setTimeout(warm, 2000);
      return () => clearTimeout(t);
    }
  }, []);

  return null;
}
