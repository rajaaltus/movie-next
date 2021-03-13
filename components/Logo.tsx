import React from 'react'
import Link from 'next/link';

const Logo = () => {
  return (
    <>
    <Link href="/">
      <a className="flex items-center">
      <svg className="w-8 h-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
      Movies
      </a>
    </Link>
    </>
  )
}

export default Logo
