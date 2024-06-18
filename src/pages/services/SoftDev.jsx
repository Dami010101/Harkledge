import React from 'react'

const SoftDev = () => {
  return (
    <div className='bg-black min-h-screen py-12'>
        <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#CAB43F]">Software Design & Technology</h1>
          <p className="mt-4 text-lg text-[#CAB43F]">
            At Harkledge, we specialize in developing robust software solutions tailored to your business needs. Our expertise in software design and technology ensures your operations are efficient, scalable, and secure.
          </p>
        </div>

        <div className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-[#CAB43F] mb-4">Our Services</h2>
          <ul className="list-disc pl-6 text-[#CAB43F]">
            <li className="mb-4">
              <strong>Custom Software Development:</strong> We create custom software solutions tailored to your specific business requirements, ensuring optimal performance and scalability.
            </li>
            <li className="mb-4">
              <strong>Enterprise Software Solutions:</strong> Our enterprise software solutions help streamline operations, improve productivity, and enhance collaboration within your organization.
            </li>
            <li className="mb-4">
              <strong>Mobile App Development:</strong> We develop intuitive and user-friendly mobile applications for both iOS and Android platforms, enhancing your business's mobile presence.
            </li>
            <li className="mb-4">
              <strong>Cloud Solutions:</strong> Our cloud solutions provide secure, scalable, and cost-effective ways to manage your business data and applications.
            </li>
            <li className="mb-4">
              <strong>Software Integration:</strong> We integrate various software systems to ensure seamless data flow and improve overall efficiency within your organization.
            </li>
            <li className="mb-4">
              <strong>Software Maintenance & Support:</strong> We offer comprehensive maintenance and support services to ensure your software remains up-to-date and performs optimally.
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-[#CAB43F] mb-4">Why Choose Harkledge?</h2>
          <p className="max-w-2xl mx-auto text-lg text-[#CAB43F]">
            At Harkledge, we are committed to delivering high-quality software design and technology solutions that meet your business needs. Our team of experts is dedicated to providing exceptional service, ensuring your software not only meets but exceeds your expectations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SoftDev