import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
//context
import { useStore } from "../../store/auth.js";
//svg
import close from "../../assets/close.svg";

import hamburger from "../../assets/hamburger.svg";
export function NavBar() {
  //context
  const isAuth = useStore((state) => state.isAuth);
  const logout = useStore((state) => state.logout);
  //
  const navigate = useNavigate();
  //sidebar
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);
  const Menu = ({ open }) => (
    <div className="Menu">
      {open && (
        <div className="Nav-Router-Div">
          <div className="Nav-Router-Container">
            <div>
              <div className="Nav-Router-Head">
                <h2>Menu</h2>
                <button className="" onClick={toggleMenu}>
                  <img className="Logo" src={close} />
                </button>
              </div>

              <div className="Nav-Router-route">
                <Link to={"/"}>
                  <button onClick={toggleMenu}>Inicio</button>
                </Link>
                <Link to={"/Projects"}>
                  <button onClick={toggleMenu}>Proyectos</button>
                </Link>
                {isAuth && (
                  <Link to={"/Dashboard/Projects"}>
                    <button className="" onClick={toggleMenu}>
                      Dashboard
                    </button>
                  </Link>
                )}
              </div>
            </div>
            <div className="LoginButtonSidebar">
              {!isAuth ? (
                <Link to={"Login"}>
                  <button
                    className="iniciarSession"
                    onClick={() => {
                      toggleMenu();
                    }}
                  >
                    Iniciar sesion
                  </button>
                </Link>
              ) : (
                <button
                  className="cerrarSession"
                  onClick={() => {
                    logout();
                    navigate("/");
                    toggleMenu();
                  }}
                >
                  Cerrar sesion
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <nav className="Nav-Container">
        <Link className="Link Logol" to={"/"}>
          <h3>
            v<span id="de">de</span>
            <span id="v">v</span>alero
          </h3>
        </Link>

        <div className="Nav-Routes">
          <Link to={"/"} className="buttonNav">
            <button className="buttonNav">Inicio</button>
          </Link>
          <Link to={"/Projects"} className="buttonNav">
            <button className="buttonNav">Proyectos</button>
          </Link>
          {isAuth && (
            <Link to={"/Dashboard/Projects"}>
              <button className="buttonNav">Dashboard</button>
            </Link>
          )}
          {!isAuth ? (
            <Link to={"Login"}>
              <button className="iniciarSession">Iniciar sesion</button>
            </Link>
          ) : (
            <button
              className="cerrarSession"
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              Cerrar sesion
            </button>
          )}
        </div>

        <button className="Nav-Button" onClick={toggleMenu}>
          <img className="Logo" src={hamburger} />
        </button>
      </nav>
      {menuOpen && <Menu open={menuOpen} />}
    </>
  );
}
