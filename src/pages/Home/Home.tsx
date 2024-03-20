import Gallery from "./Gallery";
import Hero from "./HeroSection";
import LatestDonation from "./LatestDonation";
import RunningProject from "./RunningProject";
import Testimonial from "./Testimonial";
import Volunteer from "./Volunteer";
import WhatWeDo from "./WhatWeDo/WhatWeDo";


const Home = () => {
    return (
        <div>
           <Hero/>
           <LatestDonation/>
           <Testimonial/>
           <Gallery/>
          <WhatWeDo/>
           <Volunteer/>
           <RunningProject/>
        </div>
    );
};


export default Home;