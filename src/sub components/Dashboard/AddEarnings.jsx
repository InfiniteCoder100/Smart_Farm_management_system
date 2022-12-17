import React from 'react'
import { Link } from 'react-router-dom'

const AddEarnings = () => {
  return (
    <div className='bg-rose-200 min-h-screen flex items-center justify-center'>
    <div className=" flex items-center justify-center bg-rose-300 shadow-md shadow-rose-900 rounded-lg">
    <form className='border-2 border-gray-100 h-[500px] w-[300px] text-center items-center justify-center'>
            <span className='mt-6'>
                <h1 className="text-black font-black">Record Earnings</h1>
                <div className='m-12 flex items-start flex-col justify-start space-y-3'>
                    <input type='text' placeholder='Date' className='rounded text-center' />
                    <input type='text' placeholder='Source' className='rounded text-center' />
                    <input type='text' placeholder='Amount' className='rounded text-center' />
                    <input type='text' placeholder='From' className='rounded text-center' />
                    <input type='text' placeholder='recieved by' className='rounded text-center' />
                    <input type='text' placeholder='Status' className='rounded text-center' />
                </div>
                <div className="m-3 flex items-center justify-center">
                    <a href="#" className='border-2 rounded border-white mx-6 bg-emerald-700 text-white w-24 hover:text-black hover:border-emerald-700 hover:bg-white'>Add</a>
                    <Link to='/earnings' className='border-2 rounded border-white mx-6 bg-red-700 text-white w-24 hover:text-black hover:border-red-700 hover:bg-white'>Cancel</Link>
                </div>
            </span>
           

    </form>
    </div>
   

</div>
  )
}

export default AddEarnings