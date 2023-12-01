import React, { useEffect, useRef, useState } from 'react'
import './SliderItems.scss'
import Item from './Item'
import useFetch from '../../helpers/useFetch'
import iconRight from '/icons/right.svg'
import iconLeft from '/icons/left.svg'

const SliderItems = ({ url, title_section, media_type }) => {

  const [items, setItems] = useState([]);
  const [moveItems, setMoveItems] = useState(0);
  const [endMoveItems, setEndMoveItems] = useState(true);
  const [page, setPage] = useState(1)
  const iconVerMas = useRef();

  useEffect(() => {
    const fetch = async () => {
      let data = await useFetch(`${url}${page}`);
      if (page < data.total_pages) {
        setItems(data.results);
        setPage(page + 1);
      }
    }
    fetch()
  }, [url])

  const handlePage = async () => {
    let data = await useFetch(`${url}${page}`);
    setItems([...items, ...data.results]);
    setPage(page + 1);
  }

  const handleMoveLeft = () => { moveItems != 0 && setMoveItems(moveItems + 180) };

  const handleMoveRight = () => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        el.isIntersecting ? setEndMoveItems(false) : setEndMoveItems(true);
      })
    }, { threshold: 1 });

    observer.observe(iconVerMas.current);

    endMoveItems && setMoveItems(moveItems - 180);
  }

  return (
    <div className='slider-items-container'>
      <h3>{title_section}</h3>
      <button className='button-left' onClick={handleMoveLeft}><img src={iconLeft} alt='Icon Left' /></button>
      <button className='button-right' onClick={handleMoveRight}><img src={iconRight} alt="Icon Right" /></button>
      <div className="container-items" >
        <div className='container-move' style={{ transform: `translateX(${moveItems}px)` }}>
          {items && items.map((el, index) => <Item key={index} el={el} media_type={media_type}/>)}
          <button ref={iconVerMas} className='ver-mas' onClick={handlePage}>Ver mas</button>
        </div>
      </div>
    </div>
  )
}

export default SliderItems