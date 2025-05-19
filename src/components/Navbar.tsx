import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

const Navbar = () => {

  const [isEarthOpen, setIsEarthOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleEarth = () => setIsEarthOpen(!isEarthOpen);
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  return (
    <nav className='bg-white sticky top-0 z-50 shadow-md'>
      <div className='max-w-screen-xl mx-auto flex justify-between items-center p-4'>
        <img src='/climax_logo.png' alt='Logo' className='w-24 h-auto' />
        {/* Desktop Menu */}
        <div className='hidden md:flex gap-4 text-black font-sans text-sm items-center'>
          <Link to='/home'>Home</Link>
          <Link to='/about'>About</Link>

          <div className='relative'>
            <button onClick={toggleEarth} className='flex items-center gap-1'>
              Earth {isEarthOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {isEarthOpen && (
              <div className='absolute bg-white shadow-md mt-2 rounded-lg py-2 px-4 w-40'>
                <Link to='/ecolearn' className='block py-1 hover:underline'>EcoLearn</Link>
                <Link to='/earthtimeline' className='block py-1 hover:underline'>EarthTimeline</Link>
              </div>
            )}
          </div>

          <Link to='/contact'>Contact</Link>
          <a href='#member' className='rounded-3xl font-bold bg-climax-green text-white px-4 py-2'>Get Started</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          <button onClick={toggleMobile}>
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className='md:hidden bg-white shadow-md px-6 pb-4'>
          <Link to='/home' className='block py-2'>Home</Link>
          <Link to='/about' className='block py-2'>About</Link>
          <div>
            <button onClick={toggleEarth} className='flex items-center gap-1 py-2'>
              Earth {isEarthOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {isEarthOpen && (
              <div className='ml-4'>
                <Link to='/ecolearn' className='block py-1'>EcoLearn</Link>
                <Link to='/earthtimeline' className='block py-1'>Earthtimeline</Link>
              </div>
            )}
          </div>
          <Link to='/contact' className='block py-2'>Contact</Link>
          <a href='#member' className='block py-2 rounded-3xl font-bold bg-climax-green text-white text-center'>Get Started</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar