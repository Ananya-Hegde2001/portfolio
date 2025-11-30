'use client'

import OnekoCat from "@/components/OnekoCat"
import ResizablePortfolioNavigation from "@/components/MainNavigation"
import NewHeroSection from "@/components/HomeContent"

export default function Home() {
  return (
      <div>
        <ResizablePortfolioNavigation />
        <OnekoCat />
        <div className="pt-12 sm:pt-16">
          <NewHeroSection />
        </div>
      </div>
  );
}
