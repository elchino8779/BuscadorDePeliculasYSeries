import React, { useEffect, useState } from 'react'
import './Modal.scss'
import { useModalContext } from '../../Context/modalContext'
import { URL_API } from '../../assets/URL_API'
import EstrellaCalificacion from '../EstrellaCalificacion/EstrellaCalificacion'

const Modal = () => {

  const dataModal = useModalContext();
  const { visibilityModal, contentModal, handleVisibilituFalse } = dataModal;
  const [estrellas, setEstrellas] = useState([]);

  const canTidadEstrellas = () => {
    setEstrellas([]);
    let nuevasEstrellas = [];
    for (let i = 0; i < parseInt(contentModal.vote_average); i++) {
      nuevasEstrellas.push(i)
      setEstrellas(nuevasEstrellas);
    }
  }

  useEffect(() => {
    canTidadEstrellas();
  }, [contentModal])


  return (
    <>
      {visibilityModal &&
        <div className='container-modal'>
          <div className="modal">
            <div className="modal-img-container">
              {contentModal.backdrop_path ? <img className='modal-img-hero' src={`${URL_API.IMAGE}${contentModal.backdrop_path}`} alt="" /> : <h2>Imagen no disponible</h2>}
              <div className="effect-img-modal"></div>
            </div>
            <div className="properties-movie">
              <div className="img-and-properties">
                {contentModal.poster_path
                  ? <img className='modal-img-port' src={`${URL_API.IMAGE}${contentModal.poster_path}`} alt="" />
                  : <p className='no-image'>Imagen no disponible</p>}

                <div className="properties">
                  <p>+18: {contentModal.adult ? 'Si' : 'No'}</p>
                  <p>Año: {contentModal.fecha ? contentModal.fecha.slice(0, 4) : 'N/N'}</p>
                  <p>Tipo: {contentModal.media_type}</p>
                </div>
                <div className="calificacion">
                  <div className="container-estrellas">
                    {estrellas.map((el, index) => <EstrellaCalificacion key={index} />)}
                  </div>
                  <div className="puntuacion-estrellas">
                    {`${estrellas.length}/10`}
                  </div>
                </div>
                <button className='back-button' onClick={handleVisibilituFalse}>Atras</button>
              </div>
              <div className="title-description">
                <h2>{contentModal.name}</h2>
                <p>{contentModal.overview}</p>
              </div>
            </div>
          </div>
        </div>}
    </>
  )
}

export default Modal