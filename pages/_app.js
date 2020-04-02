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
    ncdc: {},
    summary: [],
    timeSeries: [],
  };
  componentDidMount() {
    Axios.get(
      URL + "/ncdc"
    ).then((result) => {
      this.setState({ ncdc: JSON.parse(result.data.data) })
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

  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
          <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
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


          <title>Covid Tracker</title>
        </Head>

        <Provider
          value={{
            news: this.state.news,
            summary: this.state.summary,
            localNews: this.state.localNews,
            ncdc: this.state.ncdc,
            timeSeries: this.state.timeSeries,
          }}
        >

          <Component {...pageProps} />
        </Provider>
        <style jsx global>{`
          @font-face {
            font-family: Jaldi;
            src: url(fonts/Jaldi-Regular.ttf);
            font-display: swap;
          }
          html {
            font-family: "Jaldi", sans-serif;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }
          
          body {
            font-family: Jaldi;
            font-size: 20px;
            
          }
         
        
        `}</style>
      </>
    );
  }
}
