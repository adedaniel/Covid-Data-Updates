import React, { useState, useContext } from 'react'
import { colors } from './styles/styles'
import Chart from "react-google-charts";
import MyContext from "./Context";

export default function Infographics() {
    const [country, setCountry] = useState('Nigeria')
    const { timeSeries, summary } = useContext(MyContext);
    let nationalStates = [['Days', 'Confirmed', 'Deaths', 'Recovered']];
    let countriesNames;

    if (Object.entries(timeSeries).length !== 0) {

        countriesNames = Object.keys(timeSeries);


        let requiredArray = []
        // console.log(((timeSeries.Nigeria.length) - 22), (timeSeries.Nigeria.length));
        // console.log(typeof ((timeSeries.Nigeria.length) - 22));
        timeSeries[`${country}`].slice(((timeSeries.Nigeria.length) - 8), (timeSeries.Nigeria.length)).map((eachDate) => (
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

                {Object.entries(timeSeries).length !== 0 ?

                    <Chart
                        width={'100%'}
                        height={'500px'}
                        chartType="LineChart"
                        loader={<div>Loading Chart</div>}
                        data={nationalStates
                        }
                        options={{
                            hAxis: {
                                title: 'Days',
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
                            pointSize: 3,
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

            <style jsx>
                {`
             
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
