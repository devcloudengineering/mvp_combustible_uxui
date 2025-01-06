import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Estilo de DatePicker
import { es } from "date-fns/locale"; // Para el idioma español

const Buscador = () => {
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);
  const [vehiculo, setVehiculo] = useState("");
  const [patente, setPatente] = useState("");
  const [codigo, setCodigo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para buscar (puedes procesar los valores aquí)
    console.log("Buscar con los siguientes datos:", {
      fechaInicio,
      fechaFin,
      vehiculo,
      patente,
      codigo,
    });
  };

  return (
    <form
      className="d-flex flex-wrap align-items-center"
      onSubmit={handleSubmit}
    >
      {/* Input DatePicker Fecha de Inicio */}
      <div className="me-2 mb-2">
        <DatePicker
          selected={fechaInicio}
          onChange={(date) => setFechaInicio(date)}
          dateFormat="dd/MM/yyyy"
          locale={es}
          placeholderText="Fecha de inicio"
          className="form-control"
        />
      </div>

      {/* Input DatePicker Fecha de Fin */}
      <div className="me-2 mb-2">
        <DatePicker
          selected={fechaFin}
          onChange={(date) => setFechaFin(date)}
          dateFormat="dd/MM/yyyy"
          locale={es}
          placeholderText="Fecha de fin"
          className="form-control"
        />
      </div>

      {/* Select Tipo de Vehículo */}
      <div className="me-2 mb-2">
        <select
          id="vehiculo"
          value={vehiculo}
          onChange={(e) => setVehiculo(e.target.value)}
          className="form-select"
          placeholder="Tipo de vehículo"
        >
          <option value="">Tipo de vehiculo</option>
          <option value="camion">Camión</option>
          <option value="bus">Bus</option>
          <option value="camioneta">Camioneta</option>
        </select>
      </div>

      {/* Input Patente */}
      <div className="me-2 mb-2">
        <input
          type="text"
          id="patente"
          value={patente}
          onChange={(e) => setPatente(e.target.value)}
          placeholder="Ingrese patente"
          className="form-control"
        />
      </div>

      {/* Input Código Interno y Botón */}
      <div className="d-flex align-items-center mb-2">
        <input
          type="text"
          id="codigo"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          placeholder="Código Interno"
          className="form-control me-2"
        />
        <button type="submit" className="btn btn-primary">
          Buscar
        </button>
      </div>
    </form>
  );
};

export default Buscador;
