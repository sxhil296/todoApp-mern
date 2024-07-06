import React from 'react'
import { GitHub } from 'react-feather'

const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full p-4 text-right flex justify-end items-center gap-2'>
      <p>Code can be found on</p>
      <GitHub />
    </footer>
  )
}

export default Footer
