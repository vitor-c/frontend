import React, { useState , FormEvent } from 'react';
import Title from '../../components/Title/index'
import { Container , Main , ResultContainer } from './styles';
import Input from '../../components/Input/index'
import Button from '../../components/Button/index'
import LinkIcon from '../../components/Link/index'
import { apiServer } from '../../services/api'


const Palindromos: React.FC = () => {
    const [numero , setNum] = useState('')
    const [intervalo , setIntervalo] = useState('')
    const [palindromo , setPalindromo] = useState('')
    
    const buscarPalindromo = async (e:FormEvent)=>{
        e.preventDefault()
        
        try {
            
         const response = await apiServer.post('palindromos', {numero , intervalo})
        
                if(response){
                    setPalindromo(response.data)
                }
                setNum('')
                setIntervalo('')

            } catch (error) {
            alert('Erro na requisição')
            setIntervalo('')
            setNum('')
        }
    }

  return (
    <Container>
        <Title text='Buscar Palindromos'/>
        <Main>
            <form onSubmit={buscarPalindromo}>
                <Input className='maior' value={numero} placeholder='Digite um valor e selecione um intervalo' onChange={(e)=> {setNum(e.target.value)}}/>
                <Input className='menor'value={intervalo}  onChange={(e)=> {setIntervalo(e.target.value)}}/>
                <Button text='Buscar'/>
            </form>
        </Main>
        
        <ResultContainer>
            {palindromo && <span> Palindromos encontrados: { palindromo }</span>}
        </ResultContainer>
        <LinkIcon/>
    </Container>
    
  );
}

export default Palindromos;