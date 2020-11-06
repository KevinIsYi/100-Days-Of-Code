import React, { useState } from 'react';
import { calculateTotal } from '../helpers/helpers';

export const Form = ({ quantity, setQuantity, term, setTerm, setTotal, setIsLoading }) => {

    const [ error, setError ] = useState(false);    

    const handleChange = (e) => {
        setQuantity(e.target.value);
    }

    const handleSelectChange = (e) => {
        setTerm(e.target.value);
    }

    const calculateLoan = (e) => {
        e.preventDefault();
        if (term === '' || quantity === 0) {
            setError(true);
        }
        else {
            setIsLoading(true);
            setTimeout(() => {
                setError(false);
                const total = calculateTotal(quantity, term);
                setTotal(total);
                setIsLoading(false);
            }, 1000);
        }
    }

    return (
        <>
            <form onSubmit={ calculateLoan }>
            <div className="row">
                <div>
                    <label>Cantidad Prestamo</label>
                    <input 
                        className="u-full-width" 
                        type="number" 
                        placeholder="Ejemplo: 3000"
                        value={ quantity }
                        onChange={ handleChange }
                    />
                </div>
                <div>
                    <label>Plazo para Pagar</label>
                    <select 
                        className="u-full-width"
                        onChange={ handleSelectChange }
                        value={ term }
                    >
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Calcular" 
                        className="button-primary u-full-width" 
                    />
                </div>
            </div>
            </form>
            {
                error && <p className="error">All fields are obligatory</p> 
            }
        </>
    )
}
