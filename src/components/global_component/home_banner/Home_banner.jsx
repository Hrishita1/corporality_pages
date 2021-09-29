import React from 'react'

export default function HomeBanner({ data }) {
    const PU = process.env.PUBLIC_URL;
    
    var h3Style = {
        fontSize: "22px",
        fontWeight: "700",
        width: "322px",
        height: "26px",
        lineHeight: "26px",
        textTransform: "uppercase"
    }
    var h5Style = {
        fontSize: "32px",
        lineHeight: "40px",
        fontWeight: "bold",
        width: "631px",
        height: "80px",
        textTransform: "uppercase"

    }
    var pStyle = {
        marginBottom: "0",
        height: "72px",
        marginTop: "-20px"
    };

    if(data.style) {
        h3Style = {};
        h5Style = {
            width: "540px"
        };
        pStyle = {
            width: "540px"
        }
    }

    return (
        <>
            <section className="home_banner_area">
                <div className="banner_inner d-flex align-items-center">
                    <div className="overlay">
                        <div className="ellipse-1"></div>
                    </div>
                    <div className="banner-left">
                        <img src={ PU + data.img1} width="184" height="46" className="under aos-init aos-animate" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-offset="0" alt=""/>
                        <img src={ PU + data.img2} width="100" height="84" className="img-left" alt=""/>
                        <img src={ PU + data.img3} width="100" height="84" className="img-bottom-left" alt=""/>
                        <img src={ PU + data.img4} width="100" height="84" className="img-back-up" alt=""/>
                        <img src={ PU + data.img5} width="100" height="84" className="img-back-left" alt=""/>
                        <div data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-offset="0">
                            <div className="banner_left_inner">
                                <img src={ PU + data.img6} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="container aos-init aos-animate" data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-offset="0">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-6 col-xl-5 offset-xl-7">
                                <div className="banner_content">
                                    {(data.h3) && (<h3 style={h3Style}>{data.h3}</h3>)}
                                    <h5 style={h5Style}>{data.h5}</h5>
                                    <p style={pStyle}>{data.p}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
