import Countdown from "./Countdown";
import "./Volunteer.css";
import VolunteerContactForm from "./VolunteerContactForm";
import VolunteerNetwork from "./VolunteerNetwork";
import VolunteerTogether from "./VolunteerTogether";

const Volunteer = () => {
  return (
    <>
      <div className="volunteerContainer">
        <div className="volunteerContents">
          <h2 className="md:text-5xl font-bold text-3xl">Our volunteers</h2>
          <p className="text-sm md:text-xl">
            "Be a vital part of our disaster relief efforts. Join our volunteer
            team, make a meaningful impact, and help communities in need recover
            and rebuild."
          </p>
          <button className="mt-3">Join Us </button>
        </div>
      </div>
      <VolunteerTogether />
      <VolunteerNetwork />
      <Countdown />

      <VolunteerContactForm />
    </>
  );
};

export default Volunteer;
