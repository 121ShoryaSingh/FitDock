import React from 'react'
import { Link } from 'react-scroll'
const Contact = ({heading, message}) => {
    const ScrollButton = () => {

    }
  return (
    <div className='flex items-end h-screen bg-center bg-cover contact-img'>  
           <div className='max-w-[1240px] items-end m-auto p-4'>
        <h1 className='text-2xl font-bold text-white text-center p-4'> How we can help you.</h1>
        <form className='max-w-[600px] m-auto'>
          <div className='grid grid-cols-2 gap-2 '>
            <input className='border bg-black shadow-lg p-3' type="text" placeholder='Name' />
            <input className='border bg-black shadow-lg p-3' type="text" placeholder='Email' />
          </div>
          <input className='border bg-black shadow-lg p-3 w-full my-2'type='text' placeholder='Subject' />
          <textarea className='border bg-black shadow-lg p-3 w-full'cols="30" rows='10' placeholder='Message'></textarea>
          <button className='border text-white shadow-lg p-3 w-full mt-2'>Submit</button>
        </form>
      </div>
      </div>
  )
}

export default Contact