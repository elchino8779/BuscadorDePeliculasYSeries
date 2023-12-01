import React, { useEffect, useRef, useState } from 'react'
import './SearchForm.scss'

const searchTypeInitial = {
  radio1: true,
  radio2: false,
  radio3: false
}

const SearchForm = ({ handleSearchType, handleQuery }) => {

  const [types, setTypes] = useState(searchTypeInitial);
  const [query, setQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('Todos');

  const radio1 = useRef();
  const radio2 = useRef();
  const radio3 = useRef();

  const handleTypes = () => {
    setTypes({
      radio1: radio1.current.checked,
      radio2: radio2.current.checked,
      radio3: radio3.current.checked
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchType(types)
    handleQuery(query)
  }

  useEffect(() => {
    types.radio1 && setPlaceholder('Todos...');
    types.radio2 && setPlaceholder('Peliculas...');
    types.radio3 && setPlaceholder('Series...');
  },[types])


  return (
    <form className='buscador-form' onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder={placeholder} name="text" className="input" autoComplete="off" onChange={(e) => setQuery(e.target.value)}/>
      <div className="radio-container-buscador">
        <div className="radio-buttons-container">

          <div className="radio-button" onClick={handleTypes}>
            <input ref={radio1} name="radio-group" id="radio1" className="radio-button__input" type="radio" defaultChecked />
            <label htmlFor="radio1" className="radio-button__label">
              <span className="radio-button__custom"></span>
              Todos
            </label>
          </div>

          <div className="radio-button" onClick={handleTypes}>
            <input ref={radio2} name="radio-group" id="radio2" className="radio-button__input" type="radio" />
            <label htmlFor="radio2" className="radio-button__label">
              <span className="radio-button__custom"></span>
              Peliculas
            </label>
          </div>

          <div className="radio-button" onClick={handleTypes}>
            <input ref={radio3} name="radio-group" id="radio3" className="radio-button__input" type="radio" />
            <label htmlFor="radio3" className="radio-button__label">
              <span className="radio-button__custom"></span>
              Series
            </label>
          </div>
        </div>
      </div>
      <button className='button-form'>Buscar</button>
    </form>
  )
}

export default SearchForm