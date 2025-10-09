'use client'

import { clsx } from 'clsx'

export function LogoCloud({ className }) {
  const logos = [
    { alt: 'Rova', src: '/logo-cloud/Rova-logo-light.svg', height: 'h-10' },
    { alt: 'Golden Egg Media', src: '/logo-cloud/golden_egg_media_logo.jpeg', height: 'h-16' },
    { alt: 'Victrix', src: '/logo-cloud/logo-red-victrix.webp', height: 'h-10' },
    { alt: 'Prajapati', src: '/logo-cloud/prajapati-logo-2.png', height: 'h-10' },
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
            className={`${logo.height} w-auto object-contain grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300 flex-shrink-0`}
          />
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <img
            key={`second-${index}`}
            alt={logo.alt}
            src={logo.src}
            className={`${logo.height} w-auto object-contain grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300 flex-shrink-0`}
          />
        ))}
        {/* Third set for extra smoothness */}
        {logos.map((logo, index) => (
          <img
            key={`third-${index}`}
            alt={logo.alt}
            src={logo.src}
            className={`${logo.height} w-auto object-contain grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300 flex-shrink-0`}
          />
        ))}
      </div>
    </div>
  )
}
