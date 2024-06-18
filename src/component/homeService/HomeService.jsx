import React from 'react'
import mc from '../../asset/hfd.jpg'
import sdd from '../../asset/rdc.jpg'
import wdd from '../../asset/hsw.jpg'
import gdb from '../../asset/stf.jpg'

const HomeService = () => {
  return (
    <div className='grid px-2 py-2 w-full sm:grid-cols-1 justify-items-center md:grid-cols-2  lg:grid-cols-4 gap-7 align 'id='top_pick'>
       
    
    <div class="max-w-sm rounded overflow-hidden shadow-lg w-full hover:animate-pulse bg-[#CAB43F]">
         <img src={mc} style={{height:260}} alt="Sunset in the mountains"className='w-full'/>
         <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2">Marketing Consultancy </div>
           <p class="text-black text-base">
           Are you in search of a world-class marketing agency that can make your products and services well-known? Search no longer, we will build an undisputable presence for your audience.           </p>
         </div>
         <div class="px-6 pt-4 pb-2">
         <span class="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2"><a href='https://www.youtube.com/watch?v=loqCY9b7aec'>Click for more</a></span>
           
         </div>
       </div>

       <div class="max-w-sm rounded overflow-hidden shadow-lg w-full hover:animate-pulse bg-[#CAB43F]">
         <img src={sdd} style={{height:260}} alt="Sunset in the mountains"className='w-full'/>
         <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2">Software Design & Development</div>
           <p class="text-black text-base">
           Looking for a software solution for a nagging problem? Look no further, we will develop a solution-driven software for your challenges.
            </p>
         </div>
         <div class="px-6 pt-4 pb-2">
         <span class="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2"><a href='https://www.youtube.com/watch?v=loqCY9b7aec'>Click for more</a></span>
           
         </div>
       </div>

       <div class="max-w-sm rounded overflow-hidden shadow-lg w-full hover:animate-pulse bg-[#CAB43F]">
         <img src={wdd} style={{height:260}} alt="Sunset in the mountains"className='w-full'/>
         <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2">Website Design & Development</div>
           <p class="text-black text-base">
           Do you want a beautiful, user-friendly and responsive website? Then you are in the right place, we can create one for you.
            </p>
         </div>
         <div class="px-6 pt-4 pb-2">
         <span class="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2"><a href='https://www.youtube.com/watch?v=loqCY9b7aec'>Click for more</a></span>
           
         </div>
       </div>

       <div class="max-w-sm rounded overflow-hidden shadow-lg w-full hover:animate-pulse bg-[#CAB43F]">
         <img src={gdb} style={{height:260}} alt="Sunset in the mountains"className='w-full'/>
         <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2">Graphic Design & Branding </div>
           <p class="text-black text-base">
           Do you desire a visually appealling graphics? Then you are in luck, we will bring your imagination to life.</p>
         </div>
         <div class="px-6 pt-4 pb-2">
           <span class="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2"><a href='https://www.youtube.com/watch?v=loqCY9b7aec'>Click for more</a></span>
           
         </div>
       </div>

       
 </div> 
  )
}

export default HomeService