import React from 'react'
import * as Icons from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import FarmProfile from '../FarmProfile'
const Header = () => {
  return (
    <div className='bg-[#f0f5f5] w-full py-6 items-center
    justify-between flex px-12'>
        {/*search*/}
        <div className='w-full lg:flex hidden space-x-4 items-center
        justify-start py-2'>
            {/* icon*/}
            <Icons.Search/>
            <input type='text' placeholder='search anything'
            className='bg-transparent 
            outline-none rounded-lg'/>
        </div>
        {/*Logo*/}
        
        
          <Link to='/' className='items-center w-full justify-center
        flex space-x-4'>
             <Icons.BriefcaseFill/>
             <h1 className=' font-white md:text-gray-900 font-medium'>Farm Management System</h1>  
          </Link>
                    
      
        <div className='items-center justify-end 
        space-x-6 flex w-full'>
           <Link to="/overview">
                <Icons.CircleFill/>
                <h1>Livestock</h1>
            </Link>
            <Link to="/farmprofile">
                <Icons.PersonFill/>
                <h1>Farm profile</h1>
            </Link>
           
        </div>
    </div>
  )
}

export default Header