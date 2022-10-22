import React from 'react'

export const Buscador = () => {
    return (
        <div className="glass">
            <div id="responsive-form">
                <div className="options-inp">
                    <input type="text" placeholder="Barrio" className="barrio-input" />
                </div>
                <div className="options-bien">
                        <select name="t-bien" className="o-bien">
                        <option defaultValue='selected' disabled>Tipo de bien</option>
                        <option value="">Apartamento</option>
                        <option value="">Inmuebles</option>
                        <option value="">Garage</option>
                    </select>
                </div>
                <div className="options-ambientes">
                    <select name="o-ambientes" className="o-ambientes">
                        <option defaultValue='selected' disabled>Ambientes</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                </div>
                <div className="options-precio">
                    <select name="o-precio" className="o-precio">
                        <option defaultValue='selected' disabled>Monto</option>
                        <option value="">Indefinido</option>
                        <option value="">(monto)</option>
                        <option value="">(monto)</option>
                    </select>
                </div>
                <div className="buscar-container">
                    <button id="button-search"> Buscar</button>
                </div>
            </div>
        </div>
    )
}
