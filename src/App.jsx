import './App.scss'
import { HashRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home/Home'
import Peliculas from './Pages/Peliculas/Peliculas'
import Series from './Pages/Series/Series'
import { ModalContextProvider } from './Context/modalContext'
import Modal from './Components/Modal/Modal'
import Buscador from './Pages/Buscador/Buscador'


function App() {

  return (
    <HashRouter>
      <NavBar />
      <ModalContextProvider>
        <Modal />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/peliculas' element={<Peliculas />} />
          <Route path='/series' element={<Series />} />
          <Route path='/buscar' element={<Buscador />} />
          <Route path='/*' element={<p>Error</p>} />
        </Routes>
      </ModalContextProvider>
    </HashRouter>
  )
}

export default App
