import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CProgramarOferta } from '../controller/CProgramarOferta';

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
 * Vista (Componente Angular) para programar ofertas académicas
 */
@Component({
    selector: 'app-vprogramar-oferta',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './VProgramarOferta.html',
    styleUrls: ['./VProgramarOferta.css']
})
export class VProgramarOferta implements OnInit {
    // - cmbAsignatura: ComboBox
    cmbAsignatura: { id: number; nombre: string }[] = [];
    // - cmbDocente: ComboBox
    cmbDocente: { id: number; nombre: string }[] = [];
    // - cmbPeriodo: ComboBox
    cmbPeriodo: { id: number; nombre: string }[] = [];
    // - btnRegistrar: Button
    btnRegistrar: boolean = true;

    // Valores seleccionados
    asignaturaSeleccionada: number = 0;
    docenteSeleccionado: number = 0;
    periodoSeleccionado: number = 0;
    cupoSeleccionado: number = 0;

    // Controlador
    private controller!: CProgramarOferta;

    ngOnInit(): void {
        // El controlador se inyecta desde afuera
    }

    // Método para recibir el controlador
    setController(controller: CProgramarOferta): void {
        this.controller = controller;
    }

    // + mostrar() : void
    mostrar(): void {
        console.log('=== VISTA: Programar Oferta ===');
        console.log('Asignaturas disponibles:', this.cmbAsignatura);
        console.log('Docentes disponibles:', this.cmbDocente);
        console.log('Periodos disponibles:', this.cmbPeriodo);
    }

    // + getDatosSeleccionados() : DTO
    getDatosSeleccionados(): DTO {
        return {
            idAsig: this.asignaturaSeleccionada,
            idDoc: this.docenteSeleccionado,
            idPer: this.periodoSeleccionado,
            cupo: this.cupoSeleccionado
        };
    }

    // + mensajeExito() : void
    mensajeExito(): void {
        console.log('✓ ¡Oferta registrada exitosamente!');
        alert('¡Oferta registrada exitosamente!');
    }

    // Método del botón registrar - llama al controlador
    onRegistrar(): void {
        if (this.controller) {
            const datos = this.getDatosSeleccionados();
            this.controller.guardarOferta(datos.idAsig, datos.idDoc, datos.idPer, datos.cupo);
        }
    }

    // Métodos para cargar los ComboBox (llamados por el controlador)
    setAsignaturas(asignaturas: any[]): void {
        this.cmbAsignatura = asignaturas;
    }

    setDocentes(docentes: any[]): void {
        this.cmbDocente = docentes;
    }

    setPeriodos(periodos: any[]): void {
        this.cmbPeriodo = periodos;
    }
}
