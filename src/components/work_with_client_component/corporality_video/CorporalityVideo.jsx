import "./corporalityVideo.css"

export default function CorporalityVideo() {
    const PU = process.env.PUBLIC_URL;

    return (
        <>
            <section class="corporality_video">
                <div>
                    <img src={PU + "/img/video/bg.png"} className="video_imge" />
                    <p className="howwework_video">VIDEO</p>
                </div>
            </section>
        </>
    )
}
