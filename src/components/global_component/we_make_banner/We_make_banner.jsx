import React from 'react'

export default function WeMakeBanner({ data }) {
    const PU = process.env.PUBLIC_URL;
   
    var h4Style = {
        fontSize: "35px",
        fontWeight: "bold"
    };
    var paralexStyle = {};
    var pStyle = {
        fontSize: "15px"
    };
    if(data.extra) {
        h4Style = {
            fontSize: "35px",
            fontWeight: "bold",
            marginLeft: "22px"
        };
        paralexStyle = {
            height: "405px"
        };
        pStyle = {
            fontSize: "15px",
            width: "688px",
            left: "424px",
            top: "161px",
            marginLeft: "-0.17%"
        }
    }

    return (
        <>
            <section className="we-make-banner">
                <div className="we-make-banner-div">
                    <div className="we-make-banner-head" >
                        <h4 data-aos="zoom-in" data-aos-duration="2000" style={h4Style}>{data.h4}</h4>
                        <p data-aos="zoom-in" data-aos-duration="2000" style={pStyle}>{data.p}</p>
                    </div>
                    <div className="paralax-rect" style={paralexStyle}>
                        {/* <img width="1540px" src={PU + "/img/wemake-Banner/Rectangle 5.png"}/> */}
                    </div>
                    <section>
                        <div className="we-make-banner-rect12">
                            <img src={PU + "/img/wemake-Banner/Rectangle 12.png"} alt=""/>
                        </div>
                        <div className="we-make-banner-rect8">
                            <img src={PU + "/img/wemake-Banner/Rectangle 8.png"} alt=""/>
                        </div>
                        <div className="we-make-banner-rect11">
                            <img src={PU + "/img/wemake-Banner/Rectangle 11.png"} alt=""/>
                        </div>
                        <div className="we-make-banner-rect7">
                            <img src={PU + "/img/wemake-Banner/Rectangle 7.png"} alt=""/>
                        </div>
                        <div className="we-make-banner-rect9">
                            <img src={PU + "/img/wemake-Banner/Rectangle 9.png"} alt=""/>
                        </div>
                        {data.extra 
                            ? (
                                <div class="iwfc_explore_wrapper-1">
                                    <div class="diamond-1" data-aos="zoom-in" data-aos-duration="1000">
                                        <img src={PU + "/img/wemake-Banner/Rectangle 10.png"} class="rec-10-img" alt=""/>
                                    </div>
                                    <div class="ex_img-1" data-aos="zoom-in" data-aos-duration="1000">
                                        <img src={PU + "/img/combinating_and_ideation/Vector_arrow.png"} alt=""/>
                                    </div>
                                    <div class="exp_text-1" data-aos="zoom-in" data-aos-duration="1000">
                                        <a href="#" style={{color: "black"}}>Explore Our Tech Stack</a>
                                    </div>
                                </div>
                            )
                            : (
                                <div className="we-make-banner-rect4"  data-aos="zoom-in" data-aos-duration="2000" >
                                    <img width="200px" src={PU + "/img/wemake-Banner/Rectangle 4.png"} alt=""/>
                                    <a href="#" style={{fontSize: "15px"}}>Our Services</a>
                                </div>
                            )
                        }
                    </section>
                </div>
            </section>
        </>
    )
}
