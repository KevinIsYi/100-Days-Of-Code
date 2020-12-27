import { Switch, Route } from 'react-router-dom';
import { Ordenes } from './components/paginas/Ordenes';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={ Ordenes } />
      </Switch>
    </>
  );
}

export default App;
