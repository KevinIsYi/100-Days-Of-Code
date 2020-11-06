import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Message } from './components/Message';
import { Spinner } from './components/Spinner';
import { Total } from './components/Total';

function App() {

  const [ quantity, setQuantity ]= useState(0);
  const [ term, setTerm ]= useState('');
  const [ total, setTotal ] = useState(0);
  const [ isLoading, setIsLoading ] = useState(false);
  let component;
  
  if(isLoading) {
    component = <Spinner />; 
  }

  else if (total === 0) {
    component = <Message />;
  }
  else {
    component = <Total total={ total } term={ term } quantity={ quantity } />;
  }

  return (
    <>
      <Header
        tittle="Cotizador"
      />
      <div className="container">
        <Form 
          quantity={ quantity } 
          setQuantity={ setQuantity }
          term={ term }
          setTerm={ setTerm }
          total={ total }
          setTotal={ setTotal }
          setIsLoading={ setIsLoading }
        />
        <div className="mensajes">
          { component }
        </div>
      </div>
    </>
  );
}

export default App;
