import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Caixa from '../pages/Caixa';
import Ceps from '../pages/Ceps';
import Palindromo from '../pages/Palindromos';
import Veiculos from '../pages/Veiculos';

const Routes: React.FC = () => (
    <Switch>
      <Route path="/"  exact component={Dashboard} />
      <Route path="/Caixa"  component={Caixa} />
      <Route path="/Ceps"  component={Ceps} />
      <Route path="/Palindromos"  component={Palindromo} />
      <Route path="/Veiculos"  component={Veiculos} />
    </Switch>
  );
  
  export default Routes;