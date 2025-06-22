'use client'

import dynamic from 'next/dynamic'

const DynamicSplashCursor = dynamic(
  () => import('./splash-cursor').then((mod) => mod.SplashCursor),
  {
    ssr: false,
  },
)

export { DynamicSplashCursor }