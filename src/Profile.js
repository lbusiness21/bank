import React from 'react'

export default function Profile() {
    return (
        <div>
          {/* metas */}
          <meta charSet="utf-8" />
          <meta name="author" content="Satoshi Nakamoto" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="keywords" content="Woodforest" />
          <meta name="description" content="Woodforest" />
          {/* title  */}
          <title>Profile</title>
          {/* favicon */}
          <link rel="shortcut icon" href="img/logos/favicon.png" />
          <link rel="apple-touch-icon" href="img/logos/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="img/logos/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="img/logos/apple-touch-icon-114x114.png" />
          <link rel="stylesheet" href="css/plugins/bootstrap.min.css" />
          <link rel="stylesheet" href="css/plugins/default.css" />
          <link rel="stylesheet" href="css/plugins/fontawesome-all.min.css" />
          <link rel="stylesheet" href="css/plugins/nav-menu.css" />
          <link rel="stylesheet" href="css/plugins/owl.carousel.min.css" />
          <link rel="stylesheet" href="css/plugins/et-line.css" />
          <link rel="stylesheet" href="css/plugins/mailform.css" />
          <link href="css/switcher.css" rel="stylesheet" />
          <link href="css/styles-4.css" rel="stylesheet" id="colors" />
          {/* start page loading */}
          <div id="preloader">
            <div className="row loader">
              <div className="loader-icon" />
            </div>
          </div>
          {/* end page loading */}
          {/* start main-wrapper section */}
          <div className="main-wrapper">
            {/* start header ection */}
            <header className="header-style8" id="home">
              <div className="navbar-default">
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-12">
                      <div className="menu_area alt-font">
                        <nav className="navbar navbar-expand-lg navbar-light no-padding">
                          <div className="navbar-header navbar-header-custom">
                            {/* Start Logo */}
                            <a href="javascript:void(0);" className="navbar-brand logodefault">
                              <img id="logo" src="img/logos/name.png" alt="" />
                              <span id="jinaHolder" />
                            </a>
                            {/* End Logo */}
                          </div>
                          <div className="navbar-toggler" />
                          {/* Menu */}
                          <ul className="navbar-nav ml-auto" id="nav" style={{display: 'none'}}>
                            <li className="sm-display-none">
                              <a href="huntington">
                                <img src="img/partners/huntington.jpg" className="kaimage" />
                                Huntington
                              </a>
                            </li>
                            <li className="sm-display-none">
                              <a href="woodforest">
                                <img src="img/partners/woodforest.jpg" className="kaimage" />
                                Woodforest
                              </a>
                            </li>
                            <li className="sm-display-none">
                              <a href="pnc">
                                <img src="img/partners/pnc.jpg" className="kaimage" />
                                PNC 
                              </a>
                            </li>
                            <li className="sm-display-none">
                              <a href="chase">
                                <img src="img/partners/chase.jpg" className="kaimage" />
                                Chase
                              </a>
                            </li>
                            <li className="sm-display-none">
                              <a href="nfcu">
                                <img src="img/partners/nfcu.jpg" className="kaimage" />
                                NFCU
                              </a>
                            </li>
                            <li className="sm-display-none">
                              <a href="chime">
                                <img src="img/partners/chime.jpg" className="kaimage" />
                                Chime
                              </a>
                            </li>                                                                                    
                            <li className="sm-display-none">
                              <a href="citi">
                                <img src="img/partners/citi.jpg" className="kaimage" />
                                Citi
                              </a>
                            </li>
                            <li className="sm-display-none">
                              <a href="bbva">
                                <img src="img/partners/bbva.jpg" className="kaimage" />
                                BBVA
                              </a>
                            </li>
                            <li className="sm-display-none">
                              <a href="bb&t">
                                <img src="img/partners/bbt.jpg" className="kaimage" />
                                BB&amp;T
                              </a>
                            </li>
                            <li className="sm-display-none">
                              <a href="suntrust">
                                <img src="img/partners/suntrust.jpg" className="kaimage" />
                                Suntrust
                              </a>
                            </li> 
                            <li className="lg-display-none">
                              <a href="huntington">
                                <img src="img/partners/huntington.jpg" className="keimage" />
                                Huntington Bank
                              </a>
                            </li>
                            <li className="lg-display-none">
                              <a href="woodforest">
                                <img src="img/partners/woodforest.jpg" className="keimage" />
                                Woodforest Bank
                              </a>
                            </li>
                            <li className="lg-display-none">
                              <a href="pnc">
                                <img src="img/partners/pnc.jpg" className="keimage" />
                                PNC Bank
                              </a>
                            </li>
                            <li className="lg-display-none">
                              <a href="chase">
                                <img src="img/partners/chase.jpg" className="keimage" />
                                Chase Bank
                              </a>
                            </li>
                            <li className="lg-display-none">
                              <a href="nfcu">
                                <img src="img/partners/nfcu.jpg" className="keimage" />
                                NFCU Bank
                              </a>
                            </li>
                            <li className="lg-display-none">
                              <a href="chime">
                                <img src="img/partners/chime.jpg" className="keimage" />
                                Chime Bank
                              </a>
                            </li>                                                                                    
                            <li className="lg-display-none">
                              <a href="citi">
                                <img src="img/partners/citi.jpg" className="keimage" />
                                Citi Bank
                              </a>
                            </li>
                            <li className="lg-display-none">
                              <a href="bbva">
                                <img src="img/partners/bbva.jpg" className="keimage" />
                                BBVA Bank
                              </a>
                            </li>
                            <li className="lg-display-none">
                              <a href="bb&t">
                                <img src="img/partners/bbt.jpg" className="keimage" />
                                BB&amp;T Bank
                              </a>
                            </li>
                            <li className="lg-display-none">
                              <a href="suntrust">
                                <img src="img/partners/suntrust.jpg" className="keimage" />
                                Suntrust Bank
                              </a>
                            </li> 
                          </ul>
                          {/* End Me Are */}
                          {/* Start Atribute Navigation */}
                          <div className="attr-nav xs-margin-55px-right">
                            <ul>
                              <li className="dropdown sm-no-margin">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                  <img id="photoHolder" src="img/logos/name.png" className="cart-thumb" alt="" />
                                  <span className="badge bg-theme">
                                    6
                                  </span>
                                </a>
                                <ul className="dropdown-menu cart-list">
                                  <li className="total bg-theme">
                                    <span className="pull-left font-weight-600 font-size14" id="displayNameHolder">
                                    </span>
                                    <a href className="butn small btn-cart white" id="logoutButton">
                                      <span className="font-weight-600 font-size14" style={{color: 'red'}}>
                                        <i className="fas fa-sign-out" />
                                        Log Out
                                      </span>
                                    </a>
                                  </li>
                                  <li className="total bg-theme">
                                    <a href="profile" className="butn small btn-cart white">
                                      <span className="font-weight-600 font-size14">
                                        Profile
                                        <i className="fas fa-user-check" />
                                      </span>
                                    </a>
                                  </li>
                                  <li className="total bg-theme">
                                    <a href="paypal" className="butn small btn-cart white">
                                      <span className="font-weight-600 font-size14">
                                        PayPal Cashout Method
                                        <i className="icon-presentation" style={{fontWeight: 700, color: 'aqua'}} />
                                      </span>
                                    </a>
                                  </li>
                                  <li className="total bg-theme">
                                    <a href="navyfederal" className="butn small btn-cart white">
                                      <span className="font-weight-600 font-size14">
                                        Navy Federal Method
                                        <i className="icon-presentation" style={{fontWeight: 700, color: 'aqua'}} />
                                      </span>
                                    </a>
                                  </li>
                                  <li className="total bg-theme">
                                    <a href="pdf/paypal.pdf" className="butn small btn-cart white">
                                      <span className="font-weight-600 font-size14">
                                        PayPal Pdf
                                        <i className="fas fa-file-pdf" />
                                      </span>
                                    </a>
                                  </li>
                                  <li className="total bg-theme">
                                    <a href="javascript(void:0)" className="butn small btn-cart white">
                                      <span className="font-weight-600 font-size14" id="yourIp">
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          {/* End Atribute Navigat */}
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* end header section */}
            {/* start table section */}
            <section className="box-hover">
              <div className="container">
                <div className="section-heading">
                  <h3>
                    Purchased Bank Logs
                  </h3>
                </div>
                <div className="row position-relative">
                  <div className="col-12">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Bank</th>
                            <th>Date</th>
                            <th>Balance</th>
                            <th>Price</th>
                            <th>View</th>
                            <th>Refund</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div></div></section>
            {/* end table section */}
            {/* start alerts section */}
            <section className="box-hover">
              <div className="container-fluid"> 
                <div className="section-heading">
                  <h4>Notifications</h4>
                </div>
                <div className="col-12">
                  <div className="alert alert-primary alert-dismissible">
                    <button type="button" className="close" data-dismiss="alert">×</button>
                    Added 1 <strong>Suntrust Bank Log</strong>,  July 7
                  </div>
                  <div className="alert alert-primary alert-dismissible">
                    <button type="button" className="close" data-dismiss="alert">×</button>
                    Added 1 <strong>Huntington Bank Log</strong>,  June 6
                  </div>
                  <div className="alert alert-success alert-dismissible">
                    <button type="button" className="close" data-dismiss="alert">×</button>
                    Sold <strong>Chime Bank Log</strong> Balance, $15,390, July 6
                  </div>
                  <div className="alert alert-success alert-dismissible">
                    <button type="button" className="close" data-dismiss="alert">×</button>
                    Sold <strong>Suntrust Bank Log</strong> Balance, $23,185, July 5
                  </div>
                  <div className="alert alert-success alert-dismissible">
                    <button type="button" className="close" data-dismiss="alert">×</button>
                    Sold <strong>Woodforest Bank Log</strong> Balance, $35,241, July 4
                  </div>
                </div>
              </div>
            </section>
            {/* end alerts section */}
            {/* start counter section */}
            <section className="parallax position-relative box-hover" data-overlay-dark={6} data-background="images/bg1.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-6 col-lg-3 col-md-6 sm-margin-30px-bottom">
                    <div className="counter-box">
                      <span className="icon margin-5px-bottom display-block text-white font-size36 xs-font-size30 xs-text-center">
                        <i className="icon-profile-male" />
                      </span>
                      <h4 className="countup text-white display-block xs-text-center">
                        500
                      </h4>
                      <div className="separator-line-horrizontal-medium-light3 bg-white margin-15px-tb xs-margin-10px-tb opacity5 center-col" />
                      <p className="font-size24 sm-font-size20 xs-font-size18 font-weight-600 text-white no-margin text-center">
                        Satisfied Visitors
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3 col-md-6 sm-margin-30px-bottom">
                    <div className="counter-box">
                      <span className="icon margin-5px-bottom display-block text-white font-size36 xs-font-size30 xs-text-center"><i className="icon-happy" /></span>
                      <h4 className="countup text-white display-block xs-text-center">
                        175
                      </h4>
                      <div className="separator-line-horrizontal-medium-light3 bg-white margin-15px-tb xs-margin-10px-tb opacity5 center-col" />
                      <p className="font-size24 sm-font-size20 xs-font-size18 font-weight-600 text-white no-margin text-center">
                        Happy Clients
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3 col-md-6">
                    <div className="counter-box">
                      <span className="icon margin-5px-bottom display-block text-white font-size36 xs-font-size30 xs-text-center">
                        <i className="icon-presentation" />
                      </span>
                      <h4 className="countup text-white display-block xs-text-center">
                        190
                      </h4>
                      <div className="separator-line-horrizontal-medium-light3 bg-white margin-15px-tb xs-margin-10px-tb opacity5 center-col" />
                      <p className="font-size24 sm-font-size20 xs-font-size18 font-weight-600 text-white no-margin text-center">
                        Bank Logs
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3 col-md-6">
                    <div className="counter-box">
                      <span className="icon margin-5px-bottom display-block text-white font-size36 xs-font-size30 xs-text-center"><i className="icon-genius" /></span>
                      <h4 className="countup text-white display-block xs-text-center">
                        +312,000
                      </h4>
                      <div className="separator-line-horrizontal-medium-light3 bg-white margin-15px-tb xs-margin-10px-tb opacity5 center-col" />
                      <p className="font-size24 sm-font-size20 xs-font-size18 font-weight-600 text-white no-margin text-center">
                        Net Sales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end counter section */}
          </div>
          {/* end main-wrapper section */}
          <div id="style-switcher">
            <a href="javascript:void(0)" className="switcher-setting"><i className="fa fa-cog fa-spin" /></a>
            <div className="choose-color">
              <h2>Change Theme Color</h2>
              <ul className="colors" id="color1">
                <li><a href="javascript:void(0)" className="style1" /></li>
                <li><a href="javascript:void(0)" className="style2" /></li>
                <li><a href="javascript:void(0)" className="style3" /></li>
                <li><a href="javascript:void(0)" className="style4" /></li>
                <li><a href="javascript:void(0)" className="style5" /></li>
                <li><a href="javascript:void(0)" className="style6" /></li>
                <li><a href="javascript:void(0)" className="style7" /></li>
                <li><a href="javascript:void(0)" className="style8" /></li>
              </ul>
            </div>
          </div>
          <a href="javascript:void(0)" className="scroll-to-top"><i className="fas fa-angle-up" aria-hidden="true" /></a>
        </div>
      );
    }