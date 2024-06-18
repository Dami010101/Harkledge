import React from 'react';

const Careers = () => {
  return (
    <div className="bg-black text-gold min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Careers at Harkledge</h1>
          <p className="text-lg">Join our team and help us drive innovation in marketing consultancy, website design & development, software design & development, and graphic design & branding.</p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Open Positions</h2>
          <div className="space-y-8">
            {/* Example Job Posting */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Marketing Consultant</h3>
              <p className="mb-2">We are looking for a creative and driven marketing consultant to join our team. If you have a passion for developing marketing strategies that drive growth, we'd love to hear from you.</p>
              <a href="ContactUs" className="text-pink-500 hover:underline">Read more</a>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Web Developer</h3>
              <p className="mb-2">Join our dynamic team of web developers to create responsive, user-friendly websites. If you have experience in front-end and back-end development, apply now.</p>
              <a href="ContactUs" className="text-pink-500 hover:underline">Read more</a>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Software Engineer</h3>
              <p className="mb-2">We are looking for a talented software engineer to design and develop innovative software solutions. If you have strong programming skills and a problem-solving mindset, we want you on our team.</p>
              <a href="ContactUs" className="text-pink-500 hover:underline">Read more</a>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Graphic Designer</h3>
              <p className="mb-2">Are you a creative graphic designer with a passion for branding? Join our team to create visually appealing designs that make an impact.</p>
              <a href="ContactUs" className="text-pink-500 hover:underline">Read more</a>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Join Our Team</h2>
          <p className="max-w-2xl mx-auto mb-8">At Harkledge, we believe in fostering a collaborative and innovative work environment. If you are passionate about what you do and want to make a difference, we'd love to hear from you. Apply today and take the first step towards a rewarding career with us.</p>
          <a href="ContactUs" className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-400">Apply Now</a>
        </section>
      </div>
    </div>
  );
}

export default Careers;
