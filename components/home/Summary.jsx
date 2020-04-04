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
        .caseNumber{
            font-size: 4.5rem
          }
          .topCase{
            background-color: ${colors.white};
            padding: 20px 5px;
            border-radius: 8px;
            text-align: center;
            height: 180px;
            box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04),
            0 1px 6px rgba(0, 0, 0, 0.04);
          }
          .colorPrimary {
            color: ${colors.primary};
          }
          `}</style>
        </>
    )
}

