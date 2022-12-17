import React from 'react'
import { Link } from 'react-router-dom'
import livestock_data from '../utils/livestock.json'
const Records = () => {
  return (
    <div className='text-center p-10 md:h-screen w-full bg-gray-100'>
        <h1 className='text-3xl font-san italic md: font-black py-6 my-6'>Available Livestock</h1>
        <p className='text-2xl my-5'>Click card to view Livestock Profile</p>
        <div className=' grid grid-col-1 md:grid-cols-4 gap-10 flex items-center justify-center '>            
            {
                livestock_data && livestock_data.map((data)=>
                    <Link to='/livestock'>
                      <div key={data.id} className='bg-gray-900 rounded-lg text-center h-50 w-48 md:w-full h-full shadow-2xl shadow-gray-900 text-white hover:bg-blue-500'>
                            <img src={data.image} alt='' className=' h-36  md:h-60 w-full rounded-2xl'/>
                            <h2 className='font-black text-xl m-3 md:font-black text-2xl'>{data.title}</h2>
                        

                        </div>
                    </Link>
                  
                )
            }
        </div>
    </div>
  )
}

export default Records