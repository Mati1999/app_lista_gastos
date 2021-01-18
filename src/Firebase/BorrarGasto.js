import { db } from './FireBaseConfig';


const borrarGasto = (id) => {
    db.collection('gastos').doc(id).delete();
}

export default borrarGasto;