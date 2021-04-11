import { useCounter } from '../hooks/useCounter';

export const ContadorHook = () => {

    const { value, acumular } = useCounter();

    return (
        <>
            <h3>Contador: <small>{value}</small></h3>
            <button 
                className="btn btn-primary"
                onClick={() => acumular(1)}
            >
                + 1
            </button>
            &nbsp;   
            <button 
                className="btn btn-primary"
                onClick={() => acumular(-1)}
            >
                - 1
            </button>            
        </>
    )
}
