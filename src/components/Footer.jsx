import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {

  const year = new Date().getFullYear();

  const footerLinks = [
        {
            type: 'whatsApp',
            label: 'WhatsApp',
            url: `https://wa.me/2347031225674?text=Hello!%20I'm%20interested%20in%20your%20services.`,
            displayImage: assets.whatsapp_icon
        },
        {
            type: 'email',
            label: 'Email',
            url: `mailto:dev.temilorun@gmail.com?subject=Inquiry&body=Hello,%0A%0AI'd%20like%20to%20discuss...`,
            displayImage: assets.gmail_icon
        },
        {
            type: 'linkedin',
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/olawuni-israel-oluwatemilorun-85714a324',
            displayImage: assets.linkedin_icon
        },
    ]

  return (
    <div id='Footer' className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hiddden'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={assets.logo_dark} alt="" />
            <p className='text-gray-400 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni officiis nihil sequi repellendus necessitatibus laborum sint, earum quod sed a cupiditate ad, nobis expedita ea nisi consequatur, placeat impedit.</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <a href="#Header" className='hover:text-white'>Home</a>
            <a href="#About" className='hover:text-white'>About Us</a>
            <a href="#Contact" className='hover:text-white'>Contact Us</a>
            <a href="#" className='hover:text-white'>Privacy Policy</a>
          </ul>
        </div>
        <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-bold mb-4'>Subscribe to Our Newsletter</h3>
          <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles, and resources, sent to your inbox weekly</p>
          <div className='flex gap-2'>
            <input className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' type="email" placeholder='Enter Your Email' />
            <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
          </div>
        </div>
      </div>
      
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright {year} - dev.Temilorun. All Right Reserved
        <div className='flex items-center justify-center gap-6'>
            {footerLinks.map((link)=>(
                <a key={link.label} href={link.url} style={{ borderRadius: "100% "}}
                className='w-6 h-6 mt-2 flex hover:scale-130' target='_blank' rel='noopener noreferrer' > <img src={link.displayImage} alt="" /> </a>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
