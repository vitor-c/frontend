import React , { useState ,FormEvent} from 'react';
import Title from '../../components/Title/index'
import { Container , Main } from './styles';
import Input from '../../components/Input/index'
import Button from '../../components/Button/index'
import LinkIcon from '../../components/Link/index'
import { apiServer } from '../../services/api'


const Veiculos: React.FC = () => {
    const [modelo , setModelo] = useState('')
    const [ano , setAno] = useState('')
    const [portas , setPortas] = useState('')
    const [marca , setMarca] = useState('')


    const cadastrarVeiculo = async(e:FormEvent) =>{
        e.preventDefault()
        try {
        await apiServer.post('veiculos' , { modelo , ano, portas,marca})
        alert('Arquivo JSON gravado')  
        setModelo('')
        setAno('')
        setPortas('')
        setMarca('')
        } catch (error) {
          alert('Erro na requisição!')  
        }
    }

  return (
    <Container>
        <Title text='Cadastrar Veiculos'/>
        <Main>
        <form onSubmit={cadastrarVeiculo}>
                <Input className='maior' value={modelo} placeholder='Modelo' onChange={(e)=> {setModelo(e.target.value)}}/>
                <Input className='menor'value={ano} placeholder='Ano'  onChange={(e)=> {setAno(e.target.value)}}/>
                <Input className='menor'value={portas} placeholder='Portas'  onChange={(e)=> {setPortas(e.target.value)}}/>
                <Input className='menor'value={marca} placeholder='Marca'  onChange={(e)=> {setMarca(e.target.value)}}/>
                <Button text='Cadastrar'/>
            </form>
        </Main>
        <LinkIcon/>
</Container>
  );
}

export default Veiculos;