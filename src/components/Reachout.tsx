'use client'
import { FaLinkedin, FaXTwitter, FaGithub, FaPaperclip } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Tooltip } from "./ui/tooltip-card";
import Image from "next/image";

interface ReachoutProps {
  title?: string
  subtitle?: string
  socialLinks?: {
    twitter?: string
    resume?: string
    github?: string
    linkedin?: string
    mail?: string
  }
}

export default function Reachout({
  title = "Let's connect",
  subtitle = "Find me on these platforms",
  socialLinks = {
    twitter: "https://x.com/HegdeAnany49037",
    github: "https://github.com/Ananya-Hegde2001",
    linkedin: "https://www.linkedin.com/in/ananyahegde-/",
    resume: "https://drive.google.com/drive/folders/1xgkMBbkt3iYbZKAgx1n8LP5YrGT6tEzz",
    mail: "mailto:ananyavhegde2001@gmail.com"
  }
}: ReachoutProps) {
  return (
    <div className="sm:px-12 px-4 pb-8">
      <div className="text-left w-full">
        <div className="mb-4 sm:mb-6">
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-lg sm:text-xl mb-2 opacity-20 mt-4 sm:mt-6">
            {title}
          </h2>
          <p className="opacity-20 text-md sm:text-lg mb-3 sm:mb-4">
           {subtitle}
          </p>
        </div>
        
        <div className="flex justify-center sm:justify-start space-x-6 sm:space-x-0 sm:grid sm:grid-cols-2 lg:flex lg:justify-start sm:gap-4 lg:gap-6 lg:space-x-0">
          {socialLinks.github && (
            <Tooltip content={
                <Image
                  width={3024}
                  height={1720}
                  src="/github.png"
                  alt="GitHub"
                  className="rounded-sm max-w-full h-auto"
                  unoptimized
                />
            }>
              <a 
                className="flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 hover:opacity-80 transition-all duration-200 group p-3 sm:px-3 sm:py-3 lg:p-0 rounded-full sm:rounded-lg bg-gray-100/80 dark:bg-[hsl(0,3%,6.5%)] sm:bg-gray-50/50 sm:dark:bg-gray-800/30 lg:bg-transparent lg:dark:bg-transparent border border-gray-200/60 dark:border-gray-700/60 sm:border-gray-200/50 sm:dark:border-gray-700/50 lg:border-none hover:bg-gray-200/80 dark:hover:bg-gray-700/70 sm:hover:bg-gray-100/50 sm:dark:hover:bg-gray-700/40 lg:hover:bg-transparent lg:dark:hover:bg-transparent" 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
              >
                <FaGithub size={20} className="sm:size-[18px] group-hover:scale-110 transition-transform duration-200 flex-shrink-0 text-gray-700 dark:text-gray-200 sm:text-gray-600 sm:dark:text-gray-300" />
                <span className="hidden sm:inline text-sm font-medium dark:text-white/80 text-black/80 group-hover:text-[#006FEE] transition-colors duration-200">
                  GitHub
                </span>
              </a>
            </Tooltip>
          )}
          
          {socialLinks.twitter && (
            <Tooltip content={
                <Image
                  width={1206}
                  height={1220}
                  src="/twitter.png"
                  alt="Twitter"
                  className="rounded-sm max-w-full h-auto"
                  unoptimized
                />
            }>
              <a 
                className="flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 hover:opacity-80 transition-all duration-200 group p-3 sm:px-3 sm:py-3 lg:p-0 rounded-full sm:rounded-lg bg-gray-100/80 dark:bg-[hsl(0,3%,6.5%)] sm:bg-gray-50/50 sm:dark:bg-gray-800/30 lg:bg-transparent lg:dark:bg-transparent border border-gray-200/60 dark:border-gray-700/60 sm:border-gray-200/50 sm:dark:border-gray-700/50 lg:border-none hover:bg-gray-200/80 dark:hover:bg-gray-700/70 sm:hover:bg-gray-100/50 sm:dark:hover:bg-gray-700/40 lg:hover:bg-transparent lg:dark:hover:bg-transparent" 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
              >
                <FaXTwitter size={20} className="sm:size-[18px] group-hover:scale-110 transition-transform duration-200 flex-shrink-0 text-gray-700 dark:text-gray-200 sm:text-gray-600 sm:dark:text-gray-300" />
                <span className="hidden sm:inline text-sm font-medium dark:text-white/80 text-black/80 group-hover:text-[#006FEE] transition-colors duration-200">
                  Twitter
                </span>
              </a>
            </Tooltip>
          )}
          
          {socialLinks.linkedin && (
            <Tooltip content={
                <Image
                  width={1596}
                  height={1108}
                  src="/linkedin.png"
                  alt="LinkedIn"
                  className="rounded-sm max-w-full h-auto"
                  unoptimized
                />
            }>
              <a 
                className="flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 hover:opacity-80 transition-all duration-200 group p-3 sm:px-3 sm:py-3 lg:p-0 rounded-full sm:rounded-lg bg-gray-100/80 dark:bg-[hsl(0,3%,6.5%)] sm:bg-gray-50/50 sm:dark:bg-gray-800/30 lg:bg-transparent lg:dark:bg-transparent border border-gray-200/60 dark:border-gray-700/60 sm:border-gray-200/50 sm:dark:border-gray-700/50 lg:border-none hover:bg-gray-200/80 dark:hover:bg-gray-700/70 sm:hover:bg-gray-100/50 sm:dark:hover:bg-gray-700/40 lg:hover:bg-transparent lg:dark:hover:bg-transparent" 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
              >
                <FaLinkedin size={20} className="sm:size-[18px] group-hover:scale-110 transition-transform duration-200 flex-shrink-0 text-gray-700 dark:text-gray-200 sm:text-gray-600 sm:dark:text-gray-300" />
                <span className="hidden sm:inline text-sm font-medium dark:text-white/80 text-black/80 group-hover:text-[#006FEE] transition-colors duration-200">
                  LinkedIn
                </span>
              </a>
            </Tooltip>
          )}

          {socialLinks.mail && (
            <Tooltip content="ananyavhegde2001@gmail.com">
              <a 
                className="flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 hover:opacity-80 transition-all duration-200 group p-3 sm:px-3 sm:py-3 lg:p-0 rounded-full sm:rounded-lg bg-gray-100/80 dark:bg-[hsl(0,3%,6.5%)] sm:bg-gray-50/50 sm:dark:bg-gray-800/30 lg:bg-transparent lg:dark:bg-transparent border border-gray-200/60 dark:border-gray-700/60 sm:border-gray-200/50 sm:dark:border-gray-700/50 lg:border-none hover:bg-gray-200/80 dark:hover:bg-gray-700/70 sm:hover:bg-gray-100/50 sm:dark:hover:bg-gray-700/40 lg:hover:bg-transparent lg:dark:hover:bg-transparent" 
                href={socialLinks.mail} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
              >
                <IoMdMail size={20} className="sm:size-[18px] group-hover:scale-110 transition-transform duration-200 flex-shrink-0 text-gray-700 dark:text-gray-200 sm:text-gray-600 sm:dark:text-gray-300" />
                <span className="hidden sm:inline text-sm font-medium dark:text-white/80 text-black/80 group-hover:text-[#006FEE] transition-colors duration-200">
                  Mail
                </span>
              </a>
            </Tooltip>
          )}
          
          {socialLinks.resume && (
            <Tooltip content={
                <Image
                  width={1076}
                  height={1394}
                  src="/resume.png"
                  alt="Resume"
                  className="rounded-sm max-w-full h-auto"
                  unoptimized
                />
            }>
              <a 
                className="flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 hover:opacity-80 transition-all duration-200 group p-3 sm:px-3 sm:py-3 lg:p-0 rounded-full sm:rounded-lg bg-gray-100/80 dark:bg-[hsl(0,3%,6.5%)] sm:bg-gray-50/50 sm:dark:bg-gray-800/30 lg:bg-transparent lg:dark:bg-transparent border border-gray-200/60 dark:border-gray-700/60 sm:border-gray-200/50 sm:dark:border-gray-700/50 lg:border-none hover:bg-gray-200/80 dark:hover:bg-gray-700/70 sm:hover:bg-gray-100/50 sm:dark:hover:bg-gray-700/40 lg:hover:bg-transparent lg:dark:hover:bg-transparent flex-shrink-0 touch-manipulation" 
                href={socialLinks.resume} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
              >
                <FaPaperclip size={24} className="group-hover:scale-110 transition-transform duration-200 flex-shrink-0 text-gray-700 dark:text-gray-200 sm:text-gray-600 sm:dark:text-gray-300" />
                <span className="hidden sm:inline text-sm font-medium dark:text-white/80 text-black/80 group-hover:text-[#006FEE] transition-colors duration-200">
                  Resume
                </span>
              </a>
            </Tooltip>
          )}
        </div>
        
        {/* Footer Section */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col space-y-2 sm:space-y-3 lg:flex-row lg:justify-between lg:items-center lg:space-y-0 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 order-2 sm:order-1">
              <div className="text-md dark:text-white/40 text-black/40">
                Designed & Made with ❤️ by <b>Ananya Hegde</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
