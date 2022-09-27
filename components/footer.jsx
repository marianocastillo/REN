import React, { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 text-lg-left text-center">
              <div className="copyright">
                © 2022 <strong>RE<span className="text-primary">&</span>RAM</strong>. Todos los derechos reservados
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
                <a href="#intro" className="scrollto">Inicio</a>
                <a href="#about" className="scrollto">Nosotros</a>
                <a href="#">Política de Privacidad</a>
                <a href="#">Términos de Uso</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </Fragment>
  );
}