'use client'

import { useState } from 'react'
import { SKILLS } from '@/app/data'
import { SkillBadge } from '../components/SkillBadge'
import { CategoryButton } from './CategoryButton'

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Extract unique categories from skills
  const categories = [
    'All',
    ...Array.from(new Set(SKILLS.map((skill) => skill.category))),
  ]

  // Filter skills based on selected category
  const filteredSkills =
    selectedCategory && selectedCategory !== 'All'
      ? SKILLS.filter((skill) => skill.category === selectedCategory)
      : SKILLS

  return (
    <>
      <h3 className="mb-5 text-lg font-medium">Skills</h3>
      <div className="bg-background/75 mb-3 flex flex-wrap gap-2 rounded-3xl p-2">
        {categories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            isSelected={
              selectedCategory === category ||
              (selectedCategory === null && category === 'All')
            }
            onClick={() =>
              setSelectedCategory(category === 'All' ? null : category)
            }
          />
        ))}
      </div>
      <div className="bg-border mb-4 h-px w-full" aria-hidden="true" />
      <div className="flex flex-wrap gap-2">
        {filteredSkills.map((skill) => (
          <SkillBadge
            key={skill.name}
            name={skill.name}
            category={skill.category}
          />
        ))}
      </div>
    </>
  )
}
