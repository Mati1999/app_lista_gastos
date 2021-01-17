import { useState, useEffect } from 'react';
import { db } from './../Firebase/FireBaseConfig';
import { useAuth } from './../Contextos/AuthContext';


const useObtenerGastos = () => {

    const { usuario } = useAuth();
    const [gastos, cambiarGastos] = useState([]);
    const [ultimoGasto, cambiarUltimoGasto] = useState(null);
    const [hayMasPorCargar, cambiarHayMasPorCargar] = useState(false);

    const obtenerMasGastos = () => {
        db.collection('gastos')
            .where('uidUsuario', '==', usuario.uid)
            .orderBy('fecha', 'desc')
            .limit(10)
            .startAfter(ultimoGasto)
            .onSnapshot((snapshot) => {
                if (snapshot.docs.length > 0) {
                    cambiarUltimoGasto(snapshot.docs[snapshot.docs.length - 1]);

                    cambiarGastos(gastos.concat(snapshot.docs.map((gasto) => {
                        return { ...gasto.data(), id: gasto.id }
                    })))
                } else {
                    cambiarHayMasPorCargar(false);
                }
            })
    }

    useEffect(() => {
        const unsuscribe = db.collection('gastos')
            .where('uidUsuario', '==', usuario.uid)
            .orderBy('fecha', 'desc')
            .limit(10)
            .onSnapshot((snapshot) => {
                if (snapshot.docs.length > 0) {
                    cambiarUltimoGasto(snapshot.docs[snapshot.docs.length - 1]);
                    cambiarHayMasPorCargar(true);
                } else {
                    cambiarHayMasPorCargar(false);
                }

                cambiarGastos(snapshot.docs.map((gasto) => {
                    return { ...gasto.data(), id: gasto.id }
                }));
            });

        return unsuscribe;
        // Ingresamos 'usuario' en el arreglo, para que la funcion se ejecute tanto cuando abrimos la lista de gastos o cuando cambia el usuario.
    }, [usuario]);

    return [gastos, obtenerMasGastos, hayMasPorCargar];
}

export default useObtenerGastos;