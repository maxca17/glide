'use client'

import * as Headless from '@headlessui/react'
import NextLink from 'next/link'
import { forwardRef } from 'react'

export const Link = forwardRef(function Link(props, ref) {
  const handleClick = (e) => {
    // Check if the href is a hash link (starts with #)
    if (props.href?.startsWith('#')) {
      e.preventDefault()
      const targetId = props.href.substring(1)
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    // Call the original onClick if it exists
    props.onClick?.(e)
  }

  return (
    <Headless.DataInteractive as={NextLink} ref={ref} {...props} onClick={handleClick} />
  )
})
