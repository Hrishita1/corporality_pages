import "./ourPowerful.css";

export default function OurPowerful() {
    const PU = process.env.PUBLIC_URL;

    return (
        <>
            <div className="our_powerful">
                <div className="row">
                    <div className="our_powerful_content">
                        <h3>Our Powerful Partner ecosystem</h3>
                        <h5>Our marketing network capabilities accelerate product strategies to achieve faster go-to-market, greater visibility</h5>

                        <div className="our_powerful_img">
                            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={PU + "/img/our powerful/zoho-one-logo.png"} alt=""/>
                            </div>
                            <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={PU + "/img/our powerful/h.png"} alt=""/>
                            </div>
                            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={PU + "/img/our powerful/listnr-1.png"} alt=""/>
                            </div>
                            <div className="cyfe" data-aos="flip-right" data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <img src={PU + "/img/our powerful/cyfe-inc-vector-logo.png"} alt=""/>
                            </div>
                            <div className="dnd" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={PU + "/img/our powerful/download 1.png"} alt="" className="dnd_img1" />
                                <br/>
                                <img src={PU + "/img/our powerful/timedoctor-logo-Rajat-Harlalka.png"} alt="" className="dnd_img2"/>
                            </div>
                            <div className="bc" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={PU + "/img/our powerful/0000015a-374c-7100-8693-636149e100bc.png"} alt=""/>
                            </div>
                            <div className="cle" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={PU + "/img/our powerful/hockeystacklogocircle.png"} alt=""/>
                                <img src={PU + "/img/our powerful/Rectangle 61.png"} alt=""  className="cle_img1"/>
                                <img src={PU + "/img/our powerful/Ellipse 15.png"} alt="" className="cle_img2"/>
                                <h1>Hockeystack</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
