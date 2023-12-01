import React from 'react'
import './Loader.scss'

const Loader = () => {
  return (
    <div className='loader-search'>
      <l-ring
        size="70"
        stroke="7"
        bg-opacity="0"
        speed="2"
        color="#e6e6e6"
      ></l-ring>
    </div>
  )
}

export default Loader