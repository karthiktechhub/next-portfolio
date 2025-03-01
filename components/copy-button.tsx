'use client'

import { TextMorph } from '@/components/ui/text-morph'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function CopyButton() {
  const [text, setText] = useState('Copy')
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  useEffect(() => {
    setTimeout(() => {
      setText('Copy')
    }, 2000)
  }, [text])

  return (
    <Button
      onClick={() => {
        setText('Copied')
        navigator.clipboard.writeText(currentUrl)
      }}
      className="opacity-50"
      variant="ghost"
    >
      <TextMorph>{text}</TextMorph>
      <span>URL</span>
    </Button>
  )
}
