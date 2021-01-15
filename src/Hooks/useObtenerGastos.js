import { useState, useEffect } from 'react';
import { db } from './../Firebase/FireBaseConfig';
import { useAuth } from './../Contextos/AuthContext';


const useObtenerGastos = () => {

    const { usuario } = useAuth();
    const [gastos, cambiarGastos] = useState([]);
    useEffect(() => {
        const unsuscribe = db.collection('gastos')
            .where('uidUsuario', '==', usuario.uid)
            .orderBy('fecha', 'desc')
            .limit(10)
            .onSnapshot((snapshot) => {
                cambiarGastos(snapshot.docs.map((gasto) => {
                    return { ...gasto.data(), id: gasto.id }
                }));
            });

        return unsuscribe;
        // Ingresamos 'usuario' en el arreglo, para que la funcion se ejecute tanto cuando abrimos la lista de gastos o cuando cambia el usuario.
    }, [usuario]);

    return [gastos];
}

export default useObtenerGastos;