import React from 'react';
import {Link} from 'react-router-dom';

export default function Error() {
  return (
    <div>
      {/* metas */}
      <link href="css/styles-5.css" rel="stylesheet" id="colors" />

      {/* start main-wrapper section */}
      <div className="main-wrapper" style={{background: 'aliceblue'}}>
        <section className="page-title-section2 bg-img cover-background" style={{backgroundImage: 'url(images/bg1.jpg)'}} data-overlay-dark={7} data-background="images/bg1.jpg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>
                  404, Error
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section style={{padding: '50px 0'}}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 center-col">
                <div className="bg-white padding-30px-all sm-padding-20px-all border border-width-5">
                  <div className="text-center section-heading">
                    <h4>
                      Page not found
                      <img src="google.svg" style={{position: 'absolute', width: '40px', marginLeft: '-2px'}} />
                    </h4>
                  </div>
                  <form className="contact-form">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-12 text-center">
                          <Link to="/" className="butn medium theme" style={{margin: '60px auto'}} type="button" id="signGoogle">
                            <span>
                              Home Page 
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
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