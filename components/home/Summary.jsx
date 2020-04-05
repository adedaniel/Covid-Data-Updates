import React, { useContext } from 'react'
import MyContext from "../Context";
import { colors } from "../styles/styles";

export default function Summary() {
  const { all } = useContext(MyContext);

  return (
    <>
      {Object.entries(all).length !== 0 ?
        <>
          <h1 className="colorPrimary">Presently,</h1>
          <h5> <strong>{all.affectedCountries.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> countries have been affected by the virus. Among the  <strong>{all.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> people who have contacted the disease, <strong>{all.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> have already recovered, <strong>{all.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> people have lost their lives and <strong>{all.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> people are still active cases.</h5>
        </>
        : ""}
      <style jsx>{`
        
          .colorPrimary {
            color: ${colors.primary};
          }
          `}</style>
    </>
  )
}

