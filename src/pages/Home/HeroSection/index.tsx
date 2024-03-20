import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {

  return (
    
    <div className="volunteerContainer heroSectionWrap">
      <div className="volunteerContents">
        <h2 className="text-5xl font-bold ">Life saving support</h2>
        <p className="text-xl">
        "Empower life-saving efforts: Support urgent medical interventions, offering critical aid and timely access to vital treatments for emergencies."
        </p>
      <Link to='/about-us'>  <button className="mt-3 heroBtn"> Explore More </button></Link>
      </div>
    </div>
  );
};

export default Hero;
