import './CampoTexto.css'

const CampoTexto = (props) => {
    const alteraPlaceholder = `${props.placeholder}...`

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    
    return (
    <div className='campo-texto'>
        <label>{props.label}</label>
        <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder= {alteraPlaceholder} />
    </div>
    )
}

export default CampoTexto