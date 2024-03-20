import { Key } from "react";
import Container from "../../ui/Container";

type TCount = {
  [x: string]: Key | null | undefined;
  count: string;
  text: string;
};
const Countdown = () => {
  const countData = [
    {
      count: "2M",
      text: "Monthly Visitor ",
    },
    {
      count: "90",
      text: "Volunteers Connected ",
    },
    {
      count: "5M",
      text: "Countries Worldwide ",
    },
    {
      count: "5M",
      text: "Volunteers Needed ",
    },
  ];
  return (
    <Container className="sectionMargin  ">
      <div className="grid grid-cols-2 gap-12 sm:gap-5 sm:grid-cols-4 place-items-center">
        {countData.map((item: TCount) => (
          <div key={item.id} className="roundShape">
            <h2 className="text-7xl font-bold">{item.count}</h2>
            <p className="">{item.text} </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Countdown;
