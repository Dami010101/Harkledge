import React from 'react'

const WebDe = () => {
  return (
    <div className='bg-black min-h-screen py-12'>
         <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#CAB43F]">Web Design & Technology</h1>
          <p className="mt-4 text-lg text-[#CAB43F]">
            At Harkledge, we specialize in creating stunning and functional websites that elevate your business and provide a seamless user experience. Our expertise in web design and technology ensures your digital presence stands out in a crowded market.
          </p>
        </div>

        <div className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-[#CAB43F] mb-4">Our Services</h2>
          <ul className="list-disc pl-6 text-[#CAB43F]">
            <li className="mb-4">
              <strong>Responsive Design:</strong> We design websites that look great and function perfectly on all devices, ensuring a consistent user experience across desktops, tablets, and smartphones.
            </li>
            <li className="mb-4">
              <strong>User Experience (UX) Design:</strong> Our UX design focuses on creating intuitive and enjoyable interactions for your users, enhancing satisfaction and engagement.
            </li>
            <li className="mb-4">
              <strong>User Interface (UI) Design:</strong> We craft visually appealing interfaces that align with your brand identity and provide a cohesive look and feel.
            </li>
            <li className="mb-4">
              <strong>Front-end Development:</strong> Our front-end developers bring your design to life using the latest technologies and best practices, ensuring fast and reliable performance.
            </li>
            <li className="mb-4">
              <strong>Back-end Development:</strong> We build robust back-end systems that support your website's functionality and ensure data integrity and security.
            </li>
            <li className="mb-4">
              <strong>Content Management Systems (CMS):</strong> We integrate easy-to-use CMS platforms that allow you to manage your content effortlessly and keep your website up-to-date.
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-[#CAB43F] mb-4">Why Choose Harkledge?</h2>
          <p className="max-w-2xl mx-auto text-lg text-[#CAB43F]">
            At Harkledge, we are committed to delivering high-quality web design and technology solutions that meet your business needs. Our team of experts is dedicated to providing exceptional service, ensuring your website not only looks great but also performs optimally.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WebDe