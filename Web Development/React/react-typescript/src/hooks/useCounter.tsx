import { useState } from "react";

export const useCounter = (initialValue: number = 0) => {
    const [value, setValue] = useState<number>(initialValue);

    const acumular = (numero: number): void => {
        setValue(value + numero);
    }

    return {
        value, 
        acumular
    }
}
