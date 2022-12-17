import React from 'react'

const AddAnimal = (props) => {
  return (
    <div className='bg-rose-200 min-h-screen flex items-center justify-center'>
        <div className=" flex items-center justify-center bg-rose-300 shadow-md shadow-rose-900 rounded-lg">
        <form className='border-2 border-gray-100 h-[500px] w-[300px] text-center items-center justify-center'>
                <span className='mt-6'>
                    <h1 className="text-black font-black">Add animal</h1>
                    <div className='m-12 flex items-start flex-col justify-start space-y-3'>
                        <input type='text' placeholder='Animal category' className='rounded text-center' />
                        <input type="file" className='rounded text-center cursor-pointer' />
                        <input type='text' placeholder='Age' className='rounded text-center' />
                        <input type='text' placeholder='Sex' className='rounded text-center' />
                        <input type='text' placeholder='siblings' className='rounded text-center' />
                        <input type='text' placeholder='Parent' className='rounded text-center' />
                        <input type='text' placeholder='Offsprings' className='rounded text-center' />
                    </div>
                    <div className="m-3 flex items-center justify-center">
                        <a href="#" className='border-2 rounded border-white mx-6 bg-emerald-700 text-white w-24 hover:text-black hover:border-emerald-700 hover:bg-white'>Add</a>
                        <a href="#" className='border-2 rounded border-white mx-6 bg-red-700 text-white w-24 hover:text-black hover:border-red-700 hover:bg-white'>Cancel</a>
                    </div>
                </span>
               

        </form>
        </div>
       

    </div>
  )
}

export default AddAnimal