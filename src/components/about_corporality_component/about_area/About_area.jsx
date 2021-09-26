import React from 'react'

export default function AboutArea() {
    const PU = process.env.PUBLIC_URL;

    return (
        <>
            <section className="statics-area area-padding area-padding1">
                <div className='Quotes'>
                    <div>
                        <div className="Quotes_image">
                            <div className="Quotes_image1 aos-init aos-animate" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={PU + "/img/quotes/priya mam 1.png"} alt=""/>
                            </div>
                            <div className="Quotes_image2">
                                <img src={PU + "/img/quotes/Rectangle 7.png"} alt=""/>
                            </div>
                            <div className="Quotes_image3">
                                <img src={PU + "/img/quotes/Rectangle 8.png"} alt=""/>
                            </div>
                            <div className="Quotes_image4">
                                <img src={PU + "/img/quotes/Rectangle 9.png"} alt=""/>
                            </div>
                        </div>

                        <div>
                            <div className="Quotes_text_area aos-init aos-animate" data-aos="zoom-out" data-aos-duration="2000">
                                <div className="Quotes_colon">
                                    
                                </div>
                                <div className="Quotes_text">
                                    <h4>
                                        Corporality Global practices true agility the way it is supposed to work.
                                        All of us across the organisation work towards a common goal and identify
                                        with the brand as if it were our very own.
                                    </h4>
                                    <h5>-Priya Mishra, CEO, Founder Corporality Global</h5>
                                </div>
                            </div>
                        </div>
                    </div>        
                    <div className="QuotesCard_wrapper">
                        
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <div className="QuotesCard">
                                <div className="QuotesCard_image">
                                    <img src={PU + "/img/quotes/Corporality-Project icon.png"} alt=""/>
                                </div>
                                <div className="QuotesCard_text">
                                    <h3 style={{marginLeft: "40px"}}><span style={{marginLeft: "0px"}}>590+</span> Projects</h3>
                                </div>
                            </div>
                        </div>
                        <div  data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <div className="QuotesCard" style={{width: "400px"}}>
                                <div className="QuotesCard_image">
                                    <img src={PU + "/img/quotes/seo-1 1.png"} alt=""/>
                                </div>
                                <div className="QuotesCard_text" style={{width: "220px", marginTop: "35px", right: "50px"}}>
                                    <h3><span>100</span> Clients served across Australia and the world</h3>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <div className="QuotesCard" >
                                <div className="QuotesCard_image">
                                    <img src={PU + "/img/quotes/Corporality- Geospatial.png"} alt=""/>
                                </div>
                                <div className="QuotesCard_text" style={{padding: "0 20px"}}>
                                    <h3>Geospatial and CSR initiatives</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
