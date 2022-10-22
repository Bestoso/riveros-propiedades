import React from 'react'

export const Contacto = () => {

    const sendData = e => {
        e.preventDefault();
        let data = e.target;
        let userData = {
            nombre:data.name.value,
            email:data.email.value,
            telefono:data.phone.value,
            mensaje:data.message.value
        }
        console.log(userData);
    }

    return (
        <section id="contacto">
            <form className="formulario" onSubmit={ sendData }>
                <h1 className="titulo">Contacto</h1>
                <p>¡Comunicate con nosotros!</p>
                <div className="input-group">
                    <label className="label">Nombre</label>
                    <input name="name" id="Name" className="input" type="name" required/>
                </div>
                <div className="input-group">
                    <label className="label">Direccion de email</label>
                    <input name="email" id="Email" className="input" type="email" required/>
                </div>
                <div className="input-group">
                    <label className="label">Telefono</label>
                    <input name="phone" id="Phone" className="input" type="phone"/>
                </div>
                <div className="input-group">
                    <label className="label">Tu mensaje</label>
                    <textarea name="message" id="message" cols="24" rows="5" className="message"></textarea>
                </div>
                <input type='submit' value='ENVIAR MENSAJE' />
            </form>
            <div className="mapa">
                <iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=soler%204488+(MARTINEZ%20RIVEROS)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">Sat Navs</a></iframe>
            </div>
        </section>
    )
}
