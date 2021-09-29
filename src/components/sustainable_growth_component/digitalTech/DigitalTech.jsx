import "./digitalTech.css";

export default function DigitalTech() {
    const PU = process.env.PUBLIC_URL;

    return (
        <>
            <section className="our-faith" style={{paddingBottom: "1px"}}>
        <div className="our-faith-main">
            <div className="our-faith-back">
                <div className="our-faith-text" data-aos="fade-left" data-aos-duration="2000">
                    <h2 className="our-faith-head">Digital and Technological Sustainability</h2>
                    <p className="our-faith-para">Improving health and education and combating poverty to promote prosperity
                        are some of the targets set by Corporality Global to achieve sustainability. Technology is
                        instrumental in ensuring a less toxic environment, more stable environment and helps in the
                        effective management of natural resources. The idea is to realise that technology is essential
                        to mitigate all impediments and provide clear pathways to sustainable development. Corporality
                        Global works with local partners to identify challenges to such actions and aims to bestow
                        possible technological solutions to initiate imperishable growth.
                    </p>
                </div>
                <div className="our-faith-main-img">
                    <div alt="" data-aos="fade-up-right" data-aos-duration="2000">
                    <img src={PU + "/img/Our-Faith/Corporality-our impetus.png"}/>
                </div>
                </div>
                <div className="our-faith-rect7">
                    <img src={PU + "/img/Our-Faith/Rectangle 7.png"} alt=""/>
                </div>
                <div className="our-faith-rect8">
                    <img src={PU + "/img/Our-Faith/Rectangle 8.png"} alt=""/>
                </div>
                <div className="our-faith-vector">
                    <img src={PU + "/img/Our-Faith/Vector.png"} alt=""/>
                </div>
                <div className="our-faith-rect9">
                    <img src={PU + "/img/Our-Faith/Rectangle 9.png"} alt=""/>
                    <img className="our-faith-rect8-p" src={PU + "/img/Our-Faith/Rectangle 8-p.png"} alt=""/>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
