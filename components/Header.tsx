import Nav from './Nav';
import Logo from './Logo';

const Header = () => {
  return (
    <div className="w-full h-16 bg-black">
      <div className="flex items-center justify-between h-full w-full px-4 lg:px-16">
        <div className="w-1/2 h-full flex items-center text-white font-semibold tracking-wide">
          <Logo />
        </div>
        <div className="hidden md:block md:w-1/2 lg:w-2/5  h-full text-white">
          <Nav />
        </div>
        <div className="block md:hidden h-full text-white  flex items-center">
          <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Header
