import React, { useContext, useState } from 'react'
import { colors } from '../styles/styles'
import MyContext from "../Context";


export default function TopCasesLocal() {
  const { ncdc } = useContext(MyContext);
  // console.log(ncdc.Numbers);
  const cases = [];
  if (Object.entries(ncdc).length !== 0) {

    var list = ncdc.Numbers;
    // console.log(list);
    // Reverse sorting on key
    const keysSorted = Object.values(list).sort(function (a, b) { return b - a })
    // console.log(keysSorted);


    // Adding the sorted result to an array of object
    for (let i = 0; i < keysSorted.length; i++) {
      const obj = {};
      obj.val = keysSorted[i];
      obj.id = Object.keys(list)[Object.values(list).indexOf(keysSorted[i])];
      cases.push(obj);
    }

    // console.log(cases);
    // setCasesArray(cases)
  }

  return (
    <>
      {cases.splice(0, 6).map((eachCase, index) => (
        <div key={index} className="col-sm-2">
          <div className="topCase mb-3">
            <h1 className='caseNumber colorPrimary'>{eachCase.val}</h1>

            <h4 className='caseState colorPrimary'>{ncdc.States[eachCase.id]}</h4>
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
          </div>
        </div>
      ))}


    </>
  )
}
