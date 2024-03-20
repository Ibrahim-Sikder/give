import { FaAngleRight } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import { useGetDonationsQuery } from "../../redux/feature/donations/donationApi";
import Container from "../../ui/Container";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
const AllDonations = () => {
  const {
    data: donationData,
    isLoading,
    isError,
  } = useGetDonationsQuery(undefined);

  if (isLoading) {
    return <p>Loading.......</p>;
  }
  if (isError) {
    return <p>Something went to wrong </p>;
  }
  type TData = {
    _id: string;
    image: string;
    categories: string;
    amount: string;
    title: string;
  };

  return (
    <div>
       <div className="volunteerContainer allDonationContainers">
        <div className="volunteerContents volunteerContents2">
          <div className="flex items-center uppercase bg-[#308C7B] text-white rounded-md w-[200px] justify-between mb-5 px-3 py-3">
            <p>Home</p>
            <FaAngleRight />
            <p>Donations</p>
          </div>
          <h2 className="md:text-5xl font-bold uppercase text-3xl md:text-center text-left">All Donation </h2>
        </div>
      </div>

      <Container className="mb-20 mt-10 ">
        <div>
          <SectionTitle
            title="Collective Giving: Empowering Change Through All Contributions"
            text="Every donation fuels transformative change, empowering initiatives that make a difference in communities worldwide. Join us today."
          ></SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:grid-cols-4 place-items-center justify-center place-content-center lg:px-5  xl:px-0 mt-5">
            {donationData.map((data: TData) => (
              <div key={data._id} className="donationCard">
                <div className="imgWrap">
                  <img
                    loading="lazy"
                    src={data.image}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="donationImg"
                  />
                </div>
                <div className="conationContent">
                  <div>
                    <h3 className=" font-bold mb-2 ">{data.title}</h3>
                    <p>Food Distribution </p>
                  </div>
                </div>
                <div className="flex justify-between pr-3 ">
                  <span>Goal $54000</span>
                  <b>Raised ${data.amount}</b>
                </div>
                <div>
                  <Link to={`/donations/${data._id}`}>
                    <button className="btn text-white mt-3">
                      <span>View Details </span>
                      <HiOutlineArrowNarrowRight size={18} className="ml-1" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllDonations;
