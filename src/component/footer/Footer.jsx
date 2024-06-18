import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
<div>
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 bg-black text-[#CAB43F]'>
      <ul>
        <h2 className='mb-1 font-semibold'>Links</h2>
        <li className='text-xs'><a href='/'>Services</a></li>
        <li className='text-xs'><a href='/'>About Us</a></li>
        <li className='text-xs'><a href='/'>Careers</a></li>
      </ul>
      <ul>
        <h2 className='mb-1 font-semibold'>Data Policy</h2>
        <li className='text-xs'><a href='/'>Privacy Policy</a></li>
        <li className='text-xs'><a href='/'>Terms & Conditions</a></li>
        <li className='text-xs'><a href='/'>Cookies Policy</a></li>
        <li className='text-xs'><a href='/'>Subscribe</a></li>
      </ul>

      <ul>
        <h2 className='mb-1 font-semibold'>Contact Us</h2>
        <li className='text-xs' ><a href='/'><div className='flex items-center gap-2'><div><FaPhoneAlt /></div><div>PHONE: +234 901 458 6785,  +447448527412</div></div></a></li>
        <li className='text-xs'><a href='/'><div className='flex items-center gap-2'><div><MdEmail /></div><div>EMAIL: info@harkledge.com</div></div></a></li>
     </ul>

     <ul>
     
     <h2 className='mb-1 font-semibold'>Social Media</h2>
        <li className='text-xs'><a href='/'>Instagram</a></li>
        <li className='text-xs'><a href='/'>Facebook</a></li>
        <li className='text-xs'><a href='/'>Twitter</a></li>
        <li className='text-xs'><a href='/'>LinkedIn</a></li>

      </ul>
    </div>
    </div>  )
}

export default Footer