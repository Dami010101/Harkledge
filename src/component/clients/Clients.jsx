import React from 'react'
// Sample client logos, replace these with actual client logos
import clientLogo1 from '../../asset/mh.jpg';
import clientLogo2 from '../../asset/mb.jpg';
import clientLogo3 from '../../asset/wow.jpg';
import clientLogo4 from '../../asset/joelamLogo.png';
import clientLogo5 from '../../asset/gurzla logo1.png';
import clientLogo6 from '../../asset/image2.jpeg';

const clients = [
    { id: 1, logo: clientLogo1 },
    { id: 2, logo: clientLogo2 },
    { id: 3, logo: clientLogo3 },
    { id: 4, logo: clientLogo4 },
    { id: 5, logo: clientLogo5 },
    { id: 6, logo: clientLogo6 },
    // Add more client logos as needed
  ];

const Clients = () => {
    
  return (
    <div className="bg-black  py-12"> {/* min-h-screen */}
    <div className="container mx-auto px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#CAB43F]">Our Clients</h1>
        <p className="mt-4 text-lg text-[#CAB43F]">
          We are proud to have worked with a diverse range of clients from various industries. Here are some of our esteemed clients.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {clients.map(client => (
          <div key={client.id} className="flex justify-center items-center  rounded-lg shadow-lg">
            <img src={client.logo} alt={`Client ${client.id}`} className="h-20 w-auto" />
          </div>
        ))}
      </div>
    </div>
  </div>
    )
}

export default Clients