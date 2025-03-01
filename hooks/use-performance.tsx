//@ts-nocheck
'use client'
import { useState, useEffect } from 'react'

export function usePerformance(threshold = 50) {
  const [isLowPerformance, setIsLowPerformance] = useState(false)

  useEffect(() => {
    // Check if PerformanceObserver is available (client-side)
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Create a PerformanceObserver to monitor CLS, LCP, and FID
      let poorPerformanceCount = 0

      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()

        console.log('entries : ', entries)
        entries.forEach((entry) => {
          // Checking FPS via Frame Timing API if available
          if (entry.entryType === 'frame' && 'duration' in entry) {
            const fps = 1000 / entry.duration
            if (fps < 30) {
              poorPerformanceCount++
              if (poorPerformanceCount > 5) {
                setIsLowPerformance(true)
              }
            }
          }

          // Check for bad layout shifts (CLS)
          if (entry.entryType === 'layout-shift' && entry.value > 0.1) {
            setIsLowPerformance(true)
          }

          // Check for slow LCP
          if (
            entry.entryType === 'largest-contentful-paint' &&
            entry.startTime > 2500
          ) {
            setIsLowPerformance(true)
          }
        })
      })

      // Observe different performance metrics
      try {
        observer.observe({
          entryTypes: ['layout-shift', 'largest-contentful-paint', 'frame'],
        })
      } catch (e) {
        // Some entry types might not be available in all browsers
        try {
          observer.observe({
            entryTypes: ['layout-shift', 'largest-contentful-paint'],
          })
        } catch (e) {
          console.warn('Performance API not fully supported')
        }
      }

      // Fallback method: check if device has limited memory
      if (navigator.deviceMemory && navigator.deviceMemory < 4) {
        setIsLowPerformance(true)
      }

      return () => {
        observer.disconnect()
      }
    }
  }, [threshold])

  return isLowPerformance
}
