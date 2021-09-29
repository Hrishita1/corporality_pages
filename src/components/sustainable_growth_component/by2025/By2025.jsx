import localClass from "./by2025.module.css";

export default function By2025() {
    // const PU = process.env.PUBLIC_URL;

    return (
        <>
            <section className={localClass.bySection}>
                <div className={localClass.zommeffect}>
                    <div className={localClass.zoom_text1}>
                        <h1 className={localClass.zoom_head} style={{backgroundImage: `url("/img/zoom-text/Rectangle\ 44.png")`}}>"By 2025, Corporality Global aims to become an epitome of sustainability, worldwide."</h1>
                        <ul className={localClass.zoom_ul}>Priya Mishra</ul>
                        <ul className={localClass.zoom_ul2}>CEO, Corporality Global</ul>
                    </div>
                </div>
                <div className={localClass.zoom_text2}>

                    <div className={localClass.col1}>
                        <button className={localClass.zoom_btn_twitter}>
                            <i className={"fab fa-twitter " + localClass.zoom_twitter}></i>
                            <i className={"fas fa-arrow-right " + localClass.cs_arrow1}></i>
                        </button>
                        <span className={localClass.zoom_ul3}>Twitter</span>
        
                    </div>
                    <div className={localClass.col1}>
                        <button className={localClass.zoom_btn_twitter1}>
                            <i className={"fab fa-linkedin-in " + localClass.zoom_twitter1}></i>
                            <i className={"fas fa-arrow-right " + localClass.cs_arrow1}></i>
                        </button>
                        <span className={localClass.zoom_ul3}>Linkedin</span>
                    </div>
                    
                </div>
            </section>
            {/* <section className="bySection" style={{
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <div className="zommeffect">
                    <div className="zoom-text">
                        <h1 className="zoom-head" style={{backgroundImage: `url(${PU}/img/zoom-text/Rectangle\ 44.png)`}}>"By 2025, Corporality Global aims to become an epitome of sustainability, worldwide."</h1>
                        <ul className="zoom-ul">Priya Mishra</ul>
                        <ul className="zoom-ul2">CEO, Corporality Global</ul>
                    </div>
                </div>
                <div className="zoom-text">
                    <div className="row" style={{}}>

                        <div className="col-md-6" stle={{}}>
                            <button className="zoom-btn-twitter" style={{}}>
                                <i className="fab fa-twitter zoom-twitter"></i>
                            </button>
                            <i className="fas fa-arrow-right cs_arrow1" ></i>
                            <ul className="zoom-ul3" style={{}}>Twitter</ul>
            
                        </div>
                        <div className="col-md-6" style={{}}>
                            <button className="zoom-btn-twitter1" style={{}}>
                                <i className="fab fa-linkedin-in zoom-twitter1"></i>
                            </button>
                            <i className="fas fa-arrow-right cs_arrow2" ></i>
                            <ul className="zoom-ul31" style={{}}>Linkedin</ul>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}
