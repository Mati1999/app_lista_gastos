import { useState, useEffect } from 'react';
import { db } from './../Firebase/FireBaseConfig';
import { startOfMonth, endOfMonth, getUnixTime } from 'date-fns';
import { useAuth } from './../Contextos/AuthContext';

const useObtenerGastosDelMes = () => {

    const [gastos, cambiarGastos] = useState([]);;
    const { usuario } = useAuth();

    useEffect(() => {
        const inicioDeMes = getUnixTime(startOfMonth(new Date()));
        const finDeMes = getUnixTime(endOfMonth(new Date()));

        if (usuario) {
            const unsuscribe = db.collection('gastos')
                .orderBy('fecha', 'desc')
                .where('fecha', '>=', inicioDeMes)
                .where('fecha', '<=', finDeMes)
                .where('uidUsuario', '==', usuario.uid)
                .onSnapshot((snapshot) => {
                    cambiarGastos(snapshot.docs.map((documento) => {
                        return { ...documento.data(), id: documento.id }
                    }))
                })
            //Use effect tiene que retornar una funcion que se va a ejecutar cuando se desmonte. 
            //En este caso queremos que ejecute el unsuscribe a la coleccion de firestore
            return unsuscribe;
        }

    }, [usuario]);

    return gastos;
}

export default useObtenerGastosDelMes;