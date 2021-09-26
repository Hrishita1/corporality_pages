import React from 'react'

export default function JoinArea() {
    const PU = process.env.PUBLIC_URL;
    return (
        <>
            <section className="care_to_section">
                <div className="row" style={{background: "#6CA0BC", margin: "5% 0 7% 0", paddingBottom: "-5%"}}>
                    <div className="col-md-6">
                        <div className="care-to-card1">
                            <div data-aos="fade-in" data-aos-easing="ease-in" data-aos-duration="2500" data-aos-offset="0">
                                <img src={PU + "/img/care to join us/Polygon 8.png"} className="care-to-img1" alt=""/>
                                <div className="care-to-zoom">
                                    <img src={PU + "/img/care to join us/Polygon 9.png"}/>
                                </div>
                            </div>
                            <img src={PU + "/img/care to join us/Rectangle 48.png"} className="care-to-img2" alt=""/>
                            <img src={PU + "/img/care to join us/Rectangle 45.png"} className="care-to-img3" alt=""/>
                            <img src={PU + "/img/care to join us/Rectangle 47.png"} className="care-to-img4" alt=""/>
                            <img src={PU + "/img/care to join us/Vector.png"} className="care-to-img5" alt=""/>
                            <img src={PU + "/img/care to join us/Rectangle 45 down.png"} className="care-to-img6" alt=""/>

                            <div data-aos="fade-right"  data-aos-easing="ease-in" data-aos-duration="1000" data-aos-offset="0">
                                <div className="container">
                                    <div className="row ">
                                        <div className="col-lg-6 offset-lg-6 col-xl-5 offset-xl-7 ">
                                            <div className="care-to_content">
                                                <h3>Care to Join us ?</h3>
                                                <h5 style={{width: "420px"}}>Join a team of exceptional minds committed to creating brilliance. This is also the right place to experience the best in agility. </h5>
                                                <button className="care-to_btn">Join Us</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
