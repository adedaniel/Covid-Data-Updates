import React, { useContext, useState, useEffect } from 'react'
import { colors } from '../styles/styles'
import MyContext from "../Context";


export default function TopCasesInternational() {
    const [casesArray, setCasesArray] = useState([])
    const { summary } = useContext(MyContext);
    // console.log(summary);

    let cases = [];
    if (summary.length !== 0) {

        cases = summary.sort(function (a, b) {
            return b.TotalConfirmed - a.TotalConfirmed;
        })
        // console.log(summary);
        // setCasesArray(cases)
    }
    const arrangedCase = cases.slice(0, 4)
    // console.log(arrangedCase);
    // console.log(cases);

    return (
        <>
            {
                arrangedCase.map((eachCase, index) => (
                    <div key={index} className="col-sm-3">
                        <div className="topCase mb-3">
                            <h3 className='caseNumber colorPrimary'>{eachCase.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>

                            <span> <img src={`https://www.countryflags.io/${eachCase.flag}/flat/32.png`} /></span> <span>&nbsp;  <h5 className='caseState colorPrimary d-inline-block'>{eachCase.Country}</h5></span>
                            <style jsx>{`
                  .caseNumber{
                      font-size: 3.9rem
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
                        </div>
                    </div>
                ))
            }


        </>
    )
}
