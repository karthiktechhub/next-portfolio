'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Circle } from 'lucide-react'
import { Button } from './ui/button'

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    // Set dark as default if no theme is selected
    if (!theme) {
      setTheme('dark')
    }
  }, [theme, setTheme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) {
    return null
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="bg-background hover:bg-muted h-8 cursor-pointer rounded-md px-4 py-0.5 transition-colors duration-200 md:h-5 md:px-2"
    >
      <div
        className={`size-2 rounded-full ${theme === 'light' ? 'bg-black' : 'bg-white'}`}
      />
    </button>
  )
}
