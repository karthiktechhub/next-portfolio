'use client'
import { WORK_EXPERIENCE, EMAIL, SOCIAL_LINKS } from './data'
import { MagneticSocialLink } from '@/components/MagneticSocialLink'
import { Skills } from '@/features/skills/components/Skills'
import Blogs from '@/features/blogs/components/Blogs'
import { AnimatedSection } from '@/components/ui/animated-section'

export default function Page() {
  return (
    <main className="space-y-16">
      <AnimatedSection>
        <div className="flex-1">
          <h3 className="mb-5 text-lg font-medium">About Me</h3>
          <p className="text-subtle mb-4">
            I'm a full stack developer with a passion for creating dynamic and
            responsive web applications.
          </p>
          <p className="text-subtle">
            I primarily work with Next.js and Supabase to build scalable and
            efficient solutions. With a strong background in both front-end and
            back-end development, I enjoy tackling complex problems and
            continuously learning new technologies.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <div className="flex-1">
          <h3 className="mb-5 text-lg font-medium">Now</h3>
          <p className="text-subtle mb-4">
            I'm currently working as a Programmer Analyst at Cognizant, where I
            contribute to building robust enterprise solutions using SharePoint.
          </p>
          <p className="text-subtle">
            In my free time, I'm working on building a product feedback
            marketplace. This platform aims to connect product creators with
            users to gather valuable feedback and improve their offerings.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Skills />
      </AnimatedSection>

      <AnimatedSection>
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <div
              className="relative overflow-hidden rounded-2xl p-[1px]"
              key={job.id}
            >
              <div className="bg-background/75 relative h-full w-full rounded-[15px] p-4">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="text-foreground font-normal">{job.title}</h4>
                    <p className="text-subtle">{job.company}</p>
                  </div>
                  <p className="text-subtle">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="text-subtle mb-5">
          Feel free to contact me at{' '}
          <a className="text-foreground underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </AnimatedSection>

      {/* <AnimatedSection>
        <Blogs />
      </AnimatedSection> */}
    </main>
  )
}
