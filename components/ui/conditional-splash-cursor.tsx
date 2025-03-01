'use client'

import { SplashCursor } from './splash-cursor'
import { useMobileDetector } from '@/hooks/use-mobile-detector'

export function ConditionalSplashCursor() {
  const isMobile = useMobileDetector()

  if (isMobile) {
    return null
  }

  return <SplashCursor />
}
