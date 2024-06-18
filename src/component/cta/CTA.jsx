import React from 'react';
// import picta from '../../asset/np_Multicultural office handshake celebration_bDjPo8_free.jpg'

const CTA = () => {
  return (
    <div className="relative z-20 flex items-center overflow-hidden bg-black p-2">
      <div className="container relative flex flex-col sm:flex-row px-6 py-16 mx-auto border-2 border-gold rounded-lg">
        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5 p-4 border-b-2 sm:border-b-0 sm:border-r-2 border-gold">
          <h1 className="flex flex-col text-2xl font-black leading-none text-gold uppercase font-bebas-neue sm:text-4xl">
          Think possibilites<br />
          Seek solutions<br />
          Do innovations
          {/* <span className="text-5xl sm:text-7xl">Time</span> */}
          </h1>
          <p className="text-sm text-gold sm:text-base">
          Revolutionise Your World with Our Cutting-Edge Technological Solutions!
          </p>
          <div className="flex mt-8">
            <a href="Services" className="px-4 py-2 mr-4 text-black uppercase bg-gold border-2 border-transparent rounded-lg text-md hover:bg-gold-dark">
              Get started
            </a>
            <a href="AboutUs" className="px-4 py-2 text-gold uppercase bg-transparent border-2 border-gold rounded-lg hover:bg-gold hover:text-black text-md">
              Read more
            </a>
          </div>
        </div>
        <div className="relative sm:w-1/3 lg:w-3/5 p-4">
          <img
            src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // src={picta} 
            className="w-full max-w-xs m-auto md:max-w-sm rounded-lg border-2 border-gold"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
