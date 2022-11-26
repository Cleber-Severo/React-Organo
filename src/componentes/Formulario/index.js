import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const times = [
  'Programação',
  'Front-End',
  'Data Science',
  'Devops',
  'UX e Design',
  'Mobile',
  'Inovação e Gestão'
]

const confirmaFormulario = (evento) => {
    evento.preventDefault()
}

const Formulario = () => {
    return(

        <section className="formulario">
            <form onSubmit={confirmaFormulario}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio={true} label="cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="imagem" placeholder="Informe o endereço da imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>

    )
}

export default Formulario