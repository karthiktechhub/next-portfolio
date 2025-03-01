'use client'

import { SplashCursor } from './splash-cursor'
import { usePerformance } from '@/hooks/use-performance'
import { useMobileDetector } from '@/hooks/use-mobile-detector'

export function ConditionalSplashCursor() {
  // not sure if the performance and mobile detection is necessary but will use if required in future
  // const isLowPerformance = usePerformance()
  // const isMobile = useMobileDetector()

  // if (isLowPerformance || isMobile) {
  //   return null
  // }

  return <SplashCursor />
}
