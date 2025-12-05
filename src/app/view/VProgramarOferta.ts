/**
 * DTO para los datos seleccionados en la vista
 */
export interface DTO {
    idAsig: number;
    idDoc: number;
    idPer: number;
    cupo: number;
}

/**
 * VProgramarOferta
 * Vista para programar ofertas académicas
 */
export class VProgramarOferta {
    // - cmbAsignatura: ComboBox
    private cmbAsignatura: { id: number; nombre: string }[] = [];
    // - cmbDocente: ComboBox
    private cmbDocente: { id: number; nombre: string }[] = [];
    // - cmbPeriodo: ComboBox
    private cmbPeriodo: { id: number; nombre: string }[] = [];
    // - btnRegistrar: Button
    private btnRegistrar: boolean = true;

    // Valores seleccionados
    private asignaturaSeleccionada: number = 0;
    private docenteSeleccionado: number = 0;
    private periodoSeleccionado: number = 0;
    private cupoSeleccionado: number = 0;

    // + mostrar() : void
    public mostrar(): void {
        console.log('=== VISTA: Programar Oferta ===');
        console.log('Asignaturas disponibles:', this.cmbAsignatura);
        console.log('Docentes disponibles:', this.cmbDocente);
        console.log('Periodos disponibles:', this.cmbPeriodo);
        console.log('Botón Registrar:', this.btnRegistrar ? 'Habilitado' : 'Deshabilitado');
    }

    // + getDatosSeleccionados() : DTO
    public getDatosSeleccionados(): DTO {
        return {
            idAsig: this.asignaturaSeleccionada,
            idDoc: this.docenteSeleccionado,
            idPer: this.periodoSeleccionado,
            cupo: this.cupoSeleccionado
        };
    }

    // + mensajeExito() : void
    public mensajeExito(): void {
        console.log('✓ ¡Oferta registrada exitosamente!');
        alert('¡Oferta registrada exitosamente!');
    }

    // Métodos para cargar los ComboBox
    public setAsignaturas(asignaturas: any[]): void {
        this.cmbAsignatura = asignaturas;
    }

    public setDocentes(docentes: any[]): void {
        this.cmbDocente = docentes;
    }

    public setPeriodos(periodos: any[]): void {
        this.cmbPeriodo = periodos;
    }

    // Métodos para establecer las selecciones
    public setAsignaturaSeleccionada(id: number): void {
        this.asignaturaSeleccionada = id;
    }

    public setDocenteSeleccionado(id: number): void {
        this.docenteSeleccionado = id;
    }

    public setPeriodoSeleccionado(id: number): void {
        this.periodoSeleccionado = id;
    }

    public setCupo(cupo: number): void {
        this.cupoSeleccionado = cupo;
    }

    // Getters para los ComboBox
    public getAsignaturas(): any[] {
        return this.cmbAsignatura;
    }

    public getDocentes(): any[] {
        return this.cmbDocente;
    }

    public getPeriodos(): any[] {
        return this.cmbPeriodo;
    }
}
