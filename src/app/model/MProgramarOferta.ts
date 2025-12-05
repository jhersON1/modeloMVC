import { DataBaseConnection } from '../bd/DataBaseConnection';

/**
 * MProgramarOferta
 * Modelo para gestionar la programación de ofertas
 */
export class MProgramarOferta {
    // - id_oferta: int
    private id_oferta: number;
    // - cupo: int
    private cupo: number;

    private db: DataBaseConnection;

    constructor() {
        this.id_oferta = 0;
        this.cupo = 0;
        this.db = DataBaseConnection.getInstance();
    }

    // + insertarOferta(datos) : boolean
    public insertarOferta(datos: { idAsig: number; idDoc: number; idPer: number; cupo: number }): boolean {
        try {
            this.db.conectar();

            const nuevaOferta = {
                id: DataBaseConnection.ofertas.length + 1,
                idAsignatura: datos.idAsig,
                idDocente: datos.idDoc,
                idPeriodo: datos.idPer,
                cupo: datos.cupo,
                fechaCreacion: new Date()
            };

            DataBaseConnection.ofertas.push(nuevaOferta);

            this.id_oferta = nuevaOferta.id;
            this.cupo = datos.cupo;

            this.db.desconectar();
            console.log('Oferta insertada:', nuevaOferta);
            return true;
        } catch (error) {
            console.error('Error al insertar oferta:', error);
            this.db.desconectar();
            return false;
        }
    }

    public getIdOferta(): number {
        return this.id_oferta;
    }

    public getCupo(): number {
        return this.cupo;
    }
}
