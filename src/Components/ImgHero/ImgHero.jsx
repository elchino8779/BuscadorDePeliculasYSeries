import { useEffect, useState } from 'react'
import './ImgHero.scss'
import useFetch from '../../helpers/useFetch'
import { URL_API } from '../../assets/URL_API'
import { useModalContext } from '../../Context/modalContext'

const ImgHero = ({ url }) => {

  const [itemsCompletos, setItemsCompletos] = useState([]);
  const [indexImg, setIndexImg] = useState(0);
  const [urlImg, setUrlImg] = useState('');
  const dataModal = useModalContext();
  const { handleVisibilityTrue } = dataModal;

  useEffect(() => {

    const getTrending = async () => {
      const data = await useFetch(url);
      const items = await data.results;
      setItemsCompletos(items);
    }
    getTrending();

  }, []);

  useEffect(() => {

    if (itemsCompletos.length > 0) {
      setUrlImg(`${URL_API.IMAGE}${itemsCompletos[indexImg].backdrop_path}`);
      setTimeout(() => {
        indexImg + 1 < itemsCompletos.length
          ? setIndexImg(indexImg + 1)
          : setIndexImg(0)
      }, 30000);
    }

  }, [itemsCompletos, indexImg])


  return (
    <div>
      <div className='img-hero-container'>
        <div className="img-container">
          {urlImg && <img src={urlImg}
            alt={itemsCompletos[indexImg].title || itemsCompletos[indexImg].name || itemsCompletos[indexImg].original_name || itemsCompletos[indexImg].original_title} />}
          <div className='effect-img'></div>
          {urlImg &&
            <div className="description-img-container">
              <h2>
                {itemsCompletos[indexImg].title || itemsCompletos[indexImg].name || itemsCompletos[indexImg].original_name || itemsCompletos[indexImg].original_title}
              </h2>
              <p>{itemsCompletos[indexImg].overview}</p>
              <button onClick={() => {handleVisibilityTrue(itemsCompletos[indexImg])}}>Ver mas</button>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default ImgHero


