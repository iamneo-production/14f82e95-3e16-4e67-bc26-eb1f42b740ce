import React from 'react'
import { Link } from 'react-router-dom';
import './Policy.css';
export default function Policy() {
  return (
    <div>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
        <div className="btn">
          <a href="https://www.linkedin.com/in/florin-cornea-b5118057/" target="_blank">
            <i className="fab fa-linkedin" />
          </a>
        </div>
        <div className="first hero">
          <img className="hero-profile-img" src="https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg" alt="" />
          <div className="hero-description-bk" />
          <div className="hero-logo">
            <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg" alt="" />
          </div>
          <div className="hero-description">
            <p>SAFETY INSURANCE</p>
          </div>
          <div className="hero-date">
            <p>Four Wheeler</p>
          </div>
          <div className="hero-btn">
          <Link to="/user/viewPolicy">
                <button class="btn btn-secondary" type="submit">Get Silver premium</button>
              </Link>
          </div>
          



        </div>
        <div className="second hero">
          <img className="hero-profile-img" src="https://i.pinimg.com/originals/9f/b1/ff/9fb1ffb05dd28039d1a06ad8e90cbd75.jpg" alt="" />
          <div className="hero-description-bk" />
          <div className="hero-logo">
            <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg" alt="" />
          </div>
          <div className="hero-description">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    PRO FEATURES</p>
          </div>
          <div className="hero-date">
            <p>Four Wheeler</p>
          </div>
          <div className="hero-btn">
          <Link to="/Goldpremium">
                <button class="btn btn-warning mt-5" type="submit">Get Gold premium</button>
              </Link>
          </div>
        </div>


        <div className="first hero">
          <img className="hero-profile-img" src="https://c4.wallpaperflare.com/wallpaper/107/848/913/spiderman-ps4-spiderman-games-hd-wallpaper-preview.jpg" alt="" />
          <div className="hero-description-bk" />
          <div className="hero-logo">
            <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg" alt="" />
          </div>
          <div className="hero-description">
            <p>PREMIUM FEATURES</p>
          </div>
          <div className="hero-date">
            <p>Four Wheeler</p>
          </div>
          <div className="hero-btn">
          <Link to="/Diamondpremium">
                <button class="btn btn-info mt-5" type="submit">Get Diamond premium</button>
              </Link>
          </div>
        </div>



      </div>

    )
}