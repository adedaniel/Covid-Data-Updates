import React from 'react'
import { colors } from './styles/styles'
export default function FAQS() {
    return (
        <div className="container pt-3">
            <h1>
                <span className="hoverEffect">
                    FAQs
        </span>
            </h1>
            <div className="accordion my-5" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h3 className='m-0' data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            When did this Start?
                  </h3>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo">

                        <h3 className="m-0" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            When did this one too Start?
                  </h3>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree">

                        <h3 className="m-0" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            When did this other one Start?
                  </h3>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .card-header {
               
                background-color: ${colors.primary};
                color: white;
                border-radius: 0px 0px 10px 10px !important;
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
        </div>
    )
}
