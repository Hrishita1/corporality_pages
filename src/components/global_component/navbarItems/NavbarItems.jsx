import "./navbarItems.css";
import SubNavbar from "../subNavbar/SubNavbar"

export default function NavbarItems({ item }) {
    return (
        <>
            <li id={item.id} className="nav-li">
                <a href="#">{item.title}</a>
                <div className="sub-nav">
                    <div className="sub-nav-col left">
                        {item.leftChildItems.map( subItem => (
                            <SubNavbar key={subItem.id} subItem={subItem}/>
                        ))}
                    </div>
                    <div className="sub-nav-col right">
                        {item.rightChildItems.map( subItem => (
                            <SubNavbar key={subItem.id} subItem={subItem}/>
                        ))}
                        {(item.id === "ourframework")
                            ? (<a href="./allpages/OURFRAMEWORK/bookafactfindingsession.html" className="bookfact">
                                    <button className="fact">Book a Fact Finding Session</button>
                                </a>)
                            : null
                        }
                    </div>
                </div>
            </li>
        </>
    )
}
