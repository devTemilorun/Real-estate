import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"

const Footer = () => {

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }

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
      
      <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 pb-4 block border-t border-gray-800 text-center text-sm text-gray-500 mb-1"
        >
          <p>
            © {new Date().getFullYear()} Olawuni Israel Oluwatemilorun.  
            <span className="mx-3">•</span>
            Built with passion & code.
          </p>
          <a 
            className='text-lg underline cursor-pointer hover:text-xl'
            href={`mailto:dev.temilorun@gmail.com?subject=Inquiry&body=Hello,%0A%0AI'd%20like%20to%20discuss...`}>
             drop a message
            </a>
        </motion.div>
    </div>
  )
}

export default Footer
