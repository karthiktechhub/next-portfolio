import { cn } from '@/lib/utils'

interface SkillBadgeProps {
  name: string
  category: string
}

const categoryColors: Record<string, string> = {
  language: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  frontend: 'bg-green-500/10 text-green-500 border-green-500/20',
  backend: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  database: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
  tools: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
  deployment: 'bg-rose-500/10 text-rose-500 border-rose-500/20',
}

export function SkillBadge({ name, category }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
        categoryColors[category] ||
          'border-foreground/20 bg-foreground/10 text-foreground',
      )}
    >
      {name}
    </span>
  )
}
