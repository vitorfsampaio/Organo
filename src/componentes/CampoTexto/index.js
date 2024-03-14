import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    //let valor = 'Guilherme'

    const [valor, setValor] = useState('Guilherme')

    const aoDigitado = (evento) => {
        props.aoAlterado(evento)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto