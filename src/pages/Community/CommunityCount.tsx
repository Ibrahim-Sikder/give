import { Key } from "react";
import Container from "../../ui/Container";

type TCount = {
  [x: string]: Key | null | undefined;
  count: string;
  text: string;
};
const CommunityCount = () => {
  const countData = [
    {
      count: "$3M",
      text: "total goal ",
    },
    {
      count: "$455",
      text: "remaining ",
    },
    {
      count: "88",
      text: "donors ",
    },
    {
      count: "120",
      text: "monthly donors ",
    },
    {
        count: "160",
        text: "fundraisers ",
      },
      {
        count: "5",
        text: "Months",
      },
  ];
  


  return (
    <Container className="mt-5">
      <div className="grid grid-cols-2 gap-12 sm:gap-5 sm:grid-cols-4 lg:grid-cols-6 ">
        {countData.map((item: TCount) => (
          <div key={item.id} className="roundShape roundShape2">
            <h2 className="text-3xl font-bold ">{item.count}</h2>
            <p className="capitalize">{item.text} </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CommunityCount;
