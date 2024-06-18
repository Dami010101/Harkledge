import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#CAB43F]">About Us</h1>
          <p className="mt-4 text-lg text-[#CAB43F]">Established in 2019, Harkledge has been at the forefront of digital innovation, delivering top-notch services to help businesses thrive in the digital age.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#CAB43F] mb-4">Our Services</h2>
            <ul className="list-disc pl-6 text-[#CAB43F]">
              <li><strong>Marketing Consultancy:</strong> Crafting strategies that drive growth and enhance brand visibility.</li>
              <li><strong>Website Design & Development:</strong> Creating user-friendly, responsive websites tailored to your business needs.</li>
              <li><strong>Software Design & Development:</strong> Building robust software solutions to streamline operations and boost productivity.</li>
              <li><strong>Graphic Design & Branding:</strong> Designing visually appealing branding materials to establish a strong market presence.</li>
            </ul>
          </div>

          <div className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#CAB43F] mb-4">Our Vision & Mission</h2>
            <div className="space-y-4 text-[#CAB43F]">
              <div>
                <h3 className="text-xl font-semibold text-[#CAB43F]">Vision</h3>
                <p className="mt-2">To be a global leader in digital solutions, empowering businesses to achieve their full potential through innovation and excellence.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#CAB43F]">Mission</h3>
                <p className="mt-2">To deliver exceptional digital services by combining creativity, technology, and strategic thinking, ensuring our clients achieve remarkable success and growth.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-[#CAB43F] mb-4">Why Choose Harkledge?</h2>
          <p className="max-w-2xl mx-auto text-lg text-[#CAB43F]">At Harkledge, we are dedicated to providing tailored solutions that meet your specific needs. Our team of experts is committed to delivering quality services that drive results and help you stay ahead in a competitive market.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
