import Script from 'next/script'
import React from 'react'
import Image from 'next/image'
import {FaFacebook, FaGoogle, FaApple} from 'react-icons/fa'
import "@/app/globals.css"


const Login = () => {
  return (
    <div>
    <div className='flex items-center justify-center h-screen bg-center bg-cover login-img'>
        <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center mt-20 '>
      <div className='backdrop-blur-md rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
        <div className='w-3/5 p-5'>
        <div className='flex-row mt-20'>
        <div className='flex justify-center'>
          <p className='font-bold font-size text-4xl'>FitDock</p>
        </div>
        <div className='border-2 w-20 border-black inline-block'></div>
        </div>
        <p className='font-semibold text-black my-3 text-sm'>Use your user id</p>
        <div className='felx flex-col items-center'>
          <div>
            <input className='font-semibold bg-gray-300 px-2 mb-3 text-black' type='text' name='userid' placeholder='UserId'/>
          </div>
          <div>
            <input className='font-semibold bg-gray-300 px-2 mb-3 text-black' type='password' name='password' placeholder='Password'/>
          </div>
        <div className='justify-between px-36 mb-5'>
          <label className='flex text-xs'>
            <input className='font-semibold' type='checkbox' name='checkbox'/><p className='text-white px-1'>Remember me</p>
          </label>
          <a className='text-white font-semibold hover:cursor-pointer text-xs '>Forget Password?</a>
        </div>
        <a className='  text-white hover cursor-pointer border-2 border-white px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black'>Log In</a>
        </div>
        </div>
        <div className=' w-2/5 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 '>
        <h2 className='text-3xl font-bold'>Hello Friends!</h2>
        <div className='border-2 w-20 border-white inline-block mb-2'></div>
        <p className='font-semibold mb-2'>Fill up the personal information and start journey with us,</p>
        <a className=' hover cursor-pointer border-2 border-white px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black'>Sign Up</a>
        </div>
        </div>
        </main>
    </div>
    </div>
  )
}

export default Login