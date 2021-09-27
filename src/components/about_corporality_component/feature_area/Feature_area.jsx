import React from 'react'

export default function FeatureArea() {
    const PU = process.env.PUBLIC_URL;
    
    return (
        <>
            <section className="feature-area area-padding bg_one">
                <div className="offset-lg-6 col-lg-6">
                    <div className="area-head light">
                        <h4 className="aos-init" data-aos="zoom-in" data-aos-duration="2000">Ideation with fearless creativity</h4>
                    </div>
                    <div className="row">
                        <div className="col-">
                            <div className="single-feature d-flex aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000">
                                <div className="feature-icon" style={{position: "relative"}}>
                                    <img src={PU + "/img/Ideation/Ellipse 6.png"} className="ptone" alt=""/>
                                    <img src={PU + "/img/Ideation/favicon TM 3.png"} className="TM" alt=""/>
                                </div>
                                <div className="single-feature-content">
                                    <h5 className="we-part">We partner with you to give you true value that lasts</h5>
                                    <p>Corporality Global works on the most practical terms, and helps clients transform
                                        businesses to be as future-ready as they can. As innovators, we are convinced there’s no
                                        single way to ignite a business to success; we believe in empowering people with their
                                        own.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-">
                            <div className="single-feature d-flex aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000">
                                <div className="feature-icon" style={{position: "relative"}}>
                                    <img src={PU + "/img/Ideation/Ellipse 6.png"} className="pttwo" alt=""/>
                                    <img src={PU + "/img/Ideation/favicon TM 4.png"} className="TM2" alt=""/>
                                </div>
                                <div className="single-feature-content2">
                                    <h5>Our beliefs</h5>
                                    <p>We believe in rapid, repeatable growth and success. Corporality Global is committed to
                                        providing real-world strategies supported by tactics that really work. We make an impact
                                        right from the beginning.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-">
                            <div className="single-feature d-flex aos-init" data-aos="fade-up" data-aos-duration="2000">
                                <div className="feature-icon" style={{position: "relative"}}>
                                    <img src={PU + "/img/Ideation/Ellipse 6.png"} className="ptthree" alt=""/>
                                    <img src={PU + "/img/Ideation/favicon TM 2.png"} className="TM3" alt=""/>
                                </div>
                                <div className="single-feature-content3">
                                    <h5>Inclusivity</h5>
                                    <p>Corporality Global and inclusion go hand-in-hand. We do not encourage any discrimination
                                        that could be barriers to communication.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dia-box" >
                    <div data-aos="fade-right" data-aos-duration="2000" className="aos-init">
                        <div className="dia-over">
                            <img src={PU + "/img/Ideation/Corporality -fearless creativity.png"} alt=""/>
                        </div>
                    </div>
                    <img src={PU + "/img/Ideation/Rectangle 8.png"} className="dia-under aos-init aos-animate" data-aos="fade-right" data-aos-duration="2000" alt=""/>
                    <img src={PU + "/img/combinating_and_ideation/Vector.png"} className="dia-left aos-init aos-animate" data-aos="fade-right" data-aos-duration="2000" alt=""/>
                    <img src={PU + "/img/Ideation/Rectangle 7.png"} className="dia-cent aos-init aos-animate" data-aos="fade-right" data-aos-duration="2000" alt=""/>
                </div>
                <div className="container">
                    <div className="row align-items-center"> </div>
                </div>
            </section>
        </>
    )
}
