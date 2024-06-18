import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { AiOutlineProduct } from "react-icons/ai";
import logo from '../asset/Asset 2.png';
import { IoMdClose } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [isServDropdownOpen, setIsServDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navStylez = 'text-[#CAB43F] font-bold text-sm px-2 py-1 hover:bg-gray-700 rounded-lg transition duration-300';

  const toggleServDropdown = () => {
    setIsServDropdownOpen(!isServDropdownOpen);
  };

  const navContent = (
    <>
      {/* Services dropdown for mobile view */}
      <div className="relative lg:hidden" onClick={toggleServDropdown}>
        <button className={`${navStylez} flex items-center`}>
          <span className='flex items-center gap-2'>
            <span>
              <AiOutlineProduct size={18} />
            </span>
            <span>Services</span>
          </span>
          <MdArrowDropDown size={23} />
        </button>
        {isServDropdownOpen && (
          <div className="mt-2 w-full rounded-md bg-black ring-1 ring-gold">
            <div className="py-1">
            <Link to='/Markcon' className="block px-4 py-2 text-sm text-[#CAB43F] hover:bg-gray-700">Marketing Consultancy</Link>
              <Link to='/WebDe' className="block px-4 py-2 text-sm text-[#CAB43F] hover:bg-gray-700">Website Design & Development</Link>
              <Link to='/SoftDev' className="block px-4 py-2 text-sm text-[#CAB43F] hover:bg-gray-700">Software Design & Development</Link>
              <Link to='/GraDeBR' className="block px-4 py-2 text-sm text-[#CAB43F] hover:bg-gray-700">Graphics Design & Branding</Link>
            </div>
          </div>
        )}
      </div>

      {/* Services dropdown for larger screens */}
      <div className={`${navStylez} lg:flex hidden relative`} onClick={toggleServDropdown}>
        <button className='flex items-center'>
          <span className='flex items-center gap-2'>
            <span>
              <AiOutlineProduct size={18} />
            </span>
            <span>Services</span>
          </span>
          <MdArrowDropDown size={23} />
        </button>
        {isServDropdownOpen && (
          <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-black ring-1 ring-gold z-10 top-11 right-0">
            <div className="py-1">
              <Link to='/Markcon' className="block px-4 py-2 text-sm text-[#CAB43F] hover:bg-gray-700">Marketing Consultancy</Link>
              <Link to='/WebDe' className="block px-4 py-2 text-sm text-[#CAB43F] hover:bg-gray-700">Website Design & Development</Link>
              <Link to='/SoftDev' className="block px-4 py-2 text-sm text-[#CAB43F] hover:bg-gray-700">Software Design & Development</Link>
              <Link to='/GraDeBR' className="block px-4 py-2 text-sm text-[#CAB43F] hover:bg-gray-700">Graphics Design & Branding</Link>
            </div>
          </div>
        )}
      </div>

      <div className={navStylez}><Link to='/AboutUs'>About Us</Link></div>
      <div className={navStylez}><Link to='/Careers'>Careers</Link></div>
      <div className={navStylez}><Link to='/ContactUs'>Contact Us</Link></div>
    </>
  );

  return (
    <nav className='shadow bg-black z-40 text-[#CAB43F] sticky top-0 w-full'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-6'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <Link to='/' className='flex items-center'>
              <img className='h-10 w-auto pl-7' src={logo} style={{height:45, width:100}} alt='Logo' />
            </Link>
          </div>
          <div className='hidden lg:flex flex-grow justify-center'>
            <div className='flex items-center space-x-4'>
              {navContent}
            </div>
          </div>
          <div className='lg:hidden'>
            <button onClick={() => { setIsOpen(!isOpen) }} type='button'>
              {isOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='lg:hidden'>
          <div className='flex flex-col gap-y-2 px-4 sm:px-6 pb-2'>
            {navContent}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
