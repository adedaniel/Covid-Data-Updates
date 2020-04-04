
import React from "react"
import Footer from "./footer"
import Header from "./header"
import { colors } from "./styles/styles";
const config = require("../data/config")

const Layout = ({ children, active }) => {

  return (
    <>
      <Header siteTitle={config.defaultTitle} active={active} />
      <div
        style={{
          marginTop: 60,
        }}
      >
        <main>{children}</main>
        <Footer siteTitle={config.defaultTitle} />

      </div>
      <style jsx global>{`
      ::-webkit-scrollbar {
        width: 5px;
        height: 8px
      }
      ::-moz-scrollbar {
        width: 5px;
        height: 8px
      }
      /* Track */
      ::-webkit-scrollbar-track {
        background: ${colors.offWhite};
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: ${colors.lightgrey};
        border-radius: 5px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: ${colors.grey};
      }
      
      `}</style>
    </>
  )
}


export default Layout
