import React from "react"
import { colors } from "./styles/styles"
/* eslint jsx-a11y/anchor-is-valid: 0 */
export default function Footer({ siteTitle }) {
  return (
    <footer className="bgPrimary">
      <div className="container pt-5">
        <div className="row text-center">
          <div className="col-md-3 fitContent">
            <ul className="p-0">
              <li className="listItem">
                <h2 className="text-white my-3">{siteTitle}</h2>
              </li>
              <li className="listItem">
                <a href="#" className="itemLink">
                  How It Works
                </a>
              </li>
              <li className="listItem">
                <a href="#" className="itemLink">
                  Preferences
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 fitContent">
            <ul className="p-0">
              <li className="listItem">
                <h4>
                  <a href="#" className="itemLink">
                    The Team
                  </a>
                </h4>
              </li>
              <li className="listItem">
                <a href="#" className="itemLink">
                  About Us
                </a>
              </li>
              <li className="listItem">
                <a href="#" className="itemLink">
                  Careers
                </a>
              </li>
              <li className="listItem">
                <a href="#" className="itemLink">
                  Press & Media
                </a>
              </li>
              <li className="listItem">
                <a href="#" className="itemLink">
                  Ambassadors
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 fitContent">
            <ul className="p-0">
              <li className="listItem">
                <h4>
                  <a href="#" className="itemLink">
                    Legal
                  </a>
                </h4>
              </li>
              <li className="listItem">
                <a href="#" className="itemLink">
                  Privacy Policy
                </a>
              </li>
              <li className="listItem">
                <a href="#" className="itemLink">
                  Terms
                </a>
              </li>
              <li className="listItem">
                <a href="#" className="itemLink">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 fitContent">
            <ul className="p-0">
              <li className="listItem">
                <h4>
                  <a href="#" className="itemLink">
                    Connect
                  </a>
                </h4>
              </li>
              <li className="listItem">
                <a href="#" className="itemLink">
                  <i className="fa faFont fa-twitter" aria-hidden="true"></i>
                  &nbsp;&nbsp;
                  <i className="fa faFont fa-facebook" aria-hidden="true"></i>
                  &nbsp;&nbsp;
                  <i className="fa faFont fa-whatsapp" aria-hidden="true"></i>
                  &nbsp;&nbsp;
                  <i className="fa faFont fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li className="listItem">
                <a href="#" className="itemLink">
                  support@seejobs.com
                </a>
              </li>
              <li className="listItem">
                <a href="#" className="itemLink">
                  Customer Stories
                </a>
              </li>
              <li className="listItem">
                <a href="#" className="itemLink">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <p className="text-center text-white mt-5 mb-3 aRR">
            © {new Date().getFullYear()}, {siteTitle} | All Rights Reserved.
          </p>
        </div>
      </div>
      <style jsx>{`
        .fitContent {
          width: fit-content;
        }
        @media (max-width: 767px) {
          .fitContent {
            width: 49%;
          }
        }
        .colorPrimary {
          color: ${colors.primary};
        }
        .bgPrimary {
          background-color: ${colors.primary};
        }
        .faFont {
          font-size: 30px;
        }
        .itemLink {
          text-decoration: none;
          color: ${colors.white};
        }
        .listItem {
          list-style: none;
          padding: 10px 0;
        }
        .aRR {
          margin: 0 auto;
        }
      `}</style>
    </footer>
  )
}
