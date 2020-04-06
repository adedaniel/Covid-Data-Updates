import React, { useContext } from 'react'
import { colors } from '../styles/styles'
import MyContext from "../Context";
import FadeIn from "react-fade-in";
import LoadingAnimation from '../LoadingAnimation';


export default function TopCasesLocal() {
  const { ncdc } = useContext(MyContext);
  // console.log(ncdc);
  // const cases = [];
  // if (ncdc.length !== 0) {
  //   console.log(ncdc);
  //   // var list = ncdc.Numbers;
  //   // // console.log(list);
  //   // // Reverse sorting on key
  //   // const keysSorted = Object.values(list).sort(function (a, b) { return b - a })
  //   // // console.log(keysSorted);


  //   // // Adding the sorted result to an array of object
  //   // for (let i = 0; i < keysSorted.length; i++) {
  //   //   const obj = {};
  //   //   obj.val = keysSorted[i];
  //   //   obj.id = Object.keys(list)[Object.values(list).indexOf(keysSorted[i])];
  //   //   cases.push(obj);
  //   // }

  //   // console.log(cases);
  //   // setCasesArray(cases)
  // }

  return (
    <>
      {
        ncdc.length !== 0 ?
          ncdc.slice(0, 6).map((eachCase, index) => (
            <div key={index} className="col-sm-2">
              <div className="topLocalCase mb-3">
                <FadeIn>
                  <h1 className='caseNumber colorPrimary'>{eachCase[1]}</h1>

                  <h4 className='caseState colorPrimary'>{eachCase[0]}</h4>
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
            font-size: 4.5rem
          }
          .topLocalCase{
            background-color: ${colors.white};
            padding: 20px 5px;
            border-radius: 8px;
            text-align: center;
            height: 180px;
            box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04),
            0 1px 6px rgba(0, 0, 0, 0.04);
          }
          @media(max-width: 767px){
            .topLocalCase{
              background-color: ${colors.white};
              border-radius: 8px;
              padding: 0;
              text-align: center;
              height: 136px;
              box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04),
              0 1px 6px rgba(0, 0, 0, 0.04);
            }
          }
          .colorPrimary {
            color: ${colors.primary} !important;
          }
        `}</style>

    </>
  )
}
