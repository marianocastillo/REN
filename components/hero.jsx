import React, { Fragment } from "react";
import Image from "next/image";
// imagenes
import hero from "../public/img/hero-img.png";

export default function Hero() {
  return (
    <Fragment>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Sus paquetes llegan a todo el <span className="text-primary">país</span><i className="bi bi-geo-alt" /></h1>
              <h2 data-aos="fade-up" data-aos-delay={400}>
                RE<span className="text-primary">&</span>RAM Courier ofrece un plan logístico para satisfacer las necesidades de sus 
                clientes en el menor tiempo <i className="bi bi-clock"/>
              </h2>
              <div data-aos="fade-up" data-aos-delay={800}>
                <button className="btn btn-primary shadow" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <i className="bi bi-search" /> Rastrear Paquete
                </button>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay={200} >
              <Image src={hero} className="img-fluid animated" width={500} height={300} alt="..." />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
    </Fragment>
  );
}