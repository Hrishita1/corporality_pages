import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { AboutUsHomeBannerData } from "../../data/homeBanner";
import { aboutWeMakeBannerData } from "../../data/weMakeBannerData";
import { aboutWeMakeData } from "../../data/weMakeData";

import Navbar from "../../components/global_component/navbar/Navbar";
import HomeBanner from "../../components/global_component/home_banner/Home_banner";
import AboutArea from "../../components/about_corporality_component/about_area/About_area";
import FeatureArea from "../../components/about_corporality_component/feature_area/Feature_area";
import WeMakeBanner from "../../components/global_component/we_make_banner/We_make_banner";
import WeMake from "../../components/global_component/we_make/We_make";
import LeadershipArea from "../../components/about_corporality_component/leadership_area/Leadership_area";
import JoinArea from "../../components/about_corporality_component/join_area/Join_area";
import Footer from "../../components/global_component/footer/Footer";


export default function AboutCorporality() {

    useEffect(() => {
        AOS.init();
        document.title = "About Corporality Page - About Us";
    }, []);

    return (
        <div>
            <Navbar />
            <HomeBanner data={AboutUsHomeBannerData}/>
            <AboutArea />
            <FeatureArea />
            <WeMakeBanner data={aboutWeMakeBannerData}/>
            <WeMake data={aboutWeMakeData}/>
            <LeadershipArea />
            <JoinArea />
            <Footer />
        </div>
    )
}
