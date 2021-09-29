import localClass from "./newsletter.module.css";

export default function Newsletter() {
    const PU = process.env.PUBLIC_URL;
    return (
        <>
            <section className={localClass.our_newsletter}>
                <div className={localClass.our_newsletter_main}>
                    <div className={localClass.our_newsletter_rect44}>
                        <img src={PU + "/img/Out newsletter/Rectangle 44.png"} alt=""/>
                    </div>
                    <div className={localClass.our_newsletter_polygon9}>
                        <div  data-aos="fade-down-left" data-aos-duration="2000">
                        <img src={PU + "/img/Out newsletter/Polygon 9.png"} alt=""/>
                    </div>
                    </div>
                    <div className={localClass.our_newsletter_vector}>
                        <img src={PU + "/img/Out newsletter/Vector.png"} alt=""/>
                    </div>
                    <div className={localClass.our_newsletter_polygon8}>
                        <img src={PU + "/img/Out newsletter/Polygon 8.png"} alt=""/>
                    </div>
                    <div className={localClass.our_newsletter_rect48}>
                        <img src={PU + "/img/Out newsletter/Rectangle 48.png"} alt=""/>
                    </div>
                    <div className={localClass.our_newsletter_rect45}>
                        <img src={PU + "/img/Out newsletter/Rectangle 45.png"} alt=""/>
                    </div>
                    <div className={localClass.our_newsletter_rect47}>
                        <img src={PU + "/img/Out newsletter/Rectangle 47.png"} alt=""/>
                    </div>
                    <div className={localClass.our_newsletter_rect45_b}>
                        <img src={PU + "/img/Out newsletter/Rectangle 45-b.png"} alt=""/>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="2000">
                    <div className={localClass.our_newsletter_text}>
                        <h4 className={localClass.our_newsletter_text_head}>Case Studies</h4>
                        <p className={localClass.our_newsletter_text_para}>Explore our industrial case studies to see how sustainability is
                            progressing across the world.</p>
                    </div>
                    <div className={localClass.our_newsletter_subscribe}>
                        <button className={localClass.care_to_join_button_subscribe}>Explore</button>
                    </div>
                </div>
            </section>
        </>
    )
}
