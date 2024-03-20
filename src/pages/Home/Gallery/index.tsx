import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import gallery from "../../../assets/images/gallary.jpg";
import gallery2 from "../../../assets/images/gallery2.jpg";
import gallery3 from "../../../assets/images/gallery3.jpg";
import gallery4 from "../../../assets/images/gallery5.jpg";
import gallery5 from "../../../assets/images/gallery6.jpg";
import gallery6 from "../../../assets/images/gallery7.jpg";
import gallery7 from "../../../assets/images/gallery8.jpg";
import gallery8 from "../../../assets/images/gallery9.jpg";
import gallery9 from "../../../assets/images/gallery2.jpg";
import gallery10 from "../../../assets/images/gallery.jpg";
import "./Gallery.css";
import { HiOutlinePlus } from "react-icons/hi";
import SectionTitle from "../../../components/SectionTitle";
const Gallery = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 10,
          initialSlide: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 10,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="mt-10">
  
    <div className="mb-12">  <SectionTitle title='Disaster News'  text='Praising pain was born and I will give you a complete accountwill give you a complete account' /></div>
      <Slider {...settings}>
        <div className=" text-center galleryCard">
          <img
            loading="lazy"
            src={gallery}
            alt="Picture of the author"
            width={500}
            height={500}
            className="swiperImg"
          />
          <div className="absolute w-[300px] bg-[#00715D] disaster  bottom-12 text-white  mx-auto right-[18px] py-3 ">
            <h4 className="text-xl font-semibold">Wind Storm</h4>
            <small>Shylet, Bangladesh</small>
          </div>
          <div className="hoverPlus">
            <HiOutlinePlus className="text-white" size={60} />
          </div>
        </div>
        <div className=" text-center galleryCard">
          <img
            loading="lazy"
            src={gallery2}
            alt="Picture of the author"
            width={500}
            height={500}
            className="swiperImg"
          />
          <div className="absolute w-[300px] bg-[#00715D] disaster  bottom-12 text-white  mx-auto right-[18px] py-3 ">
            <h4 className="text-xl font-semibold">Disaster Relief </h4>
            <small>Shylet, Bangladesh</small>
          </div>
          <div className="hoverPlus">
            <HiOutlinePlus className="text-white" size={60} />
          </div>
        </div>
        <div className=" text-center galleryCard">
          <img
            loading="lazy"
            src={gallery3}
            alt="Picture of the author"
            width={500}
            height={500}
            className="swiperImg"
          />
          <div className="absolute w-[300px] bg-[#00715D] disaster  bottom-12 text-white  mx-auto right-[18px] py-3 ">
            <h4 className="text-xl font-semibold">Environment </h4>
            <small>Shylet, Bangladesh</small>
          </div>
          <div className="hoverPlus">
            <HiOutlinePlus className="text-white" size={60} />
          </div>
        </div>
        <div className=" text-center galleryCard">
          <img
            loading="lazy"
            src={gallery4}
            alt="Picture of the author"
            width={500}
            height={500}
            className="swiperImg"
          />
          <div className="absolute w-[300px] bg-[#00715D] disaster  bottom-12 text-white  mx-auto right-[18px] py-3 ">
            <h4 className="text-xl font-semibold">The 2017 Global Refugee </h4>
            <small>Shylet, Bangladesh</small>
          </div>
          <div className="hoverPlus">
            <HiOutlinePlus className="text-white" size={60} />
          </div>
        </div>
        <div className=" text-center galleryCard">
          <img
            loading="lazy"
            src={gallery5}
            alt="Picture of the author"
            width={500}
            height={500}
            className="swiperImg"
          />
          <div className="absolute w-[300px] bg-[#00715D] disaster  bottom-12 text-white  mx-auto right-[18px] py-3 ">
            <h4 className="text-xl font-semibold">Disaster Overwhelm </h4>
            <small>Shylet, Bangladesh</small>
          </div>
          <div className="hoverPlus">
            <HiOutlinePlus className="text-white" size={60} />
          </div>
        </div>
        <div className=" text-center galleryCard">
          <img
            loading="lazy"
            src={gallery6}
            alt="Picture of the author"
            width={500}
            height={500}
            className="swiperImg"
          />
          <div className="absolute w-[300px] bg-[#00715D] disaster  bottom-12 text-white  mx-auto right-[18px] py-3 ">
            <h4 className="text-xl font-semibold">Donate To Support The Cau</h4>
            <small>Shylet, Bangladesh</small>
          </div>
          <div className="hoverPlus">
            <HiOutlinePlus className="text-white" size={60} />
          </div>
        </div>
        <div className=" text-center galleryCard">
          <img
            loading="lazy"
            src={gallery7}
            alt="Picture of the author"
            width={500}
            height={500}
            className="swiperImg"
          />
          <div className="absolute w-[300px] bg-[#00715D] disaster  bottom-12 text-white  mx-auto right-[18px] py-3 ">
            <h4 className="text-xl font-semibold">Wind Storm</h4>
            <small>Shylet, Bangladesh</small>
          </div>
          <div className="hoverPlus">
            <HiOutlinePlus className="text-white" size={60} />
          </div>
        </div>
        <div className=" text-center galleryCard">
          <img
            loading="lazy"
            src={gallery8}
            alt="Picture of the author"
            width={500}
            height={500}
            className="swiperImg"
          />
          <div className="absolute w-[300px] bg-[#00715D] disaster  bottom-12 text-white  mx-auto right-[18px] py-3 ">
            <h4 className="text-xl font-semibold">Child Care Centre </h4>
            <small>Shylet, Bangladesh</small>
          </div>
          <div className="hoverPlus">
            <HiOutlinePlus className="text-white" size={60} />
          </div>
        </div>
        <div className=" text-center galleryCard">
          <img
            loading="lazy"
            src={gallery9}
            alt="Picture of the author"
            width={500}
            height={500}
            className="swiperImg"
          />
          <div className="absolute w-[300px] bg-[#00715D] disaster  bottom-12 text-white  mx-auto right-[18px] py-3 ">
            <h4 className="text-xl font-semibold">Medical Research </h4>
            <small>Shylet, Bangladesh</small>
          </div>
          <div className="hoverPlus">
            <HiOutlinePlus className="text-white" size={60} />
          </div>
        </div>
        <div className=" text-center galleryCard">
          <img
            loading="lazy"
            src={gallery10}
            alt="Picture of the author"
            width={500}
            height={500}
            className="swiperImg"
          />
          <div className="absolute w-[300px] bg-[#00715D] disaster  bottom-12 text-white  mx-auto right-[18px] py-3 ">
            <h4 className="text-xl font-semibold">Disaster Relief</h4>
            <small>Shylet, Bangladesh</small>
          </div>
          <div className="hoverPlus">
            <HiOutlinePlus className="text-white" size={60} />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;
