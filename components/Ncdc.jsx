import React, { useContext, useState } from 'react'
import { colors } from './styles/styles'
import MyContext from "./Context";
import LoadingAnimation from './LoadingAnimation';

export default function Ncdc() {
  const { ncdc, ncdcPresent, summary } = useContext(MyContext);
  // console.log(ncdc.Numbers);
  var nigeriaData = [];
  if (ncdc.length !== 0) {

    nigeriaData = summary.filter(obj => {
      return obj.Country === 'Nigeria'
    })
  }

  return (
    <div className='container pt-3 mb-5'>
      <h1 className='mb-4'>
        <span className="hoverEffect">NCDC Information</span>
      </h1>

      {
        Object.entries(ncdcPresent).length !== 0 ?


          <div>
            <h1 className="colorPrimary mt-4">Presently,</h1>
            <h5>There are <strong>{ncdcPresent.confirmed}</strong> people in Nigeria who have come in contact with the virus. <strong>{ncdcPresent.recovered}</strong> of them have recovered and <strong>{ncdcPresent.deaths}</strong> have died.</h5>

          </div>

          : <h4>Hold on a second...</h4>
      }
      <h1 className="colorPrimary mb-2 mt-5"> <span>
        {nigeriaData.map((eachData, index) => (
          <img key={index} src={`https://www.countryflags.io/${eachData.flag}/shiny/64.png`} />
        ))}
      </span> Nigeria's Stats</h1>

      <div className="tableContainer ">

        <table className="fixed_headers w-100 table-hover searchable sortable">
          <thead className="thead-light tHead">
            <tr>
              <th className='text-center w-50 float-left d-inherit' scope="col">State</th>
              <th className='text-center w-50 float-right' scope="col">Confirmed Cases</th>

            </tr>
          </thead>
          <tbody>

            {
              ncdc.length !== 0 ?
                ncdc.slice(0, (ncdc.length - 1)).map((eachState, index) => (
                  <tr key={index} className='d-flex'>
                    <td className='text-center w-50 float-left d-inherit'>{eachState[0]}</td>
                    <td className='text-center w-50 float-right'>{eachState[1]}</td>
                  </tr>
                ))
                :
                <div className='text-center w-100 mt-4'>
                  <LoadingAnimation />
                </div>
            }
          </tbody>
        </table>

      </div>
      <div className="infoWrapper">
        <i className="fa infoIcon colorPrimary fa-info-circle" aria-hidden="true"></i> <small className='infoText'>All figures here are gotten from the Nigeria Centre for Disease Control (NCDC).</small>
      </div>

      <style jsx>{`
            .infoText{
              font-size: 54%
          }
         .infoIcon{
             font-size: small
         }

.countries {
    width: 251px !important;
  }
  .newConfirmed{
    width: 200px !important;
}
  .padd{
    padding-right: 41px !important
}
                .caseNumber{
                    font-size: 3.0rem
                  }
                .allCards{
                    background-color: ${colors.white};
                    padding: 20px 5px;
                    border-radius: 8px;
                    text-align: center;
                    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04),
                    0 1px 6px rgba(0, 0, 0, 0.04);
                  }
                .colorPrimary {
                    color: ${colors.primary};
                  }
.fixed_headers {
    
  table-layout: fixed;
  border-collapse: collapse;
}

.fixed_headers th{
    padding: 15px 17px;

width: 180px   
  }
.fixed_headers td {
    padding: 15px 21px;

    width: 180px
}

.fixed_headers thead {
  background-color: ${colors.primary};
  color: #fff;
  padding: 0px 15px;
}
.fixed_headers thead tr {
  display: block;
  position: relative;
}
.fixed_headers tbody {
  display: block;
  overflow: auto;
  width: 100%;
  height: 400px;
}
.fixed_headers tbody tr:nth-child(even) {
  background-color: ${colors.offWhite};
}




.tableContainer{
    height: 500px;
    overflow: auto
}
table {
    position: relative;
    border-collapse: collapse; 
  }
.tHead{
 
    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
}
            .colorPrimary {
                color: ${colors.primary};
              }
    .hoverEffect {
        background: linear-gradient(
          to bottom,
          ${colors.primary} 0%,
          ${colors.primary} 100%
        );
        background-position: 0 73%;
        background-repeat: repeat-x;
        background-size: 9px 9px;
        color: #000;
        text-decoration: none;
        transition: all 0.5s;
      }
      .hoverEffect:hover {
        background-size: 10px 50px;
        color: #fff;
    `}</style>
    </div>
  )
}
