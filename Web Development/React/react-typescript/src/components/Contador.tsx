import { useState } from "react";

export const Contador = () => {

    const [value, setValue] = useState<number>(0);

    const acumular = (numero: number): void => {
        setValue(value + numero);
    }

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
