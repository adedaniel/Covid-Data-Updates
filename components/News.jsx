import React, { useContext, useState } from 'react';
import { colors } from './styles/styles'
import MyContext from "./Context";
import FadeIn from 'react-fade-in';
import LoadingAnimation from './LoadingAnimation';

export default function News() {
    const { news, localNews } = useContext(MyContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [localPage, setLocalPage] = useState(1);
    console.log(localNews);
    let indexOfLastPost = currentPage * 20;
    let indexOfFirstPost = indexOfLastPost - 20;
    // console.log(indexOfFirstPost, indexOfLastPost);

    let localPostsToDisplay = localNews.slice(indexOfFirstPost, indexOfLastPost)
    let internationalPostsToDisplay = news.slice(indexOfFirstPost, indexOfLastPost)
    // console.log(internationalPostsToDisplay);

    return (
        <>
            <div className="container pt-3 mb-5">
                <h1 className='mb-4'>
                    <span className="hoverEffect">News</span>
                </h1>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-local-tab" data-toggle="tab" href="#nav-local" role="tab" aria-controls="nav-local" aria-selected="true">LOCAL</a>
                        <a className="nav-item nav-link" id="nav-international-tab" data-toggle="tab" href="#nav-international" role="tab" aria-controls="nav-international" aria-selected="false">INTERNATIONAL</a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-local" role="tabpanel" aria-labelledby="nav-local-tab">
                        {
                            localNews.length !== 0 ?
                                localNews.map((eachNews, index) => (
                                    <FadeIn key={index}>
                                        <a target='_blank' rel="noopener noreferrer" href={eachNews.link} className='text-dark text-decoration-none'>
                                            <div className="bg-white newsCard my-3">

                                                <div className="row">
                                                    <div className="col-sm-2 borderRadius bgImage" style={{ backgroundImage: `url(${eachNews.image})`, backgroundSize: "cover" }}>
                                                    </div>
                                                    <div className="col-sm-10 summary py-3">
                                                        <h4 className='m-0'>{eachNews.title}</h4>
                                                        <small className='m-0 textGrey'>{eachNews.published}</small>
                                                        <h6>
                                                            {eachNews.summary.replace(/^(.{75}[^\s]*).*/, "$1")}...{' '}
                                                            <span className='newsLink text-decoration-none'>Read More</span>
                                                        </h6>

                                                    </div>
                                                </div>

                                            </div>
                                        </a>
                                    </FadeIn>
                                ))
                                :
                                // <div className='text-center w-100 mt-4'>
                                //     <div className="spinner-grow colorPrimary  text-center" role="status">
                                //         <span className="sr-only">Loading...</span>
                                //     </div>
                                // </div>
                                <div className="vh-100">
                                    <LoadingAnimation />
                                </div>
                        }


                    </div>
                    <div className="tab-pane fade" id="nav-international" role="tabpanel" aria-labelledby="nav-international-tab">
                        {
                            news.length !== 0 ?

                                internationalPostsToDisplay.map((eachNews, index) => (
                                    <FadeIn key={index}>
                                        <a target='_blank' rel="noopener noreferrer" href={eachNews.link} className='text-dark text-decoration-none'>
                                            <div className="bg-white newsCard py-3 px-4 my-3">
                                                <h4 className='m-0'>{eachNews.title}</h4>
                                                <small className='m-0 textGrey'>{eachNews.published}</small>
                                                <h6>
                                                    {eachNews.summary.replace(/^(.{75}[^\s]*).*/, "$1")}...{' '}
                                                    <span className='newsLink text-decoration-none'>Read More</span>
                                                </h6>

                                            </div>
                                        </a>
                                    </FadeIn>
                                ))
                                : <div className="vh-100">
                                    <LoadingAnimation />
                                </div>
                        }
                        <div className="col-md-12 mt-5">

                            <nav className='navigation' aria-label=" navigation ">
                                <ul className="pagination ">
                                    <li className={`page-item ${
                                        currentPage === 1 ? "disabled" : ""
                                        }`}>
                                        <a className="page-link" onClick={() => setCurrentPage(currentPage - 1)} href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>


                                    <li className={`page-item ${
                                        currentPage === 1 ? "active" : "inactive"
                                        }`}><a className="page-link" onClick={() => setCurrentPage(1)} href="#">1 <span className="sr-only">(current)</span></a></li>
                                    <li className={`page-item ${
                                        currentPage === 2 ? "active" : "inactive"
                                        }`}><a className="page-link" onClick={() => setCurrentPage(2)} href="#">2</a></li>
                                    <li className={`page-item ${
                                        currentPage === 3 ? "active" : "inactive"
                                        }`}><a className="page-link" onClick={() => setCurrentPage(3)} href="#">3</a></li>
                                    <li className={`page-item ${
                                        currentPage === 4 ? "active" : "inactive"
                                        }`}><a className="page-link" onClick={() => setCurrentPage(4)} href="#">4</a></li>
                                    <li className={`page-item ${
                                        currentPage === 5 ? "active" : "inactive"
                                        }`}><a className="page-link" onClick={() => setCurrentPage(5)} href="#">5</a></li>


                                    <li className={`page-item ${
                                        currentPage === 5 ? "disabled" : ""
                                        }`}>
                                        <a className="page-link" onClick={() => setCurrentPage(currentPage + 1)} href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
            <style jsx>{`
            .colorPrimary {
                color: ${colors.primary};
              }
            .page-item .page-link{
                color: ${colors.primary};
            }
            .page-item.active .page-link{
                color: ${colors.white} !important;
                background-color: ${colors.primary};
                border-color: ${colors.primary};
            }
            .page-item .page-link {
                outline: none !important;
            box-shadow: none !important;

            }
            .navigation{
                margin: 0 auto;
    width: max-content;
            }
            .newsLink{
                color: ${colors.primary}
              }
              .pointer{
                cursor: pointer
              }
@media(max-width:575px){
    .bgImage{
        height: 140px;
margin: 0 15px;
    }
              .borderRadius{
                border-radius: 10px 10px 0 0px !important;
            }
            .summary{
                padding-left: 25px;
                padding-right: 25px;
            }
            }
             
                    .seeMore{
                        width: fit-content;
                        margin: 0 auto
                    }
        .textDark {
            color: black;
        }
        .borderRadius{
            border-radius: 10px 0 0 10px;

        }
                .newsCard{
                    border-radius: 10px;
                    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04),
                    0 1px 6px rgba(0, 0, 0, 0.04);
                  }
                  .textGrey{
                    color: ${colors.grey}
                  }

            .nav-tabs .nav-link.active {
                color: #FFF;
                background-color: ${colors.primary};
                border-color: #dee2e6 #dee2e6 #fff;
            }
            .nav-tabs a{
            font-size: larger;
            color: ${colors.primary} ;
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
