import Container from "../../ui/Container";
import { HiOutlineShare } from "react-icons/hi";
import SectionTitle from "../../components/SectionTitle";
import { useGetVolunteersQuery } from "../../redux/feature/volunteer/volunteerApi";
import { FaAngleRight } from "react-icons/fa";

type TData = {
  _id: string,
  name:string,
  image: string,
  givenName: string,
  surName: string,
}
const About = () => {
  const {
    data: volunteerData,
    isLoading,
    isError,
  } = useGetVolunteersQuery(undefined);

  if (isLoading) {
    return <p>Loading.....</p>;
  }
  if (isError) {
    return <p>Something went to wrong.</p>;
  }

  return (
    <div className="mb-20">
      <div className="volunteerContainer allDonationContainers">
        <div className="volunteerContents volunteerContents2">
          <div className="flex items-center uppercase bg-[#308C7B] text-white rounded-md w-[200px] justify-between mb-5 px-3 py-3">
            <p>Home</p>
            <FaAngleRight />
            <p>about us </p>
          </div>
          <h2 className="md:text-5xl font-bold text-3xl text-left md:text-center ">ABOUT US</h2>
        </div>
      </div>
      <div className="sectionMargin">
        <SectionTitle
          title="Our Volunteers "
          text=' "Dedicated souls, weaving kindness, uplifting communities, embodying unity, compassion, and resilience, their altruism illuminates paths of hope and transformation." '
        />
      </div>
      <Container className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-3 ">
          {volunteerData.map((data:TData) => (
            <div key={data._id}>
              <div className="volunteersImgWrap">
                <img src={data.image} alt="volunteer" />
              </div>
              <div className="flex items-center mt-3">
                <div>
                  <h4 className="text-xl font-bold">
                    {data.givenName} {data.surName}{" "}
                  </h4>
                  <p>Software Engineer </p>
                </div>
                <div className="line2 mx-5"></div>
                <div className="bg-[#ddd] rounded-full p-2">
                  <HiOutlineShare size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default About;
