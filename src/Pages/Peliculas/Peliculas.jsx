import React, { useEffect } from 'react'
import './Peliculas.scss'
import ImgHero from '../../Components/ImgHero/ImgHero'
import SliderItems from '../../Components/SliderItems/SliderItems'
import { URL_API } from '../../assets/URL_API'

const Peliculas = () => {

  useEffect(() => {
    window.scroll({ top: 0 })
  }, [])

  return (
    <div className='peliculas-page'>
      <SliderItems title_section='Peliculas mas Valoradas' url={URL_API.PELICULAS_VALORADAS} media_type='movie' />
      <SliderItems title_section='Peliculas mas populares' url={URL_API.PELICULAS} media_type='movie' />
      <SliderItems title_section='Peliculas mas reproducidas' url={URL_API.PELICULAS_MAS_REPRODUCIDAS} media_type='movie' />
      <SliderItems title_section='Ultimos extrenos' url={URL_API.PELICULAS_PROXIMAS} media_type='movie' />
    </div>
  )
}

export default Peliculas