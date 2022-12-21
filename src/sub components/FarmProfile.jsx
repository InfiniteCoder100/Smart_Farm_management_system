import React from 'react'
import FarmProfilepic from '../utils/images/images'
import * as Icons from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
const FarmProfile = () => {
  return (
    <div className='flex flex-col items-start justify-start h-screen bg-emerald-200'>
              <Link to='/' className='bg-rose-400 rounded border-2 hover:bg-gray-100
              flex items-start justify-start hover:border-rose-400 text-center '>

                  <Icons.ArrowBarLeft className='m-2'/>
                  <h1 className='underlined m-2 text-sm'>go to dashboard</h1>
            </Link>
            <div className=' bg-sky-500 md:bg-emerald-500 w-full flex items-center justify-center border-b-2 border-gray-200 rounded-lg'>
             
                <div className='m-10 flex justify-center items-center flex-col '>
                    <img src={ FarmProfilepic} alt=''
                     className='rounded-[100%] w-[150px] h-[150px] mb-5'/>

                    <span className='border-2 bg-rose-400 rounded hover:bg-black '>
                    <Link to='/editfarm' className='flex flex-row items-start justify-start'>
                    <Icons.Pencil className='text-white'/>
                    <h2 className='text-white text-xl m-2'>Edit profile</h2>          
                    </Link>
                    
                    </span> 
                </div>
            </div>
            <div className='bg-sky-300 w-full text-center h-full '>
              <h1 className='font-bold md:text-2xl'>Smart Farm.</h1>
              <div className='bg-emerald-400 grid grid-cols-2 rounded-lg gap-5 flex 
              m-6 p-6 justify-center items-center md:p-12 m-12'>
                <span className='text-left ml-4 mt-2 font-bold'>
                  <h2>Farm Name:</h2>
                  <h2>Owner:</h2>
                  <h2>Location:</h2>
                  <h2>Farm Id:</h2>
                </span>
                <span className='text-left ml-4 mt-2 font-medium'>
                  <h2>EasyFarming</h2>
                  <h2>Raman Singla</h2>
                  <h2>UP, India</h2>
                  <h2>F200</h2>
                </span>

              </div>
                
            </div>
    </div>
  )
}

export default FarmProfile
