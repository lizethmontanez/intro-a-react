import { Link } from 'react-router-dom';

const citasSimuladas = [
    { id: 1, paciente: 'Juan Pérez' },
    { id: 2, paciente: 'María López' },
    { id: 3, paciente: 'Carlos Díaz' },
];

function Citas() {
    return (
        <div>
            <h2>Lista de Citas Médicas</h2>
            <ul>
        {citasSimuladas.map(cita => (
            <li key={cita.id}>
                <Link to={`/cita/${cita.id}`}>
                Ver cita de {cita.paciente}
            </Link>
            </li>
        ))}
            </ul>
    </div>
    );
}

export default Citas;