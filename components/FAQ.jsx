import React, { useState } from "react";
import { colors } from "./styles/styles";
import Axios from 'axios'
import FadeIn from 'react-fade-in';
import { URL } from './url'
import { NotFoundIcon, OfflineIcon } from "./imageComponents/Images";
export default function FAQS() {
  const [questionText, setQuestionText] = useState('');
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [storedQuestion, setStoredQuestion] = useState('');
  const askQuestion = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsFetched(false);
    setHasError(false);
    setAnswers([]);
    let payload = {
      question: questionText
    };
    Axios.post(
      URL + "/ask",
      payload
    )
      .then(result => {
        setIsLoading(false);
        setStoredQuestion(result.data.data[0].question)
        setIsFetched(true)
        setAnswers(
          result.data.data[0].answers
        );

      })
      .catch(error => {
        setIsLoading(false);
        setHasError(true)
        console.log(error);

      });
  }
  return (
    <>

      <div className="bgImage d-table">
        <div className="container text-center captionArea">

          <h1 className=' h1 text-white mb-3'>What do you need to know?</h1>
          <form action="submit" onSubmit={askQuestion}>
            <input className='question' readOnly={isLoading} disabled={isLoading} required value={questionText} onChange={e => setQuestionText(e.target.value)} placeholder='Ask your question here' type="text" name="question" id="question" />
            <button className='search' disabled={isLoading} type='submit'>
              {isLoading ?
                <div className="spinner-grow icon  text-center" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                :
                <i className="fa fa-search icon colorPrimary" aria-hidden="true"></i>

              }
            </button>

          </form>
          <small className='text-white d-inline-block'>Ask questions related to coronavirus </small>

        </div>
      </div>

      <div className="container pt-3">

        {
          isLoading === false && isFetched && answers.length !== 0 ?
            <>
              <h4 className='my-4'>Showing most relevant answers for '{storedQuestion}' </h4>
              {
                answers.slice(0, 5).map((eachAnswer, index) => (
                  <FadeIn key={index}>
                    <div className="bg-white newsCard py-3 px-4 my-3">
                      <h4 className='m-0'>{eachAnswer.question}</h4>
                      <small className='m-0 textGrey'>Sourced from {eachAnswer.meta.source}  {eachAnswer.meta.country} | {eachAnswer.meta.last_update}</small>
                      <h5>
                        {eachAnswer.answer.replace(/^(.{200}[^\s]*).*/, "$1")}...{' '}
                        <a target='_blank' rel="noopener noreferrer" href={eachAnswer.meta.link} className='text-dark text-decoration-none'>
                          <span className='newsLink text-decoration-none'>Read More</span>
                        </a>
                      </h5>

                    </div>
                  </FadeIn>
                ))}
            </>
            : ""
        }
        {
          isLoading === false && isFetched && answers.length === 0 ?
            <>
              <NotFoundIcon width='40%' margin='0 29%' />
              <h4 className="text-center">No search results found. Try to be more specific with your words and check for typing errors</h4>
            </>
            : ""
        }
        {
          isLoading === false && hasError === true && answers.length === 0 ?
            <>
              <OfflineIcon width='40%' margin='0 29%' />
              <h4 className="text-center">No internet connection. Check your connection and try again</h4>
            </>
            : ""
        }
        <h1>
          <span className="hoverEffect">FAQs</span>
        </h1>

        <div className="accordion my-5" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h3
                className="m-0"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is Corona Virus?
            </h3>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Coronaviruses are a large family of viruses which may cause
                illness in animals or humans. In humans, several coronaviruses are
                known to cause respiratory infections ranging from the common cold
                to more severe diseases such as Middle East Respiratory Syndrome
                (MERS) and Severe Acute Respiratory Syndrome (SARS). The most
                recently discovered coronavirus causes coronavirus disease
                COVID-19.
            </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h3
                className="m-0"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What is COVID-19?
            </h3>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                COVID-19 is the infectious disease caused by the most recently
                discovered coronavirus. This new virus and disease were unknown
                before the outbreak began in Wuhan, China, in December 2019.
            </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h3
                className="m-0"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What are the symptoms of COVID-19?
            </h3>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                The most common symptoms of COVID-19 are fever, tiredness, and dry
                cough. Some patients may have aches and pains, nasal congestion,
                runny nose, sore throat or diarrhea. These symptoms are usually
                mild and begin gradually. Some people become infected but don’t
                develop any symptoms and don't feel unwell. Most people (about
                80%) recover from the disease without needing special treatment.
                Around 1 out of every 6 people who gets COVID-19 becomes seriously
                ill and develops difficulty breathing. Older people, and those
                with underlying medical problems like high blood pressure, heart
                problems or diabetes, are more likely to develop serious illness.
                People with fever, cough and difficulty breathing should seek
                medical attention.
            </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingFour">
              <h3
                className="m-0"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Can the virus that causes COVID-19 be transmitted through the air?
            </h3>
            </div>
            <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Studies to date suggest that the virus that causes COVID-19 is
                mainly transmitted through contact with respiratory droplets
                rather than through the air.
            </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingSix">
              <h3
                className="m-0"
                data-toggle="collapse"
                data-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Can I catch COVID-19 from the faeces of someone with the disease?
            </h3>
            </div>
            <div
              id="collapseSix"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                The risk of catching COVID-19 from the faeces of an infected person
                appears to be low. While initial investigations suggest the virus
                may be present in faeces in some cases, spread through this route
                is not a main feature of the outbreak. WHO is assessing ongoing
                research on the ways COVID-19 is spread and will continue to share
                new findings. Because this is a risk, however, it is another
                reason to clean hands regularly, after using the bathroom and
                before eating.
            </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingSeven">
              <h3
                className="m-0"
                data-toggle="collapse"
                data-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                I am well and asymptomatic. Should I use a mask?
            </h3>
            </div>
            <div
              id="collapseSeven"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                According to the WHO, for individuals without respiratory
                symptoms, a medical mask is not required, as no evidence is
                available on its usefulness to protect non-sick persons. However,
                masks might be worn in some countries according to local cultural
                habits. If masks are used, best practices should be followed on
                how to wear, remove, and dispose of them and on hand hygiene
                action after removal. For more information, visit the WHO guidance
                on use of masks in the community.
            </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingEight">
              <h3
                className="m-0"
                data-toggle="collapse"
                data-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                How likely am I to catch COVID-19?
            </h3>
            </div>
            <div
              id="collapseEight"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                The risk depends on where you are - and more specifically, whether
                there is a COVID-19 outbreak unfolding there. For most people in
                most locations the risk of catching COVID-19 is still low.
                However, there are now places around the world (cities or areas)
                where the disease is spreading. For people living in, or visiting,
                these areas the risk of catching COVID-19 is higher. Governments
                and health authorities are taking vigorous action every time a new
                case of COVID-19 is identified. Be sure to comply with any local
                restrictions on travel, movement or large gatherings. Cooperating
                with disease control efforts will reduce your risk of catching or
                spreading COVID-19. COVID-19 outbreaks can be contained and
                transmission stopped, as has been shown in China and some other
                countries. Unfortunately, new outbreaks can emerge rapidly. It’s
                important to be aware of the situation where you are or intend to
                go. WHO publishes daily updates on the COVID-19 situation
                worldwide. You can see these at
              <br />
              https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/
            </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="headingNine">
              <h3
                className="m-0"
                data-toggle="collapse"
                data-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                Are antibiotics effective in preventing or treating COVID-19?
            </h3>
            </div>
            <div
              id="collapseNine"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                No. Antibiotics do not work against viruses, they only work on
                bacterial infections. COVID-19 is caused by a virus, so
                antibiotics do not work. Antibiotics should not be used as a means
                of prevention or treatment of COVID-19. They should only be used
                as directed by a physician to treat a bacterial infection.
            </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="headingTen">
              <h3
                className="m-0"
                data-toggle="collapse"
                data-target="#collapseTen"
                aria-expanded="false"
                aria-controls="collapseTen"
              >
                Are antibiotics effective in preventing or treating COVID-19?
            </h3>
            </div>
            <div
              id="collapseTen"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                No. Antibiotics do not work against viruses, they only work on
                bacterial infections. COVID-19 is caused by a virus, so
                antibiotics do not work. Antibiotics should not be used as a means
                of prevention or treatment of COVID-19. They should only be used
                as directed by a physician to treat a bacterial infection.
            </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="headingEleven">
              <h3
                className="m-0"
                data-toggle="collapse"
                data-target="#collapseEleven"
                aria-expanded="false"
                aria-controls="collapseEleven"
              >
                Should I wear a mask to protect myself from catching the COVID-19
                virus?
            </h3>
            </div>
            <div
              id="collapseEleven"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Should I wear a mask to protect myself from catching the COVID-19
                virus? Only wear a mask if you are ill with COVID-19 symptoms
                (especially coughing) or looking after someone who may have
                COVID-19. Disposable face mask can only be used once. If you are
                not ill or looking after someone who is ill then you are wasting a
                mask. There is a world-wide shortage of masks, so WHO urges people
                to use masks wisely. WHO advises rational use of medical masks to
                avoid unnecessary wastage of precious resources and mis-use of
                masks . The most effective ways to protect yourself and others
                against COVID-19 are to frequently clean your hands, cover your
                cough with the bend of elbow or tissue and maintain a distance of
                at least 1 meter (3 feet) from people who are coughing or
                sneezing.
            </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="headingEleven1">
              <h3
                className="m-0"
                data-toggle="collapse"
                data-target="#collapseEleven1"
                aria-expanded="false"
                aria-controls="collapseEleven1"
              >
                Can people who recover from COVID-19 be infected again?
            </h3>
            </div>
            <div
              id="collapseEleven1"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                We know that for similar coronaviruses, infected people are
                unlikely to be re-infected shortly after they recover. However,
                because the immune response to COVID-19 is not yet understood, it
                is not yet known whether similar immune protection will be
                observed for patients who have recovered from COVID-19.
            </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="headingEleven11">
              <h3
                className="m-0"
                data-toggle="collapse"
                data-target="#collapseEleven11"
                aria-expanded="false"
                aria-controls="collapseEleven11"
              >
                Is there a connection between COVID -19 and environment
                temperature?
            </h3>
            </div>
            <div
              id="collapseEleven11"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                It is not known yet if weather and temperature changes impact or
                has any connection with COVID-19. At this time, it is not clear or
                known if the spread of COVID-19 will decrease when the weather
                becomes warmer.
            </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="headingEleven11">
              <h3
                className="m-0"
                data-toggle="collapse"
                data-target="#collapseEleven111"
                aria-expanded="false"
                aria-controls="collapseEleven111"
              >
                Does Nigeria have the capacity to diagnose COVID-19?
            </h3>
            </div>
            <div
              id="collapseEleven111"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Yes. Currently, five laboratories in Nigeria can diagnose
                COVID-19; NCDC National Reference Laboratory; Virology Laboratory
                of Lagos University Teaching Hospital; Irrua Specialist Teaching
                Hospital; Nigerian Institute of Medical Research; and African
                Centre of Excellence for Genomics of Infectious Diseases. They are
                all in the NCDC molecular laboratory network. Health officials are
                advised to call 07032864444 for sample transportation and related
                advice if they have a case that fits the national case definition.
            </div>
            </div>
          </div>
        </div>

      </div>
      <style jsx>{`
      .spinner-grow {
      height: 2.1rem;  
    }
      .newsCard{
       
        box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04),
        0 1px 6px rgba(0, 0, 0, 0.04);
      }
      .textGrey{
        color: ${colors.grey}
      }
      .newsLink{
        color: ${colors.primary}
      }
      .search{
        height: 58px;
    width: 76px;
    margin-left: -30px;
    border-radius: 0 25px 25px 0;
    border: 0px solid ${colors.primary};
    background-color: white;
    outline: none !important;
    transition: all 0.5s
      }
      .search:hover{
        background-color: ${colors.primary};
        border: 2px solid ${colors.white};
      }
      .search:hover .icon {
        color: ${colors.white} !important;
      }
      .search .icon {
        color: ${colors.primary} !important;
      }
      .question{
        width: 600px;
    margin-top: 14px;
    height: 58px;
    padding: 0 27px ;
    border: none;
    outline: none !important;
    border-radius: 25px;
      }
      @media(min-width: 768px){
        .h1{
          font-size: 50px
        }
      }
      @media(max-width: 767px){
        .question{
        width: 85%;
        float: left
        }

        .search{
          width: 15%;
          float: left;
          margin-top: 14px;
        }
      }
      @media(max-width: 535px){
        .question{
        width: 91% !important;
        float: left
        }
      }
      @media(max-width: 459px){
        .question{
        width: 92% !important;
        float: left
        }
      }
      .captionArea {
        display: table-cell;
        vertical-align: middle;
      }
      .bgImage{
        background-color:  ${colors.primary};
        height: 400px;
        background-image: url('/images/doctor.png?trace');
        background-attachment: fixed;
        background-repeat: no-repeat;
      width: 100%
      }
    .colorPrimary {
      color: ${colors.primary} !important;
    }
    .card-header {
      background-color: ${colors.primary};
      color: white;
      padding: 10px 1.25rem;
      box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04),
        0 1px 6px rgba(0, 0, 0, 0.04) !important;
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
  `}</style>
    </>
  );
}
