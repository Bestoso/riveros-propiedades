import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Division = () => {
    return (
        <div className='div'></div>
    )
}


export const Header = () => {

    const [headerClass, setHeaderClass] = useState('header');
    const [navClass, setNavClass] = useState('header__menu');

    const showMenu = () => {
        if (navClass == 'header__menu'){
            setNavClass('header__menu active')
        } else {
            setNavClass('header__menu');
        }
    }
    
    useEffect(()=>{
        window.addEventListener('scroll',(e) => {
            if(window.scrollY > 100){
                setHeaderClass('header active') 
            } else {
                setHeaderClass('header')
            }
        })
    });
    
    return (
        <>
        <header className={ headerClass }>
            <div className='header__logo'>
                <p className='logo'><img src={ logo } alt='logo'/></p>
            </div>
            <nav className={ navClass }>
                <ul className='menu__list'>
                    <li className='list__item'>
                        <NavLink to='/inicio' className={({isActive}) => (isActive) ? 'link-active' : ''}> Home </NavLink>
                    </li>
                    <li className='list__item'>
                        <NavLink to='/servicios' className={({isActive}) => (isActive) ? 'link-active' : ''}> Servicios </NavLink>
                    </li>
                    <li className='list__item'>
                        <NavLink to='/propiedades' className={({isActive}) => (isActive) ? 'link-active' : ''}> Propiedades </NavLink>
                    </li>
                    <li className='list__item'>
                        <NavLink to='/contacto' className={({isActive}) => (isActive) ? 'link-active' : ''}> Contacto </NavLink>
                    </li>
                </ul>
            </nav>
            <div className='toggle-container'>
                <i className='bx bx-menu' id='toggle' onClick={ showMenu }></i>
            </div>
        </header>
        <Division />
        </>
    )
}
