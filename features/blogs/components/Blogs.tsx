'use client'
import React from 'react'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { AnimatedSection } from '@/components/ui/animated-section'
import { BLOG_POSTS } from '@/app/data'
import Link from 'next/link'

const Blogs = () => {
  return (
    <AnimatedSection>
      <h3 className="mb-3 text-lg font-medium">Blog</h3>
      <div className="flex flex-col space-y-0">
        <AnimatedBackground
          enableHover
          className="bg-muted/75 h-full w-full rounded-lg"
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.2,
          }}
        >
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.uid}
              className="-mx-3 rounded-xl px-3 py-3"
              href={post.link}
              data-id={post.uid}
            >
              <div className="flex flex-col space-y-1">
                <h4 className="text-foreground font-normal">{post.title}</h4>
                <p className="text-subtle">{post.description}</p>
              </div>
            </Link>
          ))}
        </AnimatedBackground>
      </div>
    </AnimatedSection>
  )
}

export default Blogs
