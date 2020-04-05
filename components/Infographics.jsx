import React, { useState, useContext } from 'react'
import { colors } from './styles/styles'
import Chart from "react-google-charts";
import MyContext from "./Context";
import { CountriesIcon, FineIcon, GoneIcon, ConfirmedIcon } from "./imageComponents/Images";

export default function Infographics() {
    const [country, setCountry] = useState('Nigeria')
    const { timeSeries, summary, all } = useContext(MyContext);
    let nationalStates = [['Days', 'Confirmed', 'Deaths', 'Recovered']];
    let countriesNames;

    if (Object.entries(timeSeries).length !== 0) {

        countriesNames = Object.keys(timeSeries);

        // console.log(summary);
        let requiredArray = []
        // console.log(((timeSeries.Nigeria.length) - 22), (timeSeries.Nigeria.length));
        // console.log(typeof ((timeSeries.Nigeria.length) - 22));
        timeSeries[`${country}`].slice(((timeSeries.Nigeria.length) - 7), (timeSeries.Nigeria.length)).map((eachDate) => (
            requiredArray = [eachDate.date, eachDate.confirmed, eachDate.deaths, eachDate.recovered],

            // console.log(requiredArray),

            nationalStates.push([eachDate.date, eachDate.confirmed, eachDate.deaths, eachDate.recovered])


        ))

        // console.log(nationalStates);
    }


    return (
        <div>
            <div className='container pt-3 mb-5'>
                <h1 className='mb-4'>
                    <span className="hoverEffect">Infographics</span>
                </h1>

                <span> <h4 className='m-0 d-inline-block'>Showing Weekly Stats for &nbsp;&nbsp;</h4>
                    <span>
                        <select name="selectCountry" onChange={e => setCountry(e.target.value)} value={country} id="selectCountry" className='countrySelect'>
                            {countriesNames ? countriesNames.map((eachCountry, index) => (
                                <option className='countryOption' key={index} value={eachCountry.Country}> {eachCountry}</option>

                            )) : ""}


                        </select>



                    </span>
                </span>
                <div className="scroll">
                    {Object.entries(timeSeries).length !== 0 ?

                        <Chart
                            width={'1000px'}
                            height={'500px'}
                            chartType="LineChart"
                            loader={<div>Loading Chart</div>}
                            data={nationalStates
                            }
                            options={{
                                hAxis: {
                                    title: 'Dates',
                                    textStyle: {
                                        color: colors.primary,
                                        fontName: 'Jaldi',
                                        fontSize: '20'
                                    }
                                },
                                titleTextStyle: {
                                    color: colors.primary,    // any HTML string color ('red', '#cc00cc')
                                    fontName: 'Jaldi',
                                    fontSize: '20', // 12, 18 whatever you want (don't specify px)

                                },
                                pointSize: 6,
                                animation: {
                                    startup: true,
                                    easing: 'linear',
                                    duration: 500,
                                },
                                vAxis: {
                                    title: 'Cases',
                                    textStyle: {
                                        color: colors.primary,
                                        fontName: 'Jaldi',
                                        fontSize: '20'
                                    }
                                },
                                curveType: 'function',
                                colors: ['#b3aa0e', '#e2371d', '#14a52a']
                            }}
                            rootProps={{ 'data-testid': '2' }}
                        />

                        : ""}

                </div>

                <div className="container my-5">
                    <div className="row">

                        {Object.entries(all).length !== 0 ?
                            <>
                                <div className="col-md-3 mb-3">
                                    <div className="allCards">
                                        <CountriesIcon width="60%" />
                                        <h3 className='caseNumber colorPrimary m-0'>{all.affectedCountries.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>

                                        <h3 className='m-0'>Countries</h3>
                                        <h5 className='m-0'>Affected</h5>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <div className="allCards">
                                        <ConfirmedIcon width="60%" />
                                        <h3 className='caseNumber colorPrimary m-0'>{all.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>

                                        <h3 className='m-0'>Active</h3>
                                        <h5 className='m-0'>Cases</h5>
                                    </div>

                                </div>
                                <div className="col-md-3 mb-3">
                                    <div className="allCards">
                                        <FineIcon width="60%" />
                                        <h3 className='caseNumber colorPrimary m-0'>{all.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>

                                        <h3 className='m-0'>Recovered</h3>
                                        <h5 className='m-0'>Cases</h5>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <div className="allCards">
                                        <GoneIcon width="60%" />
                                        <h3 className='caseNumber colorPrimary m-0'>{all.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>

                                        <h3 className='m-0'>Death</h3>
                                        <h5 className='m-0'>Cases</h5>
                                    </div>
                                </div>
                            </>
                            : ""


                        }


                    </div>
                </div>


                <h1 className="colorPrimary mb-4 mt-5">World Stats</h1>

                <div className="tableContainer ">

                    <table className="fixed_headers table-hover searchable sortable">
                        <thead className="thead-light tHead">
                            <tr>
                                <th className='countries padd' scope="col">Country</th>
                                <th className='text-center newConfirmed' scope="col">New Confirmed</th>
                                <th className='text-center newConfirmed' scope="col">New Recovered</th>
                                <th className='text-center newConfirmed' scope="col">New Deaths</th>
                                <th className='text-center newConfirmed' scope="col">Total Confirmed</th>
                                <th className='text-center newConfirmed' scope="col">Total Recovered</th>
                                <th className='text-center newConfirmed' scope="col">Total Deaths</th>
                            </tr>
                        </thead>
                        <tbody>
                            {summary.map((eachCountry, index) => (
                                <tr key={index}>
                                    <td className=' countries'><img src={`https://www.countryflags.io/${eachCountry.flag}/flat/16.png`} /> &nbsp;{eachCountry.Country}</td>
                                    <td className='text-center newConfirmed'> {eachCountry.NewConfirmed}</td>
                                    <td className='text-center newConfirmed'>{eachCountry.NewRecovered}</td>
                                    <td className='text-center newConfirmed'>{eachCountry.NewDeaths}</td>
                                    <td className='text-center newConfirmed'>{eachCountry.TotalConfirmed}</td>
                                    <td className='text-center newConfirmed'>{eachCountry.TotalRecovered}</td>
                                    <td className='text-center newConfirmed'>{eachCountry.TotalDeaths}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

            <style jsx>
                {`
               
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
  height: 500px;
}
.fixed_headers tbody tr:nth-child(even) {
  background-color: ${colors.offWhite};
}




.tableContainer{
    height: 600px;
    overflow: auto
}
table {
    position: relative;
    border-collapse: collapse; 
  }
.tHead{
 
    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
}
             @media(max-width: 991px){
                 .scroll{
                     overflow-x: scroll
                 }
             }
                  select {
                   
                    height: 40px;
                    font-size: 100%;
                    cursor: pointer;
                    border-radius: 0;
                    background-color: #fff;
                    border: none;
                    border-bottom: 2px solid #962d22;
                    color: ${colors.primary};
                    width: 253px;
                    
                    transition: color 0.3s ease, background-color 0.3s ease, border-bottom-color 0.3s ease;
                  }
              
                  /* For IE <= 11 */
                  select::-ms-expand {
                    display: none; 
                  }
              
               
              
                
                


                .countryOption:hover{
                    box-shadow: 0 0 10px 100px ${colors.primary} inset;
                    webkit-box-shadow: 0 0 10px 100px ${colors.primary} inset;
                    background-color: ${colors.primary} !important;
               
                }

                .countrySelect option { 
                    max-height:250px;
                     overflow:auto;
                }
                .countrySelect{
                    border: transparent;
                    outline: none !important;
                    box-shadow: none !important;
                    width: 253px;
                    padding:5px;
                    border-bottom: 2px solid ${colors.primary};
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
              }
            `}
            </style>
        </div>
    )
}
