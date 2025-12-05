/**
 * DataBaseConnection
 * Simula la conexión a la base de datos usando arrays en memoria
 */
export class DataBaseConnection {
    private static instance: DataBaseConnection;
    private connected: boolean = false;

    // Datos simulados de la base de datos
    public static asignaturas: any[] = [
        { id: 1, nombre: 'Arquitectura de Software' },
        { id: 2, nombre: 'Base de Datos II' },
        { id: 3, nombre: 'Ingeniería de Software' },
        { id: 4, nombre: 'Programación Web' }
    ];

    public static docentes: any[] = [
        { id: 1, nombre: 'Dr. Juan Pérez', disponible: true },
        { id: 2, nombre: 'Ing. María García', disponible: true },
        { id: 3, nombre: 'Lic. Carlos López', disponible: false },
        { id: 4, nombre: 'Msc. Ana Rodríguez', disponible: true }
    ];

    public static periodos: any[] = [
        { id: 1, nombre: '2024-1' },
        { id: 2, nombre: '2024-2' },
        { id: 3, nombre: '2025-1' }
    ];

    public static ofertas: any[] = [];

    // + conectar() : Connection
    public conectar(): DataBaseConnection {
        this.connected = true;
        console.log('Conexión establecida con la base de datos');
        return this;
    }

    // + desconectar() : void
    public desconectar(): void {
        this.connected = false;
        console.log('Conexión cerrada con la base de datos');
    }

    public isConnected(): boolean {
        return this.connected;
    }

    public static getInstance(): DataBaseConnection {
        if (!DataBaseConnection.instance) {
            DataBaseConnection.instance = new DataBaseConnection();
        }
        return DataBaseConnection.instance;
    }
}
