'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Header() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    // Start animation after a delay to match with TextEffect
    const timer = setTimeout(() => {
      setAnimate(true)
    }, 450) // Slightly before TextEffect's delay of 0.5s

    return () => clearTimeout(timer)
  }, [])

  return (
    <header className="mb-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <motion.div
          className="size-16 -rotate-12 cursor-pointer overflow-hidden rounded-full"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        >
          <Image
            src="/profile.jpeg"
            alt="Karthik K R"
            width={70}
            height={70}
            className="object-cover"
          />
        </motion.div>
        <div className="relative">
          <motion.div
            initial={{ y: 10 }} // Start a bit lower to appear centered
            animate={{ y: animate ? 0 : 10 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="text-foreground font-medium">
              Karthik K R
            </Link>
          </motion.div>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-subtle"
            delay={0.5}
          >
            Full Stack Developer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
