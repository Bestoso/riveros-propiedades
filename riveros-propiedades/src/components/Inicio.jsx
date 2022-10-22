import React from 'react'
import { Banner } from './Banner'


export const Inicio = () => {
    return (
    <>
        <Banner bannerCont ='Tu inmobiliaria de confianza' />

        <section id="quienes-somos">
            <div className="nosotros-img" alt="imagen de logo"></div>
            <div className="texto">
                <h2>Propiedades <span className="acento">Martinez Riveros</span></h2>
                <p>Somos una compañía Inmobiliaria experta en la gestión de activos y créditos inmobiliarios, con presencia a nivel nacional. Contamos con miles de activos a la venta (primera y segunda residencia, oficinas, locales, naves, suelos, plazas de garaje, trasteros, etc.).
                    Nuestras principales áreas de actuación son: la venta y alquiler de producto terminado (viviendas a estrenar y de “segunda mano”), la gestión del suelo, el negocio patrimonial y la promoción inmobiliaria.
                    Con la clara visión de ser líder en la gestión del negocio inmobiliario, Martinez Riveros se sustenta en valores corporativos como la honestidad, el trabajo en equipo, el compromiso con el futuro y la excelencia en el servicio.</p>
            </div>
        </section>
    </>
    )
}
