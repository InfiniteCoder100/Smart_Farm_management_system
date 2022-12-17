import React from 'react'
import * as Icons from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { navLinks } from '../utils/Navdata'
const Assets = () => {
  return (
    <div >
         <div className=' flex flex-col items-center justify-center md:hidden'>
                    <div className='text-center'>
                            <h1 className='font-medium m-4 text-rose-400'>
                                Records not available from this device
                                <Link to='/' className='text-blue-900 underline cursor-pointer m-12'>
                                    <h2 >go to dashboard</h2>
                                </Link>

                            </h1>
                    </div>
                    

                    <Link to='/newasset' className='font-medium bg-emerald-600 border-2 border-gray-900
                        rounded text-white hover:bg-gray-900 hover:border-blue-600'>
                        <h3 className='m-2'>
                             New asset
                        </h3>
                    </Link>
            </div>
       <div className='m-20 p-30 bg-gray-100 text-center p-5 md:block hidden'>
       <div className='bg-[#f0f5f5] w-full py-6 items-center justify-between flex px-12'>
        {/*search*/}
        <div className='w-full lg:flex hidden space-x-4 items-center justify-start py-2'>
            {/* link*/}
            <Link to='/' className='font-medium bg-blue-600 border-2 border-gray-900
             rounded text-white hover:bg-gray-900 hover:border-blue-600'>
                <h3 className='m-2'>
                    go to dashboard
                </h3>
            </Link>
            <Link to='/newasset' className='font-medium bg-emerald-600 border-2 border-gray-900
             rounded text-white hover:bg-gray-900 hover:border-blue-600'>
                <h3 className='m-2'>
                    New Asset
                </h3>
            </Link>
        </div>
        {/*Logo*/}
        <div className='items-center w-full justify-center flex space-x-4'>
            <Icons.BriefcaseFill/>
            <h1 className='text-xl text-gray-900 font-medium'>My Accounting</h1>           
        </div>
            <div className='items-center justify-end space-x-6 flex w-full'>                
                {navLinks.slice(1,5).map((link)=>(
                <Link to={link.path} className='flex flex-row items-center text-[15px] justify-center space-x-2 rounded-lg border-2
                hover:bg-gray-900 hover:border-blue-600 hover:text-white'>
                <span>{link.icon}</span>
                <h1>{link.title}</h1>
            </Link>
             ))}
                
                
            </div>
    </div>
                        {/**table */}
    <div className='mx-2 px-6 text-center'>
               
               <table className='w-full m-3'>
                   <thead className='bg-gray-50 border-b-2 border-gray-400'>
                       <tr>
                           <th className='p-3 text-sm font-semibold tracking-wide text-left'>Date</th>
                           <th className='p-3 text-sm font-semibold tracking-wide text-left'>Price</th>
                           <th className='p-3 text-sm font-semibold tracking-wide text-left'>Category</th>
                           <th className='p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
                           <th className='p-3 text-sm font-semibold tracking-wide text-left'>Type</th>
                           <th className='p-3 text-sm font-semibold tracking-wide text-left'>Model</th>
                           <th className='p-3 text-sm font-semibold tracking-wide text-left'>Recorded by</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr className='bg-white'>
                           <td className='p-3 text-sm text-gray-700'>18-04-2022</td>
                           <td className='p-3 text-sm text-gray-700'>Kes. 1,200,350</td>
                           <td className='p-3 text-sm text-gray-700'>Machinery</td>
                           <td className='p-3 text-sm text-gray-700'>New</td>
                           <td className='p-3 text-sm text-gray-700'>Tractor</td>
                           <td className='p-3 text-sm text-gray-700'>New Jersey model V</td>
                           <td className='p-3 text-sm text-gray-700'>Peter</td>
                       </tr>
                       <tr className='bg-gray'>
                           <td className='p-3 text-sm text-gray-700'>18-04-2022</td>
                           <td className='p-3 text-sm text-gray-700'>Kes. 1,200,350</td>
                           <td className='p-3 text-sm text-gray-700'>Machinery</td>
                           <td className='p-3 text-sm text-gray-700'>New</td>
                           <td className='p-3 text-sm text-gray-700'>Tractor</td>
                           <td className='p-3 text-sm text-gray-700'>New Jersey model V</td>
                           <td className='p-3 text-sm text-gray-700'>Peter</td>
                       </tr>
                       <tr className='bg-white'>
                           <td className='p-3 text-sm text-gray-700'>18-04-2022</td>
                           <td className='p-3 text-sm text-gray-700'>Kes. 1,200,350</td>
                           <td className='p-3 text-sm text-gray-700'>Machinery</td>
                           <td className='p-3 text-sm text-gray-700'>New</td>
                           <td className='p-3 text-sm text-gray-700'>Tractor</td>
                           <td className='p-3 text-sm text-gray-700'>New Jersey model V</td>
                           <td className='p-3 text-sm text-gray-700'>Peter</td>
                       </tr>
                       <tr className='bg-gray'>
                           <td className='p-3 text-sm text-gray-700'>18-04-2022</td>
                           <td className='p-3 text-sm text-gray-700'>Kes. 1,200,350</td>
                           <td className='p-3 text-sm text-gray-700'>Machinery</td>
                           <td className='p-3 text-sm text-gray-700'>New</td>
                           <td className='p-3 text-sm text-gray-700'>Tractor</td>
                           <td className='p-3 text-sm text-gray-700'>New Jersey model V</td>
                           <td className='p-3 text-sm text-gray-700'>Peter</td>
                       </tr>
                       <tr className='bg-white'>
                           <td className='p-3 text-sm text-gray-700'>18-04-2022</td>
                           <td className='p-3 text-sm text-gray-700'>Kes. 1,200,350</td>
                           <td className='p-3 text-sm text-gray-700'>Machinery</td>
                           <td className='p-3 text-sm text-gray-700'>New</td>
                           <td className='p-3 text-sm text-gray-700'>Tractor</td>
                           <td className='p-3 text-sm text-gray-700'>New Jersey model V</td>
                           <td className='p-3 text-sm text-gray-700'>Peter</td>
                       </tr>
                       <tr className='bg-gray'>
                           <td className='p-3 text-sm text-gray-700'>18-04-2022</td>
                           <td className='p-3 text-sm text-gray-700'>Kes. 1,200,350</td>
                           <td className='p-3 text-sm text-gray-700'>Machinery</td>
                           <td className='p-3 text-sm text-gray-700'>New</td>
                           <td className='p-3 text-sm text-gray-700'>Tractor</td>
                           <td className='p-3 text-sm text-gray-700'>New Jersey model V</td>
                           <td className='p-3 text-sm text-gray-700'>Peter</td>
                       </tr>
                       <tr className='bg-white'>
                           <td className='p-3 text-sm text-gray-700'>18-04-2022</td>
                           <td className='p-3 text-sm text-gray-700'>Kes. 1,200,350</td>
                           <td className='p-3 text-sm text-gray-700'>Machinery</td>
                           <td className='p-3 text-sm text-gray-700'>New</td>
                           <td className='p-3 text-sm text-gray-700'>Tractor</td>
                           <td className='p-3 text-sm text-gray-700'>New Jersey model V</td>
                           <td className='p-3 text-sm text-gray-700'>Peter</td>
                       </tr>
                       <tr className='bg-gray'>
                           <td className='p-3 text-sm text-gray-700'>18-04-2022</td>
                           <td className='p-3 text-sm text-gray-700'>Kes. 1,200,350</td>
                           <td className='p-3 text-sm text-gray-700'>Machinery</td>
                           <td className='p-3 text-sm text-gray-700'>New</td>
                           <td className='p-3 text-sm text-gray-700'>Tractor</td>
                           <td className='p-3 text-sm text-gray-700'>New Jersey model V</td>
                           <td className='p-3 text-sm text-gray-700'>Peter</td>
                       </tr>
                      
                   </tbody>
               </table>
           </div>



        </div>         
       
        
           
        </div>
    
  )
}

export default Assets