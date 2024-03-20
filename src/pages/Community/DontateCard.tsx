const DontateCard = () => {
  const donateData = [
    {
      id: 1,
      dolor: 150,
      text: "emergency crisis relief and long-term recovery for survivors",
    },
    {
      id: 1,
      dolor: 74,
      text: "emergency crisis relief and long-term recovery for survivors",
    },
    {
      id: 1,
      dolor: 68,
      text: "emergency crisis relief and long-term recovery for survivors",
    },
    {
      id: 1,
      dolor: 90,
      text: "emergency crisis relief and long-term recovery for survivors",
    },
    {
      id: 1,
      dolor: 44,
      text: "emergency crisis relief and long-term recovery for survivors",
    },
    {
      id: 1,
      dolor: 44,
      text: "emergency crisis relief and long-term recovery for survivors",
    },
  ];
  return (
    <div>
      {donateData.map((data) => (
        <div
          key={data.id}
          className=" py-5 pl-3 flex items-center justify-between text-[12px] bg-[#F08B1D] text-white mb-5 md:max-w-[500px] mx-auto mt-0 md:mt-5 "
        >
          <div className="text-[18px] font-bold mr-5 ">
            <b className="block">${data.dolor} </b>
            <p>USD</p>
          </div>
          <p className="capitalize">
          {data.text}
          </p>
          <button className=" btn2">Donate </button>
        </div>
      ))}
    </div>

  );
};

export default DontateCard;
