import { Chart } from "react-google-charts";
import {
  HiHand,
  HiHeart,
  HiOutlineBriefcase,
  HiOutlineUserGroup,
} from "react-icons/hi";

export const options2 = {
  chart: {
    title: "AidUrgency Performance",
    subtitle: "Success, complete project: 2014-2024",
  },
};

const index = () => {
  // const {data} = useGetDonationsQuery(undefined)
  const data = [
    ["Donations", "Help (in millions)"],
    ["Destructive", 13],
    ["Wildfire Rel", 16],
    ["Big Hurrican", 14],
    ["Earthquake", 23],
    ["Floods", 25],
    ["Droughts", 40],
    ["Wildfires", 15],
    ["Dust storms", 5],
    ["Tsunamis", 20],
    ["Sinkholes", 33],
  ];

  const options = {
    title: "AidUrgency Project Succesfull Percentage",
    legend: "none",
    pieSliceText: "label",
    slices: {
      4: { offset: 0.2 },
      12: { offset: 0.3 },
      14: { offset: 0.4 },
      15: { offset: 0.5 },
    },
  };

  const data2 = [
    ["Year", "Success", "Total Donar", " Total Volunteer"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];
  return (
    <div className="pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center gap-10  mb-5">
        <div className="completedServiceCards flex justify-between items-center rounded-lg bg-[#37A248] text-white ">
          <div className="mr-5">
            <div>Completed Project</div>
            <span className="text-2xl font-bold">99 </span>
          </div>
          <div className="valueRight">
            <HiOutlineBriefcase size={50} />
          </div>
        </div>
        <div className="completedServiceCards flex justify-between items-center  rounded-lg bg-[#42A1DA] text-white">
          <div className="mr-5">
            <div>Running Project</div>
            <span className="text-2xl font-bold">200 </span>
          </div>
          <div className="valueRight">
            <HiHeart size={50} />
          </div>
        </div>

        <div className="completedServiceCards flex justify-between items-center  rounded-lg bg-[#48cae4] text-white">
          <div className="mr-5">
            <div>Upcoming Project </div>
            <span className="text-2xl font-bold">99 </span>
          </div>
          <div className="valueRight">
            <HiHand size={50} />
          </div>
        </div>
        <div className="completedServiceCards flex justify-between items-center  rounded-lg bg-[#03045e] text-white">
          <div className="mr-5">
            <div>Total Donars </div>
            <span className="text-2xl font-bold">99 </span>
          </div>
          <div className="valueRight">
            <HiOutlineUserGroup size={50} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between md:flex-nowrap flex-wrap">
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={data2}
          options={options2}
          className="barChart"
        />

        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </div>
  );
};

export default index;
