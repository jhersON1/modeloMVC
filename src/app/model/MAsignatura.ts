import { DataBaseConnection } from '../bd/DataBaseConnection';

/**
 * MAsignatura
 * Modelo para gestionar las asignaturas
 */
export class MAsignatura {
    private db: DataBaseConnection;

    constructor() {
        this.db = DataBaseConnection.getInstance();
    }

    // + obtenerTodas() : List
    public obtenerTodas(): any[] {
        this.db.conectar();
        const asignaturas = DataBaseConnection.asignaturas;
        this.db.desconectar();
        return asignaturas;
    }
}
