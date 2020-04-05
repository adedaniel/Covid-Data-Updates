import React from "react"
import { colors } from "./styles/styles"
/* eslint jsx-a11y/anchor-is-valid: 0 */
export default function Footer({ siteTitle }) {
  return (
    <footer className="bgPrimary">
      <div className="container">
        <div className="row text-center">

          <p className="text-center text-white  my-2 aRR">
            © {new Date().getFullYear()}, {siteTitle}.&nbsp;&nbsp;

            <span className='block'>
              adedaniel  <a target="_blank" href="https://github.com/adedaniel"><i className="fa text-white fa-github" aria-hidden="true"></i></a>
          &nbsp; <a target="_blank" href="https://twitter.com/ijebu_developer"><i className="fa text-white fa-twitter" aria-hidden="true"></i></a>


          &nbsp;&nbsp; jaywonder20 <a target="_blank" href="https://github.com/jaywonder20"><i className="fa text-white fa-github" aria-hidden="true"></i></a>
          &nbsp; <a target="_blank" href="https://twitter.com/jaywonder20"><i className="fa text-white fa-twitter" aria-hidden="true"></i></a>
            </span>
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
          margin: 0 25%;
        }
        @media (max-width: 499px) {
          .block {
display: block
          } 
        }
        @media (max-width: 767px) {
          .fitContent {
            width: 49%;
          }
        
          .aRR {
            margin: 0 auto;
          }
          
        }
        @media (min-width: 768px) and (max-width: 991px) {
          .aRR {
            margin: 0 17%;
          }
        }
      `}</style>
    </footer>
  )
}
