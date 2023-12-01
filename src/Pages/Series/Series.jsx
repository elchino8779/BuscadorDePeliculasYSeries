import React, { useEffect } from 'react'
import './Series.scss'
import ImgHero from '../../Components/ImgHero/ImgHero'
import SliderItems from '../../Components/SliderItems/SliderItems'
import { URL_API } from '../../assets/URL_API'

const Series = () => {

  useEffect(() => {
    window.scroll({ top: 0 })
  }, [])

  return (
    <div className='series-page'>
      <SliderItems title_section='Series mas populares' url={URL_API.SERIES} media_type='tv' />
      <SliderItems title_section='Series mas Valoradas' url={URL_API.SERIES_VALORADAS} media_type='tv' />
      <SliderItems title_section='Series mas vistas' url={URL_API.SERIES_TRANSMITIDAS} media_type='tv' />
      <SliderItems title_section='Series al aire' url={URL_API.SERIES_AL_AIRE} media_type='tv' />
    </div>
  )
}

export default Series