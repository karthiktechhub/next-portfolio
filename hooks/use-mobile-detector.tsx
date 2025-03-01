'use client'

import { useState, useEffect } from 'react'

export function useMobileDetector() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for resize
    window.addEventListener('resize', checkIfMobile)

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  return isMobile
}
