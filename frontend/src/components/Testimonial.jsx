import { Autoplay, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ReviewCard from "./ReviewCard";

const Testimonial = () => {
  const reviews = [
    {
      customerName: "Barry Allen",
      rating: 5.0,
      feedback:
        "Urban Dwellings exceeded my expectations! Their craftsmanship and attention to detail are top-notch. Highly recommended for quality and style.",
      imgURL: "customer1.jpeg",
    },
    {
      customerName: "Patty Spivot",
      rating: 4.8,
      feedback:
        "Thrilled with my Urban Dwellings purchase! Seamless blend of style and comfort. Outstanding customer service. I'll be back!",
      imgURL: "customer2.jpeg",
    },
    
    {
      customerName: "Eobard Thawne",
      rating: 4.9,
      feedback:
        "Urban Dwellings met and exceeded my expectations! Top-notch quality with a personalized touch. Highly recommended!",
      imgURL: "customer4.jpg",
    },
    {
      customerName: "Hunter Zolomon",
      rating: 4.7,
      feedback:
        "Impressive quality from Urban Dwellings! The virtual showroom made choosing easy. A new standard in furniture. Well done!",
      imgURL: "customer3.jpg",
    },
  ];

  return (
    <section className="px-5 py-10">
      <h3 className=" text-center text-[#254D4D] text-4xl font-bold">
        What Our
        <span className="text-[#C14E07]"> Customers </span>
        Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg  text-center info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="mt-16 flex gap-14">
        <Swiper
          style={{
            "--swiper-pagination-color": "#254D4D",
          }}
          slidesPerView={1}
          spaceBetween={10}
          modules={[Autoplay, Pagination, A11y]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            740: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1224: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          pagination={{ clickable: true }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide className="pb-20" key={index}>
              <ReviewCard
                key={index}
                imgURL={review.imgURL}
                customerName={review.customerName}
                rating={review.rating}
                feedback={review.feedback}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
