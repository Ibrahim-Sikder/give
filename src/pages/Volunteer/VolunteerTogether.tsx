import CommonButton from "../../components/CommonButton";
import Container from "../../ui/Container";
import volunteer from "../../assets/images/volunteer.png";
import volunteer2 from "../../assets/images/volunteer6.png";
import { HiShieldCheck } from "react-icons/hi";
const VolunteerTogether = () => {
  return (
    <Container className="sectionMargin">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center ">
        <div className="w-[70%] ">
          <img src={volunteer} alt="volunteer" />
        </div>
        <div className="order-0 mt-10 lg:mt-0">
          <h2>Let’s help together</h2>
          <p className="my-5">
            Charity law within the UK varies among England and Wales, Scotland
            and Northern Ireland, but the fundamental principles are the same.
            Most organizations that are charities are required to registered
            with the appropriate regulato
          </p>
          <div className="flex items-center justify-between w-[205px] ">
            <CommonButton className="bg-black" text="Call Us" />
            <CommonButton className="bg-[#00715D]" text="Email Us " />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center sectionMargin ">
        <div className="w-[70%] ">
          <img src={volunteer2} alt="volunteer" />
        </div>
        <div className="mt-10 lg:mt-0">
          <p>WHAT YOU WILL GET</p>
          <h2 className="my-3 text-[#00715D]">Member Benefit</h2>
          <p>
            Become part of our volunteer team and embark on a journey of impact
            and empowerment. Through tailored training sessions, you'll hone
            essential disaster response skills, preparing you for effective
            action in times of crisis. Our network offers invaluable connections
            with fellow volunteers and organizations, fostering collaboration
            and support
          </p>
          <div>
            <div className="flex items-center mt-3">
              <HiShieldCheck className="mr-2" size={30} />
              <p> Training and skill development opportunities.</p>
            </div>
            <div className="flex items-center mt-3">
              <HiShieldCheck className="mr-2" size={30} />
              <p> Networking with like-minded individuals and professionals.</p>
            </div>
            <div className="flex items-center mt-3">
              <HiShieldCheck className="mr-2" size={30} />
              <p>
                Access to resources and support for personal and professional
                growth.
              </p>
            </div>
            <div className="flex items-center mt-3">
              <HiShieldCheck className="mr-2" size={30} />
              <p>Volunteer recognition and appreciation events.</p>
            </div>
            <div className="flex items-center mt-3">
              <HiShieldCheck className="mr-2" size={30} />
              <p>Opportunities for leadership roles and responsibilities.</p>
            </div>
            <div className="flex items-center mt-3">
              <HiShieldCheck className="mr-2" size={30} />
              <p>
                Personal satisfaction and fulfillment from making a meaningful
                impact.
              </p>
            </div>
            <div className="flex items-center mt-3">
              <HiShieldCheck className="mr-2" size={30} />
              <p>Exclusive updates on disaster relief efforts and outcomes.</p>
            </div>
            <div className="flex items-center mt-3">
              <HiShieldCheck className="mr-2" size={30} />
              <p>
                Community service hours for academic or professional
                requirements.
              </p>
            </div>
            <div className="flex items-center mt-3">
              <HiShieldCheck className="mr-2" size={30} />
              <p>
                Access to special events or workshops related to disaster
                response and preparedness.
              </p>
            </div>
            <div className="flex items-center mt-3">
              <HiShieldCheck className="mr-2" size={30} />
              <p>
                Opportunities to travel and participate in volunteer projects
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default VolunteerTogether;
