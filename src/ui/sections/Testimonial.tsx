import React from 'react'
import rating from '/assets/images/rating.svg'
import astridImg from '/assets/images/abhinav.svg'
import kellyImg from '/assets/images/kelly.svg'
import yasminImg from '/assets/images/yasmin.svg'
import clasrkeImg from "/assets/images/clarke.svg"
import sakshiImg from '/assets/images/sakshi.svg'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Testimonial = () => {
    return (
        <section className='container py-10 max-w-5xl px-10 relative mx-auto' id="reviews">
            <h1 className='text-4xl leading-[3rem] max-md:text-center md:text-5xl md:leading-[3.75rem] lg:text-6xl xl:text-7xl lg:!leading-[4.5rem] font-[500] text-center bg-primary_100 bg-clip-text text-transparent lg:px-20'>Testimonials
            </h1>
            <p className='text-[#8C8888] text-center py-6 text-lg lg:text-2xl font-normal '>Get Our subscription to minimize your work load and get success.</p>
            <div className='hidden lg:block lg:pt-5 relative'>
                <article className=' p-6 w-[518px] cursor-pointer bg-[#F7F6FB] rounded-2xl shadow-testimonial_card_1 relative left-72 z-50 hover:z-[60] duration-200 ease-in-out hover:shadow-form_shadow group group-hover:opacity-0'>
                    <div className='flex gap-4'>

                        <img src={kellyImg} alt="" className='self-start h-16 w-16' />
                        <div>
                            <div className='flex items-center justify-between'>
                                <h1 className='text-2xl font-semibold'>Kelly</h1>
                                <img src={rating} alt="" />
                            </div>
                            <p className='py-4 line-clamp-4'>
                                &quot; I am beyond impressed with the assignment service I received! The quality of work exceeded my expectations, and the writers went above and beyond to meet all the requirements... &quot;
                            </p>
                        </div>
                    </div>
                    <span className='text-sm text-[#929090] pl-16'>user, 24.03.02</span>
                </article>
                <article className=' p-6 w-[518px]  cursor-pointer bg-white rounded-2xl shadow-testimonial_card_2 relative bottom-10 left-[40%] -top-2 z-40 hover:z-[60] duration-200 ease-in-out hover:shadow-form_shadow group group-hover:opacity-0'>
                    <div className='flex gap-4'>
                        <img src={astridImg} alt="" className='self-start h-16 w-16' />
                        <div>
                            <div className='flex items-center justify-between'>
                                <h1 className='text-2xl font-semibold'>Astrid</h1>
                                <img src={rating} alt="" />
                            </div>
                            <p className='py-4 '>
                                &quot; Outstanding assignment service! Excellent quality, timely delivery, and exceptional customer support. Highly recommended! &quot;
                            </p>
                        </div>
                    </div>
                    <span className='text-sm text-[#929090] pl-16'>user, 24.03.02</span>
                </article>
                <article className=' p-4 w-[418px] bg-[#EDEDED] cursor-pointer rounded-2xl shadow-testimonial_card_3 relative bottom-8 left-52 z-30 hover:z-[60] duration-200 ease-in-out hover:shadow-form_shadow  group group-hover:opacity-0'>
                    <div className='flex gap-4'>
                        <img src={clasrkeImg} alt="" className='self-start' />
                        <div>
                            <div className='flex items-center justify-between'>
                                <h1 className='text-2xl font-semibold'>Clarke</h1>
                                <img src={rating} alt="" />
                            </div>
                            <p className='py-4 text-sm'>
                                &quot; I struggled with my assignments until I found this platform. The resources and support here are fantastic, and I've seen a significant improvement in my grades! &quot;
                            </p>
                        </div>
                    </div>
                    <span className='text-sm text-[#929090] pl-16'>user, 24.03.02</span>
                </article>
                <article className=' p-6 w-[518px] bg-[#E3E3E3] cursor-pointer rounded-2xl shadow-testimonial_card_4 absolute z-20 bottom-[105px] left-10 hover:z-[60] duration-200 ease-in-out hover:shadow-form_shadow  backdrop-filter group group-hover:opacity-0'>
                    <div className='flex gap-4'>
                        <img src={yasminImg} alt="" className='self-start' />
                        <div>
                            <div className='flex items-center justify-between'>
                                <h1 className='text-2xl font-semibold'>Yasmin</h1>
                                <img src={rating} alt="" />
                            </div>
                            <p className='py-4'>
                                &quot; Exceptional assignment service! Impeccable work, met all requirements, and delivered well before the deadline. Customer support was fantastic too. Highly satisfied! &quot;
                            </p>
                        </div>
                    </div>
                    <span className='text-sm text-[#929090] pl-16'>user, 24.03.02</span>
                </article>
                <article className=' p-6 w-[518px] bg-testimonial_card cursor-pointer rounded-2xl shadow-testimonial_card_5 absolute z-10 top-[160px] -left-10  hover:bg-white hover:z-[60] duration-200 ease-in-out right-20 hover:shadow-form_shadow group group-hover:opacity-0'>
                    <div className='flex gap-4'>
                        <img src={sakshiImg} alt="" className='self-start' />
                        <div>
                            <div className='flex items-center justify-between'>
                                <h1 className='text-2xl font-semibold'>Sakshi</h1>
                                <img src={rating} alt="" />
                            </div>
                            <p className='py-4'>
                                &quot;Exceptional nursing assignment service! The content was meticulously researched, professionally written, and tailored perfectly to my needs. Delivery was prompt, and the support team was responsive and helpful. Highly recommended for nursing students! &quot;
                            </p>
                        </div>
                    </div>
                    <span className='text-sm text-[#929090] pl-16'>user, 24.03.02</span>
                </article>
            </div>
            <div className='mt-10 lg:hidden'>
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    // install Swiper modules
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    // navigation
                    style={{ borderRadius: "20px" }}
                    pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <article className=' p-6  bg-[#F7F6FB] h-[260px]'>
                            <div className='flex gap-4'>
                                <img src={kellyImg} alt="" className='self-start' />
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-2xl font-semibold'>Kelly</h1>
                                        <img src={rating} alt="" />
                                    </div>
                                    <p className='py-4 max-sm:text-sm'>
                                        &quot; I am beyond impressed with the assignment service I received! The quality of work exceeded my expectations, and the writers went above and beyond to meet all the requirements... &quot;
                                    </p>
                                </div>
                            </div>
                            <span className='text-sm text-[#929090] pl-16'>user, 24.03.02</span>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className=' p-6 bg-white  h-[260px]'>
                            <div className='flex gap-4'>
                                <img src={astridImg} alt="" className='self-start' />
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-2xl font-semibold'>Astrid</h1>
                                        <img src={rating} alt="" />
                                    </div>
                                    <p className='py-4 max-sm:text-sm'>
                                        &quot; Outstanding assignment service! Excellent quality, timely delivery, and exceptional customer support. Highly recommended! &quot;
                                    </p>
                                </div>
                            </div>
                            <span className='text-sm text-[#929090] pl-16'>user, 24.03.02</span>
                        </article></SwiperSlide>
                    <SwiperSlide>
                        <article className='p-6 h-[260px] bg-[#EDEDED] '>
                            <div className='flex gap-4'>
                                <img src={clasrkeImg} alt="" className='self-start' />
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-2xl font-semibold'>Clarke</h1>
                                        <img src={rating} alt="" />
                                    </div>
                                    <p className='py-4 max-sm:text-sm'>
                                        &quot; I struggled with my assignments until I found this platform. The resources and support here are fantastic, and I've seen a significant improvement in my grades! &quot;
                                    </p>
                                </div>
                            </div>
                            <span className='text-sm text-[#929090] pl-16'>user, 24.03.02</span>
                        </article></SwiperSlide>
                    <SwiperSlide>
                        <article className=' p-6 bg-[#E3E3E3] h-[260px]'>
                        <div className='flex gap-4'>
                            <img src={yasminImg} alt="" className='self-start' />
                            <div>
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-2xl font-semibold'>Yasmin</h1>
                                    <img src={rating} alt="" />
                                </div>
                                <p className='py-4 max-sm:text-sm'>
                                    &quot; Exceptional assignment service! Impeccable work, met all requirements, and delivered well before the deadline. Customer support was fantastic too. Highly satisfied! &quot;
                                </p>
                            </div>
                        </div>
                        <span className='text-[#929090] pl-16 text-sm'>user, 24.03.02</span>
                    </article>
                    </SwiperSlide>
                    <SwiperSlide> <article className=' p-6  bg-[#F7F6FB] h-[260px]'>
                        <div className='flex gap-4'>
                            <img src={sakshiImg} alt="" className='self-start' />
                            <div>
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-2xl font-semibold'>Sakshi</h1>
                                    <img src={rating} alt="" />
                                </div>
                                <p className='py-2 max-sm:text-sm  '>
                                    &quot;Exceptional nursing assignment service! The content was meticulously researched, professionally written, and tailored perfectly to my needs. Highly recommended for nursing students! &quot;
                                </p>
                            </div>
                        </div>
                        <span className='text-sm text-[#929090] pl-16'>user, 24.03.2</span>
                    </article></SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonial