'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="text-foreground font-medium">
          Karthik K R
        </Link>
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
    </header>
  )
}
