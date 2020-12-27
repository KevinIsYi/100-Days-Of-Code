import { Switch, Route } from 'react-router-dom';
import { Menu } from './components/paginas/Menu';
import { NuevoPlatillo } from './components/paginas/NuevoPlatillo';
import { Ordenes } from './components/paginas/Ordenes';
import { Sidebar } from './components/ui/Sidebar';

function App() {
  return (
    <div className="md:flex min-h-screen">
    <Sidebar />
      <div className="md:w-3/5 xl:w-4/5 p-6">
        <Switch>
          <Route exact path="/" component={ Ordenes } />
          <Route exact path="/menu" component={ Menu } />
          <Route exact path="/nuevo-platillo" component={ NuevoPlatillo } />
        </Switch>
      </div>
    </div>
  );
}

export default App;
