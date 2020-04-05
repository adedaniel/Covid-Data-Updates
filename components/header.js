import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { colors } from "./styles/styles";
// import { DefaultButton, OutlineButton } from "./button";
// import LogoImage from "./ImageExports/LogoImage";
/* eslint jsx-a11y/anchor-is-valid: 0 */
import Link from 'next/link'
import { LogoIcon } from "./imageComponents/Images";

function Header({ siteTitle, active }) {
  // const [active, setActive] = useState(1)
  const [topClass, setTopClass] = useState("");

  useEffect(() => {
    const event = () => {
      let activeClass = "past-main";
      if (window.scrollY === 0) {
        activeClass = "";
      }
      setTopClass(activeClass);
    }

    window.addEventListener("scroll", event);
    return () => {
      window.removeEventListener("scroll", event);
    };
  }, []);



  return (
    <nav
      className={`navbar navbar-expand-md effect-main ${topClass} navbar-light bg-white fixed-top`}
    >
      <div className="container container-s">
        <h2 className="m-0 logo">

          {siteTitle}
        </h2>
        <button
          className="Toggler"
        // type="button"
        // data-toggle="collapse"
        // data-target="#navbarSupportedContent"
        // aria-controls="navbarSupportedContent"
        // aria-expanded="false"
        // aria-label="Toggle navigation"
        >
          <div className="menu-wrap">
            <input type="checkbox" className="toggler" />
            <div className="hamburger">
              <div></div>
            </div>
            <div className="menu">
              <div>
                <div>
                  <LogoIcon width='20%' />

                  <ul className="p-0 my-5">
                    <li className={`nav-item m44 mx3 sidebarList ${
                      active === 1 ? "active" : "inactive"
                      }`} >
                      <Link href='/'>
                        <a className="nav-link js-scroll-trigger">
                          Home
              </a>
                      </Link>
                    </li>
                    <li className={`nav-item m44 mx3 sidebarList ${
                      active === 2 ? "active" : "inactive"
                      }`} >
                      <Link href='/ncdc'>
                        <a className="nav-link js-scroll-trigger" >
                          NCDC
            </a>
                      </Link>
                    </li>

                    <li className={`nav-item m44 mx3 sidebarList ${
                      active === 3 ? "active" : "inactive"
                      }`}>
                      <Link href="/infographics">
                        <a className="nav-link js-scroll-trigger" >
                          Infographics
                  </a>
                      </Link>
                    </li>
                    <li className={`nav-item m44 mx3 sidebarList ${
                      active === 4 ? "active" : "inactive"
                      }`} >
                      <Link href="/news">
                        <a className="nav-link js-scroll-trigger" >
                          News
                  </a>
                      </Link>
                    </li>
                    <li className={`nav-item m44 mx3 sidebarList ${
                      active === 5 ? "active" : "inactive"
                      }`} >
                      <Link href="/faq">
                        <a className="nav-link js-scroll-trigger" >
                          FAQs
                </a>
                      </Link>
                    </li>

                  </ul>
                  <span className='d-block'>
                    <span className='text-secondary'> adedaniel</span>  <a target="_blank" href="https://github.com/adedaniel"><i className="fa text-secondary fa-github" aria-hidden="true"></i></a>
              &nbsp; <a target="_blank" href="https://twitter.com/ijebu_developer"><i className="fa text-secondary fa-twitter" aria-hidden="true"></i></a>
                  </span>
                  <span className='d-block'>
                    &nbsp;&nbsp; <span className='text-secondary'> jaywonder20</span> <a target="_blank" href="https://github.com/jaywonder20"><i className="fa text-secondary fa-github" aria-hidden="true"></i></a>
              &nbsp; <a target="_blank" href="https://twitter.com/jaywonder20"><i className="fa text-secondary fa-twitter" aria-hidden="true"></i></a>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ml-auto navbar-right">
            <li className={`nav-item mx3 sidebarList ${
              active === 1 ? "active" : "inactive"
              }`} >
              <Link href='/'>
                <a className="nav-link js-scroll-trigger">
                  Home
          </a>
              </Link>
            </li>
            <li className={`nav-item mx3 sidebarList ${
              active === 2 ? "active" : "inactive"
              }`} >
              <Link href='/ncdc'>
                <a className="nav-link js-scroll-trigger" >
                  NCDC
        </a>
              </Link>
            </li>

            <li className={`nav-item mx3 sidebarList ${
              active === 3 ? "active" : "inactive"
              }`}>
              <Link href="/infographics">
                <a className="nav-link js-scroll-trigger" >
                  Infographics
              </a>
              </Link>
            </li>
            <li className={`nav-item mx3 sidebarList ${
              active === 4 ? "active" : "inactive"
              }`} >
              <Link href="/news">
                <a className="nav-link js-scroll-trigger" >
                  News
              </a>
              </Link>
            </li>
            <li className={`nav-item mx3 sidebarList ${
              active === 5 ? "active" : "inactive"
              }`} >
              <Link href="/faq">
                <a className="nav-link js-scroll-trigger" >
                  FAQs
            </a>
              </Link>
            </li>

          </ul>

        </div>
      </div>
      <style jsx>
        {`
        .m44 {
margin: 0 20%; 
display: inline-block !important

        }
        .Toggler{
          background: transparent;
    border: none;
        }
        .menu-wrap{
          position: fixed;
          top: 0;
          left: 0;
          z-index: 2;
        }
        
        .toggler{
          position: absolute;
          
          right: -96vw;
          width: 55px;
          height: 55px;
          z-index: 3;
          opacity: 0;
          cursor: pointer;
        }
        
        .hamburger{
          position: absolute;
          
          right: -96vw;
          width: 55px;
          height: 55px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: transparent;
        }
        
        .hamburger>div{
          position: absolute;
          width: 60%;
          height: 3px;
          border-radius: 1.5px;
          background-color: ${colors.grey};
          transition: .4s;
        }
        
        .hamburger>div:before{
          content: '';
          position: absolute;
          width: 100%;
          height: 3px;
          border-radius: 1.5px;
          background-color: ${colors.grey};
          top: -10px;
          left: 0;
          transition: .4s;
        }
        
        .hamburger>div:after{
          content: '';
          position: absolute;
          width: 100%;
          height: 3px;
          border-radius: 1.5px;
          background-color: ${colors.grey};
          top: 10px;
          left: 0;
          transition: .4s;
        }
        
        .toggler:checked + .hamburger>div{
          transform: rotate(135deg);
        }
        
        .toggler:checked:hover + .hamburger>div{
          transform: rotate(225deg);
        }
        
        .toggler:checked + .hamburger>div:before, .toggler:checked + .hamburger>div:after{
          top: 0;
          transform: rotate(90deg);
        }
        
        .menu{
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          visibility: hidden;
          transition: .6s;
        }
        
        .menu > div{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-150%) translateY(-50%);
            width: 1600px;
            height: 1600px;
            border-radius: 50%;
            background-color: ${colors.offWhite};
            opacity: 0.97;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            transition: .6s;
        }
        
        .menu > div > div{
          max-width: 90vw;
          max-height: 100vh;
          opacity: 0;
          transition: .6s;
        }
        
        .menu > div > div > ul > li{
          list-style: none;
        }
        
        .menu > div > div > ul > li > a{
          text-decoration: none;
          color: ${colors.grey};
          font-weight: 550;
          text-transform: uppercase;
          margin-top: .5rem;
          transition: .3s;
          font-size: x-large;
          display: inline-block;
        }
        
        .menu > div > div > ul > li > a:hover{
          color: ${colors.grey};
        }
        
        .toggler:checked ~ .menu{
          visibility: visible;
        }
        
        .toggler:checked ~ .menu > div{
          transform: translateX(-50%) translateY(-50%);
        }
        
        .toggler:checked ~ .menu > div > div{
          opacity: 1;
        }


        .nav-link {
          padding: 0 !important;
      }
   
        @media(min-width: 768px){
          .mx3{
            margin: 0 14px
          }
          .Toggler{
            display: none
          }
        }
       
        .sidebarList {
          width: fit-content;
          padding: 2px 0;
          list-style: none;
          border-bottom-width: 2px;
          border-bottom-color: transparent;
          border-bottom-style: solid;
          transition: all 0.5s;
        }
        .sidebarList a {
          text-decoration: none;
          color: ${colors.primary};
        }
        .sidebarList a h5 {
          margin: 0;
        }
        .sidebarList:hover::after {
          width: 100%;
        }
        .sidebarList.inactive::after {
          content: ""; /* This is necessary for the pseudo element to work. */
          display: block; /* This will put the pseudo element on its own line. */
          width: 0%; /* Change this to whatever width you want. */
          padding-top: 0px; /* This creates some space between the element and the border. */
          border-bottom: 2px solid ${colors.lightgrey}; /* This creates the border. Replace black with whatever color you want. */
          transition: all 0.7s;
        }
        .sidebarList.active a {
          color: ${colors.primary} !important;
        }
        .sidebarList.active {
          /* content: "";  This is necessary for the pseudo element to work. */
          display: block; /* This will put the pseudo element on its own line. */
          width: fit-content; /* Change this to whatever width you want. */
          padding-top: 0px; /* This creates some space between the element and the border. */
          border-bottom: 2px solid ${colors.primary}; /* This creates the border. Replace black with whatever color you want. */
          transition: all 0.7s;
        }
          .logo {
            color: ${colors.primary};
          }
          .navbar-light .navbar-nav .nav-link {
            color: black;
          }
          .navbar-toggler {
            border: none;
            outline: 0 !important;
          }
          .flex {
            flex-direction: row !important;
          }
          .bgPrimaryButton {
            background-color: ${colors.primary};
            color: white;
          }
          .btn {
            outline: none !important;
            box-shadow: none;
            border-radius: 25px;
          }
          .bgPrimaryButtonOutline {
            color: ${colors.primary};
            border-color: ${colors.primary};
            background-color: transparent;
          }
          .bgPrimaryButtonOutline:hover {
            color: ${colors.white};
            border-color: ${colors.primary};
            background-color: ${colors.primary};
          }

          .navbar.past-main {
            padding-top: 15px;
            padding-bottom: 15px;
            background-color: rgba(255, 255, 255, 0.99) !important;
            -webkit-box-shadow: 0 2px 3px 0 rgba(96, 96, 96, 0.1);
            -moz-box-shadow: 0 2px 3px 0 rgba(96, 96, 96, 0.1);
            box-shadow: 0 2px 3px 0 rgba(96, 96, 96, 0.1);
          }

          .navbar.effect-main {
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
          }

          .navbar.past-main .navbar-brand {
            color: #6d48e5 !important;
          }

          .nav-white.past-main .nav-item .nav-link {
            color: #364655;
            font-weight: 500;
          }

          .navbar.past-main .nav-item .nav-link {
            font-weight: 500;
          }

          .nav-white.past-main .navbar-brand {
            color: #364655;
          }

          .nav-white.effect-main {
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
          }
        `}
      </style>
    </nav >
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ""
};
export default Header;
