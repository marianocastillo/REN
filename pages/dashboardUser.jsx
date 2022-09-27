import React from "react";
import Head from "next/head";

export default function DashboardUser() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Dashboard</title>
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

      {/* ======= Header ======= */}
      <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span className="d-none d-lg-block">RE&RAM </span>
          </a>
          <i className="bi bi-list toggle-sidebar-btn" />
        </div>
        {/* End Logo */}
        <div className="search-bar">
          <form className="search-form d-flex align-items-center" method="POST" action="#"    >
            <input type="text" name="query" placeholder="Buscar" title="Enter search keyword" />
            <button type="submit" title="Search">
              <i className="bi bi-search" />
            </button>
          </form>
        </div>
        {/* End Search Bar */}
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search" />
              </a>
            </li>
            {/* End Search Icon*/}
            <li className="nav-item dropdown">
              <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-bell" />
                <span className="badge bg-primary badge-number">4</span>
              </a>
              {/* End Notification Icon */}
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  Tienes 4 notificacion nuevas
                  <a href="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning" />
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-x-circle text-danger" />
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-check-circle text-success" />
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary" />
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="#">Show all notifications</a>
                </li>
              </ul>
              {/* End Notification Dropdown Items */}
            </li>
            {/* End Notification Nav */}
            <li className="nav-item dropdown">
              <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-chat-left-text" />
                <span className="badge bg-success badge-number">3</span>
              </a>
              {/* End Messages Icon */}
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-header">
                  Tienes 3 mensajes nuevos
                  <a href="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="message-item">
                  <a href="#">
                    <img
                      src="assets/img/messages-1.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>Maria Hudson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>4 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="message-item">
                  <a href="#">
                    <img
                      src="assets/img/messages-2.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>Anna Nelson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>6 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="message-item">
                  <a href="#">
                    <img
                      src="assets/img/messages-3.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>David Muldon</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>8 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="#">Show all messages</a>
                </li>
              </ul>
              {/* End Messages Dropdown Items */}
            </li>
            {/* End Messages Nav */}
            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="assets/img/profile-img.jpg"
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  Nombre de usuario
                </span>
              </a>
              {/* End Profile Iamge Icon */}
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>Nombre de usuario</h6>
                  <span>Usuario Standard</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="users-profile.html" >
                    <i className="bi bi-person" />
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="users-profile.html" >
                    <i className="bi bi-gear" />
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="pages-faq.html" >
                    <i className="bi bi-question-circle" />
                    <span>Need Help?</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <i className="bi bi-box-arrow-right" />
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
              {/* End Profile Dropdown Items */}
            </li>
            {/* End Profile Nav */}
          </ul>
        </nav>
        {/* End Icons Navigation */}
      </header>
      {/* End Header */}
      {/* ======= Sidebar ======= */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="/">
              <i className="bi bi-house-door" />
              <span>Inicio</span>
            </a>
          </li>
          {/* End Dashboard Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#" >
              <i className="bi bi-menu-button-wide" />
              <span>Disponibles</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
          </li>
          {/* End Components Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#" >
              <i className="bi bi-boxes" />
              <span>Recepciones</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
          </li>
          {/* End Forms Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#"  >
              <i className="bi bi-bell" />
              <span>Pre-Alerta</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
          </li>
          {/* End Tables Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#" >
              <i className="bi bi-info-circle" />
              <span>Post-Alerta</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
          </li>
          {/* End Charts Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#"     >
              <i className="bi bi-arrow-clockwise" />
              <span>Consulta Histórica</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
          </li>
          {/* End Icons Nav */}
          <li className="nav-heading">Más</li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-calculator" />
              <span>Calculadora</span>
            </a>
          </li>
          {/* End Profile Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-faq.html">
              <i className="bi bi-search" />
              <span>Rastreo de Paquete</span>
            </a>
          </li>
          {/* End F.A.Q Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-contact.html">
              <i className="bi bi-building" />
              <span>Sucursales</span>
            </a>
          </li>
          {/* End Contact Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-register.html">
              <i className="bi bi-briefcase" />
              <span>Servicios</span>
            </a>
          </li>
          {/* End Register Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-login.html">
              <i className="bi bi-question" />
              <span>Preguntas</span>
            </a>
          </li>
        </ul>
      </aside>
      {/* End Sidebar*/}
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Inicio</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section dashboard">
          <div className="row">
            {/* Left side columns */}
            <div className="col-lg-8">
              <div className="row">
                {/* Sales Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card sales-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filtro</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Hoy
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Este Mes
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        Paquetes <span>| Hoy</span>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-box" />
                        </div>
                        <div className="ps-3">
                          <h6>145</h6>
                          <span className="text-muted small pt-2 ps-1">
                            increase
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Sales Card */}
                {/* Revenue Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card revenue-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filtro</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Hoy
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Este Mes
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        Recepcion <span>| Este Mes</span>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-currency-dollar" />
                        </div>
                        <div className="ps-3">
                          <h6>$3,264</h6>
                          <span className="text-muted small pt-2 ps-1">
                            increase
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Revenue Card */}
                {/* Customers Card */}
                <div className="col-xxl-4 col-xl-12">
                  <div className="card info-card customers-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        Cancelados <span>| Este Mes</span>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-x-circle" />
                        </div>
                        <div className="ps-3">
                          <h6>1244</h6>
                          <span className="text-muted small pt-2 ps-1">
                            decrease
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Customers Card */}
                {/* Reports */}
                <div className="col-12">
                  <div className="card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        Reports <span>/Today</span>
                      </h5>
                      {/* Line Chart */}
                      <div id="reportsChart" />
                      {/* End Line Chart */}
                    </div>
                  </div>
                </div>
                {/* End Reports */}
                {/* Recent Sales */}
                <div className="col-12">
                  <div className="card recent-sales overflow-auto">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        Recent Sales <span>| Today</span>
                      </h5>
                      <table className="table table-borderless datatable">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <a href="#">#2457</a>
                            </th>
                            <td>Brandon Jacob</td>
                            <td>
                              <a href="#" className="text-primary">
                                At praesentium minu
                              </a>
                            </td>
                            <td>$64</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">#2147</a>
                            </th>
                            <td>Bridie Kessler</td>
                            <td>
                              <a href="#" className="text-primary">
                                Blanditiis dolor omnis similique
                              </a>
                            </td>
                            <td>$47</td>
                            <td>
                              <span className="badge bg-warning">Pending</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">#2049</a>
                            </th>
                            <td>Ashleigh Langosh</td>
                            <td>
                              <a href="#" className="text-primary">
                                At recusandae consectetur
                              </a>
                            </td>
                            <td>$147</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">#2644</a>
                            </th>
                            <td>Angus Grady</td>
                            <td>
                              <a href="#" className="text-primar">
                                Ut voluptatem id earum et
                              </a>
                            </td>
                            <td>$67</td>
                            <td>
                              <span className="badge bg-danger">Rejected</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">#2644</a>
                            </th>
                            <td>Raheem Lehner</td>
                            <td>
                              <a href="#" className="text-primary">
                                Sunt similique distinctio
                              </a>
                            </td>
                            <td>$165</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* End Recent Sales */}
                {/* Top Selling */}
                <div className="col-12">
                  <div className="card top-selling overflow-auto">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body pb-0">
                      <h5 className="card-title">
                        Top Selling <span>| Today</span>
                      </h5>
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">Preview</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Sold</th>
                            <th scope="col">Revenue</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <a href="#">
                                <img src="assets/img/product-1.jpg" alt="" />
                              </a>
                            </th>
                            <td>
                              <a href="#" className="text-primary fw-bold">
                                Ut inventore ipsa voluptas nulla
                              </a>
                            </td>
                            <td>$64</td>
                            <td className="fw-bold">124</td>
                            <td>$5,828</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">
                                <img src="assets/img/product-2.jpg" alt="" />
                              </a>
                            </th>
                            <td>
                              <a href="#" className="text-primary fw-bold">
                                Exercitationem similique doloremque
                              </a>
                            </td>
                            <td>$46</td>
                            <td className="fw-bold">98</td>
                            <td>$4,508</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">
                                <img src="assets/img/product-3.jpg" alt="" />
                              </a>
                            </th>
                            <td>
                              <a href="#" className="text-primary fw-bold">
                                Doloribus nisi exercitationem
                              </a>
                            </td>
                            <td>$59</td>
                            <td className="fw-bold">74</td>
                            <td>$4,366</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">
                                <img src="assets/img/product-4.jpg" alt="" />
                              </a>
                            </th>
                            <td>
                              <a href="#" className="text-primary fw-bold">
                                Officiis quaerat sint rerum error
                              </a>
                            </td>
                            <td>$32</td>
                            <td className="fw-bold">63</td>
                            <td>$2,016</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">
                                <img src="assets/img/product-5.jpg" alt="" />
                              </a>
                            </th>
                            <td>
                              <a href="#" className="text-primary fw-bold">
                                Sit unde debitis delectus repellendus
                              </a>
                            </td>
                            <td>$79</td>
                            <td className="fw-bold">41</td>
                            <td>$3,239</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* End Top Selling */}
              </div>
            </div>
            {/* End Left side columns */}
            {/* Right side columns */}
            <div className="col-lg-4">
              {/* Recent Activity */}
              <div className="card">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Detalle Recepción
                  </h5>
                  <div className="activity">
                    <div className="activity-item d-flex">
                      <div className="activite-label">32 min</div>
                      <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                      <div className="activity-content">
                        Recibido{" "}
                        <a href="#" className="fw-bold text-dark">
                          (Digitación)
                        </a>
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">56 min</div>
                      <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                      <div className="activity-content">
                        Empacado
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">2 hrs</div>
                      <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                      <div className="activity-content">
                        Entregado Línea Aérea
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">1 hr</div>
                      <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                      <div className="activity-content">
                        Embarcado
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">2 sec</div>
                      <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
                      <div className="activity-content">
                        Recibido AILA
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">4 min</div>
                      <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
                      <div className="activity-content">
                        Recibido{" "} 
                        <a href="#" className="fw-bold text-dark">
                          (Centro de Recepcion)
                        </a>
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">2 sec</div>
                      <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
                      <div className="activity-content">
                        Empacado
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Recent Activity */}
              {/* Budget Report */}
              <div className="card">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body pb-0">
                  <h5 className="card-title">
                    Budget Report <span>| This Month</span>
                  </h5>
                  <div
                    id="budgetChart"
                    style={{ minHeight: 400 }}
                    className="echart"
                  />
                </div>
              </div>
              {/* End Budget Report */}
              {/* Website Traffic */}
              <div className="card">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body pb-0">
                  <h5 className="card-title">
                    Website Traffic <span>| Today</span>
                  </h5>
                  <div
                    id="trafficChart"
                    style={{ minHeight: 400 }}
                    className="echart"
                  />
                </div>
              </div>
              {/* End Website Traffic */}
              {/* News & Updates Traffic */}
              <div className="card">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body pb-0">
                  <h5 className="card-title">
                    News &amp; Updates <span>| Today</span>
                  </h5>
                  <div className="news">
                    <div className="post-item clearfix">
                      <img src="assets/img/news-1.jpg" alt="" />
                      <h4>
                        <a href="#">Nihil blanditiis at in nihil autem</a>
                      </h4>
                      <p>
                        Sit recusandae non aspernatur laboriosam. Quia enim eligendi
                        sed ut harum...
                      </p>
                    </div>
                    <div className="post-item clearfix">
                      <img src="assets/img/news-2.jpg" alt="" />
                      <h4>
                        <a href="#">Quidem autem et impedit</a>
                      </h4>
                      <p>
                        Illo nemo neque maiores vitae officiis cum eum turos elan
                        dries werona nande...
                      </p>
                    </div>
                    <div className="post-item clearfix">
                      <img src="assets/img/news-3.jpg" alt="" />
                      <h4>
                        <a href="#">
                          Id quia et et ut maxime similique occaecati ut
                        </a>
                      </h4>
                      <p>
                        Fugiat voluptas vero eaque accusantium eos. Consequuntur sed
                        ipsam et totam...
                      </p>
                    </div>
                    <div className="post-item clearfix">
                      <img src="assets/img/news-4.jpg" alt="" />
                      <h4>
                        <a href="#">Laborum corporis quo dara net para</a>
                      </h4>
                      <p>
                        Qui enim quia optio. Eligendi aut asperiores enim
                        repellendusvel rerum cuder...
                      </p>
                    </div>
                    <div className="post-item clearfix">
                      <img src="assets/img/news-5.jpg" alt="" />
                      <h4>
                        <a href="#">Et dolores corrupti quae illo quod dolor</a>
                      </h4>
                      <p>
                        Odit ut eveniet modi reiciendis. Atque cupiditate libero
                        beatae dignissimos eius...
                      </p>
                    </div>
                  </div>
                  {/* End sidebar recent posts*/}
                </div>
              </div>
              {/* End News & Updates */}
            </div>
            {/* End Right side columns */}
          </div>
        </section>
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