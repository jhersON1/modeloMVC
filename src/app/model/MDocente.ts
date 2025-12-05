import { DataBaseConnection } from '../bd/DataBaseConnection';

/**
 * MDocente
 * Modelo para gestionar los docentes
 */
export class MDocente {
    private db: DataBaseConnection;

    constructor() {
        this.db = DataBaseConnection.getInstance();
    }

    // + obtenerDisponibles() : List
    public obtenerDisponibles(): any[] {
        this.db.conectar();
        const docentes = DataBaseConnection.docentes.filter(d => d.disponible === true);
        this.db.desconectar();
        return docentes;
    }
}
