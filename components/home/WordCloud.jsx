import React, { useEffect, useState, useContext } from 'react'
import MyContext from "../Context";
import { colors } from '../styles/styles'

export default function WordCloud() {
    const { wordCloud } = useContext(MyContext);
    return (
        <>
            {wordCloud !== '' ?
                <img width='100%' height='100%' src={wordCloud} alt="Wordcloud Image" />

                :


                <div className='text-center w-100'>
                    <div className="spinner-grow colorPrimary  text-center" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
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
