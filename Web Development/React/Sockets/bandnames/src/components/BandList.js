import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";

export const BandList = () => {

    const [ bands, setBands ] = useState([]);
    const { socket } = useContext(SocketContext);

    useEffect(() => {
        socket.on('current-bands', (bands) => {
            setBands(bands);
            });
        
        return () => socket.off('current-bands');
    }, [socket]);

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
        socket.emit('change-name', {
            id,
            name
        })
    }

    const vote = (id) => {
        socket.emit('vote-band', id);
    }

    const deleteBand = (id) => {
        socket.emit('delete-band', id);
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
                        <button
                            className="btn btn-danger"
                            onClick={ () => deleteBand(id) }
                        >
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
