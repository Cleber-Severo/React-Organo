import './CampoTexto.css'

const CampoTexto = (props) => {
    const alteraPlaceholder = `${props.placeholder}...`

    return (
    <div className='campo-texto'>
        <label>{props.label}</label>
        <input required={props.obrigatorio} placeholder= {alteraPlaceholder} />
    </div>
    )
}

export default CampoTexto