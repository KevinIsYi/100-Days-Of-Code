import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext';

export const LoginPage = () => {

    const { login } = useContext(AuthContext);
    const [form, setForm] = useState({
        email: 'holi@holi.com',
        password: '123',
        rememberMe: true
    });
    const { email, password, rememberMe } = form;

    const onChange = ({ target }) => {
        const { value, name } = target;

        setForm({
            ...form,
            [name]: value
        });
    };

    const toggleCheck = () => {
        setForm({
            ...form,
            rememberMe: !rememberMe
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (rememberMe) {
            localStorage.setItem('email', email);
        }
        else {
            localStorage.removeItem('email');
        }

        if (!await login(email, password)) {
            Swal.fire('Error', 'Usuario o contraseña son incorrectos', 'error');
        } 
    }

    useEffect(() => {
        const rememberMeEmail = localStorage.getItem('email');

        if (rememberMeEmail) {
            setForm((form) => ({
                ...form,
                rememberMe: true,
                email: rememberMeEmail
            }));
        }
    }, []);
    
    return (
        <form
            className="login100-form validate-form flex-sb flex-w"
            onSubmit={ onSubmit }
        >
            <span className="login100-form-title mb-3">
                Chat - Ingreso
            </span>
            
            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
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
                <div
                    className="col"
                    onClick={ toggleCheck }
                >
                    <input
                        className="input-checkbox100"
                        id="ckb1"
                        type="checkbox"
                        name="rememberMe"
                        checked={ rememberMe }
                        readOnly
                    />
                    <label className="label-checkbox100">
                        Recordarme
                    </label>
                </div>

                <div className="col text-right">
                    <Link to="/auth/register" className="txt1">
                        Nueva cuenta?
                    </Link>
                </div>
            </div>

            <div className="container-login100-form-btn m-t-17">
                <button className="login100-form-btn">
                    Ingresar
                </button>
            </div>
        </form>
    )
}
