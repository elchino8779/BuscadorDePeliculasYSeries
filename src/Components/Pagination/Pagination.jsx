import React from 'react'
import './Pagination.scss'
import backIcon from '/icons/back.svg'
import fowardIcon from '/icons/foward.svg'

const Pagination = ({page, amountPages, handlePageFoward, handlePageBack}) => {
  return (
    <div className='pagination-container'>
      {page > 1 && <img className='adelante' src={backIcon} alt="Atras" onClick={handlePageBack}/>}
      <p>{`${page}`}</p>
      <p>/</p>
      <p>{amountPages}</p>
      {page != amountPages && <img className='atras' src={fowardIcon} alt="Adelante" onClick={handlePageFoward}/>}
    </div>
  )
}

export default Pagination