import React from 'react';
import logoImage from '../assets/Logo.webp';



function Logo() {
  return (
    <div className=''>
      <img src={logoImage} alt="Logo" className='flex justify-center items-center w-3/5 h-64 mx-auto'/>
    </div>
  )
}

export default Logo
