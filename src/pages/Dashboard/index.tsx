import React from 'react';
import { Container  , Main } from './styles';
import Card from '../../components/Cards/index'
import Title from '../../components/Title/index'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Title text='Desafio Kukac'/>
      
      <Main> 
          <Card text={'Busca de Palindromos'} link={'/palindromos'}/>
          <Card text={'Caixa'} link={'/caixa'}/>
          <Card text={'Busca Ceps'} link={'/ceps'}/>
          <Card text={'Cadastrar Veiculos'} link={'/veiculos'}/>
      </Main>

    </Container>
  );
}

export default Dashboard;