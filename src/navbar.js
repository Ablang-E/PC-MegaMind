import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import pic1 from './Images/pcmm_icon.svg';


function navbar() {

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-custom">
        <a class="navbar-brand" href="/">
            <img src={pic1} width="30" height="30" class="d-inline-block align-top" alt="" />
            PC MegaMind
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="/buildersGuide">Builders Guide</a>
            <a class="nav-item nav-link" href="/news">News</a>
            <a class="nav-item nav-link" href="/shop">Shop</a>
          </div>
        </div>
    </nav>
  </>
);
}

export default navbar;
