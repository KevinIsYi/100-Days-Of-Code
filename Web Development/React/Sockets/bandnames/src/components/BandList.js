import { useEffect, useState } from "react";

export const BandList = ({ data, vote }) => {

    const [ bands, setBands ] = useState(data);

    useEffect(() => {
        setBands(data);
    }, [data]);

    const changeName = (e, id) => {
        const newName = e.target.value;
        setBands(bands.map(band => {
            if (band.id === id) {
                band.name = newName;
            }
            return band;
        }));
    };

    const lostFocus = (id, name) => {

    }

    const createRows = () => {
        return (
            bands.map(({ id, name, votes }) => (
                <tr key={ id }>
                    <td>
                        <button
                            className="btn btn-primary"
                            onClick={ () => vote(id) }
                        >
                            +1
                        </button>
                    </td>
                    <td>
                        <input
                            className="form-control"
                            value={ name }
                            onChange={(e) => changeName(e, id)}
                            onBlur={ () => lostFocus(id, name) }
                        />
                    </td>
                    <td>
                        <h3>{ votes }</h3>
                    </td>
                    <td>
                        <button className="btn btn-danger">
                            Delete
                        </button>
                    </td>
                </tr>
            ))
        );
    }

    return (
        <>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Votes</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        createRows()
                    }
                </tbody>
            </table>   
        </>
    )
}
