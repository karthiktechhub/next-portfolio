'use client'

import { DynamicSplashCursor } from './dynamic-splash-cursor'
import { useMobileDetector } from '@/hooks/use-mobile-detector'

export function ConditionalSplashCursor() {
  const isMobile = useMobileDetector()

  if (isMobile) {
    return null
  }

  return <DynamicSplashCursor />
}
