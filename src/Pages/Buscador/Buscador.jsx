
import React, { useEffect, useState } from 'react'
import './Buscador.scss'
import SearchForm from '../../Components/SearchForm/SearchForm'
import SearchItems from '../../Components/SearchItems/SearchItems';
import useFetch from '../../helpers/useFetch';
import Loader from '../../Components/Loader/Loader';
import Pagination from '../../Components/Pagination/Pagination';

const Buscador = () => {

  const [searchType, setSearchType] = useState({});
  const [querySearch, setQuerySearch] = useState('');
  const [results, setResults] = useState({});
  const [page, setPage] = useState(1);
  const [amountPages, setAmountPages] = useState(0);
  const [queryActual, setQueryActual] = useState('');
  const [loader, setloader] = useState(false);

  const handleSearchType = (types) => {
    setSearchType(types);
    setPage(1);
  }

  const handleQuery = (query) => {
    setQuerySearch(query);
  }

  useEffect(() => {
    if (querySearch) {
      setloader(true);
      setResults({})
      if (searchType.radio1) {
        useFetch(`https://api.themoviedb.org/3/search/multi?query=${querySearch}&include_adult=true&language=es-AR&page=${page}`)
          .then(res => {
            setResults(res.results)
            setAmountPages(res.total_pages)
            setloader(false);
            setQueryActual(`https://api.themoviedb.org/3/search/multi?query=${querySearch}&include_adult=true&language=es-AR&page=`)
          })
      }
      if (searchType.radio2) {
        useFetch(`https://api.themoviedb.org/3/search/movie?query=${querySearch}&include_adult=true&language=es-AR&page=${page}`)
          .then(res => {
            setResults(res.results)
            setAmountPages(res.total_pages)
            setloader(false);
            setQueryActual(`https://api.themoviedb.org/3/search/multi?query=${querySearch}&include_adult=true&language=es-AR&page=`)
          })
      }
      if (searchType.radio3) {
        useFetch(`https://api.themoviedb.org/3/search/tv?query=${querySearch}&include_adult=true&language=es-AR&page=${page}`)
          .then(res => {
            setResults(res.results)
            setAmountPages(res.total_pages)
            setloader(false);
            setQueryActual(`https://api.themoviedb.org/3/search/multi?query=${querySearch}&include_adult=true&language=es-AR&page=`)
          })
      }
    }

  }, [querySearch, searchType])

  const handlePageFoward = () => {
    setResults({})
    setloader(true);
    useFetch(`${queryActual}${page + 1}`)
      .then(res => {
        setResults(res.results)
        setloader(false);
        setPage(page + 1)
        window.scroll({ top: 0, behavior: 'smooth' })
      })
  }

  const handlePageBack = () => {
    setResults({})
    setloader(true);
    useFetch(`${queryActual}${page - 1}`)
      .then(res => {
        setResults(res.results)
        setloader(false);
        setPage(page - 1)
        window.scroll({ top: 0, behavior: 'smooth' })
      })
  }

  /*useEffect(() => {
    console.log(results)
  }, [results])*/

  return (
    <div className='buscador-page'>
      <SearchForm handleSearchType={handleSearchType} handleQuery={handleQuery} />
      {loader && <Loader />}
      {results.length > 0 &&
        <>
          <Pagination page={page} amountPages={amountPages} handlePageFoward={handlePageFoward} handlePageBack={handlePageBack} />
          <div className="container-items-search">
            {results.map((el, index) => <SearchItems key={index} el={el} />)}
          </div>
          <Pagination page={page} amountPages={amountPages} handlePageFoward={handlePageFoward} handlePageBack={handlePageBack} />
        </>
      }
      {queryActual && results.length == 0 && <h1 className='no-results'>No se encontraron resultados</h1>}
    </div>
  )
}

export default Buscador