import { cn } from '@/lib/utils'

interface CategoryButtonProps {
  category: string
  isSelected: boolean
  onClick: () => void
}

const categoryColors: Record<string, string> = {
  all: 'bg-foreground/10 text-foreground border-foreground/20 hover:bg-foreground/20',
  language:
    'bg-blue-500/10 text-blue-500 border-blue-500/20 hover:bg-blue-500/20',
  frontend:
    'bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20',
  backend:
    'bg-purple-500/10 text-purple-500 border-purple-500/20 hover:bg-purple-500/20',
  database:
    'bg-orange-500/10 text-orange-500 border-orange-500/20 hover:bg-orange-500/20',
  tools: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20 hover:bg-cyan-500/20',
  deployment:
    'bg-rose-500/10 text-rose-500 border-rose-500/20 hover:bg-rose-500/20',
}

export function CategoryButton({
  category,
  isSelected,
  onClick,
}: CategoryButtonProps) {
  const normalizedCategory = category.toLowerCase()
  const colorClass = categoryColors[normalizedCategory] || categoryColors.all

  return (
    <button
      onClick={onClick}
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors',
        colorClass,
        isSelected && 'ring-offset-background ring-2 ring-offset-1',
        isSelected && normalizedCategory === 'all'
          ? 'ring-muted-foreground'
          : '',
        isSelected && normalizedCategory === 'language' ? 'ring-blue-500' : '',
        isSelected && normalizedCategory === 'frontend' ? 'ring-green-500' : '',
        isSelected && normalizedCategory === 'backend' ? 'ring-purple-500' : '',
        isSelected && normalizedCategory === 'database'
          ? 'ring-orange-500'
          : '',
        isSelected && normalizedCategory === 'tools' ? 'ring-cyan-500' : '',
        isSelected && normalizedCategory === 'deployment'
          ? 'ring-rose-500'
          : '',
      )}
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </button>
  )
}
