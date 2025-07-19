import { Button } from '@/components/ui/button'
import React from 'react'

function Hero() {
  return (
    <div className="p-6 md:p-10 flex flex-col items-center justify-center mt-16 md:mt-24 text-center">
      <h2 className="font-bold text-4xl md:text-6xl leading-tight">
        AI Prompt-to-Video Generator
      </h2>
      <p className="mt-4 text-lg md:text-2xl text-gray-500 max-w-2xl">
        Convert your ideas into stunning short videos with AI-powered visuals, captions, and voiceovers.
      </p>
      <div className="mt-7 flex flex-col sm:flex-row gap-4 sm:gap-8">
        <Button size="lg" variant="secondary">Get Started</Button>
        <Button size="lg">Learn More</Button>
      </div>
    </div>
  )
}

export default Hero
