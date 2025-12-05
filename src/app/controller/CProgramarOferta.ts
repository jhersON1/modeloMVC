import { VProgramarOferta } from '../view/VProgramarOferta';
import { MProgramarOferta } from '../model/MProgramarOferta';
import { MAsignatura } from '../model/MAsignatura';
import { MDocente } from '../model/MDocente';
import { DataBaseConnection } from '../bd/DataBaseConnection';

/**
 * CProgramarOferta
 * Controlador para programar ofertas académicas
 */
export class CProgramarOferta {
    private vista: VProgramarOferta;
    private modeloOferta: MProgramarOferta;
    private modeloAsignatura: MAsignatura;
    private modeloDocente: MDocente;

    constructor() {
        this.vista = new VProgramarOferta();
        this.modeloOferta = new MProgramarOferta();
        this.modeloAsignatura = new MAsignatura();
        this.modeloDocente = new MDocente();
    }

    // + iniciarVista() : void
    public iniciarVista(): void {
        console.log('Iniciando vista de Programar Oferta...');
        this.cargarListasDesplegables();
        this.vista.mostrar();
    }

    // + guardarOferta(idAsig, idDoc, idPer, cupo) : void
    public guardarOferta(idAsig: number, idDoc: number, idPer: number, cupo: number): void {
        console.log('Guardando oferta...');

        const datos = {
            idAsig: idAsig,
            idDoc: idDoc,
            idPer: idPer,
            cupo: cupo
        };

        const resultado = this.modeloOferta.insertarOferta(datos);

        if (resultado) {
            this.vista.mensajeExito();
        } else {
            console.error('Error al guardar la oferta');
        }
    }

    // - cargarListasDesplegables() : void
    private cargarListasDesplegables(): void {
        console.log('Cargando listas desplegables...');

        // Lee datos de MAsignatura
        const asignaturas = this.modeloAsignatura.obtenerTodas();
        this.vista.setAsignaturas(asignaturas);

        // Lee datos de MDocente
        const docentes = this.modeloDocente.obtenerDisponibles();
        this.vista.setDocentes(docentes);

        // Cargar periodos desde la BD simulada
        const db = DataBaseConnection.getInstance();
        db.conectar();
        const periodos = DataBaseConnection.periodos;
        db.desconectar();
        this.vista.setPeriodos(periodos);
    }

    // Método para obtener la vista (útil para integración con Angular)
    public getVista(): VProgramarOferta {
        return this.vista;
    }

    // Método para procesar el registro desde la vista
    public procesarRegistro(): void {
        const datos = this.vista.getDatosSeleccionados();
        this.guardarOferta(datos.idAsig, datos.idDoc, datos.idPer, datos.cupo);
    }
}
