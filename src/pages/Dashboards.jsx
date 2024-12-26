import { useState } from "react";
import account from "../assets/account.png";
import "../styles/dashboard.css";

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
              <a href="#">GeoLogistics</a>
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
            <form action="#" className="d-none d-sm-inline-block"></form>
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    data-bs-toggle="dropdown"
                    className="nav-icon pe-md-0"
                  >
                    <img src={account} className="avatar img-fluid" alt="" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end rounded text-center fst-italic">
                    Dropdown-Menu
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <main className="content px-3 py-4">
            <div className="container-fluid">
              <div className="mb-3">
                <h3 className="fw-bold fs-4 mb-3">Admin Dashboard</h3>
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <div className="card border-0">
                      <div className="card-body py-4">
                        <h5 className="mb-2 fw-bold">Memebers Progress</h5>
                        <p className="mb-2 fw-bold">$72,540</p>
                        <div className="mb-0">
                          <span className="badge text-success me-2">+9.0%</span>
                          <span className=" fw-bold badge bg-primary">
                            Since Last Month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 ">
                    <div className="card  border-0">
                      <div className="card-body py-4">
                        <h5 className="mb-2 fw-bold">Memebers Progress</h5>
                        <p className="mb-2 fw-bold">$72,540</p>
                        <div className="mb-0">
                          <span className="badge text-success me-2">+9.0%</span>
                          <span className="fw-bold badge bg-warning">
                            Since Last Month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 ">
                    <div className="card border-0">
                      <div className="card-body py-4">
                        <h5 className="mb-2 fw-bold">Memebers Progress</h5>
                        <p className="mb-2 fw-bold">$72,540</p>
                        <div className="mb-0">
                          <span className="badge text-success me-2">+9.0%</span>
                          <span className="fw-bold badge bg-success">
                            Since Last Month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="fw-bold fs-4 my-3">Avg. Agent Earnings</h3>
                <div className="row">
                  <div className="col-12">
                    <table className="table table-striped">
                      <thead>
                        <tr className="highlight">
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry the Bird</td>
                          <td>Larry the Two</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
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
