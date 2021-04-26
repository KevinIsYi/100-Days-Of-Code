import { useUsuarios } from "../hooks/useUsuarios";

export const Usuarios = () => {

    const { usuarios, paginaSiguiente, paginaAnterior } = useUsuarios();

    return (
        <div>
            <h1>Usuarios</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(({ id, avatar, first_name, last_name, email }) => (
                            <tr key={id.toString()}>
                                <td>
                                    <img
                                        src={avatar}
                                        alt={first_name}
                                        style={{
                                            width: 35,
                                            borderRadius: 100
                                        }}
                                    />
                                </td>
                                <td>{`${first_name} ${last_name}`}</td>
                                <td>{email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button
                className="btn btn-primary"
                onClick={paginaAnterior}
            >
                Anterior
            </button>

            &nbsp;

            <button
                className="btn btn-primary"
                onClick={paginaSiguiente}
            >
                Siguiente
            </button>
        </div>
    )
}
