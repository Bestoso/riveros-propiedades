import bannerVideo from '../assets/videos/banner.mp4'
import React from "react";
import { useNavigate } from "react-router-dom";
import { Buscador } from './Buscador';

export const Banner = ( { bannerCont }) => {

    const navigate = useNavigate();

    const goProps = () => {
        navigate('/propiedades')
    }

    return (
        <section id="hero" alt="imagen banner">
            <h1 className="titulo">{ bannerCont }</h1>
            <button
                className="generalBtn"
                onClick={ goProps }>
            Encontra tu lugar</button>
            <Buscador />
            <video src={bannerVideo} className='vid' autoPlay loop muted />
        </section>
    )
}