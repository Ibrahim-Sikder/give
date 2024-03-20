/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { KeenSliderHooks, KeenSliderInstance, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaQuoteLeft, FaArrowRight } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import Container from "../../../ui/Container";
import "./Testimonial.css";
import { MutableRefObject } from "react";
import { useGetTestimonialQuery } from "../../../redux/feature/testimonial/testimonialApi";

function ThumbnailPlugin(mainRef: MutableRefObject<KeenSliderInstance<{}, {}, KeenSliderHooks> | null>) {
  return (slider: { slides: any[]; on: (arg0: string, arg1: () => void) => void; track: { details: { rel: any; maxIdx: number; }; }; moveToIdx: (arg0: number) => void; }) => {
    function removeActive() {
      slider.slides.forEach((slide: { classList: { remove: (arg0: string) => void; }; }) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide: { addEventListener: (arg0: string, arg1: () => void) => void; }, idx: number) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function Testimonial() {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 6,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );


  const {data:testimonialData, isLoading, isError} = useGetTestimonialQuery(undefined)
console.log(testimonialData)
  if(isLoading){
    return <p>Loading.......</p>
  }
  if(isError){
    return <p>Something went to wrong!</p>
  }


  return (
    <Container className="">
      <div className="mb-8">
        <SectionTitle title="What Our Client Say " text=""></SectionTitle>
      </div>
      <div className="reviewSliderWrap">
        <div ref={sliderRef} className="keen-slider keenSlider">
          <div className="keen-slider__slide number-slide1">
            <div className="swiperWrap">
              <div className="reviewImg">
                <img src={testimonialData[0]?.image} alt="" />
              </div>
              <div className="reviewContent">
                <h3>{testimonialData[0]?.name}</h3>
                <h6>{testimonialData[0]?.title}</h6>
                <blockquote className="flex mt-3">
                  <FaQuoteLeft className="leftQoute" />
                  <p className="text-xl">
                  {testimonialData[0]?.description}
                  </p>
                </blockquote>
                <div className="flex flex-end items-center text-[#F87015] ml-8">
                  <button>Read history </button>
                  <FaArrowRight className="historyIcon" />
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1">
            <div className="swiperWrap">
              <div className="reviewImg">
                <img src={testimonialData[1]?.image} alt="" />
              </div>
              <div className="reviewContent">
                <h3 className="text-4xl font-bold text-[#F87015] ">
                {testimonialData[1]?.name} 
                </h3>
                <h6 className="text-xl font-bold mt-2">
                {testimonialData[1]?.title} 
                </h6>
                <blockquote className="flex mt-3">
                  <FaQuoteLeft className="leftQoute" />
                  <p className="text-xl">
                  {testimonialData[1]?.description} 
                  </p>
                </blockquote>
                <div className="flex flex-end items-center text-[#F87015] ml-8">
                  <button>Read history </button>
                  <FaArrowRight className="historyIcon" />
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2">
            <div className="swiperWrap">
              <div className="reviewImg">
                <img src={testimonialData[2]?.image}  alt="" />
              </div>
              <div className="reviewContent">
                <h3 className="text-4xl font-bold text-[#F87015] ">
                {testimonialData[2]?.name}
                </h3>
                <h6 className="text-xl font-bold mt-2">
                {testimonialData[2]?.title}
                </h6>
                <blockquote className="flex mt-3">
                  <FaQuoteLeft className="leftQoute" />
                  <p className="text-xl">
                  {testimonialData[2]?.description}
                  </p>
                </blockquote>
                <div className="flex flex-end items-center text-[#F87015] ml-8">
                  <button>Read history </button>
                  <FaArrowRight className="historyIcon" />
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide3">
            <div className="swiperWrap">
              <div className="reviewImg">
                <img src={testimonialData[3]?.image} alt="" />
              </div>
              <div className="reviewContent">
                <h3 className="text-4xl font-bold text-[#F87015] ">
                {testimonialData[3]?.name} 
                </h3>
                <h6 className="text-xl font-bold mt-2">
                {testimonialData[3]?.title} 
                </h6>
                <blockquote className="flex mt-3">
                  <FaQuoteLeft className="leftQoute" />
                  <p className="text-xl">
                  {testimonialData[3]?.description} 
                  </p>
                </blockquote>
                <div className="flex flex-end items-center text-[#F87015] ml-8">
                  <button>Read history </button>
                  <FaArrowRight className="historyIcon" />
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide4">
            <div className="swiperWrap">
              <div className="reviewImg">
                <img src={testimonialData[4]?.image}  alt="testimonial" />
              </div>
              <div className="reviewContent">
                <h3 className="text-4xl font-bold text-[#F87015] ">
                {testimonialData[4]?.name} 
                </h3>
                <h6 className="text-xl font-bold mt-2">
                {testimonialData[4]?.title} 
                </h6>
                <blockquote className="flex mt-3">
                  <FaQuoteLeft className="leftQoute" />
                  <p className="text-xl">
                  {testimonialData[4]?.description} 
                  </p>
                </blockquote>
                <div className="flex flex-end items-center text-[#F87015] ml-8">
                  <button>Read history </button>
                  <FaArrowRight className="historyIcon" />
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide5">
            <div className="swiperWrap">
              <div className="reviewImg">
                <img src={testimonialData[5]?.image}  alt="testimonial" />
              </div>
              <div className="reviewContent">
                <h3 className="text-4xl font-bold text-[#F87015] ">
                {testimonialData[5]?.name}
                </h3>
                <h6 className="text-xl font-bold mt-2">
                {testimonialData[5]?.title}
                </h6>
                <blockquote className="flex mt-3">
                  <FaQuoteLeft className="leftQoute" />
                  <p className="text-xl">
                  {testimonialData[5]?.description}
                  </p>
                </blockquote>
                <div className="flex flex-end items-center text-[#F87015] ml-8">
                  <button>Read history </button>
                  <FaArrowRight className="historyIcon" />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="keen-slider__slide number-slide6">
            <div className="swiperWrap">
              <div className="reviewImg">
                <img src={testimonialData[6]?.image} alt="" />
              </div>
              <div className="reviewContent">
                <h3 className="text-4xl font-bold text-[#F87015] ">
                {testimonialData[6]?.name}
                </h3>
                <h6 className="text-xl font-bold mt-2">
                {testimonialData[6]?.title}
                </h6>
                <blockquote className="flex mt-3">
                  <FaQuoteLeft className="leftQoute" />
                  <p className="text-xl">
                  {testimonialData[6]?.description}
                  </p>
                </blockquote>
                <div className="flex flex-end items-center text-[#21ADCC] ml-8">
                  <button>Read history </button>
                  <FaArrowRight className="historyIcon" />
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div ref={thumbnailRef} className="keen-slider thumbnail">
          <div className="keen-slider__slide number-slide1">
            <div className="reviewThum">
              <img src={testimonialData[0]?.image} alt="man" />
            </div>
          </div>
          <div className="keen-slider__slide number-slide2">
            <div className="reviewThum">
              <img src={testimonialData[1]?.image} alt="man" />
            </div>
          </div>
          <div className="keen-slider__slide number-slide3">
            <div className="reviewThum">
              <img src={testimonialData[2]?.image} alt="man" />
            </div>
          </div>
          <div className="keen-slider__slide number-slide4">
            <div className="reviewThum">
              <img src={testimonialData[3]?.image} alt="man" />
            </div>
          </div>
          <div className="keen-slider__slide number-slide5">
            <div className="reviewThum">
              <img src={testimonialData[4]?.image} alt="man" />
            </div>
          </div>
          <div className="keen-slider__slide number-slide6">
            <div className="reviewThum">
              <img src={testimonialData[5]?.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
