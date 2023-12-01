import React, { useEffect } from 'react'
import './Item.scss'
import { URL_API } from '../../assets/URL_API'
import { useModalContext } from '../../Context/modalContext'

const Item = ({ el, media_type }) => {

  const dataModal = useModalContext();
  const { handleVisibilityTrue } = dataModal;

  return (
    <div className='item-slider'>
      {el &&
        <img src={`${URL_API.IMAGE}${el.poster_path}`}
          alt={el.title || el.name || el.original_name || el.original_title}
          onClick={() => { handleVisibilityTrue(el, media_type) }} />}
    </div>
  )
}

export default Item