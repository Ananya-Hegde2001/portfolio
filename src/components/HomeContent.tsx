'use client'

import Link from 'next/link'
import DiagonalPattern from './DiagonalPattern'
import BannerSection from './BannerSection'
import ProfileHeader from './ProfileHeader'
import ContentSection from './ContentSection'
import ContentParagraph from './ContentParagraph'
import SectionBorder from './SectionBorder'
import ExperienceContent from './ExperienceContent'
import Reachout from './Reachout'
import CallToAction from './CallToAction'
import ContributionsDisplay from './ContributionsDisplay'
import TechStackMarquee from './TechStackMarquee'
import { Reveal } from './Reveal'

export default function NewHeroSection() {
  return (
    <div className="min-h-screen transition-colors duration-300 relative" style={{ fontFamily: 'var(--font-geist-sans)' }}>
      <div className="relative mx-auto max-w-4xl">
        {/* Diagonal Patterns */}
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />
        
        {/* Main Content */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl sm:px-0">
          {/* Banner Section */}
          <Reveal delay={0.1}>
            <BannerSection 
              bannerImage="/mountain.jpg"
              quote="Build • Ship • Learn • Repeat"
            />
          </Reveal>
          
          {/* Profile Header */}
          <Reveal delay={0.2}>
            <ProfileHeader 
              name="Ananya Hegde"
              age="25"
              title="engineer • developer • builder"
              profileImage="/pfp.png"
              socialLinks={{
                twitter: "https://x.com/HegdeAnany49037",
                github: "https://github.com/Ananya-Hegde2001",
                linkedin: "https://www.linkedin.com/in/ananyahegde-/",
                resume: "https://drive.google.com/file/d/19S-XM3e7I0MnE02jupjsxw-sGO2KsqCa/view?usp=sharing",
              }}
            />
          </Reveal>
          
          {/* Content Prose */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              {/* Current Role Section */}
              <Reveal delay={0.1}>
                <ContentSection
                  subtitle="AI Engineer | Full-stack Developer"
                  title=''
                  className="mt-6"
                >
                  <div></div>
                </ContentSection>
              </Reveal>
              
              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>
              
              {/* About Section */}
              <Reveal delay={0.1}>
                <ContentSection className="pb-6 sm:pb-8 pt-4 sm:pt-6 px-2 sm:px-0">
                  <ContentParagraph className="mb-2 text-base sm:text-lg">
                    <span className="font-medium dark:text-white text-black">I build from zero.</span> Whether it&apos;s frontend, backend, full-stack applications, or AI-powered experiences, I work across the entire development lifecycle. From UI/UX to deployment to user feedback, I care less about technology debates and more about delivering results that people love using.
                  </ContentParagraph>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>

               {/* Experience Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 py-2">
                  <h2 className="text-base sm:text-xl mb-3 opacity-20 mt-4 sm:mt-6 px-4">Professional Experience</h2>
                  <div className="px-4">
                    <ExperienceContent />
                  </div>
                </div>
              </Reveal>

                <Reveal delay={0.05}>
                  <SectionBorder className="mt-4" />
                </Reveal>
              
                 {/* Technical Contributions */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 py-2">
                  <h2 className="text-base sm:text-xl mb-3 opacity-20 mt-4 sm:mt-6 px-4">Technical Contributions</h2>
                  <div className="px-4 space-y-3 sm:space-y-4 dark:text-white/70 text-black/70 pb-4 sm:pb-6">
                    <ContentParagraph className="text-sm sm:text-base">
                      <span className="font-medium dark:text-white text-black">At This Company,</span> Currently contributing to the development of full-stack web applications using React.js for the frontend and Node.js for the backend, focusing on building scalable, high-performance features in a collaborative agile environment.
                    </ContentParagraph>
                    <ContentParagraph className="text-sm sm:text-base">
                      <span className="font-medium dark:text-white text-black">
                        <Link href="https://github.com/Ananya-Hegde2001" target='_blank' className="text-[#006FEE] hover:underline">0→1</Link> product development
                      </span>
                      <span> specialist for startups and personal projects. Faster iterations, clearer outcomes.</span>
                    </ContentParagraph>
                  </div>
                </div>
              </Reveal>


              
              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* GitHub Contributions */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 px-0 mt-4">
                  <h2 className="text-base sm:text-xl opacity-20 leading-relaxed -tracking-[0.01em] mb-4 px-4">
                    GitHub Contributions <span className="opacity-20">●</span> @Ananya-Hegde2001
                  </h2>
                  <div className="mb-4 sm:mb-6">
                    <ContributionsDisplay
                      username="Ananya-Hegde2001"
                      variant="compact"
                      className="w-full"
                    />
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* Tech Stack Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 mt-4 sm:mt-6 mb-4 sm:mb-6">
                  <div className="px-4">
                    <TechStackMarquee className="w-full" />
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              
              <Reveal delay={0.05}>
                <SectionBorder className="mt-4 pt-0" />
              </Reveal>

              {/* call to action*/}
              <Reveal delay={0.1}>
                <div className="px-4 sm:px-0">
                  <CallToAction/>
                </div>
              </Reveal>
              
              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* Reachout Section */}
              <Reveal delay={0.1}>
                <div className="mt-4 sm:mt-6">
                  <Reachout 
                    title="Let's connect"
                    subtitle="Find me on these platforms"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
