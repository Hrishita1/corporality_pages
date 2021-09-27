import React from 'react'

export default function Leadership_area() {
    const PU = process.env.PUBLIC_URL;
    
    return (
        <>
            <section>
                <div className="leadership_container">
                    <div className="leadership_text" data-aos="fade-down" data-aos-duration="2000">
                        <h1>Leadership Team</h1>
                        <p>The Corporality team is all about commitment and accountability. Our directors have been in the industry for more than 17 years, and head the team in being passionate for the success of our clients. We value relationships, collaboration, intelligent work, and community.</p>
                    </div>
                    <div className="leadership_card_wrapper" >
                        <div className="leadership_card" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" >
                            <div className="leadership_card_img  leadership_card_img1" style={{backgroundImage: ""}} >
                                <img src={PU + "/img/leadership/Polygon 8.png"} alt=""/>
                            </div>
                            <div className="leadership_card_text">
                                <h1>PRIYA MISHRA</h1>
                                <h1 style={{color: "#A06DB0"}}>CEO</h1>
                                <p>“Corporality is a reflection of the core beliefs of its leaders, and the embodiment of the
                                    excellence of its teams. We at Corporality take pride in doing good work for our customers
                                    and honoured to play an es</p>
                            </div>
                        </div>

                        <div className="leadership_card" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2500">
                            <div className="leadership_card_img  leadership_card_img2">
                                <img src={PU + "/img/leadership/jaish.png"} alt=""/>
                            </div>
                            <div className="leadership_card_text">
                                <h1>JAISH</h1>
                                <h1 style={{color: "#A06DB0"}}>COO</h1>
                                <p>“The age of digital and booming progress of new intelligences in marketing is the fuel to our
                                    fire at Exante. We take every opportunity to learn and in turn educate and inspire others
                                    with practical</p>
                            </div>
                        </div>
                    </div>
            
                    <div data-aos="fade-right" data-aos-duration="2000">
                        <div className="leadership_button" >
                            <a href="#" style={{textDecoration: "none"}}>View All Team</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
