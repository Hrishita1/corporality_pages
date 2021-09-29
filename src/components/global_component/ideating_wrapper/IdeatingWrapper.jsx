import React from 'react'

export default function IdeatingWrapper({ data }) {
    const PU = process.env.PUBLIC_URL;
    
    return (
        <div className="iwfc_text_wrapper2">
            <div className="iwfc_icon">
                <img src={PU + data.img} alt=""/>
            </div>
            <div className="iwfc_text">
                <h3>{data.h3}</h3>
                <p>{data.p}</p>
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
    )
}
