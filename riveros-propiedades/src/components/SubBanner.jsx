import React from 'react'

export const SubBanner = () => {

    const registerData = ( e ) => {
        e.preventDefault();
        let datos = e.target;
        console.log(datos.email.value);
    }

    return (
        <section id="hero2">
            <section className="cont-form">
                <div className="cont-form__texto">
                    <h3> Nuestro trabajo </h3>
                    <p> Somos expertos en la gestión de activos y créditos inmobiliarios, reconocidos por nuestra profesionalidad y solidez. Estamos comprometidos con la prestación de un servicio de confianza y diferencial a nuestros clientes con rigurosos estándares de calidad, que son la base de nuestro futuro y de la generación de valor para nuestros accionistas. </p>
                </div>
            <div className="texto">
                <h3> ¡Envianos tu mensaje! </h3>
            </div>
            <div className="input-group">
                <form onSubmit={ registerData }>
                    <input type="email" className="input" id="Email" name="email" placeholder="Ingresa tu email" required />
                    <input className="button--submit" value="Subscribite" type="submit" />
                </form>
            </div>
            </section>
        </section>
    )
}
