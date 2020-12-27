import React, { useState } from 'react';

export const NuevoPlatillo = () => {

    const [ formValues, setFormValues ] = useState({
        nombre: '',
        precio: '',
        categorias: '',
        imagen: '',
        descripcion: ''
    });

    const { nombre, precio, categorias, imagen, descripcion } = formValues;

    const handleFormInputChange = (e) => {
        const { target:{ name, value } } = e;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();


    };

    return (
        <>
            <h1 className="text-3xl font-light mb-4">Agregar Platillo</h1>
            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form
                        onSubmit={ handleSubmit }
                    >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bolg mb-2" htmlFor="nombre">Nombre</label>
                            <input 
                                className="shadow appearance-nonde border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nombre"
                                type="text"
                                placeholder="Nombre del Platillo"
                                name="nombre"
                                value={ nombre }
                                onChange={ handleFormInputChange }
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bolg mb-2" htmlFor="precio">Precio</label>
                            <input 
                                className="shadow appearance-nonde border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="precio"
                                type="number"
                                placeholder="$20"
                                name="precio"
                                min="0"
                                value={ precio }
                                onChange={ handleFormInputChange }
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bolg mb-2" htmlFor="categoria">Categoría</label>
                            <select
                                className="shadow appearance-nonde border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="precio"
                                name="categorias"
                                value={ categorias }
                                onChange={ handleFormInputChange }
                            >
                                <option value="">-- Seleccione --</option>
                                <option value="desayuno">Desayuno</option>
                                <option value="comida">Comida</option>
                                <option value="cena">Cena</option>
                                <option value="bebida">Bebida</option>
                                <option value="postre">Postre</option>
                                <option value="ensalada">Ensalada</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bolg mb-2" htmlFor="imagen">Imagen</label>
                            <input 
                                className="shadow appearance-nonde border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="imagen"
                                type="file"
                                name="imagen"
                                value={ imagen }
                                onChange={ handleFormInputChange }
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bolg mb-2" htmlFor="descripcion">Descripción</label>
                            <textarea 
                                className="shadow appearance-nonde border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                                id="descripcion"
                                placeholder="Descripción del Platillo"
                                name="descripcion"
                                value={ descripcion }
                                onChange={ handleFormInputChange }
                            ></textarea>
                        </div>
                        <input
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                            type="submit"
                            value="Agregar Platilo"
                            readOnly={ true }
                        />
                    </form>
                </div>
            </div>   
        </>
    )
}
