import React, { useEffect, useState, useContext } from 'react'
import MyContext from "../Context";
import { colors } from '../styles/styles'
import LoadingAnimation from '../LoadingAnimation';

export default function WordCloud() {
    const { wordCloud } = useContext(MyContext);
    return (
        <>
            {wordCloud !== '' ?
                <img width='100%' height='100%' src={wordCloud} alt="Wordcloud Image" />

                :


                <div className='text-center w-100'>
                    <LoadingAnimation />
                </div>
            }
            <style jsx>{`
  
      .colorPrimary {
        color: ${colors.primary} !important;
      }
    `}</style>
        </>
    )
}
