const TablaDatos = () => {
  // Datos de ejemplo para la tabla
  const datos = [
    {
      idPrograma: 1,
      fecha: "2025-01-01",
      hora: "10:00",
      horaCorta: "10:00 AM",
      hora2: "10:00",
      minutos: 30,
      segundos: 45,
      id: "ABC123",
      latitud: -33.4489,
      longitud: -70.6693,
      porcentajeCombustible: 75,
      litrosCombustible: 50,
    },
    {
      idPrograma: 2,
      fecha: "2025-01-02",
      hora: "11:30",
      horaCorta: "11:30 AM",
      hora2: "11:30",
      minutos: 25,
      segundos: 30,
      id: "XYZ456",
      latitud: -33.451,
      longitud: -70.6695,
      porcentajeCombustible: 80,
      litrosCombustible: 60,
    },
    // Más datos de ejemplo aquí...
  ];

  return (
    <div className="container mt-5">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID del Programa</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Hora Corta</th>
            <th>Hora 2</th>
            <th>Minutos</th>
            <th>Segundos</th>
            <th>ID</th>
            <th>Latitud</th>
            <th>Longitud</th>
            <th>% Combustible</th>
            <th>Lts Combustible</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((dato, index) => (
            <tr key={index}>
              <td>{dato.idPrograma}</td>
              <td>{dato.fecha}</td>
              <td>{dato.hora}</td>
              <td>{dato.horaCorta}</td>
              <td>{dato.hora2}</td>
              <td>{dato.minutos}</td>
              <td>{dato.segundos}</td>
              <td>{dato.id}</td>
              <td>{dato.latitud}</td>
              <td>{dato.longitud}</td>
              <td>{dato.porcentajeCombustible}%</td>
              <td>{dato.litrosCombustible} L</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaDatos;
