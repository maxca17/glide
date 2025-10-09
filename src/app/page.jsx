'use client'

import React from 'react'
import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'

function Hero() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div className="relative overflow-hidden" onMouseMove={handleMouseMove}>
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.25), transparent 40%)`,
        }}
      />
      <Container className="relative">
        <Navbar
          banner={
            <Link
            href="/company"
            className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-0.5 text-sm/6 font-medium text-gray-600 ring-1 ring-[#D15052]/15 transition-all duration-300 data-hover:bg-gray-950 data-hover:text-white data-hover:scale-105"
            >
            Founded by CPAs and Ex–Big 4 Professionals
              <ChevronRightIcon className="size-4" />
            🎉
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <motion.h1 
            className="font-display text-3xl font-medium tracking-tight text-gray-950 sm:text-4xl md:text-5xl leading-tight max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            CPA-Vetted Accounting Talent<br />
            Fractional, Flexible and On-Demand.
          </motion.h1>
          <motion.p 
            className="mt-4 max-w-lg text-lg/7 font-medium text-gray-950/75 sm:text-xl/8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            We move fast, adapt to your needs, and make onboarding painless — without sacrificing quality.
          </motion.p>
          <motion.div 
            className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Button href="#" className="sm:min-w-[200px]">Get Talent Now</Button>
            <Button variant="secondary" href="#why-glide" className="sm:min-w-[200px]">
              Why Glide
            </Button>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden" id="services">
      <Container className="pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Subheading>Our Services</Subheading>
          <Heading as="h2" className="mt-2 max-w-3xl text-3xl sm:text-4xl md:text-5xl">
            We Handle the Work That Keeps You From Growing
        </Heading>
        </motion.div>
        <dl className="mt-16 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <motion.div 
            className="relative pl-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <dt className="text-base font-semibold leading-7 text-gray-950">
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#f7a1c4] to-[#c77d6a] shadow-sm">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              Burst Capacity
            </dt>
            <dd className="mt-2 text-sm leading-6 text-gray-600">
              Scale up in days for closes, filings, or interim coverage — without overhiring.
            </dd>
          </motion.div>
          <motion.div 
            className="relative pl-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <dt className="text-base font-semibold leading-7 text-gray-950">
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#f7a1c4] to-[#c77d6a] shadow-sm">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              Fractional / Ongoing Needs
            </dt>
            <dd className="mt-2 text-sm leading-6 text-gray-600">
              Embed a steady resource long-term — with flexible terms and no full-time overhead.
            </dd>
          </motion.div>
          <motion.div 
            className="relative pl-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <dt className="text-base font-semibold leading-7 text-gray-950">
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#f7a1c4] to-[#c77d6a] shadow-sm">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              Special Projects
            </dt>
            <dd className="mt-2 text-sm leading-6 text-gray-600">
              On-demand experts for cleanups, migrations, and complex projects — executed with precision.
            </dd>
          </motion.div>
          <motion.div 
            className="relative pl-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <dt className="text-base font-semibold leading-7 text-gray-950">
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#f7a1c4] to-[#c77d6a] shadow-sm">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              Specialized Expertise
            </dt>
            <dd className="mt-2 text-sm leading-6 text-gray-600">
              Precision specialists for complex needs — sales tax, multi-state, consolidations, and more.
            </dd>
          </motion.div>
        </dl>
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container id="how-it-works">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Subheading>How It Works</Subheading>
        <Heading as="h3" className="mt-2 max-w-3xl">
          Quality Talent, Without The Hiring Drag
        </Heading>
      </motion.div>

      <dl className="mt-16 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <motion.div 
          className="relative pl-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <dt className="text-base font-semibold leading-7 text-gray-950">
            <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#f7a1c4] to-[#c77d6a] shadow-sm">
              <span className="text-sm font-bold text-white">1</span>
            </div>
            Step 1: Tell Us What You're Looking For
          </dt>
          <dd className="mt-2 text-sm leading-6 text-gray-600">
            Fill out a quick form with what you need — we'll handle the rest and find your perfect CPA-vetted accounting match.
          </dd>
        </motion.div>
        <motion.div 
          className="relative pl-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <dt className="text-base font-semibold leading-7 text-gray-950">
            <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#f7a1c4] to-[#c77d6a] shadow-sm">
              <span className="text-sm font-bold text-white">2</span>
            </div>
            Step 2: Get Matched to the Right Talent
          </dt>
          <dd className="mt-2 text-sm leading-6 text-gray-600">
            We'll find your perfect matches before your coffee gets cold. You'll get a shortlist of options, each with availability that fits your timeline.
          </dd>
        </motion.div>
        <motion.div 
          className="relative pl-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <dt className="text-base font-semibold leading-7 text-gray-950">
            <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#f7a1c4] to-[#c77d6a] shadow-sm">
              <span className="text-sm font-bold text-white">3</span>
            </div>
            Step 3: Meet Before You Commit
          </dt>
          <dd className="mt-2 text-sm leading-6 text-gray-600">
            Review your shortlist, connect with top candidates, and join quick virtual intros to confirm the perfect fit.
          </dd>
        </motion.div>
        <motion.div 
          className="relative pl-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <dt className="text-base font-semibold leading-7 text-gray-950">
            <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#f7a1c4] to-[#c77d6a] shadow-sm">
              <span className="text-sm font-bold text-white">4</span>
            </div>
            Step 4: Engagement Launch
          </dt>
          <dd className="mt-2 text-sm leading-6 text-gray-600">
            Once you've chosen your hire, we finalize the SOW, handle onboarding, and coordinate your start date. From kickoff to delivery, we stay close to ensure smooth execution and consistent quality.
          </dd>
        </motion.div>
      </dl>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32" id="why-glide">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Subheading dark>Why Glide</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
            The Glide Promise: Efficiency Without Sacrifice.
        </Heading>
        </motion.div>

        <div className="mt-16 space-y-8">
          {/* Top row - 3 cards */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <motion.div 
              className="flex flex-col rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 text-[#f7a1c4]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
                <h3 className="text-lg font-semibold text-white">
                  Cost Advantage Without Compromise
                </h3>
              </div>
              <p className="mt-4 flex-1 text-sm leading-6 text-gray-300">
                Access CPA-vetted offshore accountants — technically proven and communication-tested.
                Get world-class accounting support at a fraction of U.S. rates.
              </p>
              <div className="mt-6 flex items-center justify-between text-sm font-semibold group cursor-pointer">
                <span className="bg-gradient-to-r from-[#f7a1c4] to-[#c77d6a] bg-clip-text text-transparent group-hover:from-[#ff9dd0] group-hover:to-[#d98a77] transition-all">
                  Higher margins, more growth, zero trade-offs
                </span>
                <svg className="h-4 w-4 text-[#f7a1c4] group-hover:translate-x-2 transition-transform flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 text-[#f7a1c4]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                <h3 className="text-lg font-semibold text-white">
                  Speed Without the Stress
                </h3>
              </div>
              <p className="mt-4 flex-1 text-sm leading-6 text-gray-300">
                From match to start in days — not weeks. Our streamlined onboarding process gets your accountant live fast and fully aligned from day one.
              </p>
              <div className="mt-6 flex items-center justify-between text-sm font-semibold group cursor-pointer">
                <span className="bg-gradient-to-r from-[#f7a1c4] to-[#c77d6a] bg-clip-text text-transparent group-hover:from-[#ff9dd0] group-hover:to-[#d98a77] transition-all">
                  Faster starts, smoother delivery
                </span>
                <svg className="h-4 w-4 text-[#f7a1c4] group-hover:translate-x-2 transition-transform flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 text-[#f7a1c4]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                <h3 className="text-lg font-semibold text-white">
                  Reliability Without Risk
                </h3>
              </div>
              <p className="mt-4 flex-1 text-sm leading-6 text-gray-300">
                We stay close to every engagement with active progress monitoring — keeping projects on track, accurate, and worry-free.
              </p>
              <div className="mt-6 flex items-center justify-between text-sm font-semibold group cursor-pointer">
                <span className="bg-gradient-to-r from-[#f7a1c4] to-[#c77d6a] bg-clip-text text-transparent group-hover:from-[#ff9dd0] group-hover:to-[#d98a77] transition-all">
                  Never miss a close, deadline, or deliverable
                </span>
                <svg className="h-4 w-4 text-[#f7a1c4] group-hover:translate-x-2 transition-transform flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Bottom row - 2 cards centered */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <motion.div 
              className="flex flex-col rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20 lg:col-start-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 text-[#f7a1c4]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <h3 className="text-lg font-semibold text-white">
                  Security Without Surprises
                </h3>
              </div>
              <p className="mt-4 flex-1 text-sm leading-6 text-gray-300">
                We treat your client data with the same rigor you do — strict NDAs and constant oversight built into every engagement.
              </p>
              <div className="mt-6 flex items-center justify-between text-sm font-semibold group cursor-pointer">
                <span className="bg-gradient-to-r from-[#f7a1c4] to-[#c77d6a] bg-clip-text text-transparent group-hover:from-[#ff9dd0] group-hover:to-[#d98a77] transition-all">
                  True peace of mind as you scale securely
                </span>
                <svg className="h-4 w-4 text-[#f7a1c4] group-hover:translate-x-2 transition-transform flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20 lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 text-[#f7a1c4]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                </svg>
                <h3 className="text-lg font-semibold text-white">
                  Scalability Without Strain
                </h3>
              </div>
              <p className="mt-4 flex-1 text-sm leading-6 text-gray-300">
                Glide gives you flexible accounting capacity for any scenario — from ongoing support and burst capacity to specialized projects.
              </p>
              <div className="mt-6 flex items-center justify-between text-sm font-semibold group cursor-pointer">
                <span className="bg-gradient-to-r from-[#f7a1c4] to-[#c77d6a] bg-clip-text text-transparent group-hover:from-[#ff9dd0] group-hover:to-[#d98a77] transition-all">
                  The right accounting talent, on your terms, exactly when you need it
                </span>
                <svg className="h-4 w-4 text-[#f7a1c4] group-hover:translate-x-2 transition-transform flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <motion.div 
          className="mt-10 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <LogoCloud />
        </motion.div>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
