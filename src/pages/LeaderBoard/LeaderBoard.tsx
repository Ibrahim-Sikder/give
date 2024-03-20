import Container from "../../ui/Container";
import donor from "../../assets/images/donor.png";
import donor2 from "../../assets/images/donor2.jpg";
import donor3 from "../../assets/images/donor3.png";
import donor4 from "../../assets/images/donor4.jpg";
import donor5 from "../../assets/images/donor5.jpg";
import donor6 from "../../assets/images/donor6.png";
import SectionTitle from "../../components/SectionTitle";
import { FaAngleRight } from "react-icons/fa";
const LeaderBoard = () => {
  const donorsData = [
    {
        id:1,
      name: "Sanjay Gurung",
      dolor: 5960660,
      title: 'AMERICAS REGIONAL DIRECTOR',
      img: donor,
    },
    {
        id: 2,
      name: "Arnaud Quemin",
      dolor: 5960660,
      title: 'MIDDLE EAST REGIONAL DIRECTOR',
      img: donor2,
    },


    {
        id: 3,
      name: "Chad Snelgar",
      dolor: 5960660,
      title: 'CHIEF FINANCIAL AND ADMINISTRATIVE OFFICER',
      img: donor3,
    },


    {
        id:1,
      name: "Sanjay Gurung",
      dolor: 5960660,
      title: 'AMERICAS REGIONAL DIRECTOR',
      img: donor4,
    },
    {
        id: 2,
      name: "Melaku Yirga",
      dolor:4000660,
      title: 'EAST AND SOUTHERN AFRICA REGIONAL DIRECTOR',
      img: donor5,
    },
    




    {
        id: 3,
      name: "Sanjay Gurung",
      dolor: 52299660,
      title: 'AMERICAS REGIONAL DIRECTOR',
      img: donor6,
    },
  ];
  return (
   <div>
      <div className="volunteerContainer allDonationContainers leaderBoardContainer">
        <div className="volunteerContents volunteerContents2">
          <div className="flex items-center uppercase bg-[#308C7B] text-white rounded-md w-[210px] justify-between mb-5 px-2 py-3">
            <p>Home</p>
            <FaAngleRight/>
            <p>leaderboard</p>
          </div>
          <h2 className="md:text-5xl font-bold text-3xl uppercase text-left md:text-center">leaderboard</h2>
        </div>
      </div>
     <Container className=" mb-20">
    <div className="my-16">
    <SectionTitle title='"Leading Benefactors: Honoring Our Most Impactful Supporters"' text='"Gratitude for our Leading Benefactors: Recognizing the transformative impact of our foremost supporters whose generosity drives positive change and innovation."' />
    </div>
      <div className="grid grid-cols-1 gap-y-24 sm:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center ">
      {
        donorsData.map((donor)=>(
            <div key={donor.id} className="donorCard cursor-pointer ">
            <div className="w-[210px] h-[210px] rounded-full mx-auto ">
              <img
                className="w-[100%] h-[100%] rounded-full"
                src={donor.img}
                alt="donor"
              />
            </div>
            <div className="mt-5 text-center donorText ">
              <h4 className="text-xl font-semibold">{donor.name}</h4>
              <p>{donor.title}</p>
              <b>Donate: ${donor.dolor}</b>
            </div>
          </div>
        ))
      }
      </div>
    </Container>
   </div>
  );
};

export default LeaderBoard;
