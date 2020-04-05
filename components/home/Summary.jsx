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
          <h5> <strong>{all.affectedCountries.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> countries have been affected by the virus. Among the  <strong>{all.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> people who have contacted the disease, <strong>{all.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> have already recovered, <strong>{all.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> people in total have lost their lives and <strong>{all.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> people are still active cases.
          <br /><br />
Just Today, <strong>{all.todayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> have already tested positive for the virus and <strong>{all.todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> died today.

            <br /> <br /> Based on our statistics, <strong>{all.casesPerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> people out of every million have been infected and <strong>{Math.round(all.deathsPerOneMillion)}</strong> out of every one million people in the world have died of the virus.
          </h5>
        </>
        :
        <h4>Hold on a second...</h4>
      }
      <style jsx>{`
        
          .colorPrimary {
            color: ${colors.primary};
          }
          `}</style>
    </>
  )
}

