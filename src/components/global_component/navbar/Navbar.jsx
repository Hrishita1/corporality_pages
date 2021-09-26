// import "./navbar.css";
import { navBarData } from "../../../data/navData";
import NavbarItems from "../navbarItems/NavbarItems";
import $ from "jquery";


export default function Navbar() {
    const PU = process.env.PUBLIC_URL;

    // sidebar open close....
    $(".navbar .bx-menu").on('click', () => {
        $(".nav-links").css("left", "0");
    });
    $(".nav-links .bx-x").on('click', () => {
        $(".nav-links").css("left", "-100%");
    });

    // sidebar submenu open close....
    $(".nav-li").on('click', () => {
        $(".nav-links").toggleClass("show1");
    });

    $(window).on('scroll', () => {
        $("nav").toggleClass('scrolled', $(this).scrollTop() > 50);
    })

    return (
        <>
            <section className="navigation">
                <nav className="navbar navbar-expand-md navbar-dark bg-white fixed-top" id="myHeader">
                    <div className="navbar">
                        <i className="bx bx-menu"></i>
                        <div className="logo">
                            <img src={PU + "/img/logo/logo-fnal-box-1-e1605580586370.png"} alt="" style={{width: "250px"}}/>
                        </div>
                        <div className="nav-links">
                            <div class="sidebar-logo">
                                <span class="logo-name"></span>
                                <i class='bx bx-x'></i>
                            </div>
                            <ul className="links">
                                {navBarData.map(navItem => (
                                    <NavbarItems key={navItem.id} item={navItem}/>
                                ))}
                                <li><a href="./allpages/contact.html">CONTACT</a></li>
                                <li>
                                    <a href="#"><button class="nav-li-number">+61 2 89099009</button></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section> 
        </>
    )
}
