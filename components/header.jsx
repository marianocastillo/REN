import React, { Fragment } from "react";
import Link from "next/link";

export default function Header() {
  return (
    <Fragment>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1><a href={"/"}>RE<span className="text-primary">&</span>RAM</a></h1>
          </div>
          <nav id="navbar" className="navbar">
            <ul>
              <li><Link href={"/"}><a className="nav-link scrollto">INICIO</a></Link></li>
              <li><a className="nav-link scrollto" href={"#about"}>NOSOTROS</a></li>
              <li><a className="nav-link scrollto" href={"#services"}>SERVICIOS</a></li>
              <li><a target={"blank"} className="nav-link" href={"https://www.aduanas.gob.do/de-interes/consultas/registro-courier"}>REGISTRO RUA</a></li>
              <li><a target={"blank"} className="nav-link" href={"https://reyram2022.blogspot.com/"}>BLOG</a></li>
              <li><a target={"blank"} className="nav-link text-primary" href={"https://forms.gle/PaTBiSDsqhQdUNqh9"}>HAZTE SOCIO</a></li>
              <li><a className="nav-link scrollto" href="#contact">CONTACTO</a></li>
              <li><Link href="/login"><a className="getstarted shadow" ><i className="bi bi-person m-1" /> Mi Cuenta</a></Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
        </div>
      </header>
      {/* End Header */}
    </Fragment>
  );
}