import React from 'react'

export default function WeMake({ data }) {
    const PU = process.env.PUBLIC_URL;
    var cs1Style = {};
    var cs2Style = {};
    var p1Style = {};

    if(data.extra) {
        cs1Style = {
            left: "60.5%"
        }
        p1Style = {
            paddingRight: "0"
        }
        cs2Style = {
            marginLeft: "765px"
        }
    }

    return (
        <>
            <section className="wemake_ourservices" style={{margin: "5% 0 7% 0"}}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="wemake_ourservics-card1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-offset="0" style={{position: "relative"}}>                        
                            <p className="p1" style={p1Style}>                            
                                <span className="wemake_community s1">{data.rightp1}<i className="fas fa-arrow-right cs_arrow1" style={cs1Style}></i></span>
                            </p>
                            <p className="p2">{data.rightp2}</p>
                    
                            <img src={PU + "/img/wemake/community-support-3.png"} className="cs1_img" alt=""/>
                            <img src={PU + "/img/wemake/community-support-2.png"} className="cs1_plane" alt=""/>
                            <div className="cs1_pic">
                                <img src={PU + data.rightImg} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="wemake_ourservics-card2 aos-init aos-animate" data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-offset="0" style={{position: "relative"}}>
                            <p className="p1">
                                <span className="wemake_community s2">{data.leftp1}<i className="fas fa-arrow-right cs_arrow2" style={cs2Style}></i></span>
                            </p>
                            <p className="p2">{data.leftp2}</p>
                            <img src={PU + "/img/wemake/corporate-social-responsibility-3.png"} className="cs2_img" alt=""/>
                            <img src={PU + "/img/wemake/corporate-social-responsibility-2.png"} className="cs2_plane" alt=""/>
                            <div className="cs2_pic">
                                <img src={PU + data.leftImg} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
