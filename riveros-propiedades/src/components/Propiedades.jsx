import React, { useEffect, useState } from 'react'
import { Banner } from './Banner'
import image1 from '../assets/images/prop1.jpg'
import image2 from '../assets/images/prop2.jpg'
import image3 from '../assets/images/prop3.jpg'
import image4 from '../assets/images/prop4.jpg'
import image5 from '../assets/images/prop5.jpg'
import image6 from '../assets/images/prop6.jpg'
import image7 from '../assets/images/prop7.jpg'
import image8 from '../assets/images/prop8.jpg'
import image9 from '../assets/images/prop9.jpg'

const propInfo = [
    {
        "direccion":"Guardia Vieja 4200, piso 1",
        "precio":56000,
        "descripcion":"Departamento en Venta en Almagro Norte, Almagro",
        "argenprop": "https://www.argenprop.com/departamento-en-venta-en-almagro-norte-2-ambientes--6691367",
        "imagen":image1
    },
    {
        "direccion":"Soler 4400, Piso 4",
        "precio":129000,
        "descripcion":"Departamento en Venta en Palermo Soho, Palermo",
        "argenprop": "https://www.argenprop.com/departamento-en-venta-en-palermo-soho-2-ambientes--6063521",
        "imagen":image2
    },
    {
        "direccion":"Av.Corrientes 1400, Piso 1",
        "precio":35000,
        "descripcion":"Departamento en Venta en Tribunales, Centro",
        "argenprop": "https://www.argenprop.com/oficina-en-alquiler-en-tribunales-2-ambientes--10002009",
        "imagen":image3
    },
    {
        "direccion":"Av.Corrientes 1400, Piso 1",
        "precio":75000,
        "descripcion":"Departamento en Venta en Tribunales, Centro",
        "argenprop": "https://www.argenprop.com/oficina-en-venta-en-tribunales-2-ambientes--11271772",
        "imagen":image4
    },
    {
        "direccion":"Gral M Soler 4400, Piso 3",
        "precio":129000,
        "descripcion":"Departamento en Venta en Palermo Soho, Palermo",
        "argenprop": "https://www.argenprop.com/departamento-en-venta-en-palermo-soho-3-ambientes--6691363",
        "imagen":image5
    },
    {
        "direccion":"Jaun J Castelli 200, Piso 1",
        "precio":22900,
        "descripcion":"Cochera en Venta en Balvanera, Capital Federal",
        "argenprop": "https://www.argenprop.com/departamento-en-venta-en-palermo-soho-2-ambientes--8422793",
        "imagen":image6
    },
    {
        "direccion":"Ugarteche 2800",
        "precio":28000,
        "descripcion":"Cochera en Venta en Botanico, Palermo",
        "argenprop": "https://www.argenprop.com/cochera-en-venta-en-botanico--5340707",
        "imagen":image7
    },
    {
        "direccion":"E Carriego 400",
        "precio":10000,
        "descripcion":"Casa en Alquiler por Temporada en Punta Mogotes, Mar del Plata",
        "argenprop": "https://www.argenprop.com/casa-en-alquiler-por-temporada-en-punta-mogotes--3883563",
        "imagen":image8
    },
    {
        "direccion":"Juan J Castelli 200, Piso 1",
        "precio":24900,
        "descripcion":"Cochera en Venta en Balvanera, Capital Federal",
        "argenprop": "https://www.argenprop.com/cochera-en-venta-en-balvanera--5935625",
        "imagen":image9
    }
]

export const Propiedades = () => {

    return (
        <>
            <Banner bannerCont='Propiedades' />
            <section className='propiedades'>
                {
                    propInfo.map(( prop, index ) => {
                        return (
                            <div className='propiedad' key={ index }>
                            <div className='img-container'>
                                <img src={ prop.imagen } alt='product' className='product-img' width='290px' height='300px'/>
                            </div>
                            <div className='title'>
                                <h4>{ prop.direccion }</h4>
                            </div>
                            <p className='price'>${ prop.precio }</p>
                            <a href={ prop.argenprop}>
                                <button id={ prop.id } className='buy-btn'>ARGENPROP</button>
                            </a>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}
