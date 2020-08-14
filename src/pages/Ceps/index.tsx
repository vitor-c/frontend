import React, { useState , FormEvent } from 'react';
import { Container , Main ,Form, EnderecoContainer } from './styles';
import { apiViaCep } from '../../services/api'
import Title from '../../components/Title/index'
import InputStyled from '../../components/Input/index'
import Buttontyled from '../../components/Button/index'
import LinkIcon from '../../components/Link/index'



interface CepProps{
    logradouro : string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    cep: string;
}

const Ceps: React.FC = () => {
    const [cepData1 , setCepData1] = useState('')
    const [cepData2 , setCepData2] = useState('')
    const [cepData3 , setCepData3] = useState('')
    const [cepData4 , setCepData4] = useState('')
    const [cepData5 , setCepData5] = useState('')

    const [cepConsumido , serSepConsumido] = useState<CepProps[]>([])

    const buscaApiCep = async(e:FormEvent ) => {
        e.preventDefault()
        const arrayCeps = []
        try {    
            const cep1 = await apiViaCep.get<CepProps>(`${cepData1}/json`)

            if (cep1.data){
                arrayCeps.push(cep1.data)
            }   
            
        } catch (error) {
            alert('Erro na busca do 1 cep')
        }
        try {    
            const cep2 = await apiViaCep.get<CepProps>(`${cepData2}/json`)

            if (cep2.data){
                arrayCeps.push(cep2.data)     
            }  
            
        } catch (error) {
            alert('Erro na busca do 2 cep')
        }
        try {    
            const cep3 = await apiViaCep.get<CepProps>(`${cepData3}/json`)

            if (cep3.data){
                arrayCeps.push(cep3.data)
            } 
            
        } catch (error) {
            alert('Erro na busca do 3 cep')
        }
        try {    
            const cep4 = await apiViaCep.get<CepProps>(`${cepData4}/json`)

            if (cep4.data){
                arrayCeps.push(cep4.data)
            } 
        } catch (error) {
            alert('Erro na busca do 4 cep')
        }
        try {    
            const cep5 = await apiViaCep.get<CepProps>(`${cepData5}/json`)

            if (cep5.data){
                arrayCeps.push(cep5.data) 
            } 
        } catch (error) {
            alert('Erro na busca do 5 cep')
        }
        serSepConsumido(arrayCeps)
    }


  return (
      <Container>
          <Title text='Buscar Ceps'/>
            <Main>
                <Form onSubmit={buscaApiCep}>
                    <InputStyled value={cepData1} placeholder="1° CEP" onChange={(e)=> {setCepData1(e.target.value)}}/>
                    <InputStyled value={cepData2} placeholder="2° CEP" onChange={(e)=> {setCepData2(e.target.value)}}/>
                    <InputStyled value={cepData3} placeholder="3° CEP" onChange={(e)=> {setCepData3(e.target.value)}}/>
                    <InputStyled value={cepData4} placeholder="4° CEP" onChange={(e)=> {setCepData4(e.target.value)}}/>
                    <InputStyled value={cepData5} placeholder="5° CEP" onChange={(e)=> {setCepData5(e.target.value)}}/>
            
                    <Buttontyled  text='Buscar'/>
                </Form>
            </Main>
            {cepConsumido && (cepConsumido.map(item =>  
                    <EnderecoContainer key={item.cep}>
                        <span>Endereço encontrado:</span>
                        <span>{item.logradouro} </span>
                        <span>{item.complemento} </span>
                        <span>{item.bairro} </span>
                        <span>{item.localidade} </span>
                        <span>{item.uf} </span>
                    </EnderecoContainer>
                 ))}
            <LinkIcon/>
      </Container>
  );
}

export default Ceps;