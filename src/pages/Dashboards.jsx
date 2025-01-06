import { useState } from "react";
import account from "../assets/account.png";
import zonahoraria from "../assets/zona_horaria.png";
import consumocombustible from "../assets/consumo_combustible.png";
import huellacarbono from "../assets/huella_carbono.png";
import kilometrosrecorridos from "../assets/kilometros_recorridos.png";
import "../styles/dashboard.css";
import Buscador from "../components/Dashboards/Buscador";
import TablaDatos from "../components/Dashboards/TablaDatos";

const Dashboards = () => {
  // Estado para controlar si el sidebar está expandido
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  // Función que maneja el toggle del sidebar
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  return (
    <div>
      {" "}
      <div className="wrapper">
        <aside id="sidebar" className={isSidebarExpanded ? "expand" : ""}>
          <div className="d-flex">
            <button
              className="toggle-btn"
              type="button"
              onClick={toggleSidebar}
            >
              <i className="lni lni-grid-alt"></i>
            </button>
            <div className="sidebar-logo">
              <a href="#" className="fst-italic">
                TransMaps
              </a>
            </div>
          </div>
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="lni lni-user"></i>
                <span>Profile</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="lni lni-agenda"></i>
                <span>Task</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                href="#"
                className="sidebar-link collapsed has-dropdown"
                data-bs-toggle="collapse"
                data-bs-target="#auth"
                aria-expanded="false"
                aria-controls="auth"
              >
                <i className="lni lni-protection"></i>
                <span>Auth</span>
              </a>
              <ul
                id="auth"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <a href="#" className="sidebar-link">
                    Login
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#" className="sidebar-link">
                    Register
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a
                href="#"
                className="sidebar-link collapsed has-dropdown"
                data-bs-toggle="collapse"
                data-bs-target="#multi"
                aria-expanded="false"
                aria-controls="multi"
              >
                <i className="lni lni-layout"></i>
                <span>Multi Level</span>
              </a>
              <ul
                id="multi"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <a
                    href="#"
                    className="sidebar-link collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#multi-two"
                    aria-expanded="false"
                    aria-controls="multi-two"
                  >
                    Two Links
                  </a>
                  <ul
                    id="multi-two"
                    className="sidebar-dropdown list-unstyled collapse"
                  >
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        Link 1
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        Link 2
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="lni lni-popup"></i>
                <span>Notification</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="lni lni-cog"></i>
                <span>Setting</span>
              </a>
            </li>
          </ul>
          <div className="sidebar-footer">
            <a href="#" className="sidebar-link">
              <i className="lni lni-exit"></i>
              <span>Logout</span>
            </a>
          </div>
        </aside>
        <div className="main">
          <nav className="navbar navbar-expand px-4 py-3">
            <div className="container-fluid d-flex justify-content-between align-items-center">
              {/* Elemento invisible para centrar */}
              <div className="d-none d-md-block"></div>

              {/* Texto centrado */}
              <span className="fs-4 text-center mx-auto position-absolute start-50 translate-middle-x badge bg-violet bg-gradient d-flex align-items-center gap-2 py-2 px-3">
                <img
                  src={zonahoraria}
                  className="avatar img-fluid"
                  alt="zonahoraria"
                  style={{ width: "30px", height: "30px" }}
                />
                TransMaps
              </span>

              {/* Menú de usuario */}
              <div className="navbar-collapse collapse">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item dropdown">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      className="nav-icon pe-md-0 d-flex align-items-center py-2 me-2"
                    >
                      <img
                        src={account}
                        className="avatar img-fluid"
                        alt="Account"
                        style={{ width: "25px", height: "25px" }}
                      />
                      <span className="mx-2 text-white">Usuario</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end rounded text-center fst-italic">
                      Dropdown-Menu
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <main className="content px-3 py-4">
            <div className="container-fluid">
              <div className="mb-3">
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <div className="card border-0 shadow-sm rounded mb-4">
                      <div className="card-body d-flex align-items-center py-3 bg-violet rounded">
                        {/* Icono a la izquierda */}
                        <div className="me-4">
                          <img
                            src={consumocombustible}
                            className="img-fluid"
                            alt="Consumo del combustible"
                            style={{ width: "70px", height: "70px" }}
                          />
                        </div>

                        {/* Contenido a la derecha */}
                        <div className="flex-grow-1">
                          <p className="mb-1 fw-bold text-white">
                            Consumo del combustible
                          </p>{" "}
                          {/* Espacio reducido */}
                          <p className="mb-1 fw-bold text-white fs-2">
                            300.000
                          </p>{" "}
                          {/* Espacio reducido */}
                          <div className="d-flex justify-content-end">
                            <span className="fw-bold small text-white">
                              Litros mensuales
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 ">
                    <div className="card border-0 shadow-sm rounded mb-4">
                      <div className="card-body d-flex align-items-center py-3 bg-violet rounded">
                        {/* Icono a la izquierda */}
                        <div className="me-4">
                          <img
                            src={huellacarbono}
                            className="img-fluid"
                            alt="Consumo del combustible"
                            style={{ width: "70px", height: "70px" }}
                          />
                        </div>

                        {/* Contenido a la derecha */}
                        <div className="flex-grow-1">
                          <p className="mb-1 fw-bold text-white">
                            Huella de carbono
                          </p>{" "}
                          {/* Espacio reducido */}
                          <p className="mb-1 fw-bold text-white fs-2">
                            52.000
                          </p>{" "}
                          {/* Espacio reducido */}
                          <div className="d-flex justify-content-end">
                            <span className="fw-bold small text-white">
                              C02 Equivalente
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 ">
                    <div className="card border-0 shadow-sm rounded mb-4">
                      <div className="card-body d-flex align-items-center py-3 bg-violet rounded">
                        {/* Icono a la izquierda */}
                        <div className="me-4">
                          <img
                            src={kilometrosrecorridos}
                            className="img-fluid"
                            alt="Consumo del combustible"
                            style={{ width: "70px", height: "70px" }}
                          />
                        </div>

                        {/* Contenido a la derecha */}
                        <div className="flex-grow-1">
                          <p className="mb-1 fw-bold text-white">
                            Kilometros recorridos
                          </p>{" "}
                          {/* Espacio reducido */}
                          <p className="mb-1 fw-bold text-white fs-2">
                            1.250.000
                          </p>{" "}
                          {/* Espacio reducido */}
                          <div className="d-flex justify-content-end">
                            <span className="fw-bold small text-white">
                              Kilometros sobre horas
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mb-2">
                    <Buscador />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <TablaDatos />
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="footer"></footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
