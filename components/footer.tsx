'use client'
import { TextLoop } from '@/components/ui/text-loop'
import { ThemeSwitch } from '@/components/ThemeSwitch'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <TextLoop className="text-muted-foreground text-xs">
          <span>© 2025 Dhekhyo.</span>
          <span>Built with ❤️</span>
        </TextLoop>
        <div className="">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
