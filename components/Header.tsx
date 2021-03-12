import Nav from './Nav';
import Logo from './Logo';

const Header = () => {
  return (
    <div className="w-full h-16 bg-black">
      <div className="flex items-center justify-between h-full w-full px-4 lg:px-16">
        <div className="w-1/2 h-full flex items-center text-white font-semibold tracking-wide">
          <Logo />
        </div>
        <div className="w-1/2 h-full text-white">
          <Nav />
        </div>
      </div>
    </div>
  )
}

export default Header
