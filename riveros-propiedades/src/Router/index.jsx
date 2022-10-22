import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Inicio } from '../components/Inicio'
import { Servicios } from '../components/Servicios'
import { Propiedades } from '../components/Propiedades'
import { Contacto } from '../components/Contacto'
import { SubBanner } from '../components/SubBanner'

export const Router = () => {
    return (
        <BrowserRouter>
        {/* Header and navigation section */}
        <Header />
            <Routes>
                <Route path='/' element={<Navigate to='/inicio' />} />
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/servicios' element={<Servicios />} />
                <Route path='/propiedades' element={<Propiedades />} />
                <Route path='/contacto' element={<Contacto />} />
            </Routes>
        {/* Sub and footer section */}
        <SubBanner />
        <Footer />
        </BrowserRouter>
    )
}
