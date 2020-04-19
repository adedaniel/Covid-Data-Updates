import React, { useContext } from 'react'
import { colors } from '../styles/styles'
import Link from "next/link"
import MyContext from "../Context";
import FadeIn from 'react-fade-in';
import LoadingAnimation from '../LoadingAnimation';
import ErrorMessage from '../ErrorMessage';
export default function FixedNews() {
  const { news } = useContext(MyContext);
  // const [news, setNews] = useState([])
  // useEffect(() => {
  //   Axios.get(
  //     `https://coronadatasource.herokuapp.com/api/news`
  //   ).then((result) => {

  //     // console.log(result.data.data);
  //     setNews(result.data.data)
  //   })
  // }, [])
  return (
    <div>
      <h4 className="mb-3">

        <span className="hoverEffect">
          LATEST NEWS
       </span>
      </h4>
      <div className='vh90'>
        {
          news instanceof Error ?
            <ErrorMessage />
            :
            news.length !== 0 ?
              news.slice(0, 5).map((eachNews) => (
                <FadeIn key={eachNews.title}>
                  <a target='_blank' rel="noopener noreferrer" href={eachNews.link} className='text-dark text-decoration-none'>
                    <div className="bg-white newsCard py-2 px-2 my-2">
                      <h5 className='m-0'>{eachNews.title}</h5>
                      <small className='m-0 textGrey'>{eachNews.published}</small>
                      <h6>
                        {eachNews.summary.replace(/^(.{75}[^\s]*).*/, "$1")}...{' '}

                        <span className='newsLink text-decoration-none'>Read More</span>
                      </h6>

                    </div>
                  </a>
                </FadeIn>
              ))
              :

              <LoadingAnimation />

        }
      </div>

      <div className='vh10 mt-1'>
        <Link href="/news"><h4 className='text-center seeMore hoverEffect pointer'>See More</h4></Link>
      </div>
      <style jsx>{`
      .colorPrimary {
        color: ${colors.primary} !important;
      }
      .newsLink{
        color: ${colors.primary}
      }
      .pointer{
        cursor: pointer
      }
      .vh90{
        height: 73vh;
        overflow-y: scroll;
      }
            .seeMore{
                width: fit-content;
                margin: 0 auto
            }
.textDark {
    color: black;
}
        .newsCard{
            border-radius: 10px;
            box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04),
            0 1px 6px rgba(0, 0, 0, 0.04);
          }
          .textGrey{
            color: ${colors.grey}
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
    </div>
  )
}


