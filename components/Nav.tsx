import Link from 'next/link'

const Nav = () => {
  return (
    <ul className="flex items-center justify-evenly w-full h-full font-medium text-sm">
      <li>
        <Link href="/recents">
          Recent
        </Link>
      </li>
      <li>Drama</li>
      <li>Animations</li>
      <li>Romance</li>
      <li>Comedy</li>
    </ul>      
  )
}

export default Nav
