import "./footer.css";

export default function Footer() {
    const PU = process.env.PUBLIC_URL;

    const hrStyle = {
        borderTop: "solid 3px",
        width: "60px",
        height: "0px",
        textAlign: "left",
        marginLeft: "0",
        marginTop: "5px",
        marginBottom: "10px",
        color: "#A06DAF"
    }

    const imgStyle = {
        marginLeft: "-4px",
        paddingRight: "5px"
    }

    const iStyle = {
        marginTop: "-12px",
        marginLeft: "-12.5px"
    }

    return (
        <>
            <section className="footer_section">
                <footer>
                    <section>
                        <div className="container-fluid-footer" style={{fontFamily: "Arial, Helvetica, sans-serif", fontSize: "1rem", color: "#31647c"}}>

                            <div className="col-12 col-md-3">
                                <img className="logo-footer" src={PU + "/img/logo/logo-fnal-box-1-e1605580586370.png"} alt="logo" />
                                <div className="foot-c">
                                    <nav className="menu">
                                        <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
                                        <label className="menu-open-button" for="menu-open">
                                            <i className="fa fa-share-alt" style={{marginTop: "-11.5px", marginLeft: "-13.5px"}}></i>
                                        </label>
                                        <a href="https://www.instagram.com/corporalityg/" className="menu-item instagram">
                                            <i className="fab fa-instagram" style={iStyle}></i> 
                                        </a>
                                        <a href="https://www.facebook.com/CorporalityG/" className="menu-item facebook">
                                            <i className="fab fa-facebook-f" style={{margin: "-12px -13px 0 0"}}></i> 
                                        </a>
                                        <a href="https://in.pinterest.com/CorporalityG/" className="menu-item pinterest"> 
                                            <i className="fab fa-pinterest" style={iStyle}></i> 
                                        </a>
                                        <a href="https://twitter.com/corporalityg/" className="menu-item twitter"> 
                                            <i className="fab fa-twitter" style={iStyle}></i> 
                                        </a>
                                        <a href="https://www.linkedin.com/company/corporality/" className="menu-item linkedin"> 
                                            <i className="fab fa-linkedin-in" style={iStyle}></i> 
                                        </a>
                                        <a href="https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg/" className="menu-item youtube"> 
                                            <i className="fab fa-youtube" style={{marginTop: "-12px", marginLeft: "-14.5px"}}></i> 
                                        </a>
                                    </nav>
                                </div>
                            <div>
                                <form action="#">
                                    <input type="text" id="email-foot" placeholder="Email ID" name="username"/>
                                    <br/>
                                </form>

                                <form>
                                    <input type="checkbox" id="email-text" name="email" value="email-id" className="footer_cbox"/>
                                    <div style={{margin: "-24px 0 7px 25px", paddingRight: "60px"}} id="email-text">
                                        I agree to have my personal data stored, processed and analysed by Corporality as
                                        outlined in this Privacy Policy.*
                                    </div>
                                </form>

                                <button id="email-foot-btn">Subscribe</button>
                            </div>
                        </div>
                            <div className="col-12 col-md-3">
                                <h className="heading-foot foot-1" style={{color: "#33657E"}}>
                                    <b>
                                        Our Frame Work<hr style={hrStyle}/>
                                    </b>
                                </h>
                                <ul className="uls1" style={{listStyleType: "none"}}>
                                    <li>
                                        <a href="./allpages/OURFRAMEWORK/whatiscorporalityeffect.html"><img src={PU + "/img/logo/Polygon 12.png"} style={imgStyle} alt=""/> What is Corporality effect?</a>
                                    </li>
                                    <li>
                                        <a href="./allpages/OURFRAMEWORK/whycorporalityeffect.html"><img src={PU + "/img/logo/Polygon 12.png"} style={imgStyle} alt=""/> Why Corporaility Effect?</a>
                                    </li>
                                    <li>
                                        <a href="./allpages/OURFRAMEWORK/culturallyconditioned.html"><img src={PU + "/img/logo/Polygon 12.png"} style={imgStyle} alt=""/> Culturally Conditioned</a>
                                    </li>
                                    <li>
                                        <a href="./allpages/OURFRAMEWORK/corporalitystriker.html"><img src={PU + "/img/logo/Polygon 12.png"} style={imgStyle} alt=""/> Corporality Striker</a>
                                    </li>
                                    <li>
                                        <a href="./allpages/OURFRAMEWORK/inboundshifting.html"><img src={PU + "/img/logo/Polygon 12.png"} style={imgStyle} alt=""/> Inbound Shifting</a>
                                    </li>
                                    <li>
                                        <a href="./allpages/INSIGHTS/videolibrary.html"><img src={PU + "/img/logo/Polygon 12.png"} style={imgStyle} alt=""/> Video Library</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-3">
                                <h className="heading-foot foot-2" style={{color: "#33657E"}}>
                                    <b>Our Service<hr style={hrStyle}/></b>
                                </h>
                                <ul className="uls2" style={{listStyleType: "none"}}>
                                    {/* <li>
                                        <a href="./allpages/OURSERVICES/strategicstrength.html"> Strategic Strength</a>
                                    </li> */}
                                    <li>
                                        <a href="./allpages/OURSERVICES/websiteblueprint.html"><img src={PU + "/img/logo/Polygon 12.png"} style={imgStyle} alt=""/> Website Blueprint</a>
                                    </li>
                                    <li>
                                        <a href="./allpages/OURSERVICES/digitalmediamarketing.html"><img src={PU + "/img/logo/Polygon 12.png"} style={imgStyle} alt=""/> Digital Media Marketing</a>
                                    </li>
                                    <li>
                                        <a href="./allpages/OURSERVICES/productstrategy.html"><img src={PU + "/img/logo/Polygon 12.png"} style={imgStyle} alt=""/> Product Strategy</a>
                                    </li>
                                    <li>
                                        <a href="./allpages/OURSERVICES/marketingstrategyfor2021.html"><img src={PU + "/img/logo/Polygon 12.png"} style={imgStyle} alt=""/> Marketing Strategy for 2022</a>
                                    </li>
                                    <li>
                                        <a href="./allpages/OURSERVICES/corporatestrategy.html"><img src={PU + "/img/logo/Polygon 12.png"} style={imgStyle} alt=""/> Corporate Strategy</a>
                                    </li>
                                    <li>
                                        <a href="./allpages/OURSERVICES/professionalpracticesstrategy.html"><img src={PU + "/img/logo/Polygon 12.png"} style={imgStyle} alt=""/> Professional Practices Strategy</a>
                                    </li>
                                    <li>
                                        <a href="./allpages/OURSERVICES/ledgenandsalesstrategy.html"><img src={PU + "/img/logo/Polygon 12.png"} style={imgStyle} alt=""/> Lead Gen and Sales Strategy demo</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-3">
                                <h className="heading-foot foot-3" style={{color: "#33657E"}}>
                                    <b>About Us<hr style={hrStyle}/></b>
                                </h>
                                <a href="#" className="footer-top-arrow" onClick={() => window.scrollTo(0, 0)} style={{scrollBehavior: "smooth"}}>
                                    <button className="footer-topup"><i className="fas fa-arrow-up fa-1x"></i></button>
                                </a>
                                <ul className="uls3" style={{listStyleType: "none"}}>
                                    <li style={{marginTop: "-12.5%"}}>
                                        <a href="./allpages/ABOUTCORPORALITY/corporalitycitizenship.html"><img src={PU + "/img/logo/Polygon 12.png"} style={imgStyle} alt=""/> Corporality Citizenship</a>
                                    </li>
                                    <li>
                                        <a href="./allpages/ABOUTCORPORALITY/ourteam.html"> <img src={PU + "/img/logo/Polygon 12.png"} style={imgStyle} alt=""/> Our Team</a>
                                    </li>
                                    <li>
                                        <a href="./allpages/ABOUTCORPORALITY/careers.html"> <img src={PU + "/img/logo/Polygon 12.png"} style={imgStyle} alt=""/> Careers</a>
                                    </li>
                                    <li>
                                        <a href="./allpages/INSIGHTS/blog.html"> <img src={PU + "/img/logo/Polygon 12.png"} style={imgStyle} alt=""/> Insight</a>
                                    </li>
                                </ul>
                    
                    
                                {/* <div className="col-4 pp text-muted">
                                
                                    <a href="./allpages/privacypolicy.html" className="footer_button_pp"
                                        style="text-decoration: none;">
                                        <button className="bts-foot1">
                                            <pre
                                                style="font-size: small; font-family:Arial, Helvetica, sans-serif; background-color:#f6f9fc;  color: #a06db0;"><b>Privacy Policy</b></pre>
                                        </button>
                                    </a>
                                </div>
                                <div className="col-4 tc text-muted">
                                    <a href="./allpages/termsandconditions.html" className="footer_button_tc"
                                        style="text-decoration: none;">
                                        <button className="bts-foot2">
                                            <pre
                                                style="font-size: small; font-family:Arial, Helvetica, sans-serif; background-color:#f6f9fc;  color: #a06db0;"><b>Terms and Conditions</b></pre>
                                        </button>
                                    </a>
                                </div>
                                <div className="col-4 sm text-muted">
                                    <a href="./allpages/sitemap.html" className="footer_button_pp" style="text-decoration: none;">
                                        <button className="bts-foot3">
                                            <pre
                                                style="font-size: small; font-family:Arial, Helvetica, sans-serif; background-color:#f6f9fc;  color: #a06db0;"><b>Sitemap</b></pre>
                                        </button>
                                    </a>
                                </div> */}

                                {/* <a className="footer-top-arrow" onClick="window.scrollTo(0, 0)" style="scroll-behavior: smooth;"><i className="fas fa-arrow-circle-up"></i></a>
                                <a className="footer-top-arrow" onClick="window.scrollTo(0, 0)" style="scroll-behavior: smooth;"><button className="footer-topup"><i className="fas fa-arrow-up"></i></button></a> */}
                            </div>
                    
                            <hr className="footer_hr"/>

                            <div className="row footer-terms">
                                <div className="col-4">
                                    <button className="footer-terms1-btn">
                                        <a href="#"><p className="footer-terms1"> Privacy Policy</p></a>
                                    </button>
                                </div>
                                <div className="col-4">
                                    <button className="footer-terms2-btn">
                                        <a href="#"><p className="footer-terms2">Terms and Conditions</p></a>
                                    </button>
                                </div>
                                <div className="col-4">
                                <button className="footer-terms3-btn">
                                    <a href="#"> <p className="footer-terms3">Sitemap</p></a>
                                </button>
                            </div>                    
                            </div>

                            <div className="col-12 text-muted text-center">
                                <a href="#"><p className="copyright">Copyright © 2021 Corporality</p></a>
                            </div>
                        </div>
                    </section>
                </footer>
            </section>
        </>
    )
}
