import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../auth/AuthContext';

export const RegisterPage = () => {

    const { register } = useContext(AuthContext);
    const [form, setForm] = useState({
        email: '',
        password: '',
        name: ''
    });

    const { email, password, name } = form;

    const onChange = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const ok = await register(name, email, password);

        if (!ok) {
            Swal.fire('Error', 'This e-mail is already used', 'error');
        }
    }

    const allDataIsOk = () => {
        return name.trim().length > 0 &&
            email.trim().length > 0 &&
            password.trim().length > 0   
    }

    return (
        <form
            className="login100-form validate-form flex-sb flex-w"
            onSubmit={ onSubmit }
        >
            <span className="login100-form-title mb-3">
                Chat - Registro
            </span>

            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={ name }
                    onChange={ onChange }
                />
                <span className="focus-input100"></span>
            </div>

            
            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={ email }
                    onChange={ onChange }
                />
                <span className="focus-input100"></span>
            </div>
            
            
            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={ password }
                    onChange={ onChange }
                />
                <span className="focus-input100"></span>
            </div>
            
            <div className="row mb-3">
                <div className="col text-right">
                    <Link to="/auth/login" className="txt1">
                        Ya tienes cuenta?
                    </Link>
                </div>
            </div>

            <div className="container-login100-form-btn m-t-17">
                <button
                    className="login100-form-btn"
                    type="submit"
                    disabled={ !allDataIsOk() }
                >
                    Crear cuenta
                </button>
            </div>
        </form>
    )
}
