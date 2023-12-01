import { createContext, useContext, useState } from "react";

const ModalContext = createContext();
const useModalContext = () => {
  return useContext(ModalContext);
}

let contentModalInitial = {
  adult: false,
  fecha: '',
  media_type: '',
  vote_average: '',
  name: '',
  overview: '',
  poster_path: '',
  backdrop_path: '',
}

const ModalContextProvider = ({ children }) => {

  const [visibilityModal, setVisibilityModal] = useState(false);
  const [contentModal, setContentModal] = useState(contentModalInitial);

  const handleVisibilityTrue = (el, media_type) => {

    let newMediaType;
    
    if(el.media_type){
      el.media_type == 'movie' ? newMediaType = "Pelicula" : newMediaType = 'Serie'
    }
    else{
      media_type == 'movie' ? newMediaType = "Pelicula" : newMediaType = 'Serie'
    }

    setContentModal(
      {
        adult: el.adult,
        fecha: el.release_date || el.first_air_date,
        media_type: newMediaType,
        vote_average: el.vote_average,
        name: el.title || el.name || el.original_name || el.original_title,
        overview: el.overview,
        poster_path: el.poster_path,
        backdrop_path: el.backdrop_path
      }
    )

    setVisibilityModal(true)
    
  };

  const handleVisibilituFalse = () => {
    setVisibilityModal(false);
    setContentModal(contentModalInitial);

  };

  const dataModal = { visibilityModal, contentModal, handleVisibilityTrue, handleVisibilituFalse }

  return (
    <ModalContext.Provider value={dataModal}>
      {children}
    </ModalContext.Provider>
  )
}


export { useModalContext, ModalContextProvider };