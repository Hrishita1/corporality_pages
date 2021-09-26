import { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

import { WorkWithClientHomeBannerData } from "../../data/homeBanner";
import { workClientWeMakeBannerData } from "../../data/weMakeBannerData";
import { workClientWeMakeData } from "../../data/weMakeData";

import HomeBanner from '../../components/global_component/home_banner/Home_banner';
import Navbar from "../../components/global_component/navbar/Navbar";
import CorporalityVideo from '../../components/work_with_client_component/corporality_video/CorporalityVideo';
import CombinatingIdeating from '../../components/work_with_client_component/combinating_ideating/CombinatingIdeating';
import CreativityInnovation from '../../components/work_with_client_component/creativity_innovation/CreativityInnovation';
import WeMakeBanner from '../../components/global_component/we_make_banner/We_make_banner';
import OurPowerful from '../../components/work_with_client_component/our_powerful/OurPowerful';
import WeMake from '../../components/global_component/we_make/We_make';
import Footer from '../../components/global_component/footer/Footer';
import CareToJoin from '../../components/work_with_client_component/care_to_join/CareToJoin';

export default function WorkWithClient() {

    useEffect(() => {
        AOS.init();
        document.title = "How we work with client";
    }, [])

    return (
        <>
            <Navbar />
            <HomeBanner data={WorkWithClientHomeBannerData}/>
            <CorporalityVideo />
            <CombinatingIdeating />
            <CreativityInnovation />
            <WeMakeBanner data={workClientWeMakeBannerData}/>
            <OurPowerful />
            <WeMake data={workClientWeMakeData}/>
            <CareToJoin />
            <Footer />
        </>
    )
}
