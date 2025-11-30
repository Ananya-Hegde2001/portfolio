'use client'

import Link from 'next/link'
import Image from 'next/image'

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
  href?: string;
  logoUrl?: string;
}

export default function ExperienceContent() {
  const experiences: ExperienceItem[] = [
    {
      company: "LMG8 Tech",
      position: "Software Engineering Intern",
      duration: "May 2025 – Present",
      description: "Working on full-stack development and cloud solutions.",
      href: "https://www.lmg8.tech",
      logoUrl: "/lmg8.png",
    },
  ];

  return (
    <div className="space-y-4 dark:text-white/70 text-black/70 pb-4">
      {experiences.map((exp) => (
        <div key={exp.company} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          {/* Left side - Logo, Company & Position */}
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            {/* Company Logo */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden flex-shrink-0">
              {exp.logoUrl ? (
                <Image 
                  src={exp.logoUrl} 
                  alt={exp.company}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-sm sm:text-lg font-medium dark:text-white text-black">
                  {exp.company.charAt(0)}
                </span>
              )}
            </div>
            
            {/* Company Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-medium dark:text-white text-black text-sm sm:text-lg">
                {exp.href ? (
                  <Link 
                    href={exp.href} 
                    target="_blank" 
                    className="hover:text-[#006FEE] transition-colors"
                  >
                    {exp.company}
                  </Link>
                ) : (
                  exp.company
                )}
              </h3>
              <p className="text-[10px] sm:text-sm opacity-70">
                {exp.position}
              </p>
            </div>
          </div>
          
          {/* Right side - Duration */}
          <div className="pl-13 sm:pl-0 sm:text-right flex-shrink-0">
            <p className="text-[10px] sm:text-sm opacity-50">
              {exp.duration}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
