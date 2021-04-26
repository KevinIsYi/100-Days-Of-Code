import { useEffect, useRef, useState } from "react";
import { reqRespApi } from "../api/reqResp";
import { ReqResListado, Usuario } from "../interfaces/reqResp";

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const paginaRef = useRef(1);

    useEffect(() => {
        cargarUsuarios();
    }, []);

    const cargarUsuarios = async () => {
        const resp = await reqRespApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        });

        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
        }
        else {
            paginaRef.current--;
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if(paginaRef.current > 1) {
            paginaRef.current--;
            cargarUsuarios();
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }
}