import "./SectionTitle.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../../ui/Container";
AOS.init();
type TProps = {
  title: string;
  text: string;
};
const SectionTitle = ({ title, text }: TProps) => {
  return (
    <Container className="mb-8">
      <div className="titleWrap">
        <h2 className="text-2xl md:text-4xl text-[#00715D] font-bold">
          {" "}
          {title}
        </h2>
        <p className="mt-3 text-xl "> {text} </p>
      </div>
    </Container>
  );
};

export default SectionTitle;
