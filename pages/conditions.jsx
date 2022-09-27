import React from "react";
import Head from "next/head";
// Components
import Header from "../components/header";
import Footer from "../components/footer";

export default function Conditions() {
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
      <Header />
      <main className="container text-center mb-4">
        <div className="card mt-5">
          <div className="card-body">
          </div>
        </div>
        <h2 className="text-center text-primary mt-4">Términos y Condiciones de Uso General.</h2>
        <p>Estos Términos y Condiciones de Uso General (“Términos de Uso”) regulan el uso del sitio web https://www.reyramcourier.com (en lo adelante RE&RAM),
          website informativo propiedad de RE&RAM. Por favor, lea los siguientes Términos antes de hacer uso de este website. El uso posterior del website
          significa la aceptación de los Términos de Uso.</p>
        <p>
          El usuario se compromete a utilizar el website y los servicios de conformidad con la ley y con estos Términos de Uso. Asimismo,
          se obliga a abstenerse de utilizar el website y los servicios con fines o efectos ilegales, como reproducción sin autorización
          que corresponde con el derecho de autor. El usuario responderá de los daños y perjuicios de toda naturaleza que RE&RAM.com pueda
          sufrir, directa o indirectamente, como consecuencia del incumplimiento de cualquiera de las obligaciones derivadas de estos Términos
          de Uso. RE&RAM.com se reserva el derecho a denegar o retirar el acceso al website y/o a los servicios, en cualquier momento y sin
          necesidad de previo aviso a aquellos usuarios que incumplan estos Términos de Uso.
        </p>
        <p>
          El usuario reconoce y acepta que el uso y/o la interpretación de la información brindada en este website o de terceros sitios citados
          como fuentes de información incluidas en este website, es a su sólo y exclusivo riesgo.
        </p>
        <p>
          La información contenida en RE&RAM.com, hace referencia a informaciones, productos y servicios de RE&RAM. Dicha información es propiedad de RE&RAM,
          por lo que el usuario se compromete a no redistribuir, retransmitir, divulgar, copiar, modificar, publicar, vender o reproducir la información,
          productos o servicios brindada en este sitio. Asimismo, el usuario se compromete a usar los servicios sólo para uso y beneficio personal y no comercial.
        </p>
        <p>
          Los usuarios de RE&RAM.com que accedan a informaciones, productos y/o servicios ofrecidos por RE&RAM, acuerdan someterse a todas las leyes,
          resoluciones y normas tanto las vigentes, como las que se aprueben en el futuro en la República Dominicana.
        </p>
        <p>
          El nombre de RE&RAM y logotipo son propiedad y marcas registradas de RE&RAM, los usuarios no podrán utilizar ninguna marca registrada
          sin el consentimiento por escrito de RE&RAM y/o de los proveedores de productos y servicios afiliados al sitio.
        </p>
        <p>
          Toda la información y contenido incluyendo los programas de Software disponibles en o a través de RE&RAM.com, están protegidos.
          A los usuarios de este servicio les está prohibido modificar, distribuir, transmitir, exhibir, publicar, vender, licenciar, crear
          trabajos derivados o utilizar cualquier contenido disponible en o a través de esta dirección para fines públicos o comerciales.
        </p>
        <p>
          Todo el contenido, productos y servicios en esta dirección u obtenidos de un sitio enlazado a ésta se ofrecerán al usuario en las
          condiciones “en que están disponibles” sin garantía de ningún tipo. En tal sentido, bajo ninguna circunstancia RE&RAM.com ni RE&RAM,
          o ni otra compañía cuya información esté aquí contenida en esta dirección, serán responsables por las pérdidas o daños que surjan de la
          autorización de parte de un usuario de la información aquí contenida ni asumen responsabilidad alguna con los contenidos y servicios
          comerciales o de otra índole de sitios webs que se puedan enlazar electrónicamente (link) directa o indirectamente a través RE&RAM.com.
          Es responsabilidad del usuario evaluar la fidelidad, exactitud y utilidad de cualquier opinión, consejo u otro contenido disponible a través
          de la pagina.. El usuario debe buscar la opinión de profesionales, cuando lo considere apropiado referente a la evaluación de cualquier opinión,
          consejo, producto, servicio u otro contenido.
        </p>
        <p>
          La información, software, productos, imágenes y descripciones de servicios , estados de cuenta y productos publicados en RE&RAM.com
          pueden contener imprecisiones o errores tipográficos y RE&RAM y ni cualquier otra compañía que cuya información aquí contenida en esta
          dirección, no asumen responsabilidades por tales imprecisiones o errores.
        </p>
        <p>
          <strong>Para fines de autorización de reproducción favor contacte a:</strong> 
        </p>
        <div className="row"> 
          <div className="col">
            <p>Tel.: (809) 868-3129 / USA +1 (929) 375-2165</p>
          </div>
          <div className="col">
            <p>Email.: reyramasuntos@gmail.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}