// pages/_app.js
import App from "next/app";
import Head from "next/head";
import React from "react";
import Axios from "axios";
// import { Provider } from "../components/Context";

// import { URL } from "../components/url";

export default class MyApp extends App {
  state = {
    showTab: true,
    firstLoad: true,
    students: [],
    subjects: [],
    classes: []
  };
  // componentDidMount() {
  //   const requeststudents = Axios.get(URL + "/getstudents");
  //   const requestsubjects = Axios.get(URL + "/getsubjects");
  //   const requestclasses = Axios.get(URL + "/getclasses");

  //   Axios.all([requeststudents, requestsubjects, requestclasses])
  //     .then(
  //       Axios.spread((...responses) => {
  //         const responsestudents = responses[0].data.data.students;
  //         const responsesubjects = responses[1].data.data.subjects;
  //         const responseclasses = responses[2].data.data.classes;

  //         // use/access the results
  //         this.setState({
  //           students: responsestudents,
  //           subjects: responsesubjects,
  //           classes: responseclasses
  //         });
  //       })
  //     )
  //     .catch(errors => {
  //       // react on errors.
  //       console.error(errors);
  //     });
  // }

  // setShowTab = () => {
  //   this.setState({ showTab: !this.state.showTab });
  // };
  // addStudent = details => {
  //   this.setState({
  //     students: [...this.state.students, details]
  //   });
  // };

  // addSubject = details => {
  //   let newSubject = {
  //     subject_name: details.subject
  //   };
  //   this.setState({
  //     subjects: [...this.state.subjects, newSubject]
  //   });
  // };

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


        <div className="w-100 appWrapper position-absolute bgLight">
          <Component {...pageProps} />
        </div>
        <style jsx global>{`
          @font-face {
            font-family: Jaldi;
            src: url(fonts/Jaldi-Regular.ttf);
            font-display: fallback;
          }
          html {
            font-family: "Jaldi", sans-serif;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }
          
          body {
            font-family: Jaldi;
            font-size: 20px

          }
         
        
        `}</style>
      </>
    );
  }
}
