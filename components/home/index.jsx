import React from "react";
import { colors } from "../styles/styles";
import { DefaultButton, OutlineButton } from "../button";
import FixedNews from "./FixedNews";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import TopCasesLocal from "./TopCasesLocal";
import TopCasesInternational from "./TopCasesInternational";
import Summary from "./Summary";
import WordCloud from "./WordCloud";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <div className=" scrollable" >
        <div className="doctorBackground">
          <div className="setResponse h90">
            <div className="container">
              <div className="row vh100">
                <div className="col-md-7 captionParent h90">
                  <div className="captionArea responsiveCenter">
                    <h1>
                      <span className="hoverEffect">
                        COVID-19
                    </span>
                    </h1>
                    <h5 className='respFont text-justify'>
                      Severe Acute Respiratory Syndrome Coronavirus-2 (SARS-CoV-2)
                      is the name given to the 2019 novel coronavirus. COVID-19 is
                      the name given to the disease associated with the virus.
                      <br />
                      <br />
                      In December 2019, It was detected in
                      three patients with pneumonia connected to the cluster of acute respiratory illness
                      cases from Wuhan, China. By the end of February 2020, several were experiencing sustained
                      local transmission of coronavirus disease.
                      <br /><br />
                   Here, you'll be able to get realtime data using Artificial Intelligence (AI)
                    from different sources concerning the virus across different states in Nigeria and countries around the World.


                  </h5>
                  </div>
                </div>
                <div className="col-md-5 bgSpace captionParent h90 p-0" />
                <div className="text-center w-100">
                  <div className="animated infinite bounce slow">
                    <i className="fa fa-angle-down angles" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-3">
          <Summary />

        </div>

        <div className="pb-5 pt-4">
          <div className="container">
            <h1 className="colorPrimary">Trending Words</h1>
            <h5>We have been able to fetch the most used words related to the virus based on their numbers of appearance on social media.<br />

           Larger words indicate more frequent use and the smaller ones indicate less frequent use.
           <br /><br />
           Zoom in and take a look</h5>
            <div className=" mt-5">
              <TransformWrapper
                defaultScale={1}
                defaultPositionX={200}
                defaultPositionY={100}
              >
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                  <>
                    <div className="tools">
                      <div className="reset float-right">
                        <DefaultButton onClick={resetTransform} padding='4px 25px' borderRadius='0' font='25px'><i className="fa fa-expand" aria-hidden="true"></i></DefaultButton>
                      </div>

                      <div className="zoom">

                        <DefaultButton onClick={zoomIn} padding='4px 25px' borderRadius='0' font='25px'><i className="fa fa-plus icon" aria-hidden="true"></i></DefaultButton>
                        &nbsp;&nbsp;
                        <OutlineButton onClick={zoomOut} padding='4px 25px' borderRadius='0' font='25px'><i className="fa fa-minus icon" aria-hidden="true"></i></OutlineButton>
                      </div>

                    </div>
                    <div className='imageBorder'>
                      <TransformComponent>
                        <div className="wordcloud">
                          {
                            // <img width='100%' height='100%' src="https://coronadatasource.herokuapp.com/static/corona.png" alt="wordcloud" />
                          }
                          <WordCloud />
                        </div>
                      </TransformComponent>
                    </div>
                  </>
                )}
              </TransformWrapper>

            </div>

          </div>
        </div>

        <div className="py-4 bgLight">
          <div className="container">
            <h1 className="colorPrimary mt-4">Top Cases in Nigeria</h1>
            <div className=" mt-4">
              <div className="row">
                <TopCasesLocal />


              </div>
            </div>

            <h1 className="colorPrimary mt-4">Top Cases around the World</h1>
            <div className=" mt-4">
              <div className="row">
                <TopCasesInternational />


              </div>
            </div>
          </div>

        </div>
        <div>
          <div className="container text-center py-5 mb-5">

            <h1 className=' colorPrimary'>Got a Question?</h1>
            <h5 className='text-center mt-5 mb-4'>How it all started? Signs and symptoms? How to stay safe?</h5>
            <Link href='/faq'>
              <OutlineButton text='Ask Anything' width='335px' padding='10px 0' font='larger' />
            </Link>
          </div>

        </div>

      </div>
      <div className="fixed-news leftBorder py-4 px-3">
        <FixedNews />
      </div>

      <style jsx>
        {`

        
        .doctorBackground{
          background-image: url('/images/doctor.png?trace');
          background-attachment: fixed;
        }
        .icon{
          font-size: 20px
        }
        .caseNumber{
          font-size: 4.5rem
        }
        .topCase{
          background-color: ${colors.white};
          padding: 20px 5px;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04),
          0 1px 6px rgba(0, 0, 0, 0.04);
        }
        .imageBorder{
          border-width: 1px;
          border-color: ${colors.lightgrey};
          border-style: solid;
        }
        .wordcloud{
          width: 100%;
          height: 650px
        }
        .leftBorder{
          border-left-width: 1px;
          border-left-color: ${colors.lightgrey};
          border-left-style: solid;
          border-top-width: 1px;
          border-top-color: ${colors.lightgrey};
          border-top-style: solid;
        }
        .fixed-news{
          width: 25%;
          display: inline-block;
          position: fixed;
          height: 100vh;
          background-color: ${colors.offWhite}

        }
     
        .scrollable{
          width: 75%;
          display: inline-block
        }
          .hImage {
            height: 370px;
          }
          .bigText {
            font-weight: 600;
            font-size: -webkit-xxx-large;
          }

          .line {
            width: 100%;
            height: 5px;
            margin: 60px 0;
            border-radius: 5px;
            background: #70c185;
          }
          .bgLight {
            background-color: ${colors.offWhite};
          }
          .colorPrimary {
            color: ${colors.primary};
          }
          .bgPrimary {
            background-color: ${colors.primary};
          }
          .h50 {
            height: ;
          }

          .h90 {
            height: 85%;
          }
          .vh100 {
            height: calc(100vh - 60px);
          }
          .smallerText {
            font-weight: 600;
          }
          .angles {
            color: ${colors.primary};
            font-size: 40px;
          }
          .captionParent {
            display: table;
          }
          .captionArea {
            display: table-cell;
            vertical-align: middle;
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
          .setResponse {
            background-color: white;
            opacity: 0.8
          }
          @media (max-width: 576px) {
            .responsiveCenter {
              text-align: center;
            }
            .line {
              -ms-transform: rotate(90deg);
              transform: rotate(90deg);
              width: 55px;
              margin: 30px auto;
            }
          }

          @media (min-width: 768px) and (max-width: 991px) {
            .break {
              display: block;
            }
          }
          @media (max-width: 539px) {
            .break {
              display: block;
            }

            .setResponse {
              background-color: white;
              opacity: 0.7
            }
          }
          @media (max-width: 767px) {
            .fixed-news{
             display: none
    
            }
            .fixed-news {
              width: 100%;
              display: block;
              position: initial;
              height: inherit;
              background-color: #f9f9f9;
          }
          .leftBorder{
     
            border-top-width: 1px;
            
          }
            .wordcloud {
              height: inherit;
          }
            .scrollable{
              width: 100%
            }
            .bgSpace {
              display: none;
            }
          }
          @media (max-width: 991px) {
            .respFont{
          font-size: 19px
            }
            .setResponse {
              background-color: white;
              opacity: 0.8
            }
          }
        `}
      </style>
    </div>
  );
}
