import './CampoTexto.css'

const aoDigitar = (evento) => {
    console.log(evento.target.value)
}

const CampoTexto = (props) => {
    const alteraPlaceholder = `${props.placeholder}...`

    return (
    <div className='campo-texto'>
        <label>{props.label}</label>
        <input onChange={aoDigitar} required={props.obrigatorio} placeholder= {alteraPlaceholder} />
    </div>
    )
}

export default CampoTexto