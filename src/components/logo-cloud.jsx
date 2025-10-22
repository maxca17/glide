'use client'

import { clsx } from 'clsx'

export function LogoCloud({ className }) {
  const logos = [
    { alt: 'Rova', src: '/logo-cloud/Rova-logo-light.svg', height: 'h-10' },
    { alt: 'Golden Egg Media', src: '/logo-cloud/golden_egg_media_logo.jpeg', height: 'h-16' },
    { alt: 'Victrix', src: '/logo-cloud/logo-red-victrix.webp', height: 'h-10' },
    { alt: 'Prajapati', src: '/logo-cloud/prajapati-logo-2.png', height: 'h-10' },
    { alt: 'Dream Ventures', src: '/logo-cloud/dream-logo.svg', height: 'h-12', isWhite: true },
  ]

  return (
    <div className={clsx(className, 'relative overflow-hidden')}>
      <div className="flex items-center animate-marquee gap-x-16 hover:pause-marquee">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <img
            key={`first-${index}`}
            alt={logo.alt}
            src={logo.src}
            className={`${logo.height} w-auto object-contain ${logo.isWhite ? 'opacity-40 hover:opacity-100' : 'grayscale opacity-40 hover:opacity-100 hover:grayscale-0'} transition-all duration-300 flex-shrink-0 ${logo.isWhite ? 'brightness-0 hover:brightness-100' : ''}`}
          />
        ))}
        {/* Second set for seamless loop */}
        {logos.map((logo, index) => (
          <img
            key={`second-${index}`}
            alt={logo.alt}
            src={logo.src}
            className={`${logo.height} w-auto object-contain ${logo.isWhite ? 'opacity-40 hover:opacity-100' : 'grayscale opacity-40 hover:opacity-100 hover:grayscale-0'} transition-all duration-300 flex-shrink-0 ${logo.isWhite ? 'brightness-0 hover:brightness-100' : ''}`}
          />
        ))}
        {/* Third set for extra coverage */}
        {logos.map((logo, index) => (
          <img
            key={`third-${index}`}
            alt={logo.alt}
            src={logo.src}
            className={`${logo.height} w-auto object-contain ${logo.isWhite ? 'opacity-40 hover:opacity-100' : 'grayscale opacity-40 hover:opacity-100 hover:grayscale-0'} transition-all duration-300 flex-shrink-0 ${logo.isWhite ? 'brightness-0 hover:brightness-100' : ''}`}
          />
        ))}
        {/* Fourth set for full coverage */}
        {logos.map((logo, index) => (
          <img
            key={`fourth-${index}`}
            alt={logo.alt}
            src={logo.src}
            className={`${logo.height} w-auto object-contain ${logo.isWhite ? 'opacity-40 hover:opacity-100' : 'grayscale opacity-40 hover:opacity-100 hover:grayscale-0'} transition-all duration-300 flex-shrink-0 ${logo.isWhite ? 'brightness-0 hover:brightness-100' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
