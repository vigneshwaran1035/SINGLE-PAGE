import React, { Fragment } from 'react'
import Menu from './Menu'

function Videos() {
  return (
    <div>
      <Fragment>
      <div id="loader-wrapper">
        <div id="loader"></div>

        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>

    </div>
   <Menu></Menu>

    <div className="tm-hero d-flex justify-content-center align-items-center" id="tm-video-container">
        <video autoPlay muted loop id="tm-video">
            <source src="assets/video/hero.mp4" type="video/mp4"/>
        </video>  
        <i id="tm-video-control-button" className="fas fa-pause"></i>
        <form className="d-flex position-absolute tm-search-form">
            <input className="form-control tm-search-input" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success tm-search-btn" type="submit">
                <i className="fas fa-search"></i>
            </button>
        </form>
    </div>

    <div className="container-fluid tm-container-content tm-mt-60">
        <div className="row mb-4">
            <h2 className="col-6 tm-text-primary">
                Latest Videos
            </h2>
            <div className="col-6 d-flex justify-content-end align-items-center">
                <form action="" className="tm-text-primary">
                    Page <input type="text" value="1" size="1" className="tm-input-paging tm-text-primary"/> of 180
                </form>
            </div>
        </div>
        <div className="row tm-mb-90 tm-gallery">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-01.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Hangers</h2>
                        <a href="video-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span>24 Oct 2020</span>
                    <span>10,460 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-02.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Perfumes</h2>
                        <a href="video-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span>22 Oct 2020</span>
                    <span>14,502 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-03.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Clocks</h2>
                        <a href="video-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span>18 Oct 2020</span>
                    <span>11,906 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-04.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Plants</h2>
                        <a href="video-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span>12 Oct 2020</span>
                    <span>16,100 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-05.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Morning</h2>
                        <a href="video-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span>24 Sep 2020</span>
                    <span>16,008 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-06.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Pinky</h2>
                        <a href="video-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span>21 Sep 2020</span>
                    <span>12,860 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-07.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Bus</h2>
                        <a href="video-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span>18 Sep 2020</span>
                    <span>10,900 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-08.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>New York</h2>
                        <a href="video-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span>14 Sep 2020</span>
                    <span>10,820 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-09.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Abstract</h2>
                        <a href="video-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span>12 Sep 2020</span>
                    <span>42,700 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-10.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Flowers</h2>
                        <a href="video-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span>9 Sep 2020</span>
                    <span>11,402 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-11.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Rosy</h2>
                        <a href="video-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span>8 Sep 2020</span>
                    <span>32,906 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-12.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Rocki</h2>
                        <a href="video-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span>6 Sep 2020</span>
                    <span>50,700 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-13.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Purple</h2>
                        <a href="video-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span>28 Aug 2020</span>
                    <span>107,510 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-14.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Sea</h2>
                        <a href="video-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span>24 Aug 2020</span>
                    <span>118,006 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-15.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Turtle</h2>
                        <a href="video-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span>20 Aug 2020</span>
                    <span>121,300 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-16.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Peace</h2>
                        <a href="video-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span>14 Aug 2020</span>
                    <span>21,204 views</span>
                </div>
            </div>         
        </div> 
        <div className="row tm-mb-90">
            <div className="col-12 d-flex justify-content-between align-items-center tm-paging-col">
                <a href="javascript:void(0);" className="btn btn-primary tm-btn-prev mb-2 disabled">Previous</a>
                <div className="tm-paging d-flex">
                    <a href="javascript:void(0);" className="active tm-paging-link">1</a>
                    <a href="javascript:void(0);" className="tm-paging-link">2</a>
                    <a href="javascript:void(0);" className="tm-paging-link">3</a>
                    <a href="javascript:void(0);" className="tm-paging-link">4</a>
                </div>
                <a href="javascript:void(0);" className="btn btn-primary tm-btn-next">Next Page</a>
            </div>            
        </div>
    </div>

    <div className="tm-bg-gray pt-5 pb-3 tm-text-gray">
        <div className="container-fluid tm-container-small">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-12 px-5 mb-5">
                    <h3 className="tm-text-primary mb-4">About Catalog-Z</h3>
                    <p>Catalog-Z is free Bootstrap 5 Alpha 2 HTML Template for video and photo websites. You can freely use this TemplateMo layout for a front-end integration with any kind of CMS website.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                    <h3 className="tm-text-primary mb-4">Our Links</h3>
                    <ul className="tm-footer-links pl-0">
                        <li><a href="#">Advertise</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Our Company</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                    <ul className="tm-social-links d-flex justify-content-end pl-0 mb-5">
                        <li className="mb-2"><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>
                        <li className="mb-2"><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
                        <li className="mb-2"><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
                        <li className="mb-2"><a href="https://pinterest.com"><i className="fab fa-pinterest"></i></a></li>
                    </ul>
                    <a href="#" className="tm-text-gray text-right d-block mb-2">Terms of Use</a>
                    <a href="#" className="tm-text-gray text-right d-block">Privacy Policy</a>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-md-7 col-12 px-5 mb-3">
                    Copyright 2020 Catalog-Z Company. All rights reserved.
                </div>
                <div className="col-lg-4 col-md-5 col-12 px-5 text-right">
                    Designed by <a href="https://templatemo.com" className="tm-text-gray" rel="sponsored" target="_parent">TemplateMo</a>
                </div>
            </div>
        </div>
    </div>



      </Fragment>
    </div>
  )
}

export default Videos