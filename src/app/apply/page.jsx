'use client'

import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { motion } from 'framer-motion'
import { useState } from 'react'

function Banner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#f7a1c4] to-[#c77d6a] opacity-30"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#f7a1c4] to-[#c77d6a] opacity-30"
        />
      </div>
      <p className="text-sm/6 text-gray-900">
        <strong className="font-semibold">Join as a full-time or part-time professional</strong>
        <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
          <circle r={1} cx={1} cy={1} />
        </svg>
        We're accepting applications now&nbsp;<span aria-hidden="true">&rarr;</span>
      </p>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:-outline-offset-4" onClick={() => setIsVisible(false)}>
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-gray-900" />
        </button>
      </div>
    </div>
  )
}

function ApplyContent() {
  return (
    <Container className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-base/7 font-semibold bg-gradient-to-r from-[#f7a1c4] to-[#c77d6a] bg-clip-text text-transparent pb-1">Introducing</p>
        <Heading as="h1" className="mt-2 max-w-5xl bg-gradient-to-r from-gray-900 via-[#c77d6a] to-gray-900 bg-clip-text text-transparent pb-2">
          Why Accountants Choose Glide
        </Heading>
      </motion.div>
      <motion.section
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-base/7 text-gray-600">
          We're building the most trusted network of international accounting professionals — connecting ambitious talent with top U.S. firms. Our mission is simple: help great accountants do their best work, earn what they deserve, and build careers that last.
        </p>
        <p className="mt-6 text-base/7 text-gray-600">
          Glide isn't an employer. It's a platform for skilled accountants to find meaningful, long-term engagements with leading U.S. firms — full-time or part-time, depending on your goals. We handle the vetting, matching, and payments so you can focus on what you do best.
        </p>
        <div className="mt-10 text-gray-600">
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-[#f7a1c4]"
              />
              <span>
                <strong className="font-semibold text-gray-900">Access to the U.S. Market.</strong> Work directly with respected U.S. accounting firms and earn in U.S. dollars. We open doors that were once closed to international professionals.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-[#f7a1c4]"
              />
              <span>
                <strong className="font-semibold text-gray-900">Career Growth and Development.</strong> Advance your skills through ongoing training, mentorship, and learning opportunities. Glide is built to help you grow — not just get placed.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-[#f7a1c4]"
              />
              <span>
                <strong className="font-semibold text-gray-900">Meaningful, Long-Term Opportunities.</strong> We match you with firms that value your expertise and want to build lasting relationships, not one-off projects.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-[#f7a1c4]"
              />
              <span>
                <strong className="font-semibold text-gray-900">Trusted, Vetted Partners.</strong> Every client is screened for quality, professionalism, and fit — so you can focus on doing great work with great people.
              </span>
            </li>
          </ul>
          <h2 className="mt-16 text-pretty text-3xl font-semibold tracking-tight bg-gradient-to-r from-gray-900 via-[#c77d6a] to-gray-900 bg-clip-text text-transparent pb-2">
            Talent Is Everywhere. Opportunity Should Be Too.
          </h2>
          <p className="mt-6 text-gray-600">
            At Glide, we believe great accountants can come from anywhere.
            Divyesh joined our network to take the next step in his career — not to escape his current one. Within weeks, he was working directly with a U.S. firm that valued his precision, communication, and professionalism.
          </p>
          <figure className="mt-10 border-l-2 border-[#f7a1c4] pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                "Through Glide, I've been able to take on challenging work, earn globally, and grow faster than I ever expected. It's opened a new chapter in my career."
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-6 flex-none rounded-full bg-gray-50"
              />
              <div className="text-sm/6 text-gray-600">
                <strong className="font-semibold text-gray-900">Divyesh Jain</strong> – Accountant, Glide Network
              </div>
            </figcaption>
          </figure>
        </div>
        <motion.div 
          className="mt-32 mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Heading as="h2" className="text-pretty max-w-5xl bg-gradient-to-r from-gray-900 via-[#c77d6a] to-gray-900 bg-clip-text text-transparent pb-2">
            Our Application Process
          </Heading>
          
          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center text-sm/6 font-semibold text-[#f7a1c4]">
                <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                Step 1
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                />
              </div>
              <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">Application</p>
              <p className="mt-1 text-base/7 text-gray-600">
                We review your background, certifications, and technical skills to understand your experience and areas of expertise. The goal is to ensure alignment with the firms we serve.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center text-sm/6 font-semibold text-[#f7a1c4]">
                <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                Step 2
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                />
              </div>
              <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">Interview & Assessment</p>
              <p className="mt-1 text-base/7 text-gray-600">
                You'll complete a formal interview and skill-based assessment to evaluate both technical proficiency and communication skills — the qualities that define successful Glide professionals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center text-sm/6 font-semibold text-[#f7a1c4]">
                <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                Step 3
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                />
              </div>
              <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">Verification</p>
              <p className="mt-1 text-base/7 text-gray-600">
                A third-party partner verifies your education, certifications, and employment history so our clients — and you — can trust every engagement from day one.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center text-sm/6 font-semibold text-[#f7a1c4]">
                <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                Step 4
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                />
              </div>
              <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">Onboarding</p>
              <p className="mt-1 text-base/7 text-gray-600">
                Our team provides hands-on support to help you get started, understand Glide's systems, and prepare for successful client relationships. We're partners in your long-term success, not just your first placement.
              </p>
            </motion.div>
          </div>
        </motion.div>

      </motion.section>
    </Container>
  )
}

function TalentTestimonials() {
  const testimonials = [
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Leslie Alexander',
        handle: 'lesliealexander',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'Anim sit consequat culpa commodo eu do nisi commodo ut aute aliqua. Laborum esse duis tempor consectetur officia mollit fugiat. Exercitation qui elit minim minim quis fugiat ex.',
      author: {
        name: 'Michael Foster',
        handle: 'michaelfoster',
        imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque.',
      author: {
        name: 'Dries Vincent',
        handle: 'driesvincent',
        imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'Excepteur consectetur deserunt id incididunt veniam mollit officia sint qui aute duis sit cillum. Reprehenderit fugiat amet aliqua in commodo minim sunt laborum.',
      author: {
        name: 'Lindsay Walton',
        handle: 'lindsaywalton',
        imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'Distinctio facere aliquam est qui atque sint molestias ad. Fuga consequuntur asperiores voluptatum ipsum.',
      author: {
        name: 'Courtney Henry',
        handle: 'courtneyhenry',
        imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'Nam nesciunt dolorem dolor asperiores sint. Incidunt molestiae quis deleniti vitae ut in earum delectus iusto.',
      author: {
        name: 'Tom Cook',
        handle: 'tomcook',
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis.',
      author: {
        name: 'Whitney Francis',
        handle: 'whitneyfrancis',
        imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.',
      author: {
        name: 'Leonard Krasner',
        handle: 'leonardkrasner',
        imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
      author: {
        name: 'Floyd Miles',
        handle: 'floydmiles',
        imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]

  return (
    <Container className="py-32">
      <div>
        <p className="text-base/7 font-semibold bg-gradient-to-r from-[#f7a1c4] to-[#c77d6a] bg-clip-text text-transparent pb-1">Testimonials</p>
        <Heading as="h3" className="mt-2 bg-gradient-to-r from-gray-900 via-[#c77d6a] to-gray-900 bg-clip-text text-transparent pb-2">
          We have worked with thousands of amazing people
        </Heading>
      </div>
      <div className="mt-16 flow-root sm:mt-20">
        <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
              <figure className="rounded-2xl bg-gray-50 p-8 text-sm/6">
                <blockquote className="text-gray-900">
                  <p>{`"${testimonial.body}"`}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img
                    alt=""
                    src={testimonial.author.imageUrl}
                    className="size-10 rounded-full bg-gray-50"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                    <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function FAQSection() {
  const faqs = [
    {
      question: "What is Glide?",
      answer: "Glide is a network that connects qualified accounting professionals from around the world with leading U.S. firms. We're not a staffing agency — we're a platform built to help you grow your career and work with great clients.",
    },
    {
      question: 'Am I an employee of Glide or the client?',
      answer: "You're an independent contractor. Glide facilitates the relationship between you and the U.S. firm — handling contracts, payments, and support — but you retain full professional independence.",
    },
    {
      question: 'Is the work full-time or part-time?',
      answer: "Both. Some accountants work 30–40 hours per week with a single U.S. firm, while others take on fractional or project-based engagements. We'll match you with opportunities that fit your goals and capacity.",
    },
    {
      question: 'Who can apply?',
      answer: "We look for experienced accountants, controllers, and bookkeepers with strong English communication skills, reliable internet, and a solid technical foundation in tools like QuickBooks, Xero, or NetSuite. U.S. accounting experience is a plus but not required.",
    },
    {
      question: 'How does the application process work?',
      answer: "Our process includes four steps:\n\nApplication review – We assess your background and experience.\n\nInterview & assessment – We evaluate both technical and communication skills.\n\nVerification – Education and employment are independently confirmed.\n\nOnboarding – We prepare you to succeed with Glide and your matched firms.",
    },
    {
      question: 'How do payments work?',
      answer: "You'll be paid in U.S. dollars through Glide's secure payment system. Payments are typically processed twice a month, and we handle invoicing on your behalf so you can focus on your work.",
    },
    {
      question: 'What kind of firms will I work with?',
      answer: "Our clients are small to mid-sized accounting firms and business owners across the U.S. who are looking for reliable, long-term partners — not one-off freelancers.",
    },
    {
      question: 'Does Glide charge any fees to talent?',
      answer: "No. We never charge talent to join or to access opportunities. Glide earns its fee from the client side.",
    },
    {
      question: 'Can I work with multiple clients through Glide?',
      answer: "Yes, if your schedule allows. Many accountants start with one primary client and later take on additional projects as availability opens up.",
    },
    {
      question: 'What kind of support does Glide provide?',
      answer: "You'll have access to our operations and community team for help with onboarding, payment questions, and ongoing professional development. Glide is your long-term partner in building a global career.",
    },
  ]

  return (
    <div className="bg-white">
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight bg-gradient-to-r from-gray-900 via-[#c77d6a] to-gray-900 bg-clip-text text-transparent sm:text-5xl pb-2">
            Frequently asked questions
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden text-[#f7a1c4]" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-[:not([data-open])]:hidden text-[#f7a1c4]" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600 whitespace-pre-line">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}

function CTASection() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight bg-gradient-to-r from-gray-900 via-[#c77d6a] to-gray-900 bg-clip-text text-transparent sm:text-5xl pb-2">
            Ready to Take the Next Step?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
            Join the growing network of talented accounting professionals building their careers with Glide. Apply today and start working with top U.S. firms.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-gradient-to-r from-[#f7a1c4] to-[#c77d6a] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7a1c4]"
            >
              Apply Now
            </a>
            <a
              href="#"
              className="text-sm/6 font-semibold text-gray-900 hover:text-gray-600"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
      >
        <circle r={512} cx={512} cy={512} fill="url(#glide-gradient)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="glide-gradient">
            <stop stopColor="#f7a1c4" />
            <stop offset={1} stopColor="#c77d6a" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

export default function ApplyAsTalent() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Banner />
      <Container>
        <Navbar />
      </Container>
      <ApplyContent />
      <TalentTestimonials />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}

