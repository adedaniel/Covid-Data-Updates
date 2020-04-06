import React, { useContext } from 'react'
import { colors } from '../styles/styles'
import MyContext from "../Context";
import FadeIn from "react-fade-in";
import LoadingAnimation from '../LoadingAnimation';


export default function TopCasesInternational() {
    const { summary } = useContext(MyContext);
    // console.log(summary);

    let cases = [];
    if (summary.length !== 0) {

        cases = [...summary].sort(function (a, b) {
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
            {summary.length !== 0 ?
                arrangedCase.map((eachCase, index) => (
                    <div key={index} className="col-sm-3">
                        <div className="topCase mb-3">
                            <FadeIn>
                                <h3 className='caseNumber colorPrimary'>{eachCase.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>

                                <span> <img src={`https://www.countryflags.io/${eachCase.flag}/shiny/32.png`} /></span> <span>&nbsp;  <h5 className='caseState colorPrimary d-inline-block'>{eachCase.Country}</h5></span>
                            </FadeIn>
                        </div>
                    </div>
                ))


                :
                <div className='text-center w-100'>
                    <LoadingAnimation />
                </div>
            }

            <style jsx>{`
            .caseNumber{
                font-size: 3.0rem
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
              @media(max-width: 767px){
                  .topCase{
                      background-color: ${colors.white};
                      padding: 20px 5px;
                      border-radius: 8px;
                      text-align: center;
                      height: 150px;
                      box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04),
                      0 1px 6px rgba(0, 0, 0, 0.04);
                    }
              }
              .colorPrimary {
                color: ${colors.primary};
              }
            `}</style>
        </>
    )
}
