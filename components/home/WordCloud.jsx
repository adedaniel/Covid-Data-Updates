import React, { useEffect, useState, useContext } from 'react'
import MyContext from "../Context";

export default function WordCloud() {
    const { wordCloud } = useContext(MyContext);
    console.log(wordCloud);
    return (
        <img width='100%' height='100%' src={wordCloud} alt="Wordcloud Image" />

    )
}
