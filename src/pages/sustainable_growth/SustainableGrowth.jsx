import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { growthHomeBannerData } from "../../data/homeBanner";
import { growthIdeatingData } from "../../data/ideatingData";
import Navbar from "../../components/global_component/navbar/Navbar";
import HomeBanner from '../../components/global_component/home_banner/Home_banner';
import DigitalTech from '../../components/sustainable_growth_component/digitalTech/DigitalTech';
import CombinatingIdeating from "../../components/work_with_client_component/combinating_ideating/CombinatingIdeating";
import By2025 from "../../components/sustainable_growth_component/by2025/By2025";
import Footer from "../../components/global_component/footer/Footer";
import Newsletter from "../../components/sustainable_growth_component/newsletter/Newsletter";

export default function SustainableGrowth() {

    useEffect(() => {
        AOS.init();
        document.title = "Sustainable Growth";
    }, []);

    return (
        <>
            <Navbar />
            <HomeBanner data={growthHomeBannerData}/>
            <DigitalTech />
            <CombinatingIdeating data={growthIdeatingData}/>
            <By2025 />
            <Newsletter />
            <Footer />
        </>
    )
}
