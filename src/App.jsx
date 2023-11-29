// import React from "react";

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar';
import { Navbar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { Events } from './pages/eventos';
import { RegisterUser } from './pages/auth/RegisterUser';

const App = () => {
  return (
    <div className=''>
      <BrowserRouter> {/* Proveedor de la libreria */}
      <Navbar />
        <div className='flex'>
        <SideBar />
        <Routes>       {/* El  {/* El que contendra las rutas */}
          <Route path='/' element={<HomePage />} />
          <Route path='/HomePage' element={ <HomePage /> } />

          <Route path='/usuarios'>
            <Route index element={<HomePage /> } />
            <Route path='create' element={<RegisterUser /> } />
            <Route path='edit' element={<HomePage /> } />
            <Route path=':id' element={<HomePage /> } />
          </Route>
          <Route path='/eventos'>
            <Route index element={<Events /> } />
            <Route path='create' element={<HomePage /> } />
            <Route path='edit' element={<HomePage /> } />
            <Route path=':id' element={<HomePage /> } />
          </Route>

        </Routes>
          </div>
        <div className='flex'>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App;