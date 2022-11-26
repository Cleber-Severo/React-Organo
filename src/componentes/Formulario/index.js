import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'


const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState ('')
    const [cargo, setCargo] = useState ('')
    const [imagem, setImagem] = useState ('')
    const [time, setTimes] = useState ('')

    const confirmaFormulario = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido => ', nome, cargo, time, imagem )
    }

    return(

        <section className="formulario">
            <form onSubmit={confirmaFormulario}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="imagem" 
                    placeholder="Informe o endereço da imagem"
                    value={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTimes(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>

    )
}

export default Formulario