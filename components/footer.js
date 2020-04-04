import React from "react"
import { colors } from "./styles/styles"
/* eslint jsx-a11y/anchor-is-valid: 0 */
export default function Footer({ siteTitle }) {
  return (
    <footer className="bgPrimary">
      <div className="container">
        <div className="row text-center">

          <p className="text-center text-white  my-2 aRR">
            © {new Date().getFullYear()}, {siteTitle}.&nbsp;&nbsp; <i className="fa fa-github" aria-hidden="true"></i>
            &nbsp;&nbsp;&nbsp;<i className="fa fa-twitter" aria-hidden="true"></i>
          </p>
        </div>
      </div>
      <style jsx>{`
        .fitContent {
          width: fit-content;
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
          margin: 0 34%;
        }
        @media (max-width: 767px) {
          .fitContent {
            width: 49%;
          }
        
          .aRR {
            margin: 0 auto;
          }
        }
      `}</style>
    </footer>
  )
}
