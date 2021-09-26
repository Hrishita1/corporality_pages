import "./subNavbar.css";

export default function SubNavbar({ subItem }) {
    const PU = process.env.PUBLIC_URL;
    return (
        <>
            <a href={PU + subItem.pageLink} className="sub-nav-box" id={"box-" + subItem.id}>
                <div className="icon-background" id={"icon-" + subItem.id}>
                    <img src={PU + subItem.src} alt="" className="navimages"/>
                </div>
                <h4 className="navh4">{subItem.heading}</h4>
            </a>
        </>
    )
}
