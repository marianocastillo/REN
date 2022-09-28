import React, { Fragment } from "react";
import Image from "next/image";
import Head from "next/head";
// componentes
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
// imagenes
import client1 from "../public/img/clients/client-1.png";
import client2 from "../public/img/clients/client-2.png";
import client3 from "../public/img/clients/client-3.png";
import client4 from "../public/img/clients/client-4.png";
import client5 from "../public/img/clients/client-5.png";
import client6 from "../public/img/clients/client-6.png";
import client7 from "../public/img/clients/client-7.png";
import client8 from "../public/img/clients/client-8.png";
import client9 from "../public/img/clients/client-9.png";
import client10 from "../public/img/clients/client-10.png";
import client11 from "../public/img/clients/client-11.png";
import client12 from "../public/img/clients/client-12.png";
import counts from "../public/img/counts-img.jpg";
import sucursal2 from "../public/img/sucursal2.jpg";
import sucursal1 from "../public/img/sucursal1.jpg";
import sucursal3 from "../public/img/sucursal3.jpg";
import rastrear from "../public/img/rastrear.png";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>RE&RAM | Courier</title>
        <meta content="Courier Web Application" name="description" />
        <meta content="" name="keywords" />
        {/* <!-- Vendor CSS Files --> */}
        <link href="vendor/aos/aos.css" />
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link href="vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        {/* <!-- Template Main CSS File --> */}
        <link href="css/style.css" rel="stylesheet" />
      </Head>
      {/* Header section */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Main section */}
      <main id="main">
        {/* ======= Clients Section ======= */}
        <section id="clients" className="clients clients">
          <div className="container">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-lg-2 col-md-4 col-6">
                      <a target={"blank"} href={"https://www.amazon.com/"}>
                        <Image src={client1} width={85} height={32} className="img-fluid" alt="" data-aos="zoom-in" />
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <a href="https://www.ebay.com/" target={"blank"}>
                        <Image src={client2} width={85} height={32} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={100} />
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <a href="https://www.westernunion.com/us/en/home.html" target={"blank"}>
                        <Image src={client3} width={85} height={32} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={200} />
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <a href="https://best.aliexpress.com/" target={"blank"}>
                        <Image src={client4} width={85} height={32} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={300} />
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <a href="https://offer.alibaba.com/" target={"blank"}>
                        <Image src={client5} width={85} height={32} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={400} />
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <a href="https://www.gearbest.com/" target={"blank"}>
                        <Image src={client6} width={85} height={32} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={500} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-lg-2 col-md-4 col-6">
                      <a target={"blank"} href="https://www.nike.com/">
                        <Image src={client7} width={85} height={32} className="img-fluid" alt="..." data-aos="zoom-in" />
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <a href="https://www.ebay.com/" target={"blank"}>
                        <Image src={client8} width={85} height={32} className="img-fluid" alt="..." data-aos="zoom-in" data-aos-delay={100} />
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <a href="https://www.westernunion.com/us/en/home.html" target={"blank"}>
                        <Image src={client9} width={85} height={32} className="img-fluid" alt="..." data-aos="zoom-in" data-aos-delay={200} />
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <a href="https://best.aliexpress.com/" target={"blank"}>
                        <Image src={client10} width={85} height={32} className="img-fluid" alt="..." data-aos="zoom-in" data-aos-delay={300} />
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <a href="https://offer.alibaba.com/" target={"blank"}>
                        <Image src={client11} width={85} height={32} className="img-fluid" alt="..." data-aos="zoom-in" data-aos-delay={400} />
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <a href="https://www.gearbest.com/" target={"blank"}>
                        <Image src={client12} width={90} height={32} className="img-fluid" alt="..." data-aos="zoom-in" data-aos-delay={500} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Clients Section */}
        {/* ======= About Us Section ======= */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2><span className="text-primary">¿Quiénes</span> Somos?</h2>
            </div>
            <div className="row content">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={150}>
                <p>
                  Somos un <span className="text-primary">OPERADOR LOGÍSTICO</span> atentos a satisfacer las necesidades de la comunidad local, nacional e internacional
                  en los servicios de:
                </p>
                <ul>
                  <li><i className="ri-check-double-line" /> Transporte de Carga.</li>
                  <li><i className="ri-check-double-line" /> Mudanza.</li>
                  <li><i className="ri-check-double-line" /> Courier y Almacenaje.</li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay={300} >
                <p>
                  Nos caracterizamos por brindar servicios de courier con tiempo de entrega más rápido, por tanto, muchas empresas confían en nosotros.
                </p>
                <div className="row">
                  <div className="col"><a href="#contact" className="btn-learn-more shadow"><i className="bi bi-pen" /> Sugerencias </a></div>
                  <div className="col"><a target={"blank"} href={"https://forms.gle/PaTBiSDsqhQdUNqh9"} className="btn-learn-more shadow"><i className="bi bi-person" /> Hazte Socio </a></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Us Section */}
        {/* ======= Counts Section ======= */}
        <section id="counts" className="counts">
          <div className="container">
            <div className="row">
              <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay={150} >
                <video width="500" height="500" autoPlay loop controls muted>
                  <source src="/img/logistica4.mp4" type="video/mp4"/>
                    </video>
                  </div>
                  <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay={300} >
                    <div className="content d-flex flex-column justify-content-center">
                      <div className="row">
                        <div className="col-md-6 d-md-flex align-items-md-stretch">
                          <div className="count-box">
                            <i className="bi bi-globe" />
                            <p>
                              <strong>MISIÓN <br /></strong> Ofrecer servicios aduanales con calidad, seguridad y profesionalismo a importadores y exportadores.
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6 d-md-flex align-items-md-stretch">
                          <div className="count-box">
                            <i className="bi bi-eye" />
                            <p>
                              <strong>VISIÓN <br /></strong> Constituirnos en socios de nuestros clientes, entender sus necesidades
                              y satisfacer cada una de ellas mediante una respuesta rápida en el trámite de sus mercancías.
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6 d-md-flex align-items-md-center">
                          <div className="count-box">
                            <i className="bi bi-heart" />
                            <p><strong>VALORES <br /></strong></p>
                            <div className="container mb-4">
                              <ul>
                                <li>Voluntad Empresarial</li>
                                <li>Respeto</li>
                                <li>Ética Profesional</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End .content*/}
                  </div>
              </div>
            </div>
        </section>
        {/* End Counts Section */}
        {/* ======= Services Section ======= */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2><span className="text-primary">NUESTROS</span> SERVICIOS</h2>
              <p>Ofrecemos un plan logístico, para satisfacer los requerimientos de nuestros clientes en todo lo
                relacionado con el comercio internacional, brindando el mejor servicio al más bajo costo.</p>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box text-center" data-aos="fade-up" data-aos-delay={100}>
                  <div className="icon">
                    <i className="bi bi-airplane" />
                  </div>
                  <h4 className="title">
                    <a href="">Importación / Exportación</a>
                  </h4>
                  <p className="description">
                    Ingreso legal de mercancías proveniente de otro país, que puede ser más barata o de mejor calidad;
                    en otras palabras, es la compra de bienes o servicios provenientes de empresas extranjeras para introducirla
                    al interior del país en el que son demandados para el uso y consumo.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box text-center" data-aos="fade-up" data-aos-delay={200}>
                  <div className="icon">
                    <i className="bi bi-truck" />
                  </div>
                  <h4 className="title">
                    <a href="">Transporte y Transporte de Carga</a>
                  </h4>
                  <p className="description">
                    El tipo de transporte encargado de movilizar bienes y mercaderías de un lugar de origen a otro de destino,
                    de manera tal que estos alcancen su destino en buen estado y dentro de un lapso de tiempo concreto prestablecido.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box text-center" data-aos="fade-up" data-aos-delay={300}>
                  <div className="icon">
                    <i className="bi bi-file-check" />
                  </div>
                  <h4 className="title">
                    <a target={"blank"} rel="noreferrer" href={"https://www.aduanas.gob.do/de-interes/consultas/registro-courier"}>Verificación</a>
                  </h4>
                  <p className="description">
                    Conjunto de actividades ejercidas antes, durante y con posterioridad
                    al despacho, necesarias para comprobar la veracidad del contenido de las declaraciones
                    aduaneras, así como el cumplimiento de las formalidades legales y operativas, de
                    conformidad con los procedimientos establecidos en la ley, los reglamentos y normas.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box text-center" data-aos="fade-up" data-aos-delay={400}>
                  <div className="icon">
                    <i className="bi bi-cash-coin" />
                  </div>
                  <h4 className="title">
                    <a href="">Liquidación y pago de impuestos aduanales</a>
                  </h4>
                  <p className="description">
                    A los efectos de la liquidación de los tributos y de los tratamientos arancelarios de más favor serán aplicables,
                    salvo disposición expresa en contrario, las normas vigentes a las siguientes fechas: a) la de numeración y registro
                    del despacho aduanero o del expediente en su caso, para la importación de las mercaderías; y b) la de la detención o
                    la denuncia, en los casos de contrabando.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Services Section */}
        {/* ======= Features Section ======= */}
        <section id="features" className="features">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Beneficios</h2>
              <p>No dejes pasar esta gran oportunidad, y obtén tu paquete en el menor tiempo y bajo costo.</p>
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay={300}>
              <div className="col-lg-3 col-md-4">
                <div className="icon-box">
                  <i className="bi bi-bookmark-check" style={{ color: "#ffbb2c" }} />
                  <h3>
                    <a href="">Acumula Puntos</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="bi bi-gift" style={{ color: "#5578ff" }} />
                  <h3>
                    <a href="">De 0 a 10 libras, 2 libras gratis</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="bi bi-box" style={{ color: "#e80368" }} />
                  <h3>
                    <a href="">+3 Pedidos 2 libras gratis</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                <div className="icon-box">
                  <i className="bi bi-cash-coin" style={{ color: "#e361ff" }} />
                  <h3>
                    <a href="">Devolución Gratis</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="bi bi-truck" style={{ color: "#47aeff" }} />
                  <h3>
                    <a href="">Delivery Hasta Donde Estés</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="bi bi-phone" style={{ color: "#e80368" }} />
                  <h3>
                    <a href="">Aplicación Móvil</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="bi bi-receipt" style={{ color: "#ffa76e" }} />
                  <h3>
                    <a href="">Informe de tu Paquete</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="bi bi-search" style={{ color: "#47aeff" }} />
                  <h3>
                    <a href="">Seguimiento de tu paquete</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Features Section */}
        {/* ======= Blog Section ======= */}
        <section id="testimonials" className="testimonials section-bg">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2><span className="text-primary">OTROS</span> BENEFICIOS</h2>
              <p>Mantente actualizado con las noticias más recientes sobre Courier</p>
            </div>
            {/* ======= More Services Section ======= */}
            <section id="more-services" className="more-services">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="card" style={{ backgroundImage: 'url("img/employe.jpg")' }} data-aos="fade-up" data-aos-delay={100}>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href="">Sé Parte de Nuestro Equipo</a>
                        </h5>
                        <p className="card-text">
                          Conviertéte en un exportador exitoso registrándote en nuestra empresa hoy mismo.
                        </p>
                        <div className="read-more">
                          <a target={"blank"} href={"https://docs.google.com/forms/d/e/1FAIpQLSfQpdM0HjfqKPZwj_qaaO2zozPpEHzGCiRQDyS4JgLdCQYyqQ/viewform"}><i className="bi bi-arrow-right" /> Regístrate</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                    <div className="card" style={{ backgroundImage: 'url("img/exports.jpg")' }} data-aos="fade-up" data-aos-delay={200}>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href="">Prueba de Exportación</a>
                        </h5>
                        <p className="card-text">
                          Las mercancías originarias de una Parte se beneficiarán del trato arancelario
                          preferencial de este Acuerdo, al momento de su importación en la otra Parte.
                        </p>
                        <div className="read-more">
                          <a target={"blank"} href={"#"}><i className="bi bi-arrow-right" /> Ver más</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch mt-4">
                    <div className="card" style={{ backgroundImage: 'url("img/more-services-3.jpg")' }} data-aos="fade-up" data-aos-delay={100}>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href="">¿Cómo recibes o envías tus paquetes?</a>
                        </h5>
                        <p className="card-text">
                          Te llevamos tus paquetes hasta la puerta de tu hogar, sin costo adicional.
                        </p>
                        <div className="read-more">
                          <a href={"#faq"}><i className="bi bi-arrow-right scrollto" /> Ver Preguntas Frecuentes</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch mt-4">
                    <div className="card" style={{ backgroundImage: 'url("img/more-services-4.jpg")' }} data-aos="fade-up" data-aos-delay={200} >
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href={"#"}>Haz tu Pre-Alerta</a>
                        </h5>
                        <p className="card-text">
                          Envíanos la información de tu compra para agilizar tu entrega.
                        </p>
                        <div className="read-more">
                          <a href={"#"}><i className="bi bi-arrow-right" /> CREAR PRE-ALERTA </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End More Services Section */}
          </div>
        </section>
        {/* End Blog Section */}
        {/* ======= sucursales Section ======= */}
        <section id="team" className="team section-bg">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2><span className="text-primary">NUESTRAS</span> SUCURSALES</h2>
              <p>Más suscursales para brindarte el mejor servicio del mercado.</p>
            </div>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="card shadow">
                    <Image src={sucursal2} width={500} height={500} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">La Romana</h5>
                      <p className="card-text"><i className="bi bi-geo-alt" /> Dirección:</p>
                      <p>C/ 3ra #35 A, Ensanche Isabelita, Santo Domingo Este, Rep. Dom.</p>
                      <p className="card-text"><i className="bi bi-telephone" /> Teléfono:</p>
                      <p>(809) 868-3129 / +1 (929) 375-2165</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 mt-4 mt-md-0">
                  <div className="card shadow">
                    <Image src={sucursal1} width={500} height={500} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Oficina Principal</h5>
                      <p className="card-text"><i className="bi bi-geo-alt" /> Dirección:</p>
                      <p>C/ 3ra #35 A, Ensanche Isabelita, Santo Domingo Este, Rep. Dom.</p>
                      <p className="card-text"><i className="bi bi-telephone" /> Teléfono:</p>
                      <p>(809) 868-3129 / +1 (929) 375-2165</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 mt-4 mt-md-0">
                  <div className="card shadow">
                    <Image src={sucursal3} width={500} height={500} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Gazcue</h5>
                      <p className="card-text"><i className="bi bi-geo-alt" /> Dirección:</p>
                      <p>C/ 3ra #35 A, Ensanche Isabelita, Santo Domingo Este, Rep. Dom.</p>
                      <p className="card-text"><i className="bi bi-telephone" /> Teléfono:</p>
                      <p>(809) 868-3129 / +1 (929) 375-2165</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End sucursales Section */}
        {/* ======= RUA Section ======= */}
        <section id="pricing" className="pricing">
          <div className="container">
            <div className="section-title">
              <h2><span className="text-primary">AVISO</span> DGA</h2>
              <p><strong>Socializado con los Courier, lo establece la Norma 01-2018</strong></p>
            </div>
            <div className="container ">
              <div className="card shadow bg-info rounded">
                <div className="card-body text-center">
                  <p className="text-dark"><i className="bi bi-info-circle-fill" /> La Dirección General de Aduanas (DGA) inició el proceso del Registro Único Aduanero (RÚA) para todos los usuarios de
                    servicios Courier, una herramienta que tiene el propósito de salvaguardar los derechos del usuario y agilizar el
                    despacho de sus compras por internet.</p>
                  <p className="text-dark">Con el RÚA se busca diferenciar a quienes utilizan este canal con fines comerciales de aquellos que lo hacen para
                    sus compras personales, únicas beneficiadas del tope “de minimis” libres de impuestos de hasta US$200 (Doscientos Dólares Norteamericanos),
                    contemplada en el Decreto 402-05, que aprueba el Reglamento para el Despacho Expreso de Envíos.</p>
                  <p className="text-dark">El Registro Único Aduanero fue establecido en la Norma 01-2018, que regula el fraccionamiento de mercancías para fines comerciales a
                    través de empresas Courier, puesta en vigor en febrero de 2018. La DGA sometió la Norma 01-2018 a un proceso abierto de consultas
                    públicas por varios meses, durante el que se recibieron y consideraron las opiniones de los usuarios y de las mismas empresas que
                    ofrecen el servicio, hasta emitir el documento final.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End RUA Section */}
        {/* ======= F.A.Q Section ======= */}
        <section id="faq" className="faq">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2><span className="text-primary">Preguntas</span> Frecuentes</h2>
              <p>No encontraste lo que buscabas? <a className="nav-link text-primary scrollto" href="#contact">Escribénos</a></p>
            </div>
            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100} >
              <div className="col-lg-5">
                <i className="ri-question-line" />
                <h4>¿Cómo puedo pagar los impuestos aduanales?</h4>
              </div>
              <div className="col-lg-7">
                <p>
                  El pago de los impuestos se realiza a la DGA (Dirección General de Aduanas),
                  se puede realizar de forma física en ventanilla en el Banco de Reservas o con
                  el Internet Banking de tu preferencia.
                </p>
              </div>
            </div>
            {/* End F.A.Q Item*/}
            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200} >
              <div className="col-lg-5">
                <i className="ri-question-line" />
                <h4>
                  Vine a retirar un paquete, pero no soy el titular de la cuenta, ¿qué debo hacer?
                </h4>
              </div>
              <div className="col-lg-7">
                <p>
                  El titular de la cuenta debe enviar una autorización vía E-mail al dpto. de servicio
                  al cliente con los datos de la persona que retirara el paquete. Esta persona estará
                  autorizada permanentemente en la cuenta del cliente para realizar retiros.
                </p>
              </div>
            </div>
            {/* End F.A.Q Item*/}
            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={300} >
              <div className="col-lg-5">
                <i className="ri-question-line" />
                <h4>
                  Tengo una cuenta personal y quiero cambiarla a corporativa, ¿cual es el proceso y si tiene
                  algún beneficio adicional o tarifa especial por ser una compañía?
                </h4>
              </div>
              <div className="col-lg-7">
                <p>
                  Para proceder al cambio, debe llenar el formulario de cuenta corporativa, el cual debe estar
                  firmado y sellado, tener anexo copia de la cédula, del carnet de RNC y copia del registro mercantil.
                  Asimismo es necesario completar el formulario de autorización de enlace al SIGA. Las cuentas corporativas
                  poseen beneficios adicionales tales como la asignación de un ejecutivo para darle estrecho seguimiento a
                  sus importaciones y se le asigna tarifa especial según el movimiento que tenga la cuenta.
                </p>
              </div>
            </div>
            {/* End F.A.Q Item*/}
            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={400} >
              <div className="col-lg-5">
                <i className="ri-question-line" />
                <h4>Quiero comprar una mercancía por internet y no tengo forma de pagar al suplidor, ¿puedo hacerlo con RE & RAM?</h4>
              </div>
              <div className="col-lg-7">
                <p>
                  Realizamos el servicio de compra por internet en nuestra tienda virtual, solo debe pasar por
                  nuestra oficina con la información del artículo que desea comprar.
                </p>
              </div>
            </div>
            {/* End F.A.Q Item*/}
            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={500} >
              <div className="col-lg-5">
                <i className="ri-question-line" />
                <h4>
                  Deseo enviar un paquete desde Santo Domingo a USA o a cualquier parte del mundo, ¿puedo hacerlo en RE & RAM?
                </h4>
              </div>
              <div className="col-lg-7">
                <p>
                  Este es un servicio que brinda RE & RAM con el cual puede realizar envíos de documentos y paquetes a
                  cualquier parte del mundo sin importar el peso del mismo.
                </p>
              </div>
            </div>
            {/* End F.A.Q Item*/}
          </div>
        </section>
        {/* End F.A.Q Section */}
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Contáctanos</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100} >
                <div className="contact-about">
                  <h3>RE<span className="text-primary">&</span>RAM</h3>
                  <p>
                    Es una empresa de servicios aduanales aéreos , marítimos y terrestres internacionales de carga, exportación e importación de mercancía.
                  </p>
                  <h6>Redes sociales:</h6>
                  <div className="social-links">
                    <a href="#" className="twitter">
                      <i className="bi bi-twitter" />
                    </a>
                    <a href="#" className="facebook">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="#" className="instagram">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay={200} >
                <div className="info">
                  <div>
                    <i className="ri-map-pin-line" />
                    <p>
                      C/ 3ra #35 A, Ensanche Isabelita,
                      <br />
                      Santo Domingo Este, Rep. Dom.
                    </p>
                  </div>
                  <div>
                    <i className="ri-mail-send-line" />
                    <p>reyramasuntos@gmail.com</p>
                  </div>
                  <div>
                    <i className="ri-phone-line" />
                    <p>
                      +1 809-868-3129 <br />
                      EE.UU. 929-375-2165
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay={300} >
                <form className="php-email-form" >
                  <div className="form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Nombre completo" required />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Tu correo" required />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" required />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" name="message" rows={5} placeholder="Mensaje" required defaultValue={""} />
                  </div>
                  <div className="my-3">
                    <div className="loading">Cargando</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Su mensaje ha sido enviado. Gracias!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="shadow"><i className="bi bi-send" /> Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
      {/* Footer section */}
      <Footer />
      {/* Rastrear modal */}
      <Fragment>
        <div className="modal text-center" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="card" >
                  <Image src={rastrear} width={190} height={240} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Rastrea tu paquete:</h5>
                    <input type="text" className="form-control mb-3" placeholder="Numero de tracking" />
                    <a href="#" className="btn btn-primary shadow"><i className="bi bi-search" /> RASTREAR</a>
                  </div>
                </div>
              </div>
              <div className="modal-footer text-center">
                <p>Presentar el rastrear aqui</p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
        className="bi bi-arrow-up-short"></i></a>

      {/* <!-- Vendor JS Files --> */}
      <script src={"vendor/purecounter/purecounter_vanilla.js"} async />
      <script src={"vendor/aos/aos.js"} async />
      <script src={"vendor/bootstrap/js/bootstrap.bundle.min.js"} async />
      <script src={"vendor/glightbox/js/glightbox.min.js"} async />
      <script src={"vendor/isotope-layout/isotope.pkgd.min.js"} async />
      <script src={"vendor/swiper/swiper-bundle.min.js"} async />
      {/* <!-- Template Main JS File --> */}
      <script src={"js/main.js"} async />

    </>
  );
} 
