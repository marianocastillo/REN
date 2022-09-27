import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Login - RE&RAM</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />
        {/* Favicons */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        {/* Google Fonts */}
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet" />
        {/* Vendor CSS Files */}
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet" />
        <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet" />
        <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link href="assets/vendor/simple-datatables/style.css" rel="stylesheet" />
        {/* Template Main CSS File */}
        <link href="assets/css/style.css" rel="stylesheet" />
      </Head>

      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <a href={"/"} className="logo d-flex align-items-center w-auto" >
                      <img src="assets/img/logo.png" alt="" />
                      <span className="d-none d-lg-block">RE<span className="text-primart">&</span>RAM Courier </span>
                    </a>
                  </div>
                  {/* End Logo */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Iniciar sesión
                        </h5>
                        <p className="text-center small">
                          Digite su usuario y contraseña
                        </p>
                      </div>
                      <form className="row g-3 needs-validation">
                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">
                            Usuario
                          </label>
                          <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend" >
                              @
                            </span>
                            <input type="text" name="username" className="form-control" id="yourUsername" required />
                            <div className="invalid-feedback">
                              Please enter your username.
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Contraseña
                          </label>
                          <input
                            type="password" name="password" className="form-control" id="yourPassword" required />
                          <div className="invalid-feedback">
                            Please enter your password!
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input
                              className="form-check-input" type="checkbox" name="remember" defaultValue="true" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe"  >
                              Recordarme
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button onClick={() => router.push("/dashboardUser")} className="btn btn-primary w-100">
                            Iniciar sesión
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            No tienes cuenta?{" "}
                            <Link href="/register">
                              <a>Crea una cuenta</a>
                            </Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* End #main */}

      {/* <!-- Vendor JS Files --> */}
      <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/chart.js/chart.min.js"></script>
      <script src="assets/vendor/echarts/echarts.min.js"></script>
      <script src="assets/vendor/quill/quill.min.js"></script>
      <script src="assets/vendor/simple-datatables/simple-datatables.js"></script>
      <script src="assets/vendor/tinymce/tinymce.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>

      {/* <!-- Template Main JS File --> */}
      <script src="assets/js/main.js"></script>
    </>

  );
}