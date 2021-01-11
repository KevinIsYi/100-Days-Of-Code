import React from 'react';
import Swal from 'sweetalert2';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

import { startRegisterWithEmailAndPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { ui:{ msgError } } = useSelector(state => state);
    const [ formValues, handleInputChange ]= useForm({
        name: 'Kevin',
        email: 'kevin@kevin.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    if (msgError) {
        Swal.fire('Error', msgError, 'error');
    }

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegisterWithEmailAndPassword(email, password, name));
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name is required'));
            return false;
        }
        if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false;
        }
        if (password !== password2) {
            dispatch(setError('Password should match each other'));
            return false;
        }

        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__tittle">Register</h3>
            <form
                onSubmit={ handleRegister }
            >
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    className="auth__input"
                    autoComplete="off"
                    value={ password2 }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already Registered?
                </Link>
                

            </form>
        </>
    )
}
