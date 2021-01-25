import { useState } from "react";

export const BandAdd = ({createBand}) => {
    
    const [value, setValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
    
        if (value.trim().length > 0) {
            createBand(value);

            setValue('');
        }
    }

    return (
        <>
            <h3>Add Band</h3>
            <form
                onSubmit={ onSubmit }
            >
                <input
                    className="form-control"
                    placeholder="New Band Name"
                    value={value}
                    onChange={ (e) => setValue(e.target.value) }
                />
            </form>
        </>
    )
}
