import {
    HiOutlineLocationMarker,
  HiOutlineQrcode,
  HiOutlineUserGroup,
} from "react-icons/hi";
import img from "../../../assets/images/line2.svg";
import Container from "../../../ui/Container";
import './WhatWeDo.css'
import { FaClinicMedical, FaDonate } from "react-icons/fa";
import { FaHouseMedicalFlag } from "react-icons/fa6";
const WhatWeDo = () => {
  const workData = [
    {
      id: 1,
      title: "Emergency Response Alerts",
      image: "",
      subTitle:
        "Offer a subscription service where users can sign up to receive email or SMS alerts about urgent humanitarian crises, allowing them to stay informed and take action quickly.",
    },
    {
      id: 1,
      title: "Medical Aid",
      image: "",
      subTitle:
        " The Medical Aid feature on AidUrgency is dedicated to providing crucial medical assistance to individuals",
    },
    {
      id: 1,
      title: "Real-Time Crisis Map:",
      image: "",
      subTitle:
        "Implement a dynamic map that displays ongoing crises, natural disasters, and humanitarian emergencies worldwide.",
    },
    {
      id: 1,
      title: "Join Hands ",
      image: "",
      subTitle:
        "Forge partnerships with other humanitarian organizations, government agencies, and tech companies to leverage resources and expertise in delivering effective aid during emergencies.",
    },
    {
      id: 1,
      title: "Donation Matching Programs",
      image: "",
      subTitle:
        " Implement donation matching programs where corporate sponsors or philanthropic organizations match individual donations during specific time periods or for specific causes, maximizing the impact of contributions.",
    },
  ];

  return (
    <Container className=" ">
      <div className="servicesWraps">
        <div className="ourServicesWrap">
          <div className="ourServiceLeftSide">
            <h2 className=" mb-3 text-[#00715D] font-bold ">
             What We Do ?
            </h2>
            <p>
              {" "}
              At <b className="text-[#00715D]">AidUrgency</b>, we are dedicated to providing rapid and effective disaster relief and humanitarian assistance to communities in crisis around the world. Our mission is to alleviate suffering, restore dignity, and promote resilience among those affected by emergencies, natural disasters, conflicts, and other humanitarian crises.
            </p>
          </div>
          <div className="ourServicesRightSide">
            <div>
              <div className="cardsWrap">
                {workData?.map((card, i) => (
                  <div key={card.id} className="cards workCard">
                    <div className="inner-box">
                      <div
                        className={`cards-front cards-front2 cards-front5  ${
                          i === 2 ? "cardsFront2" : ""
                        } ${i === 1 ? "cardsFront3" : ""} ${
                          i === 3 ? "cardsFront4" : ""
                        } `}
                        
                      >
                        <div className="">
                          {i === 1 ? (
                            <p>
                              <FaClinicMedical className="cardIcons"  />{" "}
                            </p>
                          ) : (
                            ""
                          )}{" "}
                          {i === 0 ? (
                            <p>
                              <FaHouseMedicalFlag className="cardIcons"   />{" "}
                            </p>
                          ) : (
                            ""
                          )}
                          {i === 2 ? (
                            <p>
                              <HiOutlineLocationMarker className="cardIcons"   />{" "}
                            </p>
                          ) : (
                            ""
                          )}
                          {i === 3 ? (
                            <p>
                              <HiOutlineUserGroup className="cardIcons"   />{" "}
                            </p>
                          ) : (
                            ""
                          )}
                          {i === 4 ? (
                            <p>
                              <FaDonate className="cardIcons"   />{" "}
                            </p>
                          ) : (
                            ""
                          )}
                          {i === 5 ? (
                            <p>
                              <HiOutlineQrcode className="cardIcons"  />{" "}
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                        <p className="mt-2 font-semibold cardTexts">{card.title}</p>
                      </div>
                      <div className="cards-back cards-back2 text-white">
                        <div className="cards-back-content md:px-3 text-center">
                          <b className="block text-[10px] cardTexts"> {card.title}</b>
                          <small className="my-1 md:my-3 cardText">
                            {card.subTitle.slice(0, 70)}...
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img src={img} alt="line" className="cardLine" />
            <div className="cardLine2"></div>

            <div className="cardLine3"></div>
            <div className="cardLine4"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhatWeDo;
