import Container from "../../../ui/Container";
import project from "../../../assets/images/world.png";
import project2 from "../../../assets/images/project.jpg";
import project3 from "../../../assets/images/project2.jpg";
import project4 from "../../../assets/images/project3.jpg";
import SectionTitle from "../../../components/SectionTitle";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Project.css";
const RunningProject = () => {
  const projectData = [
    {
      id: 1,
      name: "Destructive WindStorm",
      desc: "Devastating windstorm impacting communities, urgent relief needed. ",
      img: project2,
    },
    {
      id: 1,
      name: "Wildfire Relief",
      img: project3,
      desc: "Devastating windstorm impacting communities, urgent relief needed. ",
    },
    {
      id: 1,
      name: "Big Hurricane Takes Everything",
      img: project4,
      desc: "Devastating windstorm impacting communities, urgent relief needed. ",
    },
  ];
  const percentage = 66;
  return (
    <Container className="mb-14">
      <SectionTitle
        title="Running Projects"
        text="Praising pain was born and I will give you a complete accountwill give you a complete account"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        <div>
          {projectData?.map((data) => (
            <div data-aos="flip-left" key={data.id} className="projectWrap">
              <div className="projectContent">
                <div className="flex items-center z-10  absolute justify-center top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                  <div className="w-32 mr-8">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                    ;
                  </div>
                  <div className="w-full max-w-[250px]">
                    <h4>{data.name}</h4>
                    <p>{data.desc.slice(0, 50)} </p>
                  </div>
                </div>
                <button className="btn donateBtn hiddenRunningP">
                  Donation Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div data-aos="fade-left">
          <img src={project} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default RunningProject;
