'use client'

import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { motion } from 'framer-motion'

function Header() {
  return (
    <Container className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Heading as="h1" className="max-w-5xl bg-gradient-to-r from-gray-900 via-[#c77d6a] to-gray-900 bg-clip-text text-transparent">
          We Built Glide Because We Lived The Talent Problem
        </Heading>
      </motion.div>
      <motion.section
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-base/7 text-gray-600">
          For firm owners like us, the problem was never demand. It was capacity. The need for high-quality accounting services has never been greater, yet the supply of qualified CPAs in the U.S. is shrinking at an astonishing rate.
        </p>
        <p className="mt-6 text-base/7 text-gray-600">
          Firms everywhere are turning away business, not because clients aren't there, but because great talent is difficult to find and even harder to retain. We've lived this ourselves, watching growth stall and opportunities slip away simply due to limited bandwidth.
        </p>
        <p className="mt-6 text-base/7 text-gray-600">
          The solutions out there didn't help. Most were built by tech founders, not operators. They felt disconnected from the realities of firm life — inconsistent quality, high costs, clunky onboarding, and little accountability.
        </p>
        <p className="mt-6 text-base/7 text-gray-600">
          I've spent my career on both sides of the equation — first as a CPA and consultant at Deloitte and EY-Parthenon, advising Fortune 500 clients on M&A, risk, and finance transformation; and later as Head of Finance at Victrix LLC, one of the nation's leading adaptive reuse developers. Those experiences taught me how critical great accounting talent is — and how impossible it's become to find.
        </p>
        <p className="mt-6 text-base/7 text-gray-600">
          So, we decided to take matters into our own hands. Glide was built for operators like us, by operators like us. By combining CPA-vetted talent, seamless onboarding, and active oversight, we give firms the capacity to scale without sacrificing trust, quality, or control.
        </p>
      </motion.section>
    </Container>
  )
}

function Stats() {
  return (
    <Container className="mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Subheading>By The Numbers</Subheading>
        <Heading as="h2" className="mt-2 bg-gradient-to-r from-gray-900 via-[#c77d6a] to-gray-900 bg-clip-text text-transparent">
          Built on Experience, Proven by Results
        </Heading>
      </motion.div>
      <hr className="mt-10 border-t border-gray-200" />
      <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div
          className="flex flex-col gap-y-3 border-l-2 border-[#f7a1c4] pl-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <dt className="text-sm font-medium text-gray-600">Family Legacy</dt>
          <dd className="order-first text-6xl font-medium tracking-tight bg-gradient-to-r from-[#f7a1c4] to-[#c77d6a] bg-clip-text text-transparent">
            <AnimatedNumber start={0} end={3} />rd Gen
          </dd>
          <dd className="text-sm text-gray-600">40+ years of combined firm experience</dd>
        </motion.div>
        <motion.div
          className="flex flex-col gap-y-3 border-l-2 border-[#f7a1c4] pl-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <dt className="text-sm font-medium text-gray-600">Client Satisfaction</dt>
          <dd className="order-first text-6xl font-medium tracking-tight bg-gradient-to-r from-[#f7a1c4] to-[#c77d6a] bg-clip-text text-transparent">
            <AnimatedNumber start={85} end={97} />%
          </dd>
          <dd className="text-sm text-gray-600">Engagement retention rate</dd>
        </motion.div>
        <motion.div
          className="flex flex-col gap-y-3 border-l-2 border-[#f7a1c4] pl-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <dt className="text-sm font-medium text-gray-600">Vetted Talent</dt>
          <dd className="order-first text-6xl font-medium tracking-tight bg-gradient-to-r from-[#f7a1c4] to-[#c77d6a] bg-clip-text text-transparent">
            <AnimatedNumber start={10} end={25} />+
          </dd>
          <dd className="text-sm text-gray-600">Accountants on platform</dd>
        </motion.div>
        <motion.div
          className="flex flex-col gap-y-3 border-l-2 border-[#f7a1c4] pl-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <dt className="text-sm font-medium text-gray-600">Rigorous Vetting</dt>
          <dd className="order-first text-6xl font-medium tracking-tight bg-gradient-to-r from-[#f7a1c4] to-[#c77d6a] bg-clip-text text-transparent">
            &lt;<AnimatedNumber start={0} end={1} />%
          </dd>
          <dd className="text-sm text-gray-600">Candidate acceptance rate</dd>
        </motion.div>
      </dl>
    </Container>
  )
}

function Leadership() {
  return (
    <Container className="mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Subheading>Leadership</Subheading>
        <Heading as="h2" className="mt-2 bg-gradient-to-r from-gray-900 via-[#c77d6a] to-gray-900 bg-clip-text text-transparent">
          The Team Behind Glide
        </Heading>
      </motion.div>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
        {/* Rohan's Card */}
        <motion.figure
          className="flex flex-col rounded-2xl bg-white p-8 shadow-xl ring-1 ring-[#f7a1c4]/20 hover:ring-[#f7a1c4]/40 transition-all"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <blockquote className="text-base font-medium leading-7 text-gray-900">
            <p>
              "Accounting is in our blood. After four generations and forty years of doing the work ourselves, we built Glide to make that same standard scalable."
            </p>
          </blockquote>
          <figcaption className="mt-8">
            <div className="flex items-center gap-4">
              <img
                alt="Rohan Prajapati"
                src="/team/rohan-prajapati.jpeg"
                className="h-16 w-16 rounded-full object-cover ring-2 ring-gray-100"
              />
              <div>
                <div className="font-semibold text-gray-900">Rohan Prajapati, CPA</div>
                <div className="text-sm text-gray-600">Founder of Glide, CEO of Rova Partners</div>
              </div>
            </div>
            <div className="mt-6 text-sm leading-6 text-gray-600">
              <p>Rohan brings a rare dual perspective — as both a seasoned CPA and an operator who's lived the daily realities of running complex finance functions.</p>
              <p className="mt-4">Before Glide, he advised Fortune 500 clients on M&A, risk, and finance transformation at Deloitte and EY-Parthenon. Later, as Head of Finance at Victrix LLC, one of the nation's leading adaptive reuse developers, he oversaw multimillion-dollar projects and built the systems that kept them running.</p>
              <p className="mt-4">Those experiences revealed a hard truth: great accounting talent drives growth — but finding and retaining it has become nearly impossible.</p>
            </div>
            <div className="mt-8 flex items-center justify-center gap-10 pt-6 border-t border-gray-100">
              <img
                alt="Deloitte"
                src="/company/deloitte-logo-png-transparent.png"
                className="h-28 w-auto max-w-[280px] object-contain grayscale opacity-60 -ml-4 -mt-1"
              />
              <img
                alt="EY"
                src="/company/logo_overview.png"
                className="h-12 w-auto max-w-[120px] object-contain grayscale opacity-60 -mt-8"
              />
              <img
                alt="Rova Partners"
                src="/company/Rova-logo-light.svg"
                className="h-10 w-auto max-w-[100px] object-contain grayscale opacity-60"
              />
            </div>
          </figcaption>
        </motion.figure>

        {/* Max's Card */}
        <motion.figure
          className="flex flex-col rounded-2xl bg-white p-8 shadow-xl ring-1 ring-[#f7a1c4]/20 hover:ring-[#f7a1c4]/40 transition-all"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <blockquote className="text-base font-medium leading-7 text-gray-900">
            <p>
              "After years building financial systems for firms managing over a billion in assets, we built Glide to bring that same reliability to accounting."
            </p>
          </blockquote>
          <figcaption className="mt-8">
            <div className="flex items-center gap-4">
              <img
                alt="Max Calvert"
                src="/team/max-calvert.jpg"
                className="h-16 w-16 rounded-full object-cover ring-2 ring-gray-100"
              />
              <div>
                <div className="font-semibold text-gray-900">Max Calvert</div>
                <div className="text-sm text-gray-600">CTO, Glide</div>
              </div>
            </div>
            <div className="mt-6 text-sm leading-6 text-gray-600">
              <p>Max brings deep experience in building high-compliance, enterprise-grade financial systems. Before Glide, he served as a Product Manager at Databank, leading product development for large-scale data and infrastructure systems.</p>
              <p className="mt-4">He also helped design and implement end-to-end financial infrastructure for several venture firms managing a combined $1B+ in AUM.</p>
              <p className="mt-4">In an industry often slow to adopt innovation, Max serves as the bridge between tradition and technology. He ensures Glide delivers the reliability firm owners expect, powered by the speed, security, and infrastructure today's accounting teams need.</p>
            </div>
            <div className="mt-8 flex items-center justify-center pt-6 border-t border-gray-100">
              <img
                alt="Databank"
                src="/company/databank-logo.png"
                className="h-20 w-auto max-w-[200px] object-contain grayscale opacity-60"
              />
            </div>
          </figcaption>
        </motion.figure>
      </div>
    </Container>
  )
}

function Person({ name, description, img }) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function Team() {
  return (
    <Container className="mt-32">
      <Subheading>Meet the team</Subheading>
      <Heading as="h3" className="mt-2">
        Founded by an all-star team.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Radiant is founded by two of the best sellers in the business and backed
        by investors who look the other way.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            Years ago, while working as sales associates at rival companies,
            Thomas, Ben, and Natalie were discussing a big client they had all
            been competing for. Joking about seeing the terms of each other’s
            offers, they had an idea: what if they shared data to win deals and
            split the commission behind their companies’ backs? It turned out to
            be an incredible success, and that idea became the kernel for
            Radiant.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Today, Radiant transforms revenue organizations by harnessing
            illegally acquired customer and competitor data, using it to provide
            extraordinary leverage. More than 30,000 companies rely on Radiant
            to undercut their competitors and extort their customers, all
            through a single integrated platform.
          </p>
          <div className="mt-6">
            <Button className="w-full sm:w-auto" href="#">
              Join us
            </Button>
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="/company/5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
      <Subheading as="h3" className="mt-24">
        The team
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Michael Foster"
          description="Co-Founder / CTO"
          img="/team/michael-foster.jpg"
        />
        <Person
          name="Dries Vincent"
          description="Business Relations"
          img="/team/dries-vincent.jpg"
        />
        <Person
          name="Celeste Vandermark"
          description="Front-end Developer"
          img="/team/celeste-vandermark.jpg"
        />
        <Person
          name="Courtney Henry"
          description="Designer"
          img="/team/courtney-henry.jpg"
        />
        <Person
          name="Marcus Eldridge"
          description="Director of Product"
          img="/team/marcus-eldridge.jpg"
        />
        <Person
          name="Whitney Francis"
          description="Copywriter"
          img="/team/whitney-francis.jpg"
        />
        <Person
          name="Leonard Krasner"
          description="Senior Designer"
          img="/team/leonard-krasner.jpg"
        />
        <Person
          name="Nolan Sheffield"
          description="Principal Designer"
          img="/team/nolan-sheffield.jpg"
        />
        <Person
          name="Emily Selman"
          description="VP, User Experience"
          img="/team/emily-selman.jpg"
        />
      </ul>
    </Container>
  )
}

function Investors() {
  return (
    <Container className="mt-32">
      <Subheading>Investors</Subheading>
      <Heading as="h3" className="mt-2">
        Funded by industry-leaders.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We are fortunate to be backed by the best investors in the industry —
        both literal and metaphorical partners in crime.
      </Lead>
      <Subheading as="h3" className="mt-24">
        Venture Capital
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        <li>
          <img
            alt="Remington Schwartz"
            src="/investors/remington-schwartz.svg"
            className="h-14"
          />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Remington Schwartz has been a driving force in the tech industry,
            backing bold entrepreneurs who explore grey areas in financial and
            privacy law. Their deep industry expertise and extensive political
            lobbying provide their portfolio companies with favorable regulation
            and direct access to lawmakers.
          </p>
        </li>
        <li>
          <img alt="Deccel" src="/investors/deccel.svg" className="h-14" />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Deccel has been at the forefront of innovation, investing in
            pioneering companies across various sectors, including technology,
            consumer goods, and healthcare. Their philosophy of ‘plausible
            deniability’ and dedication to looking the other way have helped
            produce some of the world’s most controversial companies.
          </p>
        </li>
      </ul>
      <Subheading as="h3" className="mt-24">
        Individual investors
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Kristin Watson"
          description="TechNexus Ventures"
          img="/individual-investors/kristin-watson.jpg"
        />
        <Person
          name="Emma Dorsey"
          description="Innovate Capital Partners"
          img="/individual-investors/emma-dorsey.jpg"
        />
        <Person
          name="Alicia Bell"
          description="FutureWave Investments"
          img="/individual-investors/alicia-bell.jpg"
        />
        <Person
          name="Jenny Wilson"
          description="SynergyTech Equity"
          img="/individual-investors/jenny-wilson.jpg"
        />
        <Person
          name="Anna Roberts"
          description="NextGen Horizons"
          img="/individual-investors/anna-roberts.jpg"
        />
        <Person
          name="Benjamin Russel"
          description="Pioneer Digital Ventures"
          img="/individual-investors/benjamin-russel.jpg"
        />
      </ul>
    </Container>
  )
}

function Testimonial() {
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-5/4 lg:aspect-3/4">
      <img
        alt=""
        src="/testimonials/veronica-winton.jpg"
        className="absolute inset-0 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-10% to-75% ring-1 ring-gray-950/10 ring-inset lg:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”']">
            We&apos;ve managed to put two of our main competitors out of
            business in 6 months.
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">Veronica Winton</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              CSO, Planeteria
            </span>
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

function Careers() {
  return (
    <Container className="my-32">
      <Subheading>Careers</Subheading>
      <Heading as="h3" className="mt-2">
        Join our fully remote team.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We work together from all over the world, mainly from locations without
        extradition agreements.
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          <Subheading as="h3">Open positions</Subheading>
          <div>
            <table className="w-full text-left">
              <colgroup>
                <col className="w-2/3" />
                <col className="w-1/3" />
                <col className="w-0" />
              </colgroup>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Location</th>
                  <th scope="col">Read more</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pt-10 pb-0">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Engineering
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">iOS Developer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Backend Engineer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Product Engineer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pt-5 pb-0">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Design
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Principal Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Senior Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Testimonial />
      </div>
    </Container>
  )
}

export default function Company() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Stats />
      <Leadership />
      <div className="mt-32" />
      <Footer />
    </main>
  )
}
