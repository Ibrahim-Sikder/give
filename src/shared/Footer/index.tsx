import { HiChevronRight } from "react-icons/hi";
import Container from "../../ui/Container";
import footer from "../../assets/images/footer.jpg";
const Footer = () => {
  return (
    <div className="bg-[#191919] text-white w-full">
      <Container className="">
        <div className="block sm:flex justify-between space-y-5 sm:space-y-0 flex-wrap py-14">
          <div>
            <h3 className="mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm footerList">
              <li>
                <div className="flex items-center">
                  <HiChevronRight size={20} />
                  <span>Home</span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <HiChevronRight size={20} />
                  <span>Latest News </span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <HiChevronRight size={20} />
                  <span>Our Work </span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <HiChevronRight size={20} />
                  <span>Careers </span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <HiChevronRight size={20} />
                  <span>Our Work </span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <HiChevronRight size={20} />
                  <span>Who We Are </span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <HiChevronRight size={20} />
                  <span>Shop</span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <HiChevronRight size={20} />
                  <span>Contact Us </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <div>
              <h3 className="mb-5">Latest Post </h3>
              <div className="flex ">
                <img className="w-20" src={footer} alt="" />
                <div className="ml-3">
                  <p>Lorem Ipsum. Proin Gravida Nibh Vel</p>
                  <small className="text-[#998963]">15 Feb 2024</small>
                </div>
              </div>
            </div>
            <div>
              <div className="flex ">
                <img className="w-20" src={footer} alt="" />
                <div className="ml-3">
                  <p>Lorem Ipsum. Proin Gravida Nibh Vel</p>
                  <small className="text-[#998963]">15 Feb 2024</small>
                </div>
              </div>
            </div>

            <div>
              <div className="flex ">
                <img className="w-20" src={footer} alt="" />
                <div className="ml-3">
                  <p>Lorem Ipsum. Proin Gravida Nibh Vel</p>
                  <small className="text-[#998963]">15 Feb 2024</small>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-5">Categories </h3>
            <ul className="space-y-3 text-sm footerList">
              <li>
                <div className="flex items-center">
                  <HiChevronRight size={20} />
                  <span>Blog</span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <HiChevronRight size={20} />
                  <span>Child Care </span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <HiChevronRight size={20} />
                  <span>Disaster</span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <HiChevronRight size={20} />
                  <span>Latest Post </span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <HiChevronRight size={20} />
                  <span>Post Type </span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5">Contact Us </h3>
            <ul className="space-y-4 text-sm">
              <li>Resource </li>
              <li>Help Center </li>
              <li>Blog </li>
              <li>Tutorials </li>
              <li>FAQs </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center py-3 text-[#998963]">
          Copyright © 2017 DisasterRelif. All Right Reserved
        </p>
      </Container>
    </div>
  );
};

export default Footer;
