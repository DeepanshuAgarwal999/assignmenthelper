import React from 'react'
import rating from '/assets/images/rating.svg'
import abhinavImg from '/assets/images/abhinav.svg'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Testimonial = () => {
    const swiper = useSwiper();
    return (
        <section className='container lg:mb-60 lg:h-screen py-10 max-w-5xl px-10 relative mx-auto'>
            <h1 className='text-4xl leading-[3rem] max-md:text-center md:text-5xl md:leading-[3.75rem] lg:text-6xl xl:text-7xl lg:!leading-[4.5rem] font-[500] text-center bg-primary_100 bg-clip-text text-transparent lg:px-20'>Testimonials
            </h1>
            <p className='text-[#8C8888] text-center py-6 text-lg lg:text-2xl font-normal '>Get Our subscription to minimize your work load and get success.</p>
            <div className='hidden lg:block lg:pt-5'>
                <article className=' p-6 w-[518px] cursor-pointer bg-[#F7F6FB] rounded-2xl shadow-testimonial_card_1 relative left-72 z-50 hover:z-[60] duration-200 ease-in-out hover:shadow-form_shadow group group-hover:opacity-0'>
                    <div className='flex gap-4'>
                        <img src={abhinavImg} alt="" className='self-start' />
                        <div>
                            <div className='flex items-center justify-between'>
                                <h1 className='text-2xl font-semibold'>Abhinav</h1>
                                <img src={rating} alt="" />
                            </div>
                            <p className='py-4'>
                                &quot; I struggled with my assignments until I found this platform. The resources and support here are fantastic, and I've seen a significant improvement in my grades! &quot;
                            </p>
                        </div>
                    </div>
                    <span className='text-sm text-[#929090] pl-16'>user, 2021.03.02</span>
                </article>
                <article className=' p-6 w-[518px] h-[280px] cursor-pointer bg-white rounded-2xl shadow-testimonial_card_2 relative bottom-10 left-[40%] -top-2 z-40 hover:z-[60] duration-200 ease-in-out hover:shadow-form_shadow group group-hover:opacity-0'>
                    <div className='flex gap-4'>
                        <img src={abhinavImg} alt="" className='self-start' />
                        <div>
                            <div className='flex items-center justify-between'>
                                <h1 className='text-2xl font-semibold'>Khushi</h1>
                                <img src={rating} alt="" />
                            </div>
                            <p className='py-4 '>
                                &quot; I struggled with my assignments until I found this platform. The resources and support here are fantastic, and I've seen a significant improvement in my grades! &quot;
                            </p>
                        </div>
                    </div>
                    <span className='text-sm text-[#929090] pl-16'>user, 2021.03.02</span>
                </article>
                <article className=' p-4 w-[418px] bg-[#EDEDED] cursor-pointer rounded-2xl shadow-testimonial_card_3 relative bottom-5 left-52 z-30 hover:z-[60] duration-200 ease-in-out hover:shadow-form_shadow  group group-hover:opacity-0'>
                    <div className='flex gap-4'>
                        <img src={abhinavImg} alt="" className='self-start' />
                        <div>
                            <div className='flex items-center justify-between'>
                                <h1 className='text-2xl font-semibold'>Vipul</h1>
                                <img src={rating} alt="" />
                            </div>
                            <p className='py-4 text-sm'>
                                &quot; I struggled with my assignments until I found this platform. The resources and support here are fantastic, and I've seen a significant improvement in my grades! &quot;
                            </p>
                        </div>
                    </div>
                    <span className='text-sm text-[#929090] pl-16'>user, 2021.03.02</span>
                </article>
                <article className=' p-6 w-[518px] bg-[#E3E3E3] cursor-pointer rounded-2xl shadow-testimonial_card_4 relative z-20 bottom-[340px] hover:z-[60] duration-200 ease-in-out hover:shadow-form_shadow  backdrop-filter group group-hover:opacity-0'>
                    <div className='flex gap-4'>
                        <img src={abhinavImg} alt="" className='self-start' />
                        <div>
                            <div className='flex items-center justify-between'>
                                <h1 className='text-2xl font-semibold'>Aman</h1>
                                <img src={rating} alt="" />
                            </div>
                            <p className='py-4'>
                                &quot; I struggled with my assignments until I found this platform. The resources and support here are fantastic, and I've seen a significant improvement in my grades! &quot;
                            </p>
                        </div>
                    </div>
                    <span className='text-sm text-[#929090] pl-16'>user, 2021.03.02</span>
                </article>
                <article className=' p-6 w-[518px] bg-testimonial_card cursor-pointer rounded-2xl shadow-testimonial_card_5 relative z-10 bottom-[800px]  hover:bg-white hover:z-[60] duration-200 ease-in-out right-20 hover:shadow-form_shadow group group-hover:opacity-0'>
                    <div className='flex gap-4'>
                        <img src={abhinavImg} alt="" className='self-start' />
                        <div>
                            <div className='flex items-center justify-between'>
                                <h1 className='text-2xl font-semibold'>Aditya</h1>
                                <img src={rating} alt="" />
                            </div>
                            <p className='py-4'>
                                &quot; I struggled with my assignments until I found this platform. The resources and support here are fantastic, and I've seen a significant improvement in my grades! &quot;
                            </p>
                        </div>
                    </div>
                    <span className='text-sm text-[#929090] pl-16'>user, 2021.03.02</span>
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
                    modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
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
                                <img src={abhinavImg} alt="" className='self-start' />
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-2xl font-semibold'>Abhinav</h1>
                                        <img src={rating} alt="" />
                                    </div>
                                    <p className='py-4 max-sm:text-sm'>
                                        &quot; I struggled with my assignments until I found this platform. The resources and support here are fantastic, and I've seen a significant improvement in my grades! &quot;
                                    </p>
                                </div>
                            </div>
                            <span className='text-sm text-[#929090] pl-16'>user, 2021.03.02</span>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className=' p-6 bg-white  h-[260px]'>
                            <div className='flex gap-4'>
                                <img src={abhinavImg} alt="" className='self-start' />
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-2xl font-semibold'>Khushi</h1>
                                        <img src={rating} alt="" />
                                    </div>
                                    <p className='py-4 max-sm:text-sm'>
                                        &quot; I struggled with my assignments until I found this platform. The resources and support here are fantastic, and I've seen a significant improvement in my grades! &quot;
                                    </p>
                                </div>
                            </div>
                            <span className='text-sm text-[#929090] pl-16'>user, 2021.03.02</span>
                        </article></SwiperSlide>
                    <SwiperSlide>
                        <article className='p-6 h-[260px] bg-[#EDEDED] '>
                            <div className='flex gap-4'>
                                <img src={abhinavImg} alt="" className='self-start' />
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-2xl font-semibold'>Vipul</h1>
                                        <img src={rating} alt="" />
                                    </div>
                                    <p className='py-4 max-sm:text-sm'>
                                        &quot; I struggled with my assignments until I found this platform. The resources and support here are fantastic, and I've seen a significant improvement in my grades! &quot;
                                    </p>
                                </div>
                            </div>
                            <span className='text-sm text-[#929090] pl-16'>user, 2021.03.02</span>
                        </article></SwiperSlide>
                    <SwiperSlide><article className=' p-6 bg-[#E3E3E3] h-[260px]'>
                        <div className='flex gap-4'>
                            <img src={abhinavImg} alt="" className='self-start' />
                            <div>
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-2xl font-semibold'>Aman</h1>
                                    <img src={rating} alt="" />
                                </div>
                                <p className='py-4 max-sm:text-sm'>
                                    &quot; I struggled with my assignments until I found this platform. The resources and support here are fantastic, and I've seen a significant improvement in my grades! &quot;
                                </p>
                            </div>
                        </div>
                        <span className='text-[#929090] pl-16'>user, 2021.03.02</span>
                    </article></SwiperSlide>
                    <SwiperSlide> <article className=' p-6  bg-[#F7F6FB] h-[260px]'>
                        <div className='flex gap-4'>
                            <img src={abhinavImg} alt="" className='self-start' />
                            <div>
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-2xl font-semibold'>Aditya</h1>
                                    <img src={rating} alt="" />
                                </div>
                                <p className='py-4 max-sm:text-sm'>
                                    &quot; I struggled with my assignments until I found this platform. The resources and support here are fantastic, and I've seen a significant improvement in my grades! &quot;
                                </p>
                            </div>
                        </div>
                        <span className='text-sm text-[#929090] pl-16'>user, 2021.03.02</span>
                    </article></SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonial