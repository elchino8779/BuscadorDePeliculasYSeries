import React, { useState } from 'react'
import './SearchItems.scss'
import { URL_API } from '../../assets/URL_API'
import { useModalContext } from '../../Context/modalContext';

const SearchItems = ({ el }) => {

  const [mediaType, setmediaType] = useState('Desconocido');

  const dataModal = useModalContext();
  const { handleVisibilityTrue } = dataModal;

  return (
    <div className='item-search' onClick={() => handleVisibilityTrue(el, mediaType)}>
      {el.adult
        ? <h1>Contenido +18</h1>
        : <>
          {el.poster_path
            ? <img className='img-item-search' src={`${URL_API.IMAGE}${el.poster_path}`} alt={el.title || el.name || el.original_name || el.original_title} />
            : <h1>Imagen no disponible</h1>}
        </>}
      <h3>{el.title || el.name || el.original_name || el.original_title}</h3>
      <p>{el.overview}</p>
    </div>
  )
}

export default SearchItems