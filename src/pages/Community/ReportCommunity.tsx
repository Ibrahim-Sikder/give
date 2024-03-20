import community from "../../assets/images/community2.webp";
const ReportCommunity = () => {
  return (
    <div>
      <p className="text-[#00715D]">PROJECT REPORT | DEC 27, 2024</p>
      <h3 className="text-xl ">
        An update on your donation to the Helpless People Crisis Relief Fund
      </h3>
      <p>By Ibrahim Sikder | Program Manager, Disaster Response</p>
      <div className="mt-8">
        <img src={community} alt="community" />
      </div>
      <div className="mt-5">
        <p>
          Thank you for your generous donation to the Israel-Palestine Crisis
          Relief Fund. As the devastating crisis continues, donations to this
          GlobalGiving Fund are bringing relief to war-torn communities in the
          region.
        </p>
      </div>
      <div className="mt-5">
        <p>
          Since we last updated you, contributions to the Israel-Palestine
          Crisis Relief Fund have supported eight grants to trusted nonprofit
          organizations that have demonstrated experience working in emergency
          relief in Israel, Palestine, and Egypt. As needs only grow, with
          entire families killed, the specter of famine threatening Gaza, and
          unabated displacement from homes, GlobalGiving partners are working
          under incredibly difficult circumstances to reach people in need.{" "}
        </p>
      </div>
      <div className="mt-5">
        <p>
          Here is what one nonprofit leader in Palestine wanted you to know
          about the impact of your donation:{" "}
        </p>
      </div>
      <div className="mt-5">
        <p>
          "This [grant] will help us provide much-needed support to our
          communities that face crisis and to sustain their work under crisis."
          - Sunbula Director
        </p>
      </div>
      <div className="mt-5">
        <b>
          Here is a short description of some of the critical work you’ve
          supported:{" "}
        </b>
        <ul className="mt-3">
          <li className="list-disc">
            Rebuilding Alliance’s kitchens in Gaza have partnered with the UN
            World Food Programme to deliver hundreds of bags of much-needed food
            supplies. This includes wheat and beans, with more shipments
            expected. Rebuilding Alliance is also working in the West Bank to
            provide psychological support and first aid training for communities
            under attack.
          </li>
          <li className="list-disc">
            IsraAID continues to work with communities at risk in Israel. This
            includes providing Bedouin communities protection from attacks.
            IsraAID is also creating child-friendly spaces for evacuated
            communities in Israel, coordinating civil society initiatives, and
            providing mental health services.
          </li>
        </ul>
        <p className="mt-5">
          Your support of the GlobalGiving Israel-Palestine Crisis Relief Fund
          powers community-led responses during a dire moment in history. The
          fund will continue to support partners in a flexible and responsive
          manner as the crisis remains fluid, new challenges arise, and
          opportunities for more humanitarian aid open. Thank you for standing
          in solidarity with local leaders. You can find a full list of
          nonprofits receiving a grant from the Fund at the end of this report.
        </p>
      </div>
    </div>
  );
};

export default ReportCommunity;
