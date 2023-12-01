import React, { useEffect } from 'react'
import './Home.scss'
import ImgHero from '../../Components/ImgHero/ImgHero'
import SliderItems from '../../Components/SliderItems/SliderItems'
import { URL_API } from '../../assets/URL_API'

const Home = () => {

  useEffect(() => {
    window.scroll({ top: 0 })
  },[])

  return (
    <div className='home-page'>
      <ImgHero url={URL_API.TRENDING}/>
      <SliderItems title_section='Peliculas mas Populares' url={URL_API.PELICULAS} media_type='movie'/>
      <SliderItems title_section='Peliculas mas valoradas' url={URL_API.PELICULAS_VALORADAS} media_type='movie'/>
      <SliderItems title_section='Series mas Populares' url={URL_API.SERIES} media_type='tv'/>
      <SliderItems title_section='Series mas Valoradas' url={URL_API.SERIES_VALORADAS} media_type='tv'/>
    </div>
  )
}

export default Home