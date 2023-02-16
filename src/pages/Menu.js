import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
    
  } from "react-router-dom";

function Menu() {
  return (
    <div>
        <Fragment>
        
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            {/* <a class="navbar-brand" href="index.html">
                <i class="fas fa-film mr-2"></i>
                Catalog-Z
            </a> */}
           

           <Link class="navbar-brand" to="/"><i class="fas fa-film mr-2"></i>
                Catalog-Z</Link>
           
           
           
           
           
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    {/* <a class="nav-link nav-link-1" href="index.html">Photos</a> */}
                    <Link class="nav-link nav-link-1" to="/photodetail">Photos</Link>
                </li>
                <li class="nav-item">
                    {/* <a class="nav-link nav-link-2" href="videos.html">Videos</a> */}
                    <Link class="nav-link nav-link-2" to="/video">Videos</Link>
                </li>
                <li class="nav-item">
                    {/* <a class="nav-link nav-link-3 active" aria-current="page" href="about.html">About</a> */}

                    <Link class="nav-link nav-link-3 active" aria-current="page" to="/about">About</Link>
                </li>
                <li class="nav-item">
                    {/* <a class="nav-link nav-link-4" href="contact.html">Contact</a> */}
<Link class="nav-link nav-link-4" to="/contact">Contact</Link>

                </li>
            </ul>
            </div>
        </div>
    </nav>
        
        
        
        </Fragment></div>
  )
}

export default Menu