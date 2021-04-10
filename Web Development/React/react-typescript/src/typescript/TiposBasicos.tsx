export const TiposBasicos = () => {
    
    let nombre: string | number = 'Kevin';
    const edad = 35;
    const isActive = true;

    return (
        <>
            <h3>Tipos Básicos</h3>
            { nombre }, { edad }, { isActive ? 'true' : 'false' }
        </>
    )
}
