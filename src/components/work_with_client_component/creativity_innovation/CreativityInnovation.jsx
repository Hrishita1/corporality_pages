import React from 'react'

export default function CreativityInnovation() {
    const PU = process.env.PUBLIC_URL;

    return (
        <>
            <section>
                <div className="zommeffect">
                    <div className="zoom-text">
                        <h1 className="zoom-head">Creativity and Innovation are Limitless</h1>
                        <ul className="zoom-ul">Priya Mishra</ul>
                        <ul className="zoom-ul2">CEO, Corporality Global</ul>
                    </div>
                    <div>
                        <div className="zoom-rect9">
                            <img src={PU + "/img/zoom-text/Rectangle 9.png"} alt=""/>
                        </div>
                        <div className="zoom-rect12">
                            <img src={PU + "/img/zoom-text/Rectangle 12.png"} alt=""/>
                        </div>
                    </div>
                    <div className="zoom-rect11">
                        <img src={PU + "/img/zoom-text/Rectangle 11.png"} alt=""/>
                    </div>
                </div>
            </section>
        </>
    )
}
