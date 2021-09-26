import "./careToJoin.css";

export default function CareToJoin() {
    const PU = process.env.PUBLIC_URL;

    return (
        <>
            <section className="care_to_section">
                <div className="row" style={{height: "523px"}}>
                    <div className="col-md-6">
                        <div className="care_to_left">
                            <img src={PU + "/img/care to join us/Polygon 8.png"} className="dotted-img" alt=""/>
                            <div className="main-img">
                                <img src={PU + "/img/care to join us/Polygon 9.png"} alt=""/>
                            </div>
                            <img src={PU + "/img/care to join us/Vector.png"} className="left-img" alt=""/>
                            <img src={PU + "/img/care to join us/Rectangle 45 down.png"} className="bottom-img" alt=""/>
                            <img src={PU + "/img/care to join us/Rectangle 48.png"} className="main-right-img" alt=""/>
                        </div>

                        <div className="wrapper">
                            <div className="fixed-wrapper">
                                <div className="work_with_us">
                                    <div className="care_to_img">
                                        <img src={PU + "/img/care to join us/Rectangle 45.png"} className="left-top-img" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wrapper">
                            <div className="fixed-wrapper">
                                <div className="work_with_us">
                                    <div className="care_to_h2-p">
                                        <h2 className="left-top-h2">Learn More</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wrapper">
                            <div className="fixed-wrapper">
                                <div className="work_with_us">
                                    <div className="care_to_img">
                                        <img src={PU + "/img/care to join us/Rectangle 47.png"} className="right-top-img" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="wrapper">
                            <div className="fixed-wrapper">
                                <div className="work_with_us">
                                    <div className="care_to_h2-p">
                                        <h2 className="right-top-h2">Grow More</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wrapper">
                            <div className="fixed-wrapper">
                                <div className="work_with_us">
                                    <div className="care_to_img">
                                        <img src={PU + "/img/work with us/c.png"} className="bottom-img-over" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wrapper">
                            <div className="fixed-wrapper">
                                <div className="work_with_us">
                                    <div className="row-1">
                                        <div className="col-lg-6 offset-lg-6 col-xl-5 offset-xl-7">
                                            <h3 className="care_to_join_h3">Work with us</h3>
                                            <h5 className="care_to_join_h5">Get a career with a company that truly understands your worth. Bring your curiosity and your most committed self to experience working with Corporality Global.</h5>
                                            <h5 className="care_to_join_h5-1">Change is positive and long-lasting with us.</h5>
                                            <button className="care_to_join_button-apply">Apply Here</button>
                                            <p className="care_to_join_p">Our newsletter is more than just information Subscribe to see the difference</p>
                                            <form action="#">
                                                <input type="text" id="care-email-foot" placeholder="Enter Your Email" name="username"/>
                                                <br/>
                                            </form>
                                            <button className="care_to_join_button-subscribe">Subscribe</button>
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
