// pages/_app.js
import App from "next/app";
import Head from "next/head";
import React from "react";
import Axios from "axios";
// import { Provider } from "../components/Context";
import { Provider } from "../components/Context";
import { URL } from "../components/url";

export default class MyApp extends App {
  state = {

    news: [],
    localNews: [],
    ncdc: [],
    summary: [],
    timeSeries: {},
    wordCloud: "",
    all: {},
    ncdcPresent: {}
  };
  componentDidMount() {
    Axios.get(
      URL + "/ncdc"
    ).then((result) => {
      this.setState({ ncdc: result.data.data })
      // console.log(result.data.data);
      // console.log("fetched");
    }).catch(errors => {
      // react on errors.
      console.error(errors);
    });
    Axios.get(
      URL + "/ncdcpresent"
    ).then((result) => {
      this.setState({ ncdcPresent: result.data.data })
      // console.log(result.data.data);
      // console.log("fetched");
    }).catch(errors => {
      // react on errors.
      console.error(errors);
    });
    Axios.get(
      URL + "/news"
    ).then((result) => {
      this.setState({ news: result.data.data })
      // console.log(result.data.data);
    }).catch(errors => {
      // react on errors.
      console.error(errors);
    });
    Axios.get(
      URL + "/localnews"
    ).then((result) => {
      this.setState({ localNews: result.data.data })
      // console.log(result.data.data);
    }).catch(errors => {
      // react on errors.
      console.error(errors);
    });

    Axios.get(
      URL + "/summary"
    ).then((result) => {
      this.setState({ summary: result.data.data })
      // console.log(result.data.data);
    }).catch(errors => {
      // react on errors.
      console.error(errors);
    });

    Axios.get(
      URL + "/timeseries"
    ).then((result) => {
      this.setState({ timeSeries: result.data.data })
      // console.log(result.data.data);
    }).catch(errors => {
      // react on errors.
      console.error(errors);
    });
    Axios.get(
      URL + "/all"
    ).then((result) => {
      this.setState({ all: result.data.data })
      // console.log(result.data.data);
    }).catch(errors => {
      // react on errors.
      console.error(errors);
    });

    Axios.get(
      URL + "/wordcloudimage"
    ).then((result) => {
      this.setState({ wordCloud: result.data.data })
      // console.log(result.data.data);
    }).catch(errors => {
      // react on errors.
      console.error(errors);
    });

  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>

          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
          <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
          ></link>
          <link rel="icon" href="/ct-logo.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="CovidTracker" />
          <link href="/ct-logo.png" sizes="2048x2732" rel="apple-touch-startup-image" />
          <link href="/ct-logo.png" sizes="1668x2224" rel="apple-touch-startup-image" />
          <link href="/ct-logo.png" sizes="1536x2048" rel="apple-touch-startup-image" />
          <link href="/ct-logo.png" sizes="1125x2436" rel="apple-touch-startup-image" />
          <link href="/ct-logo.png" sizes="1242x2208" rel="apple-touch-startup-image" />
          <link href="/ct-logo.png" sizes="750x1334" rel="apple-touch-startup-image" />
          <link href="/ct-logo.png" sizes="640x1136" rel="apple-touch-startup-image" />
          <title>CovidTracker</title>
        </Head>

        <Provider
          value={{
            news: this.state.news,
            summary: this.state.summary,
            localNews: this.state.localNews,
            ncdc: this.state.ncdc,
            timeSeries: this.state.timeSeries,
            all: this.state.all,
            wordCloud: this.state.wordCloud,
            ncdcPresent: this.state.ncdcPresent
          }}
        >

          <Component {...pageProps} />
        </Provider>
        <style jsx global>{`
          @font-face {
            font-family: Jaldi;
            
            font-display: swap;
          }
          html {
            font-family: "Jaldi", Roboto;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }
          
          body {
            font-family: Jaldi;
            font-size: 20px;
      scrollbar-width: thin;
            
          }
         
        
        `}</style>
      </>
    );
  }
}
