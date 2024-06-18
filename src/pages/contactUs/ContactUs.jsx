import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-black text-[#CAB43F] min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">We'd love to hear from you! Get in touch with us for any queries or support.</p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="mb-4">Feel free to reach out to us via the following contact details:</p>
              <ul className="space-y-4">
                <li>
                  <strong>Address:</strong> 35A, Great Horton Road, Bradford, UK BD7 1AT
                </li>
                <li>
                  <strong>Email:</strong> <a href="mailto:info@harkledge.com" className="text-pink-500 hover:underline">info@harkledge.com</a>
                </li>
                <li>
                  <strong>Phone:</strong> <a href="tel:+2349014586785" className="text-pink-500 hover:underline">+234 901 458 6785</a>, <a href="tel:+447448527412" className="text-pink-500 hover:underline">+44 744 852 7412</a>
                </li>
                <li>
                  <strong>Follow us:</strong>
                  <div className="flex space-x-4 mt-2">
                    <a href="/" className="text-pink-500 hover:underline">Twitter</a>
                    <a href="/" className="text-pink-500 hover:underline">LinkedIn</a>
                    <a href="/" className="text-pink-500 hover:underline">Facebook</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Contact Form</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <input type="text" id="name" className="mt-1 block w-full rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <textarea id="message" rows="4" className="mt-1 block w-full rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500" required></textarea>
                </div>
                <button type="submit" className="w-full rounded-md bg-pink-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500">Send Message</button>
              </form>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Location</h2>
          <p className="max-w-2xl mx-auto mb-8">Visit us at our office or find us on the map below.</p>
          <div className="relative">
            <iframe
              title="Harkledge Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.1511658687565!2d-1.7647220841692528!3d53.79387928007148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795e7c57141b73%3A0x2a5d7e0b0a5af506!2s35A%20Great%20Horton%20Rd%2C%20Bradford%20BD7%201AT%2C%20UK!5e0!3m2!1sen!2sus!4v1624025467876!5m2!1sen!2sus"
              width="100%"
              height="450"
              className="border-0 rounded-lg shadow-lg"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
