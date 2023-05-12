import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className=' shadow-sm'>
        {/* logo */}
        
        <div className='flex '>
            
        <Link to='/'><h1 className='text-black font-bold mt-6 ml-16 text-2xl '>Holi</h1></Link>
        <Link><h1 className='text-orange-600 font-bold mt-6  text-2xl'>Sync</h1></Link>
            
            <ul className='flex p-6 justify-start font-medium'>
                <li className='ml-28'>Mentorship Options</li>
                <li className='ml-16'>How it works</li>
                <Link to='/about'><li className='ml-16 ' >About Us</li></Link>
                <li className='ml-16'>Assessment</li>
                <li className='ml-16'>Join as a Mentor</li>

            </ul>
            <Button />
        </div>
        
    


        
    </div>
  )
}

export default NavBar