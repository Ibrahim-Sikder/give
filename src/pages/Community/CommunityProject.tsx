import community from "../../assets/images/community5.jpg";
import community2 from "../../assets/images/community4.jpg";
import community3 from "../../assets/images/community6.jpg";
import community4 from "../../assets/images/community3.jpg";
import CommonButton from "../../components/CommonButton";
const CommunityProject = () => {
  const projectData = [
    {
      id: 1,
      name: "Support Urgent Medical Aid",
      text: '"Support Urgent Medical Aid: Provide critical resources for immediate medical assistance, saving lives and ensuring timely care for those in need."',
      img: community,
    },
    {
      id: 1,
      name: "Elevate Critical Healthcare: Backing Urgent Medical Relief",
      text: '"Support Urgent Medical Aid: Provide critical resources for immediate medical assistance, saving lives and ensuring timely care for those in need."',
      img: community2,
    },
    {
      id: 1,
      name: '"Life-Saving Healthcare Support"',
      text: '"Support Urgent Medical Aid: Provide critical resources for immediate medical assistance, saving lives and ensuring timely care for those in need."',
      img: community3,
    },
    {
      id: 1,
      name: '"Critical Care Assistance Program"',
      text: '"Support Urgent Medical Aid: Provide critical resources for immediate medical assistance, saving lives and ensuring timely care for those in need."',
      img: community4,
    },
  ];
  return (
    <div>
      <h3> What's Happening and How to Help</h3>
      <p className="mt-5">
        We believe that organizations that are deeply rooted in local
        communities are in the best position to provide long-term support for
        survivors of crises like these. By funding the efforts of local
        organizations with a long-term track record of working in the affected
        areas, donations to this fund have the potential to build stronger
        response capacity so that people are better equipped to face future
        challenges.
      </p>

      <p className="mt-5">
        The projects listed below are led by vetted GlobalGiving partners
        working in the region. You can donate directly to a specific project or
        to GlobalGiving’s Israel-Palestine Crisis Relief Fund.
      </p>
      <div className="mt-5">
        {projectData.map((data) => (
          <div
            key={data.id}
            className="projectCard md:flex items-center  shadow-md pr-0 pb-5 md:pb-0 md:pr-5 mb-5"
          >
            <img src={data.img} alt="community" />
            <div className="ml-3 ">
              <h4 className="text-xl font-semibold text-[#00715D] mb-3">
                {" "}
                {data.name}
              </h4>
              <p>{data.text}</p>
              <div className="flex items-center justify-center md:justify-end mb-2 xl:mb-0">
                <input type="number" placeholder="$" className="donateInput" />
                <CommonButton className="bg-[#00715D] py-2 px-3 " text="Give" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityProject;
