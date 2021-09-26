import React from 'react'

export default function CombinatingIdeating() {
    const PU = process.env.PUBLIC_URL;

    return (
        <>
            <div className="ccwt">
                <div data-aos="fade-right" data-aos-easing="ease" data-aos-duration="2500">
                    <div className="ccwt_img">
                        <div className="ccwt_icon">
                            <div className="ccwt_img1">
                                <img src={PU + "/img/combinating_and_ideation/Rectangle 7.png"} alt=""/>
                            </div>
                            <div className="ccwt_img2">
                                <img src={PU + "/img/combinating_and_ideation/Rectangle 8.png"} alt=""/>
                            </div>
                            <div className="ccwt_img3">
                                <img src={PU + "/img/combinating_and_ideation/Rectangle 9.png"} alt=""/>
                            </div>
                        </div>

                        <div className="ccwt_impetus">
                            <div className="ccwt_img4">
                                <img src={PU + "/img/combinating_and_ideation/Corporality-our impetus.png"} alt=""/>
                            </div>
                            <div className="img4_bg">
                                <img src={PU + "/img/combinating_and_ideation/Corporality-our impetus bkg.png"} alt=""/>
                            </div>
                            <div className="ccwt_textArea1">
                                <h1>Strategic Consulting Methodologies</h1>
                                <p>A combination of expertise, skill, knowledge and proven programmes.</p>
                                <div className="ccwt_img5">
                                    <img src={PU + "/img/combinating_and_ideation/Rectangle 7 (1).png"} alt=""/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div data-aos="fade-left" data-aos-easing="ease" data-aos-duration="2500">
                    <div className="ccwt_textArea2">
                        <h1>Combating change with technology</h1>
                        <h3>A multi-talented team with a winning streak</h3>
                        <p>Making strides across the industry, we work as a team towards a single goal- a happy customer</p>

                    </div>
                </div>
            </div>

            <div className="iwfc">
                <div className="iwfc_left" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img src={PU + "/img/combinating_and_ideation/Vector.png"} alt="" className="iwfc_vector"/>
                    <div className="iwfc_img">
                        <img src={PU + "/img/combinating_and_ideation/Corporality -fearless creativity (1).png"} alt=""/>
                    </div>
                    <div className="iwfc_img4_bg">
                        <img src={PU + "/img/combinating_and_ideation/Corporality -fearless creativity bkg2.png"} alt=""/>
                    </div>
                    <img src={PU + "/img/combinating_and_ideation/Rectangle 8 (1).png"} alt="" className="iwfc_img1"/>
                    <img src={PU + "/img/combinating_and_ideation/Rectangle 7 (1).png"} alt="" className="iwfc_img2"/>
                </div>

                <div className="iwfc_right">
                    <div data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <div className="iwfc_header">
                            <h1>Ideation with fearless creativity</h1>
                        </div>
                    </div>
                     <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <div className="iwfc_text_wrapper1">
                            <div className="iwfc_text_wrapper2">
                                <div className="iwfc_icon">
                                    <img src={PU + "/img/combinating_and_ideation/favicon TM 3.png"} alt=""/>
                                </div>
                                <div className="iwfc_text">
                                    <h3>Customer Experience</h3>
                                    <p>Designing and developing meaningful customer experiences to drive growth. We do not
                                        hesitate
                                        to take on new challenges and combat every complex situation fearlessly to provide the
                                        ultimate branding solution. We do everything in our power to retain customer
                                        satisfaction
                                        and keep our services to the optimum.
                                    </p>
                                    <div className="iwfc_explore_wrapper">

                                        <div className="diamond">

                                        </div>
                                        <div className="ex_img">
                                            <img src={PU + "/img/combinating_and_ideation/Vector_arrow.png"} alt=""/>
                                        </div>
                                        <div className="exp_text">
                                            <a href="#">Explore</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="iwfc_text_wrapper2">
                                <div className="iwfc_icon">
                                    <img src={PU + "/img/combinating_and_ideation/favicon TM 4.png"} alt=""/>
                                </div>
                                <div className="iwfc_text">
                                    <h3>Customer Experience</h3>
                                    <p>Designing and developing meaningful customer experiences to drive growth. We do not
                                        hesitate
                                        to take on new challenges and combat every complex situation fearlessly to provide the
                                        ultimate branding solution. We do everything in our power to retain customer
                                        satisfaction
                                        and keep our services to the optimum.</p>

                                    <div className="iwfc_explore_wrapper">
                                        <div className="diamond">

                                        </div>
                                        <div className="ex_img">
                                            <img src={PU + "/img/combinating_and_ideation/Vector_arrow.png"} alt=""/>
                                        </div>
                                        <div className="exp_text">
                                            <a href="#">Explore</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="iwfc_text_wrapper2">
                                <div className="iwfc_icon">
                                    <img src={PU + "/img/combinating_and_ideation/favicon TM 2.png"} alt=""/>
                                </div>
                                <div className="iwfc_text">
                                    <h3>Customer Experience</h3>
                                    <p>Designing and developing meaningful customer experiences to drive growth. We do not
                                        hesitate
                                        to take on new challenges and combat every complex situation fearlessly to provide the
                                        ultimate branding solution. We do everything in our power to retain customer
                                        satisfaction
                                        and keep our services to the optimum.</p>
                                    <div className="iwfc_explore_wrapper">
                                        <div className="diamond">

                                        </div>
                                        <div className="ex_img">
                                            <img src={PU + "/img/combinating_and_ideation/Vector_arrow.png"} alt=""/>
                                        </div>
                                        <div className="exp_text">
                                            <a href="#">Explore</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
