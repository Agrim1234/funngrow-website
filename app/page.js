"use client"

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import CardProjectCategory from "@/components/CardProjectCategory";
import CardInfo from "@/components/CardInfo";
import { useEffect, useState } from "react";
import Image from "next/image";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import CardHeading from "@/components/CardHeading";
import CardMemberReview from "@/components/CardMemberReview";
import { CardContainer, CardItem } from "@/components/ui/3d-card";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Head from "next/head";


export default function Home() {
    const headText = "Work on real Projects and earn money."
    const DataReason = [
        {
            id: 1,
            imageUrl: '/income.svg',
            title: 'First Income',
            description: 'Work with real companies and Earn money',
            link: '#'
        },
        {
            id: 2,
            imageUrl: '/passion.svg',
            title: 'Passion',
            description: 'Make your passion as your profession',
            link: '#'
        },
        {
            id: 3,
            imageUrl: '/learning.svg',
            title: 'Learning',
            description: 'Experiential Learning by working on real projects',
            link: '#'
        },
        {
            id: 4,
            imageUrl: '/income.svg',
            title: 'Certificates',
            description: 'Build your profile by getting experience certificates',
            link: '#'
        }
    ]

    const DataStats = [
        {
            id: 1,
            image: '/company.svg',
            heading: '3,500+',
            info: 'Companies'
        },
        {
            id: 2,
            image: '/category.svg',
            heading: '12',
            info: 'Categories'
        },
        {
            id: 3,
            image: '/teenlancer.svg',
            heading: '30,00,000+',
            info: 'Teenlancers'
        },
        {
            id: 4,
            image: '/LiveProject.svg',
            heading: '1000+',
            info: 'Live Projects'
        }
    ]

    const DataProjectCategory = [
        {
            id: 1,
            imageUrl: '/SocialMediaMarketing.svg',
            heading: 'Social Media Marketing',
            description: 'Manage social media pages of companies'
        },
        {
            id: 2,
            imageUrl: '/VideoCreation.svg',
            heading: 'Video Creation',
            description: 'Create and edit videos for companies and use your video creation skills'
        },
        {
            id: 3,
            imageUrl: '/WebsiteDesign.svg',
            heading: 'Website Design',
            description: 'Design and build a website for companies'
        },
        {
            id: 4,
            imageUrl: '/InfluencerMarketing.svg',
            heading: 'Influencer Marketing',
            description: 'Create Reels, Memes, posts and videos for social media handles of companies'
        },
        {
            id: 5,
            imageUrl: '/MobileAppDevelopment.svg',
            heading: 'Mobile App Development',
            description: 'Develop market ready apps for companies'
        },
        {
            id: 6,
            imageUrl: '/CampusAmbassador.svg',
            heading: 'Campus Ambassador',
            description: 'Drive sales for companies by acquiring customers'
        }
    ]

    const DataProjectCategorySecond = [
        {
            id: 1,
            imageUrl: '/ResearchAndSurvey.svg',
            heading: 'Reasearch and Survey',
            description: 'Run Surveys for companies and complete research assignments'
        },
        {
            id: 2,
            imageUrl: '/DataEntry.svg',
            heading: 'Data Entry',
            description: 'Create databases for companies with your data research skills'
        },
        {
            id: 3,
            imageUrl: '/VoiceOver.svg',
            heading: 'Voice Over',
            description: 'Work with companies in recording content with your voice over skills'
        },
        {
            id: 4,
            imageUrl: '/ContentWriting.svg',
            heading: 'Content Writing',
            description: 'Blogs, articles, website content and a lot more. Write for companies'
        },
        {
            id: 5,
            imageUrl: '/GraphicsDesign.svg',
            heading: 'Graphics Design',
            description: 'Logos, Brochures, pamphlets, website, posts etc'
        },
        {
            id: 6,
            imageUrl: '/Testing.svg',
            heading: 'Testing',
            description: 'Test company products and give feedback, app, website, physical product'
        }
    ]

    const CardMemberReviewData = [
        {
            id: 1,
            imageUrl: 'https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a02c38d532a827f92564c4_Aanya%20Anand.png',
            name: 'Aanya Anand',
            category: 'Social Media Marketing',
            review: 'Experience has helped me gain a lot of confidence. Best part is learning &amp; Earning together'
        },
        {
            id: 2,
            imageUrl: 'https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a02cb96cc401457e606f65_Shaurya%20Chatterjee.png',
            name: 'Shaurya Chatterjee',
            category: 'Content Writing',
            review: "Proud earning money via the projects. It's a huge motivation‍"
        },
        {
            id: 3,
            imageUrl: 'https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a02d4ed532a8800c256e5e_Apoorva%20yagi.png',
            name: 'Apoorv Tyagi',
            category: 'Social Media Marketing',
            review: 'Funngro is a powerful platform for all the teenagers out there to earn by applying their skills and new ideas. Happy to work with companies.'
        },
        {
            id: 4,
            imageUrl: 'https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a02db8041f5f5477b12118_Praanjal%20Agarwal.png',
            name: 'Praanjal Agarwal',
            category: 'Social Media Marketing, Content Writing',
            review: 'Helped me to earn through my skills. Happy to work with companies.'
        }
    ]

    const [slideNumberGallerySlide, setSlideNumberGallerySlide] = useState(1)
    const [gallerySlideNumber, setGallerySlideNumber] = useState(0)
    const [memberReviewCardNumber, setMemberReviewCardNumber] = useState(0)
    const [featuredInSlideNumber, setFeaturedInSlideNumber] = useState(0)


    useEffect(() => {
        let slides = document.getElementsByClassName("gallery-slide-wrapper");
        for (const element of slides) {
            element.style.transform = `translateX(${-100 * gallerySlideNumber}%)`;
        };
        //console.log(slides, gallerySlideNumber)
    }, [gallerySlideNumber])

    useEffect(() => {
        let slides = document.getElementsByClassName("Member-review-card");
        for (const element of slides) {
            element.style.transform = `translateX(${-100 * memberReviewCardNumber}%)`;
        };
        //console.log(slides, gallerySlideNumber)
    }, [memberReviewCardNumber])

    useEffect(() => {
        let slides = document.getElementsByClassName("featured-in-slide");
        for (const element of slides) {
            element.style.transform = `translateX(${-100 * featuredInSlideNumber}%)`;
        };
        //console.log(slides, gallerySlideNumber)
    }, [featuredInSlideNumber])

    const showSlidesTranslateNext = (variableSlideNumber, setVariableSlideNumber, slideClassName) => {
        let slides = document.getElementsByClassName(slideClassName);
        if (variableSlideNumber >= (slides.length - 1)) {
            setVariableSlideNumber(0);
        }
        else {
            setVariableSlideNumber(variableSlideNumber + 1);
        }
    }

    const showSlidesTranslatePrev = (variableSlideNumber, setVariableSlideNumber, slideClassName) => {
        let slides = document.getElementsByClassName(slideClassName);
        if (variableSlideNumber <= 0) {
            setVariableSlideNumber(slides.length - 1);
        }
        else {
            setVariableSlideNumber(variableSlideNumber - 1);
        }
    }

    const showSlides = (n) => {
        let slides = document.getElementsByClassName("gallery-slide-wrapper");
        let slideIndex = n - 1;
        if (n > (slides.length)) { slideIndex = 0 }
        if (n < 1) { slideIndex = (slides.length - 1) }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        console.log(slideIndex - 1);
        slides[slideIndex].style.display = "block";
        if ((slideIndex + 1) <= (slides.length - 1)) {
            slides[slideIndex + 1].style.display = "block";
        }
        else {
            slides[0].style.display = "block"
        }
        setSlideNumberGallerySlide(slideIndex + 1);
        console.log(slideIndex)
        //dots[slideIndex-1].className += " active";
        //captionText.innerHTML = dots[slideIndex-1].alt;
    }

    // const handleSliderNext = () => {
    //     //e.stopPropagation();
    //     setSlideNumberGallerySlide(slideNumberGallerySlide + 1)
    //     //e.preventDefault()
    // }

    // const handleSliderPrev = () => {
    //     setSlideNumberGallerySlide(slideNumberGallerySlide - 1)
    // }

    const handleAccordionClick = (e) => {
        //console.log(e.target.id)
        let imgElement = document.getElementById(e.target.id)
        let numberOfAccordion = (e.target.id).split('-')[2]
        let accordionContentNum = "fs_accordion-" + numberOfAccordion + "_content";
        //console.log(accordionContentNum)
        let accordionElement = document.getElementById(accordionContentNum)
        if (accordionElement.style.height === 'auto') {
            //accordionElement.style.display = "none";
            accordionElement.style.height = '0px';
            accordionElement.style.padding = '0px'
            imgElement.src = "/Plus.svg"
            console.log(imgElement)
        }
        else {
            //accordionElement.style.display = "block";
            imgElement.src = "/close.svg"
            accordionElement.style.height = 'auto';
            accordionElement.style.padding = '10px'
            console.log(imgElement)
        }
    }


    return (
        <main className="bg-[#121e2c] mb-12 mt-16">
            <Head>
                <link rel="icon" href="/icon.ico" sizes="any" />
            </Head>

            <div className="header-container flex gap-20 mx-16 mt-36 flex-wrap bg-[#121e2c]">

                <div className="flex flex-col header-container-left-wrapper m-4 justify-center">

                    <div>
                        <h1 className="text-white text-6xl">TEENLANCERS</h1>
                        <TypewriterEffectSmooth cursorClassName={'h-[10px]'} words={[{ text: headText, className: "items-center justify-center text-white text-lg truncate" }]} className='flex flex-row w-96 justify-center text-wrap' />

                    </div>

                    <div className="flex items-center gap-3">

                        <div className="text-white">Download&nbsp;App

                        </div>

                        <div className="flex gap-3">
                            <a href="https://play.google.com/store/apps/details?id=com.wishbanc.funngro" className="download-app-cta w-inline-block">
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80744c238bae49b47ff4_image%2027.png" loading="lazy" alt="Get it on Google Play Banner" className="image-full-width" width={132} height={49} />
                            </a>
                            <a href="https://apps.apple.com/in/app/funngro/id1579361075" className="download-app-cta w-inline-block">
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80746a8a27189ca05fb9_image%2029.png" loading="lazy" alt="Download on the App Store Banner" className="image-full-width" width={132} height={49} />
                            </a>

                        </div>

                    </div>

                </div>

                <div className="header-container-right-wrapper flex items-center justify-center">
                    <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro.png" sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, 44vw" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro.png 586w" alt="Funngro App" className="flex items-center justify-center sm:w-[512px] sm:h-[507px] max-w-[512px] max-h-[507px]" width={386} height={382} />

                </div>

            </div>


            <div className="main-container bg-[#121e2c]">

                <div className="stats-area flex m-4 mx-9 gap-5 flex-wrap justify-between">
                    {
                        DataStats.map(item => {
                            return <div key={item.id}>
                                <CardInfo image={item.image} heading={item.heading} info={item.info} />
                            </div>
                        })
                    }
                </div>

                <div className="reason-area">

                    <div className="main-container-reason-wrapper-heading">

                        <div className="margin-bottom margin-small">
                            <h2 className="text-white flex justify-center text-5xl mt-28">Why work in your Teens?</h2>

                        </div>
                        <p className="text-white m-4 mx-3 my-6">Warren Buffet, Bill Gates, Steve Jobs, all started working in their Teens, do you need a better reason?</p>

                    </div>

                    <div className="main-container-reason-wrapper bg-[#121e2c]">
                        <HoverEffect items={DataReason} />
                    </div>
                </div>


                <div className="interests-grid bg-[#1f2e40] flex flex-wrap gap-4 mt-16 items-center justify-center">

                    {
                        DataProjectCategory.map(item => {
                            return <div className={`bg-transparent flip-card h-[234px] w-[224px] perspective-1000 m-2`} key={item.id}>

                                <div className={`flip-card-inner relative w-full h-full transform-style-3d backface-hidden transition-all duration-[0.6s] hover:transform hover:rotate-y-180 rounded-sm`}>

                                    <div className="absolute w-full h-full z-[2] rounded-lg">
                                        <CardProjectCategory image={item.imageUrl} heading={item.heading} />
                                    </div>

                                    <div className="absolute bg-[#66d08c] w-full h-full transform rotate-y-180 z-[1] rounded-lg" >
                                        <CardHeading heading={item.description} />
                                    </div>

                                </div>

                            </div>
                        })
                    }

                    <div className="flex flex-col bg-[#121e2c] h-[234px] w-[733px] items-center justify-center gap-7 rounded-lg p-4">
                        <h2 className="text-white">Project Categories</h2>
                        <p className="text-white">Hundreds of live project in each category. Register for categories of your choice in Funngro App and start working with companies.</p>
                    </div>

                    {
                        DataProjectCategorySecond.map(item => {
                            return <div className={`bg-transparent flip-card h-[234px] w-[224px] perspective-1000 m-2`} key={item.id}>

                                <div className={`flip-card-inner relative w-full h-full transform-style-3d backface-hidden transition-all duration-[0.6s] hover:transform hover:rotate-y-180`}>

                                    <div className="absolute w-full h-full z-[2] rounded-lg">
                                        <CardProjectCategory image={item.imageUrl} heading={item.heading} />
                                    </div>

                                    <div className="absolute bg-[#66d08c] w-full h-full transform rotate-y-180 z-[1] rounded-lg" >
                                        <CardHeading heading={item.description} />
                                    </div>

                                </div>

                            </div>
                        })
                    }

                </div>


                <div className="trusted-area-heading margin-bottom margin-large mt-24">
                    <div className="text-align-center">
                        <div className="flex justify-center text-2xl"><h2 className="text-color-light-blue">We are Trusted by</h2>
                        </div><p className="text-gray px-4">Hundreds of companies and partners working with Funngro to find smart talent</p>
                    </div>
                </div>


                <div className="flex justify-around flex-wrap">
                    <CardContainer>

                        <div className="partners-box _1 flex flex-col m-4 border-2 relative border-white w-[395px] h-[578px] justify-start items-center z-10 rounded-lg">
                            <div className="bg-[#40424c] w-full flex justify-center h-[65px] p-5"><h3 className="text-white text-2xl">Companies</h3>
                            </div>
                            <div className="partner-logo-list flex flex-col justify-start gap-3 mt-3 z-10">
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e2e5824e05e043b_CarDekho%20logo.png" loading="lazy" sizes="(max-width: 479px) 100vw, 165.3125px" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e2e5824e05e043b_CarDekho%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e2e5824e05e043b_CarDekho%20logo-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e2e5824e05e043b_CarDekho%20logo-p-1080.png 1080w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e2e5824e05e043b_CarDekho%20logo-p-1600.png 1600w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e2e5824e05e043b_CarDekho%20logo.png 2116w" alt="Partner" className="partner-logo" width={165} height={40} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fc56174a8505b2556_Enerzy%20Solar%20logo.png" loading="lazy" sizes="106.09375px" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fc56174a8505b2556_Enerzy%20Solar%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fc56174a8505b2556_Enerzy%20Solar%20logo-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fc56174a8505b2556_Enerzy%20Solar%20logo-p-1080.png 1080w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fc56174a8505b2556_Enerzy%20Solar%20logo.png 1358w" alt="Partner" className="partner-logo" width={165} height={40} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c231131a1e105d55f450_Mobigic%20logo.png" loading="lazy" alt="Partner" className="partner-logo" width={165} height={30} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909f302d2432498d0a93_Tarakki%20logo.png" loading="lazy" sizes="107.8125px" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909f302d2432498d0a93_Tarakki%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909f302d2432498d0a93_Tarakki%20logo-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909f302d2432498d0a93_Tarakki%20logo.png 1380w" alt="Partner" className="partner-logo" width={165} height={40} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e236fced422c7e558_StockPe%20Logo.png" loading="lazy" alt="Partner" className="partner-logo"
                                    width={165} height={40} />
                            </div>
                            <svg className="absolute bottom-0 -right-56 bg-transparent z-0 text-[#40424c]" viewBox="0 0 439 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.388 0.564883C5.227 1.05488 3.314 2.67988 2.138 4.17488C0.0079999 6.88188 0 7.11889 0 66.7109C0 107.591 0.344 127.283 1.085 128.911C1.682 130.221 3.439 132.042 4.99 132.958C7.581 134.488 18.284 134.623 137.357 134.623C228.375 134.623 267.614 134.3 269.288 133.538C274.506 131.16 275 128.675 275 104.784C275 92.6669 274.57 81.6219 274.045 80.2399C273.519 78.8579 272.057 77.0529 270.795 76.2279C268.724 74.8739 16.952 1.08988 11 0.0928829C9.625 -0.137117 7.55 0.0748827 6.388 0.564883Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </CardContainer>


                    <CardContainer >

                        <div className="partners-box _2 flex flex-col m-4 border-2 border-white w-[395px] h-[578px] justify-start items-center relative z-10 rounded-lg">
                            <div className="partners-heading-wrapper _2 bg-[#40424c] w-full flex justify-center h-[65px] p-5">
                                <h3 className="text-white text-2xl">Partners</h3>

                            </div>
                            <div className="partner-logo-list flex flex-col justify-start gap-4 mt-4 z-10">
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/64ae396c0046a0f0dbbc6f08_Mask%20group.png" loading="lazy" alt="Partner" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/64ae396c0046a0f0dbbc6f08_Mask%20group-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/64ae396c0046a0f0dbbc6f08_Mask%20group-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/64ae396c0046a0f0dbbc6f08_Mask%20group-p-1080.png 1080w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/64ae396c0046a0f0dbbc6f08_Mask%20group.png 2882w" sizes="123px" className="partner" height={40} width={180} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1974420c03b964d4513_AIC%20Pinnacle%20logo.png" loading="lazy" sizes="(max-width: 479px) 100vw, 148.4375px" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1974420c03b964d4513_AIC%20Pinnacle%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1974420c03b964d4513_AIC%20Pinnacle%20logo.png 1900w" alt="Partner" className="partner-logo" height={40} width={180} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1985da398a524766945_Qapita%20logo.png" loading="lazy" sizes="116.40625px" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1985da398a524766945_Qapita%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1985da398a524766945_Qapita%20logo-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1985da398a524766945_Qapita%20logo-p-1080.png 1080w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1985da398a524766945_Qapita%20logo.png 1490w" alt="Partner" className="partner-logo" height={40} width={180} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c197453e183c74317857_Headstart%20logo.png" loading="lazy" sizes="127.109375px" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c197453e183c74317857_Headstart%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c197453e183c74317857_Headstart%20logo.png 1627w" alt="Partner" className="partner-logo" height={40} width={180} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1984af86db14b5e888c_AIC%20logo.png" loading="lazy" sizes="(max-width: 479px) 100vw, 179.53125px" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1984af86db14b5e888c_AIC%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1984af86db14b5e888c_AIC%20logo-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1984af86db14b5e888c_AIC%20logo.png 2298w" alt="Partner" className="partner-logo" height={40} width={180} />
                            </div>
                            <svg className="absolute bottom-0 -right-56 bg-transparent z-0 text-[#40424c]" viewBox="0 0 439 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clipRule="evenodd" d="M6.388 0.564883C5.227 1.05488 3.314 2.67988 2.138 4.17488C0.0079999 6.88188 0 7.11889 0 66.7109C0 107.591 0.344 127.283 1.085 128.911C1.682 130.221 3.439 132.042 4.99 132.958C7.581 134.488 18.284 134.623 137.357 134.623C228.375 134.623 267.614 134.3 269.288 133.538C274.506 131.16 275 128.675 275 104.784C275 92.6669 274.57 81.6219 274.045 80.2399C273.519 78.8579 272.057 77.0529 270.795 76.2279C268.724 74.8739 16.952 1.08988 11 0.0928829C9.625 -0.137117 7.55 0.0748827 6.388 0.564883Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </CardContainer>


                    <CardContainer >

                        <div className="partners-box _3 flex flex-col m-4 border-2 border-white w-[395px] h-[578px] justify-start items-center relative">
                            <div className="bg-[#40424c] w-full flex justify-center h-[65px] p-5">
                                <h3 className="text-white text-2xl">Companies</h3>
                            </div>
                            <div className="partner-logo-list flex flex-col gap-3 mt-4 z-10">
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fd142ea4d0d188166_LegacyNext%20logo.png" loading="lazy" sizes="(max-width: 479px) 100vw, 200px" alt="Partner" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fd142ea4d0d188166_LegacyNext%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fd142ea4d0d188166_LegacyNext%20logo-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fd142ea4d0d188166_LegacyNext%20logo-p-1080.png 1080w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fd142ea4d0d188166_LegacyNext%20logo-p-1600.png 1600w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fd142ea4d0d188166_LegacyNext%20logo-p-2000.png 2000w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fd142ea4d0d188166_LegacyNext%20logo-p-2600.png 2600w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fd142ea4d0d188166_LegacyNext%20logo-p-3200.png 3200w" className="partner-logo" width={200} height={40} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e4eeebe97628bde62_Two%2099%20Logo.png" loading="lazy" sizes="123.984375px" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e4eeebe97628bde62_Two%2099%20Logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e4eeebe97628bde62_Two%2099%20Logo.png 1587w" alt="Partner" className="partner-logo" width={200} height={40} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0ce0a8ef5285a045_MOnech%20logo.png" loading="lazy" sizes="40px" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0ce0a8ef5285a045_MOnech%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0ce0a8ef5285a045_MOnech%20logo.png 512w" alt="Partner" className="partner-logo" width={200} height={40} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e05723157cb10f6_Eco%20365%20Logo.png" loading="lazy" alt="Partner" className="partner-logo" width={200} height={40} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909ee1a3895ee3da471b_Grow%20Partner%20logo.png" loading="lazy" sizes="(max-width: 479px) 100vw, 200px" alt="Partner" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909ee1a3895ee3da471b_Grow%20Partner%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909ee1a3895ee3da471b_Grow%20Partner%20logo-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909ee1a3895ee3da471b_Grow%20Partner%20logo-p-1080.png 1080w" className="partner-logo" width={200} height={40} />
                            </div>
                            <svg className="absolute bottom-0 -right-56 bg-transparent z-0 text-[#40424c]" viewBox="0 0 439 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clipRule="evenodd" d="M6.388 0.564883C5.227 1.05488 3.314 2.67988 2.138 4.17488C0.0079999 6.88188 0 7.11889 0 66.7109C0 107.591 0.344 127.283 1.085 128.911C1.682 130.221 3.439 132.042 4.99 132.958C7.581 134.488 18.284 134.623 137.357 134.623C228.375 134.623 267.614 134.3 269.288 133.538C274.506 131.16 275 128.675 275 104.784C275 92.6669 274.57 81.6219 274.045 80.2399C273.519 78.8579 272.057 77.0529 270.795 76.2279C268.724 74.8739 16.952 1.08988 11 0.0928829C9.625 -0.137117 7.55 0.0748827 6.388 0.564883Z" fill="currentColor"></path>
                            </svg>

                        </div>
                    </CardContainer>
                </div>


                <div className="featured-in-header mt-48">
                    <div>
                        <div>
                            <h2 className="text-white flex justify-center">We are Featured in</h2>
                            <p className="text-color-grey text-white p-4">The world is talking about Funngro, check out what everyone is saying</p>
                        </div>
                    </div>
                </div>


                <div className="featured-in-slider mt-10 relative">
                    <div className="flex gap-3 justify-around w-[1233px] overflow-hidden mx-5" id="w-slider-mask-0">

                        <div className="featured-in-slide transition-all duration-[0.5s]" aria-label="1 of 7">
                            <a href="https://businessnewsweek.in/business/teens-mean-business-funngro-offers-real-world-work-experience-to-teenagers-through-its-revolutionary-platform/" target="_blank" className="w-inline-block" tabindex="-1" aria-hidden="true">
                                <Image sizes="(max-width: 479px) 100vw, (max-width: 767px) 15vw, (max-width: 991px) 96px, 8vw" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778e6c4c837fc2ef89c_Business%20News%20week%20new%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778e6c4c837fc2ef89c_Business%20News%20week%20new%20logo.png 512w" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778e6c4c837fc2ef89c_Business%20News%20week%20new%20logo.png" loading="lazy" alt="Teens financial empowerment, Learning with earning, Prepaid card, Freelance, Experience with real companies, project based jobs" className="featured-in-image" aria-hidden="true" width={84} height={84} />
                            </a>
                        </div>

                        <div className="featured-in-slide transition-all duration-[0.5s]" aria-label="2 of 7">
                            <a href="https://www.fmlive.in/teens-mean-business-funngro-offers-real-world-work-experience-to-teenagers-through-its-revolutionary-platform/" target="_blank" className="w-inline-block" tabindex="-1" aria-hidden="true">
                                <Image alt="Fmlive" loading="lazy" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a029eed4fdce11c2d34e80_FM%20live%20logo.png" className="featured-in-image" aria-hidden="true" width={84} height={84} />
                            </a>
                        </div>

                        <div className="featured-in-slide transition-all duration-[0.5s]" aria-label="3 of 7">
                            <a href="https://ibsintelligence.com/ibsi-news/funngro-launches-money-management-program-for-teenagers/" target="_blank" className="w-inline-block" tabindex="-1" aria-hidden="true">
                                <Image sizes="(max-width: 479px) 100vw, (max-width: 767px) 15vw, (max-width: 991px) 96px, 8vw" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778a3f4b8074b9bf839_IBS%20Intelligence%20new%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778a3f4b8074b9bf839_IBS%20Intelligence%20new%20logo.png 512w" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778a3f4b8074b9bf839_IBS%20Intelligence%20new%20logo.png" loading="lazy" alt="Teens financial empowerment, Learning with earning, Prepaid card, Freelance, Experience with real companies, project based jobs" className="featured-in-image" aria-hidden="true" width={84} height={84} />
                            </a>
                        </div>

                        <div className="featured-in-slide transition-all duration-[0.5s]" aria-label="4 of 7">
                            <a href="https://timesofindia.indiatimes.com/blogs/voices/importance-of-financial-literacy-for-teens/" target="_blank" className="w-inline-block" tabindex="-1" aria-hidden="true">
                                <Image alt="featured by Times of India" loading="lazy" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a02a16a363596ec9c5eefb_Times%20of%20India%20logo.png" className="featured-in-image" aria-hidden="true" width={84} height={84} /></a>
                        </div>

                        <div className="featured-in-slide transition-all duration-[0.5s]" aria-label="5 of 7" >
                            <a href="https://thedailybrunch.com/2022/07/28/teens-mean-business-funngro-offers-real-world-work-experience-to-teenagers-through-its-revolutionary-platform/" target="_blank" className="w-inline-block">
                                <Image sizes="(max-width: 479px) 100vw, (max-width: 767px) 15vw, (max-width: 991px) 96px, 8vw" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c7787f63ad6273e07ba9_The%20Daily%20Brunch%20new%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c7787f63ad6273e07ba9_The%20Daily%20Brunch%20new%20logo.png 512w" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c7787f63ad6273e07ba9_The%20Daily%20Brunch%20new%20logo.png" loading="lazy" alt="Teens financial empowerment, Learning with earning, Prepaid card, Freelance, Experience with real companies, project based jobs" width={84} height={84} />
                            </a>
                        </div>

                        <div className="featured-in-slide transition-all duration-[0.5s]" aria-label="6 of 7">
                            <a href="https://entrackr.com/2022/12/funngro-helps-teens-with-essential-financial-education-valuable-work-experience/" target="_blank" className="w-inline-block" tabindex="-1" aria-hidden="true">
                                <Image alt="Teens financial empowerment, Learning with earning, Prepaid card, Freelance, Experience with real companies, project based jobs" loading="lazy" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a029286e97ee36926d7bbf_Entracker.png" className="featured-in-image" aria-hidden="true" width={84} height={84} />
                            </a>
                        </div>

                        <div className="featured-in-slide transition-all duration-[0.5s]" aria-label="7 of 7">
                            <a href="https://thedailybrunch.com/2022/07/28/teens-mean-business-funngro-offers-real-world-work-experience-to-teenagers-through-its-revolutionary-platform/" target="_blank" className="w-inline-block" tabindex="-1" aria-hidden="true">
                                <Image alt="The Daily Brunch" loading="lazy" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a0293fe9b4746ced4246a3_Mda.png" className="featured-in-image" aria-hidden="true" width={84} height={84} />
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="left-arrow absolute left-[45%] top-[110px]" role="button" tabindex="0" onClick={() => showSlidesTranslatePrev(featuredInSlideNumber, setFeaturedInSlideNumber, 'featured-in-slide')}>
                            <Image alt="Arrow Left" loading="lazy" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6390183d71afe76c7e7bc767_Vector%2058.svg" width={40} height={16} />
                        </div>

                        <div className="right-arrow absolute top-[117px] left-[52%]" role="button" tabindex="0" onClick={() => showSlidesTranslateNext(featuredInSlideNumber, setFeaturedInSlideNumber, 'featured-in-slide')}>
                            <Image alt="Arrow Right" loading="lazy" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6390183d1279b312ac061558_Vector%2057.svg" width={40} height={16} />
                        </div>
                    </div>


                    <div className="hide w-slider-nav w-round">

                        <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 1 of 7" aria-pressed="false" role="button" tabindex="-1">

                        </div>

                        <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 2 of 7" aria-pressed="false" role="button" tabindex="-1">

                        </div>

                        <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 3 of 7" aria-pressed="false" role="button" tabindex="-1">

                        </div>

                        <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 4 of 7" aria-pressed="false" role="button" tabindex="-1">

                        </div>

                        <div className="w-slider-dot w-active" data-wf-ignore="" aria-label="Show slide 5 of 7" aria-pressed="true" role="button" tabindex="0">

                        </div>

                        <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 6 of 7" aria-pressed="false" role="button" tabindex="-1">

                        </div>

                        <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 7 of 7" aria-pressed="false" role="button" tabindex="-1">
                        </div>
                    </div>
                </div>


                <div className="gallery-wrapper flex justify-around mt-48 relative">

                    <div className="gallery-block w-[384px]">
                        <div>
                            <h3 className="text-white text-3xl">Funngro @ Shark Tank</h3>
                        </div>
                        <p className=" text-white">Lakhs of Teens love Funngro, Hundreds of Companies love Funngro and now Sharks also loved Funngro</p>
                    </div>
                    <div className="gallery-slide w-slider relative w-[800px]" id="w-node">
                        <div id="gallery-slide-mask" className="w-slider-mask flex gap-2 overflow-hidden">

                            <div className="gallery-slide-wrapper transition-all duration-150" aria-label="1 of 5">
                                <div className="gallery-slide-image">
                                    <div className="image-full-width gallery-cover w-video w-embed">
                                        <iframe className="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FsGysgwm02YY%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsGysgwm02YY&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FsGysgwm02YY%2Fhqdefault.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=youtube" width="388" height="214" scrolling="no" allowfullscreen="" title="Funngro @ Shark Tank"></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="gallery-slide-wrapper transition-all duration-150 w-[388px] h-[214px]" aria-label="2 of 5" role="group" aria-hidden="true">
                                <div className="gallery-slide-image w-[388px]" aria-hidden="true">
                                    <Image alt="SharkTank - India" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fdf3f03e4e4d213cda423f_Funngro%20-%20Shark%20Tank.png" loading="lazy" width={388} height={260} className="gallery-cover" aria-hidden="true" />

                                </div>
                            </div>

                            <div className="gallery-slide-wrapper transition-all duration-150 w-[388px] h-[214px] block" aria-label="3 of 5" role="group" aria-hidden="true">
                                <div className="gallery-slide-image w-[388px]" aria-hidden="true">
                                    <Image alt="SharkTank - India" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fdf406cd40dff886664edb_Funngro%20-%20Shark%20Tank%202.png" loading="lazy" width={388} height={260} className="image-full-width gallery-cover" aria-hidden="true" />

                                </div>
                            </div>

                            <div className="gallery-slide-wrapper transition-all duration-150 w-[388px] h-[214px] block" aria-label="4 of 5" role="group" aria-hidden="true">
                                <div className="gallery-slide-image w-[388px]" aria-hidden="true">
                                    <Image id="w-node" alt="SharkTank - India" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fdf416648a6375d0f9db21_Funngro%20-%20Shark%20Tank%203.png" width={388} height={260} loading="lazy" className="image-full-width gallery-cover" aria-hidden="true" /><h4 className="gallery-slide-text hide" aria-hidden="true"></h4>
                                </div>
                            </div>

                            {/* <div className="gallery-slide-wrapper" aria-label="5 of 5" role="group" aria-hidden="true">
                                <div className="gallery-slide-image" aria-hidden="true">
                                    <div className="image-full-width gallery-cover w-video w-embed" aria-hidden="true">
                                    </div>
                                </div>
                            </div> */}

                            <div aria-live="polite" aria-atomic="true" className="w-slider-aria-label" data-wf-ignore="">
                            </div>
                        </div>

                        <div className="gallery-slider-left absolute top-28" role="button" tabIndex="0">
                            <div className="gallery-arrow-wrapper" onClick={() => showSlidesTranslatePrev(gallerySlideNumber, setGallerySlideNumber, 'gallery-slide-wrapper')}>
                                <Image alt="slider-icons" loading="lazy" src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a0e4912aadb_Chevron%20right-1.svg" className="slider-arrow-icon" width={40} height={40} />
                            </div>
                        </div>

                        <div className="gallery-slider-right absolute top-28 left-[726px]" role="button" tabIndex="0">
                            <div className="gallery-arrow-wrapper" onClick={() => showSlidesTranslateNext(gallerySlideNumber, setGallerySlideNumber, 'gallery-slide-wrapper')}>
                                <Image alt="slider-icons" loading="lazy" src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a7ce212aacc_Chevron%20right.svg" className="slider-arrow-icon" width={40} height={0} />
                            </div>
                        </div>

                        <div className="gallery-slide-nav w-slider-nav w-round">
                            <div className="w-slider-dot w-active" data-wf-ignore="" aria-label="Show slide 1 of 5" aria-pressed="true" role="button" tabindex="0">
                            </div>

                            <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 2 of 5" aria-pressed="false" role="button" tabindex="-1">
                            </div>

                            <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 3 of 5" aria-pressed="false" role="button" tabindex="-1">
                            </div>

                            <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 4 of 5" aria-pressed="false" role="button" tabindex="-1">
                            </div>

                            <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 5 of 5" aria-pressed="false" role="button" tabindex="-1">
                            </div>
                        </div>
                    </div>

                </div>


                <div className="earnings-steps-header mt-48 px-5">

                    <div className="flex flex-col gap-3">

                        <div><h2 className="text-color-light-blue text-white flex justify-center text-3xl">Earning with Funngro</h2>

                        </div>
                        <p className=" text-white">Simple steps to earn income by working with real companies on project basis</p>
                    </div>
                </div>


                <div className="process-wrapper-earning-steps flex mt-10 relative px-5 mx-3">
                    <div className="absolute top-[49px] z-0 left-48">
                        <svg width="100%" height="2" viewBox="0 0 937 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 1H936.5" stroke="#07AB67" strokeWidth="2" strokeDasharray="7 7"></path>
                        </svg>
                    </div>
                    <div className="process-line mobile m-4 hidden absolute">
                        <svg width="2" height="100%" viewBox="0 0 2 3000" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 3000L1 1.14441e-05" stroke="#07AB67" strokeWidth="2" strokeDasharray="7 7"></path>
                        </svg>
                    </div>
                    <div className="div-block flex flex-col items-center gap-3 z-10">
                        <div className="process-icon w-embed">
                            <Image src="/OneCircle.svg" alt="first-step" width={98} height={98} />
                        </div>
                        <div>
                            <h3 className="text-white flex justify-center">Register</h3>
                            <p className="text-color-grey text-white">Register for Earning on Funngro app, select your area of interest</p>
                        </div>
                    </div>
                    <div className="process-arrow flex flex-col justify-center w-[28px] h-[98px]" >
                        <Image src="/RightArrow.svg" alt="right-arrow" width={13} height={26} />
                    </div>
                    <div className="div-block flex flex-col items-center gap-3 z-10">
                        <div className="process-icon w-embed">
                            <Image src="/TwoCircle.svg" alt="steps in circle" width={98} height={98} />
                        </div>
                        <div>
                            <h3 className="text-white flex justify-center">Complete Profile</h3>
                            <p className="text-white">Add details about your interests, experience and past work</p>
                        </div>
                    </div>
                    <div className="process-arrow w-[28px] h-[98px] flex flex-col justify-center">
                        <Image src="/RightArrow.svg" alt="right-arrow" width={13} height={26} />
                    </div>
                    <div className="div-block flex flex-col items-center gap-3 z-10">
                        <div className="process-icon w-embed">
                            <Image src="/ThreeCircle.svg" alt="steps in circle" width={98} height={98} />
                        </div>
                        <div><h3 className="text-white flex justify-center">Finish first project</h3>
                            <p className="text-white">Complete one project to show your skills, get paid</p>
                        </div>
                    </div>
                    <div className="process-arrow w-[28px] h-[98px] flex flex-col justify-center">
                        <Image src="/RightArrow.svg" alt="right-arrow" width={13} height={26} />
                    </div>
                    <div className="div-block flex flex-col items-center gap-3 z-10">
                        <div className="process-icon w-embed">
                            <Image src="/FourCircle.svg" alt="steps in circle" width={98} height={98} />
                        </div>
                        <div><h3 className="text-white flex justify-center">Apply to companies</h3><p className="text-white">Hundreds of companies waiting for you, start applying</p>
                        </div>
                    </div>
                    <div className="process-arrow w-[28px] h-[98px] flex flex-col justify-center">
                        <Image src="/RightArrow.svg" alt="right-arrow" width={13} height={26} />
                    </div>
                    <div className="div-block flex flex-col items-center gap-3 z-10">
                        <div className="process-icon w-embed">
                            <Image src="/FiveCircle.svg" alt="steps in circle" width={98} height={98} />
                        </div>
                        <div><h3 className="text-white flex justify-center">Start Earning</h3><p className="text-white">Complete the project - earn money and get certificate</p>
                        </div>
                    </div>
                </div>


                <div className="faq-section-header mt-48">
                    <div className="text-align-center">
                        <div className="margin-bottom margin-small text-white"><h2 className="text-color-light-blue text-3xl flex justify-center">Frequently Asked Questions</h2>
                        </div><p className="text-color-grey text-white p-6">Part of being successful is asking the right questions and listening to the answers</p>
                    </div>
                </div>


                <div className="w-layout-grid faq6_component text-white flex gap-5 p-4">

                    <div className="fs_accordion-1_component flex flex-col w-[677px] h-[382px] gap-5">
                        <div className="fs_accordion-1_item">
                            <div aria-expanded="false" tabindex="0" role="button" className="fs_accordion-1_header rounded-lg h-[60px] py-[22px] px-[10px] flex bg-[#585e76] justify-between items-center">
                                <div className="fs_accordion-1_label">How can I start earning money?

                                </div>
                                <div className="fs_accordion-1_arrow-wrapper" onClick={(event) => handleAccordionClick(event)}>

                                    <div className="faq6_icon w-embed">
                                        <Image src="/Plus.svg" alt="Plus button" width={32} height={32} id="accordion-icon-1" className="invert" />
                                    </div>
                                </div>
                            </div>
                            <div aria-labelledby="accordion-header-1" id="fs_accordion-1_content" className="w-full h-0 transition-all duration-[0.5s] bg-[#364353]">
                                <div className="fs_accordion-1_body w-full h-full">
                                    <p className="fs_accordion-1_paragraph w-full h-full overflow-hidden">
                                        Simple 5 step process – <br />
                                        (1) download funngro and register for earning, <br />
                                        (2) complete your evaluation project, <br />
                                        (3) apply to projects of your interest, <br />
                                        (4) submit completed projects, <br />
                                        (5) Get paid!
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="fs_accordion-2_item">
                            <div tabindex="0" className="fs_accordion-2_header rounded-lg h-[60px] py-[22px] px-[10px] flex bg-[#585e76] justify-between items-center">
                                <div className="fs_accordion-1_label">Why should Teens work?

                                </div>
                                <div className="fs_accordion-2_arrow-wrapper" onClick={(event) => handleAccordionClick(event)}>
                                    <div className="faq6_icon w-embed">
                                        <Image src="/Plus.svg" alt="Plus button" width={32} height={32} id="accordion-icon-2" className="invert" />
                                    </div>
                                </div>
                            </div>
                            <div aria-labelledby="accordion-header-1" id="fs_accordion-2_content" className="transition-all duration-[0.5s] h-0 bg-[#364353]">
                                <div className="fs_accordion-1_body w-full h-full">
                                    <p className="fs_accordion-1_paragraph w-full h-full overflow-hidden">Start early, get independence, learn while you earn but most importantly get real world experience. Work on projects of your interest and find your real passion before making the final career decision.</p>
                                </div>
                            </div>
                        </div>
                        <div className="fs_accordion-3_item">
                            <div tabindex="0" className="fs_accordion-3_header rounded-lg h-[60px] py-[22px] px-[10px] flex bg-[#585e76] justify-between items-center">
                                <div className="fs_accordion-1_label">What kind of work can I do?

                                </div>
                                <div className="fs_accordion-3_arrow-wrapper" id="accordion-3" onClick={(event) => handleAccordionClick(event)}>
                                    <div className="faq6_icon w-embed">
                                        <Image src="/Plus.svg" alt="Plus button" width={32} height={32} id="accordion-icon-3" className="invert" />
                                    </div>
                                </div>
                            </div>
                            <div aria-labelledby="accordion-header-1 hidden" id="fs_accordion-3_content" className="w-full h-0 transition-all duration-[0.5s] bg-[#364353]">
                                <div className="fs_accordion-1_body w-full h-full">
                                    <p className="fs_accordion-1_paragraph w-full h-full overflow-hidden">At this time we have 12 categories in which Teens can work as listed on our home page. Do let us know if those do not cover your needs.<em>‍</em>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="faq6_content flex flex-col bg-[#585e76] justify-around w-[508px] h-[301px] p-5 rounded-lg">
                        <div>Have a Question?

                        </div>
                        <div className="text-4xl"><h3>Check out our answers to frequently asked questions</h3>
                        </div>
                        <a href="/faq" className="is-icon w-inline-block flex gap-4 items-center justify-around bg-[#47c480] rounded-3xl w-[200px] h-[50px]">
                            <div>View More FAQs
                            </div>
                            <div>
                                <Image src="/rightarrow.svg" alt="right arrow" width={16} height={17} className="invert" />
                            </div>
                        </a>
                    </div>
                </div>

                {/* <div className="flex gap-4 manage-money-section"> */}
                {/* <div className="manage-money-right-wrapper flex ">
                        <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638de81514dc6e31e2578d60_about-funngro.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, 46vw" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638de81514dc6e31e2578d60_about-funngro-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638de81514dc6e31e2578d60_about-funngro-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638de81514dc6e31e2578d60_about-funngro.png 841w" alt="Funngro About Illustration" className="image-full-width" />
                    </div> */}


                <div className="manage-money-left-wrapper w-screen flex flex-col justify-center gap-10 p-16">
                    <div>
                        <h1 className="text-5xl text-white">FUNNGRO</h1>
                    </div>
                    <div className="margin-bottom margin-regular">
                        <h2 className="text-white">The name says it all. "Its <span className="text-dark-green">Fun</span> to <span className="text-dark-green">Grow</span>`&quot;`</h2>
                    </div>
                    <div>
                        <p className="text-white">Funngro is built by educators, Tech enthusiasts, IIM alumni, Finance experts but most importantly by Loving parents. We are thankful to those mentors who helped us in early stage of our lives and Funngro is our effort to give back to the society. Funngro is a mission to enable Teenagers to become Financially empowered and grow up to be responsible citizens.
                        </p>
                        <p className="text-dark-green">
                            Enable Smart Teenagers and Smart Companies to realize their full potentials
                        </p>
                        <div className="share-links text-white flex gap-3">
                            <div>Payal Jain, CEO
                            </div><a href="https://www.linkedin.com/in/payal-jain-8780191" target="_blank" className="social-link w-inline-block">
                                <div className="share-icon w-embed">
                                    <Image src="/Linkedin.svg" alt="Linkedin icon" width={24} height={24} />
                                </div>
                            </a>
                        </div>
                        <div className="share-links text-white flex gap-3">
                            <div>Anik Jain, CGO
                            </div><a href="https://www.linkedin.com/in/anik-jain" target="_blank" className="social-link w-inline-block">
                                <div className="share-icon w-embed">
                                    <Image src="/Linkedin.svg" alt="Linkedin icon" width={24} height={24} />
                                </div>
                            </a>
                        </div>
                    </div><p className="text-size-medium text-dark-green">BE INDEPENDENT BEFORE 18!</p>
                </div>


                <MacbookScroll
                    src="/FunngroLarge.png"
                    showGradient={true}
                    title="Let's get started"

                />
            </div>

            <div className="w-screen flex justify-center mt-[300px]">

                <div className="bg-[#47c480] w-52 h-12 flex justify-center items-center rounded-2xl">
                    <a href="https://teenlancer.funngro.com/pages/login/" target="_blank" className="inline-flex gap-3 bg-[#47c480] justify-center items-center">
                        <div className="text-white">Get Started Now</div>
                        <Image src='/rightarrow.svg' className='invert' alt="right-arrow" height={24} width={24} />
                    </a>
                </div>
            </div>

            <div className="flex mt-96">

                <div className="member-review-section-header text-white">
                    <div className="flex flex-col justify-start items-center p-4">
                        <div className="mb-2 m-3"><h2 className="text-color-light-blue">Happy Funngro Members</h2>
                        </div><p className="text-gray">Thousands of your friends are on Funngro and their lives are changing for better. Read on for real stories</p>
                    </div>
                </div>

                <div className="testimonial-slider text-white flex relative">
                    <div className="testomonials-mask flex w-[966px] overflow-hidden gap-3" id="w-slider-mask-2">
                        {
                            CardMemberReviewData.map(item => {
                                return <div key={item.id} className='Member-review-card transition-all duration-150'>
                                    <CardMemberReview imageUrl={item.imageUrl} name={item.name} category={item.category} review={item.review} />
                                </div>
                            })
                        }
                    </div>


                    <div className="left-arrow absolute top-[340px] left-[45%]" tabindex="0" onClick={() => showSlidesTranslatePrev(memberReviewCardNumber, setMemberReviewCardNumber, 'Member-review-card')}>
                        <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6390183d71afe76c7e7bc767_Vector%2058.svg" width={40} height={16} loading="lazy" alt="Arrow Left" className="custom-arrow-icon" />
                    </div>
                    <div className="right-arrow absolute top-[348px] left-[50%]" tabindex="0" onClick={() => showSlidesTranslateNext(memberReviewCardNumber, setMemberReviewCardNumber, 'Member-review-card')}>
                        <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6390183d1279b312ac061558_Vector%2057.svg" width={40} height={16} loading="lazy" alt="Arrow Right" className="custom-arrow-icon" />
                    </div>
                    <div className="hide w-slider-nav">
                        <div className="w-slider-dot w-active" data-wf-ignore="" aria-label="Show slide 1 of 4" aria-pressed="true" role="button" tabindex="0">

                        </div>
                        <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 2 of 4" aria-pressed="false" role="button" tabindex="-1">

                        </div>
                        <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 3 of 4" aria-pressed="false" role="button" tabindex="-1">

                        </div>
                        <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 4 of 4" aria-pressed="false" role="button" tabindex="-1">
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex mt-48">
                <div className="blog-section w-[200px]">
                    <div className="flex flex-col items-center p-3">
                        <div>
                            <h2 className="text-color-light-blue flex justify-center">Fun blogs</h2>
                        </div>
                        <p className="text-gray">An investment in knowledge pays the best interest, read on.</p>
                    </div>
                </div>
                <div className="blogs-list">
                    <div role="list" className="articles-grid w-dyn-items flex gap-3">
                        <div role="listitem" className="w-dyn-item">
                            <a href="/blog/unleashing-freelancing-success-with-funngro-essential-qualities-and-powerful-tools" className="article-card w-inline-block">

                                <Image alt="Unleashing Freelancing Success with Funngro: Essential Qualities and Powerful Tools" loading="lazy" src="https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/648318c96ee4b710d6a2d8fe_Untitled%20design%20(2).png" sizes="(max-width: 479px) 100vw, (max-width: 767px) 67vw, (max-width: 991px) 32vw, 24vw" srcSet="https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/648318c96ee4b710d6a2d8fe_Untitled%20design%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/648318c96ee4b710d6a2d8fe_Untitled%20design%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/648318c96ee4b710d6a2d8fe_Untitled%20design%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/648318c96ee4b710d6a2d8fe_Untitled%20design%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/648318c96ee4b710d6a2d8fe_Untitled%20design%20(2)-p-2000.png 2000w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/648318c96ee4b710d6a2d8fe_Untitled%20design%20(2).png 2245w" className="article-thumbnail md:w-[281px] md:h-[199px]" width={227} height={160} />
                                <div className="article-heading-wrapper bg-light-black w-[281px] rounded-lg text-white p-3">
                                    <h2 className="article-heading">Unleashing Freelancing Success with Funngro: Essential Qualities and Powerful Tools</h2>
                                    <div className="button text-link flex text-dark-green items-center gap-3">

                                        <div>Read More

                                        </div>
                                        <div className="icon-1x1-small w-embed">
                                            <svg aria-hidden="true" className="h-[17px] w-[16px] text-dark-green" fill="currentColor" role="Image" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                                                <title>Arrow Right</title>
                                                <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9">
                                                </polygon>
                                            </svg>
                                        </div>
                                    </div>
                                </div></a>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                            <a href="/blog/the-importance-of-early-work-experience-for-teens" className="article-card w-inline-block"><Image alt="The Importance of Early Work Experience for Teens" loading="lazy" src="https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/647dacaa70e4e618fa531286_Untitled%20design%20(1).png" sizes="(max-width: 479px) 100vw, (max-width: 767px) 67vw, (max-width: 991px) 32vw, 24vw" srcSet="https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/647dacaa70e4e618fa531286_Untitled%20design%20(1)-p-500.png 500w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/647dacaa70e4e618fa531286_Untitled%20design%20(1)-p-800.png 800w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/647dacaa70e4e618fa531286_Untitled%20design%20(1)-p-1080.png 1080w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/647dacaa70e4e618fa531286_Untitled%20design%20(1).png 1403w" className="article-thumbnail md:w-[281px] md:h-[199px]" width={227} height={160} />
                                <div className="article-heading-wrapper bg-light-black w-[281px] rounded-lg text-white p-3"><h2 className="article-heading">The Importance of Early Work Experience for Teens</h2>
                                    <div className="button text-link flex text-dark-green items-center gap-3">
                                        <div>Read More

                                        </div>
                                        <div className="icon-1x1-small w-embed">
                                            <svg aria-hidden="true" className="h-[17px] w-[16px] text-dark-green" fill="currentColor" role="Image" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                                                <title>Arrow Right</title>
                                                <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9">
                                                </polygon>
                                            </svg>
                                        </div>
                                    </div>
                                </div></a>
                        </div>
                        <div role="listitem" className="w-dyn-item"><a href="/blog/why-should-your-kids-watch-shark-tank-india" className="article-card w-inline-block">
                            <Image alt="Why teens should watch Shark Tank India?" loading="lazy" src="https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/6399d319c27c3dd3a389febf_Why%20should%20your%20kids%20watch%20Shark%20Tank%20India%3F.png" sizes="(max-width: 479px) 100vw, (max-width: 767px) 67vw, (max-width: 991px) 32vw, 24vw" srcSet="https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/6399d319c27c3dd3a389febf_Why%20should%20your%20kids%20watch%20Shark%20Tank%20India%3F-p-500.png 500w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/6399d319c27c3dd3a389febf_Why%20should%20your%20kids%20watch%20Shark%20Tank%20India%3F-p-800.png 800w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/6399d319c27c3dd3a389febf_Why%20should%20your%20kids%20watch%20Shark%20Tank%20India%3F-p-1080.png 1080w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/6399d319c27c3dd3a389febf_Why%20should%20your%20kids%20watch%20Shark%20Tank%20India%3F.png 1482w" className="article-thumbnail" width={222} height={118} />

                            <div className="article-heading-wrapper bg-light-black w-[281px] rounded-lg text-white p-3"><h2 className="article-heading">Why teens should watch Shark Tank India?</h2>
                                <div className="button text-link flex text-dark-green items-center gap-3">
                                    <div>Read More

                                    </div>
                                    <div className="icon-1x1-small w-embed">
                                        <svg aria-hidden="true" className="h-[17px] w-[16px] text-dark-green" fill="currentColor" role="Image" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                                            <title>Arrow Right</title>
                                            <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9">
                                            </polygon>
                                        </svg>
                                    </div>
                                </div>
                            </div></a>
                        </div>
                    </div>
                    {/* <div role="navigation" className="w-pagination-wrapper"><a href="?173f1eaa_page=2" className="w-pagination-next pagination-button">
                        <div className="pagination-icon w-embed">
                            <Image src="/RightHalfArrow.svg" alt="" width={9} height={16} />
                        </div></a>
                    </div> */}
                </div>
            </div>

            <div className="margin-top margin-medium relative mb-12">
                <div className="button-container center">
                    <a href="/blog" className="button is-icon w-inline-block absolute left-[88%] -top-44 bg-dark-green text-white w-[82px] h-[78px] flex flex-col justify-around p-2 rounded-lg">
                        <div>Read More

                        </div>
                        <div className="icon-1x1-small w-embed">
                            <Image src="/rightarrow.svg" alt="right arrow" height={17} width={16} className="invert" />
                        </div>
                    </a>
                </div>
            </div>

        </main>
    );
}
