import React from 'react'
import { colors } from "./styles/styles";

export default function LoadingAnimation() {
    return (
        <>
            <div className='text-center w-100 mt-4'>
                <div className="loadingio-spinner-ripple-zuukd9wwarc"><div className="ldio-9t8qvifo785">
                    <div></div><div></div>
                </div></div>
            </div>
            <style jsx>{`
           
            @keyframes ldio-9t8qvifo785 {
                0% {
                  top: 96px;
                  left: 96px;
                  width: 0;
                  height: 0;
                  opacity: 1;
                }
                100% {
                  top: 58px;
                  left: 58px;
                  width: 76px;
                  height: 76px;
                  opacity: 0;
                }
              }
              
              .ldio-9t8qvifo785 div {
                position: absolute;
                border-width: 4px;
                border-style: solid;
                opacity: 1;
                border-radius: 50%;
                animation: ldio-9t8qvifo785 1.1235955056179776s cubic-bezier(0,0.2,0.8,1) infinite;
              }
              
              .ldio-9t8qvifo785 div:nth-child(1) {
                border-color: #819bdc
              }
              
              .ldio-9t8qvifo785 div:nth-child(2) {
                border-color: #819bdc;
                animation-delay: -0.5617977528089888s;
              }
              
              .loadingio-spinner-ripple-zuukd9wwarc {
                width: 200px;
                height: 200px;
                display: inline-block;
                overflow: hidden;
                background: none;
              }
              .ldio-9t8qvifo785 {
                width: 100%;
                height: 100%;
                position: relative;
                transform: translateZ(0) scale(1);
                backface-visibility: hidden;
                transform-origin: 0 0; /* see note above */
              }
              .ldio-9t8qvifo785 div { box-sizing: content-box; }
              /* generated by https://loading.io/ */
          
            
          
       `}</style>
        </>
    )
}
