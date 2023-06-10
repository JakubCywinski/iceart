import React, { useRef } from "react";
import {
    SliderNav,
    StyledSwiper,
    StyledSwiperSlide,
} from "../styles/Sections/Testimonials";
import "swiper/css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export const TestimonialsSlider = (props) => {
    const swiperRef = useRef();
    const { testimonials } = props;

    return (
        <StyledSwiper
            spaceBetween={16}
            slidesPerView={"auto"}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
        >
            {testimonials.map((testimonial) => (
                <StyledSwiperSlide key={testimonial.id}>
                    <div>
                        <p>{testimonial.content}</p>
                        <small>{testimonial.from}</small>
                    </div>
                </StyledSwiperSlide>
            ))}

            <span slot="container-end">
                <SliderNav>
                    <button onClick={() => swiperRef.current.slidePrev()}>
                        <HiChevronLeft size={24} />
                    </button>
                    <button onClick={() => swiperRef.current.slideNext()}>
                        <HiChevronRight size={24} />
                    </button>
                </SliderNav>
            </span>
        </StyledSwiper>
    );
};
