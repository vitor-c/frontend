/* eslint-disable @typescript-eslint/no-unused-expressions */
import React ,{ useState , FormEvent}from 'react';
import { Container , Main , ResultContainer } from './styles';
import Title from '../../components/Title/index'
import Input from '../../components/Input/index'
import Button from '../../components/Button/index'
import LinkIcon from '../../components/Link/index'
import { apiServer } from '../../services/api'


interface apiResProps{
    troco: string[];
    valorTroco: string;
}

const Caixa: React.FC = () => {
    const [valorCompra , setValorCompra] = useState('')
    const [valorPagamento , setValorPagamento] = useState('')
    const [valorTroco , setValorTroco] = useState([''])
    const [valorTotal , setValorTotal] = useState('')

    const calcularTroco = async(e:FormEvent)=> {
        e.preventDefault()
        
        const response = await apiServer.post<apiResProps>('caixa' , {valorCompra, valorPagamento})
        console.log(response.data.troco)
        if( response){
            setValorTroco(response.data.troco)
            setValorTotal(response.data.valorTroco)
        }
        
    }

  return (

    <Container>
        <Title text="Calcular troco"/>
            <Main>
                <form onSubmit={calcularTroco}>
                <Input className='maior' value={valorCompra} placeholder='Valor da compra' onChange={(e)=> {setValorCompra(e.target.value)}}/>
                <Input className='menor'value={valorPagamento}  placeholder='Valor do pagamento'onChange={(e)=> {setValorPagamento(e.target.value)}}/>
                <Button text='Calcular'/>
                </form>
            </Main>

            <ResultContainer>
                {valorTotal && <span> O troco será: { valorTroco } total: {valorTotal}R$</span>}
            </ResultContainer>
           
            <LinkIcon/>
    </Container>
  );
}

export default Caixa;