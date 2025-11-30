'use client';

import { Project } from '@/types/project'
import Link from "next/link";
import Image from "next/image";
import Video from "next-video";
import { useState } from 'react';
import donezovideo from '/videos/donezo.mp4';
import mindMentorVideo from '/videos/mind-mentor.mp4';
import satyaCheckVideo from '/videos/satya-check.mp4';
import fleethq from '/videos/fleethq.mp4';
import rebatr from '/videos/rebatr-short.mp4';
import lazycommitVideo from '/videos/lazycommit-video.mp4';
import gocache from '/videos/gocache.mp4';
import quotick from '/videos/quotick.mp4'
import doable from '/videos/doable.mp4';
import stage from '/videos/stage.mp4';
import readmelingo from '/videos/readmelingo.mp4';
interface MasonryProjectCardProps {
  project: Project;
  className?: string;
}

// Map video IDs to imported video assets
const getVideoSource = (videoId: string) => {
  switch (videoId) {
    case 'donezo':
      return donezovideo;
    case 'mind-mentor':
      return mindMentorVideo;
    case 'satya-check':
      return satyaCheckVideo;
    case 'fleethq':
      return fleethq;
    case 'rebatr-short':
      return rebatr;
    case 'lazycommit-video':
      return lazycommitVideo;
    case 'gocache':
      return gocache;
    case 'quotick':
      return quotick;
    case 'doable':
      return doable;
    case 'stage':
      return stage;
    case 'readmelingo':
      return readmelingo;
    default:
      return null;
  }
};

export const MasonryProjectCard = ({ project, className = "" }: MasonryProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoSource = project.video ? getVideoSource(project.video) : null;

  const playTapSound = () => {
    // Create a simple tap/click sound using Web Audio API
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const audioContext = new AudioContextClass();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800; // Higher pitch for a crisp click
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  return (
    <Link 
      href={`/projects/${project.id}`} 
      className="block h-full touch-manipulation active:opacity-75" 
      style={{ 
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={playTapSound}
    >
      <div 
        className={`rounded-xl border border-neutral-300 dark:border-[#2E2E2E] bg-white dark:bg-[#111111] p-2 shadow-sm dark:shadow-none cursor-pointer h-full flex flex-col ${className}`}
      >
        {/* Media Section - Fixed Height */}
        <div className="relative overflow-hidden rounded-lg h-48 sm:h-56 flex-shrink-0">
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            {videoSource && isHovered ? (
              <div className="relative h-full w-full">
                <Video
                  key={project.id}
                  src={videoSource}
                  poster={project.image}
                  className="w-full h-full rounded-sm object-cover"
                  playsInline
                  autoPlay
                  muted
                  loop
                  controls={false}
                />
              </div>
            ) : project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                width={472}
                height={267}
                className="w-full h-full rounded-lg object-cover"
                style={{ color: 'transparent' }}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                quality={75}
                priority={true}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-lg" />
            )}
          </div>
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 w-full p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <h3 className="font-normal text-white text-sm sm:text-base m-0 line-clamp-1 break-words">
              {project.title}
            </h3>
          </div>
        </div>
        
        {/* Action Button - Fixed at bottom */}
        <div className="mt-auto pt-2">
          <div className="w-full rounded-lg bg-neutral-100 dark:bg-[#1C1C1C] border border-neutral-300 dark:border-[#2E2E2E] px-4 sm:px-5 py-3 sm:py-4 text-neutral-700 dark:text-[#a8a8a8] text-sm sm:text-base transition-colors duration-150 text-center hover:bg-neutral-200 dark:hover:bg-[#2E2E2E]">
            {project.liveLink ? "More Info →" : project.githubLink ? "More Info →" : "Read Article →"}
          </div>
        </div>
      </div>
    </Link>
  );
};
