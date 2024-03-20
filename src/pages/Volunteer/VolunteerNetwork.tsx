import Container from "../../ui/Container";

const VolunteerNetwork = () => {
  return (
    <div className="volunteerContainer2 volunteerContainer3 sectionMargin ">
      <Container className="">
        <div className="netWorkContent py-20">
          <div className="mb-10">
            <h1>How It Works </h1>
            <p>Join our volunteer network in few steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            <div>
              <h4 className="text-5xl font-extrabold text-[#00715D]">01</h4>
              <h3 className="my-3 ">Visit the Website:</h3>
              <div className="divider"></div>
              <p className="leading-7 mt-5">
                Visit our website to discover how you can make a difference.
                Explore volunteer opportunities, learn about our mission, and
                join us in providing vital disaster relief assistance to
                communities in need.
              </p>
            </div>
            <div>
              <h4 className="text-5xl font-extrabold text-[#00715D]">02</h4>
              <h3 className="my-3 ">Complete Online Application</h3>
              <div className="divider"></div>
              <p className="leading-7 mt-5">
                Complete our online application to join our team. Provide your
                contact details, availability, and skills. Your application
                helps us match you with meaningful volunteer opportunities.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div>
              <h4 className="text-5xl font-extrabold text-[#00715D]">03</h4>
              <h3 className="my-3 ">Attend Orientation</h3>
              <div className="divider"></div>
              <p className="leading-7 mt-5">
                Attend our orientation session to get acquainted with our
                mission and procedures. Learn about disaster response protocols
                and connect with fellow volunteers.
              </p>
            </div>
            <div>
              <h4 className="text-5xl font-extrabold text-[#00715D]">04</h4>
              <h3 className="my-3 ">Training Sessions</h3>
              <div className="divider"></div>
              <p className="leading-7 mt-5">
                Participate in our comprehensive training sessions to equip
                yourself with essential skills for disaster response. Learn
                about safety protocols, communication methods, and cultural
                sensitivity. Our hands-on approach ensures you're prepared to
                make a meaningful impact in communities affected by disasters.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VolunteerNetwork;
