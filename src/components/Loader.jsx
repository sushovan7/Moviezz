import React from 'react'
import loader from '/loader.gif'

function Loader() {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-[#010220]'>
        <img className='object-cover h-[100%]' src={loader} alt="" />
    </div>
  )
}

export default Loader