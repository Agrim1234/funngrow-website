"use client"

import React from 'react'
import Image from 'next/image'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'
import CardInfo from '@/components/CardInfo'
import CardMemberReview from '@/components/CardMemberReview'
import CardProjectCategory from '@/components/CardProjectCategory'
import CardHeading from '@/components/CardHeading'
import { CardContainer } from '@/components/ui/3d-card'
import { useState, useEffect } from 'react'

const page = () => {
    const headText = "Talented teenagers for your company."
    const [memberReviewCardNumber, setMemberReviewCardNumber] = useState(0)
    const [featuredInSlideNumber, setFeaturedInSlideNumber] = useState(0)

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
            imageUrl: '/SocialMediaMarketing.svg',
            heading: 'Social Media Marketing',
            description: 'Manage social media pages of companies'
        },
        {
            imageUrl: '/VideoCreation.svg',
            heading: 'Video Creation',
            description: 'Create and edit videos for companies and use your video creation skills'
        },
        {
            imageUrl: '/WebsiteDesign.svg',
            heading: 'Website Design',
            description: 'Design and build a website for companies'
        },
        {
            imageUrl: '/InfluencerMarketing.svg',
            heading: 'Influencer Marketing',
            description: 'Create Reels, Memes, posts and videos for social media handles of companies'
        },
        {
            imageUrl: '/MobileAppDevelopment.svg',
            heading: 'Mobile App Development',
            description: 'Develop market ready apps for companies'
        },
        {
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
            imageUrl: 'https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a02f978d27935c1ae29633_Darsh%20Golecha.png',
            name: 'Darsh Golecha',
            category: 'Monech',
            review: "Happy customer as Teens work is excellent. It's cost effective with great quality. Have used their graphic designing, Social media and Research Talent."
        },
        {
            id: 2,
            imageUrl: 'https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a03d8184d8d4fd87a16e61_Ravishankar%20Gopalan.png',
            name: 'Ravishankar',
            category: 'Execute Partners & Consultants LLP',
            review: "Impressed by the article written by a Grade IX School student on how he has seen life transform around him with digital payments over the last ten years."
        },
        {
            id: 3,
            imageUrl: 'https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638f71acb547eb813076a20b_testimonial-image.png',
            name: 'Meetu',
            category: "Let's Evolve",
            review: "Funngro services are excellent. They have provided blogs for our website and super impressed by the quality of work done by Teens and amazed to see their financial knowledge too"
        },
    ]

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

    return (
        <main className="bg-[#121e2c] mb-12">

            <div className="header-container flex gap-20 mx-16 mt-28 flex-wrap bg-[#121e2c]">

                <div className="flex flex-col header-container-left-wrapper m-4 gap-6 justify-center max-w-[500px]">

                    <div>
                        <h1 className="text-white text-6xl">Smart Talent for smart companies</h1>
                        <TypewriterEffectSmooth cursorClassName={'h-[10px]'} words={[{ text: headText, className: "items-center justify-center text-white text-lg truncate" }]} className='flex flex-row w-96 justify-center text-wrap' />

                    </div>

                    {/* <div className="flex items-center gap-3">

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

                    </div> */}

                    <div className="bg-[#47c480] w-full h-12 inline-flex justify-center items-center rounded-2xl py-2 z-100">
                        <a href="https://teenlancer.funngro.com/pages/login/" target="_blank" className="inline-flex z-100 gap-3 bg-[#47c480] justify-center items-center">
                            <div className='text-white z-100'>Hire Teenlancer</div>
                            <Image src='/rightarrow.svg' className='invert z-100' height={24} width={24} alt='right arrow'/>
                        </a>
                    </div>

                    <div className="chips-component flex text-white gap-4">
                        <div className="text-size-small">Popular:</div>
                        <div>
                            <div role="list" className="flex gap-3">
                                <div role="listitem" className="border-[1px] border-white rounded-md px-3"><a href="https://teenlancer.funngro.com/pages/register/" className="chips">Blogs</a>
                                </div>
                                <div role="listitem" className="border-[1px] border-white rounded-md  px-3"><a href="https://teenlancer.funngro.com/pages/register/" className="chips">Social Media</a>
                                </div>
                                <div role="listitem" className="border-[1px] border-white rounded-md  px-3"><a href="https://teenlancer.funngro.com/pages/register/" className="chips">Video Creation</a>
                                </div>
                                <div role="listitem" className="border-[1px] border-white rounded-md px-3"><a href="https://teenlancer.funngro.com/pages/register/" className="chips">Sales</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="header-container-right-wrapper flex items-center justify-center">
                    <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, 44vw" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro.png 586w" alt="Funngro App" className="flex items-center justify-center w-[386px] h-[382px] sm:w-[512px] sm:h-[507px] max-w-[512px] max-h-[507px]" />

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


                <div className="flex mt-96">

                    <div className="member-review-section-header margin-bottom margin-large text-white">
                        <div className="flex flex-col justify-start items-center p-4">
                            <div className="mb-2 m-3"><h2 className="text-color-light-blue">Happy Funngro Members</h2>
                            </div><p className="text-color-grey">Thousands of your friends are on Funngro and their lives are changing for better. Read on for real stories</p>
                        </div>
                    </div>

                    <div className="testimonial-slider w-slider text-white flex relative" aria-label="carousel">
                        <div className="testomonials-mask w-slider-mask flex w-[966px] overflow-hidden gap-3" id="w-slider-mask-2">
                            {
                                CardMemberReviewData.map(item => {
                                    return <div key={item.id} className='Member-review-card transition-all duration-150'>
                                        <CardMemberReview imageUrl={item.imageUrl} name={item.name} category={item.category} review={item.review} />
                                    </div>
                                })
                            }
                        </div>


                        <div className="left-arrow w-slider-arrow-left absolute top-[340px] left-[45%]" role="button" tabindex="0" onClick={() => showSlidesTranslatePrev(memberReviewCardNumber, setMemberReviewCardNumber, 'Member-review-card')}>
                            <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6390183d71afe76c7e7bc767_Vector%2058.svg" loading="lazy" alt="Arrow Left" width={40} height={16} className="custom-arrow-icon" />
                        </div>
                        <div className="right-arrow w-slider-arrow-right absolute top-[348px] left-[50%]" role="button" tabindex="0" onClick={() => showSlidesTranslateNext(memberReviewCardNumber, setMemberReviewCardNumber, 'Member-review-card')}>
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


                <div className="interests-grid bg-[#1f2e40] flex flex-wrap gap-4 mt-16 items-center justify-center">

                    {
                        DataProjectCategory.map(item => {
                            return <div className={`bg-transparent flip-card h-[234px] w-[224px] perspective-1000 m-2`}>

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
                        <h2 className="text-white">Talent for all your needs</h2>
                        <p className="text-white">Thousands of Talented Teenagers for all your business needs. Register your interest and start working with smartest talent around.</p>
                    </div>

                    {
                        DataProjectCategorySecond.map(item => {
                            return <div className={`bg-transparent flip-card h-[234px] w-[224px] perspective-1000 m-2`}>

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


                <div className="trusted-by-section flex justify-around flex-wrap">
                    <CardContainer children={
                        <div className="partners-box _1 flex flex-col m-4 border-2 relative border-white w-[395px] h-[578px] justify-start items-center z-10 rounded-lg">
                            <div className="bg-[#40424c] w-full flex justify-center h-[65px] p-5"><h3 className="text-white text-2xl">Companies</h3>
                            </div>
                            <div className="partner-logo-list flex flex-col justify-start gap-3 mt-3 z-10">
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e2e5824e05e043b_CarDekho%20logo.png" loading="lazy" sizes="(max-width: 479px) 100vw, 165.3125px" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e2e5824e05e043b_CarDekho%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e2e5824e05e043b_CarDekho%20logo-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e2e5824e05e043b_CarDekho%20logo-p-1080.png 1080w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e2e5824e05e043b_CarDekho%20logo-p-1600.png 1600w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e2e5824e05e043b_CarDekho%20logo.png 2116w" alt="Company name" className="partner-logo" width={165} height={40} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fc56174a8505b2556_Enerzy%20Solar%20logo.png" loading="lazy" sizes="106.09375px" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fc56174a8505b2556_Enerzy%20Solar%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fc56174a8505b2556_Enerzy%20Solar%20logo-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fc56174a8505b2556_Enerzy%20Solar%20logo-p-1080.png 1080w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fc56174a8505b2556_Enerzy%20Solar%20logo.png 1358w" alt="Company name" className="partner-logo" width={165} height={40} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c231131a1e105d55f450_Mobigic%20logo.png" loading="lazy" alt="Company name" className="partner-logo" width={165} height={30} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909f302d2432498d0a93_Tarakki%20logo.png" loading="lazy" sizes="107.8125px" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909f302d2432498d0a93_Tarakki%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909f302d2432498d0a93_Tarakki%20logo-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909f302d2432498d0a93_Tarakki%20logo.png 1380w" alt="Company name" className="partner-logo" width={165} height={40} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e236fced422c7e558_StockPe%20Logo.png" loading="lazy" alt="Company name" className="partner-logo"
                                    width={165} height={40} />
                            </div>
                            <svg className="absolute bottom-0 -right-56 bg-transparent z-0 text-[#40424c]" viewBox="0 0 439 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clipRule="evenodd" d="M6.388 0.564883C5.227 1.05488 3.314 2.67988 2.138 4.17488C0.0079999 6.88188 0 7.11889 0 66.7109C0 107.591 0.344 127.283 1.085 128.911C1.682 130.221 3.439 132.042 4.99 132.958C7.581 134.488 18.284 134.623 137.357 134.623C228.375 134.623 267.614 134.3 269.288 133.538C274.506 131.16 275 128.675 275 104.784C275 92.6669 274.57 81.6219 274.045 80.2399C273.519 78.8579 272.057 77.0529 270.795 76.2279C268.724 74.8739 16.952 1.08988 11 0.0928829C9.625 -0.137117 7.55 0.0748827 6.388 0.564883Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    }
                    />

                    <CardContainer children={
                        <div className="partners-box _2 flex flex-col m-4 border-2 border-white w-[395px] h-[578px] justify-start items-center relative z-10 rounded-lg">
                            <div className="partners-heading-wrapper _2 bg-[#40424c] w-full flex justify-center h-[65px] p-5">
                                <h3 className="text-white text-2xl">Partners</h3>

                            </div>
                            <div className="partner-logo-list flex flex-col justify-start gap-4 mt-4 z-10">
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/64ae396c0046a0f0dbbc6f08_Mask%20group.png" loading="lazy" alt="Partner name" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/64ae396c0046a0f0dbbc6f08_Mask%20group-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/64ae396c0046a0f0dbbc6f08_Mask%20group-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/64ae396c0046a0f0dbbc6f08_Mask%20group-p-1080.png 1080w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/64ae396c0046a0f0dbbc6f08_Mask%20group.png 2882w" sizes="123px" className="partner" height={40} width={180} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1974420c03b964d4513_AIC%20Pinnacle%20logo.png" loading="lazy" sizes="(max-width: 479px) 100vw, 148.4375px" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1974420c03b964d4513_AIC%20Pinnacle%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1974420c03b964d4513_AIC%20Pinnacle%20logo.png 1900w" alt="Partner name" className="partner-logo" height={40} width={180} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1985da398a524766945_Qapita%20logo.png" loading="lazy" sizes="116.40625px" srcSeimaget="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1985da398a524766945_Qapita%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1985da398a524766945_Qapita%20logo-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1985da398a524766945_Qapita%20logo-p-1080.png 1080w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1985da398a524766945_Qapita%20logo.png 1490w" alt="Partner name" className="partner-logo" height={40} width={180} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c197453e183c74317857_Headstart%20logo.png" loading="lazy" sizes="127.109375px" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c197453e183c74317857_Headstart%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c197453e183c74317857_Headstart%20logo.png 1627w" alt="Partner name" className="partner-logo" height={40} width={180} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1984af86db14b5e888c_AIC%20logo.png" loading="lazy" sizes="(max-width: 479px) 100vw, 179.53125px" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1984af86db14b5e888c_AIC%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1984af86db14b5e888c_AIC%20logo-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1984af86db14b5e888c_AIC%20logo.png 2298w" alt="Partner name" className="partner-logo" height={40} width={180} />
                            </div>
                            <svg className="absolute bottom-0 -right-56 bg-transparent z-0 text-[#40424c]" viewBox="0 0 439 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clipRule="evenodd" d="M6.388 0.564883C5.227 1.05488 3.314 2.67988 2.138 4.17488C0.0079999 6.88188 0 7.11889 0 66.7109C0 107.591 0.344 127.283 1.085 128.911C1.682 130.221 3.439 132.042 4.99 132.958C7.581 134.488 18.284 134.623 137.357 134.623C228.375 134.623 267.614 134.3 269.288 133.538C274.506 131.16 275 128.675 275 104.784C275 92.6669 274.57 81.6219 274.045 80.2399C273.519 78.8579 272.057 77.0529 270.795 76.2279C268.724 74.8739 16.952 1.08988 11 0.0928829C9.625 -0.137117 7.55 0.0748827 6.388 0.564883Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    }
                    />

                    <CardContainer children={
                        <div className="partners-box _3 flex flex-col m-4 border-2 border-white w-[395px] h-[578px] justify-start items-center relative">
                            <div className="bg-[#40424c] w-full flex justify-center h-[65px] p-5">
                                <h3 className="text-white text-2xl">Companies</h3>
                            </div>
                            <div className="partner-logo-list flex flex-col gap-3 mt-4 z-10">
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fd142ea4d0d188166_LegacyNext%20logo.png" loading="lazy" sizes="(max-width: 479px) 100vw, 200px" alt="Company name" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fd142ea4d0d188166_LegacyNext%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fd142ea4d0d188166_LegacyNext%20logo-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fd142ea4d0d188166_LegacyNext%20logo-p-1080.png 1080w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fd142ea4d0d188166_LegacyNext%20logo-p-1600.png 1600w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fd142ea4d0d188166_LegacyNext%20logo-p-2000.png 2000w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fd142ea4d0d188166_LegacyNext%20logo-p-2600.png 2600w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fd142ea4d0d188166_LegacyNext%20logo-p-3200.png 3200w" className="partner-logo" width={200} height={40} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e4eeebe97628bde62_Two%2099%20Logo.png" loading="lazy" sizes="123.984375px" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e4eeebe97628bde62_Two%2099%20Logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e4eeebe97628bde62_Two%2099%20Logo.png 1587w" alt="Company name" className="partner-logo" width={200} height={40} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0ce0a8ef5285a045_MOnech%20logo.png" loading="lazy" sizes="40px" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0ce0a8ef5285a045_MOnech%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0ce0a8ef5285a045_MOnech%20logo.png 512w" alt="Company name" className="partner-logo" width={200} height={40} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e05723157cb10f6_Eco%20365%20Logo.png" loading="lazy" alt="Company name" className="partner-logo" width={200} height={40} />
                                <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909ee1a3895ee3da471b_Grow%20Partner%20logo.png" loading="lazy" sizes="(max-width: 479px) 100vw, 200px" alt="Company name" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909ee1a3895ee3da471b_Grow%20Partner%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909ee1a3895ee3da471b_Grow%20Partner%20logo-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909ee1a3895ee3da471b_Grow%20Partner%20logo-p-1080.png 1080w" className="partner-logo" width={200} height={40} />
                            </div>
                            <svg className="absolute bottom-0 -right-56 bg-transparent z-0 text-[#40424c]" viewBox="0 0 439 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clipRule="evenodd" d="M6.388 0.564883C5.227 1.05488 3.314 2.67988 2.138 4.17488C0.0079999 6.88188 0 7.11889 0 66.7109C0 107.591 0.344 127.283 1.085 128.911C1.682 130.221 3.439 132.042 4.99 132.958C7.581 134.488 18.284 134.623 137.357 134.623C228.375 134.623 267.614 134.3 269.288 133.538C274.506 131.16 275 128.675 275 104.784C275 92.6669 274.57 81.6219 274.045 80.2399C273.519 78.8579 272.057 77.0529 270.795 76.2279C268.724 74.8739 16.952 1.08988 11 0.0928829C9.625 -0.137117 7.55 0.0748827 6.388 0.564883Z" fill="currentColor"></path>
                            </svg>

                        </div>
                    }
                    />
                </div>

                <div className='flex flex-col why-hire-teenagers-section text-white mt-20 px-5 py-2'>
                    <h1 className='flex justify-center text-3xl'>
                        Why work with Teens
                    </h1>
                    <p>
                        Teenagers are the smarter generations, more clued in to your customer mindset, not spoilt by years of experience hence being cost effective delivery of high quality of work.
                    </p>
                    <div className='p-10 flex flex-col justify-between '>
                        <div className='mb-10'>
                            <h3>
                                Innovation

                            </h3>
                            <p>
                                No longer worry about using the same old ideas. Get innovative thinking, processes and style of working. Helps companies grow rapidly with timely project delivery.
                            </p>
                        </div>

                        <div>
                            <h3>
                                Cost effective
                            </h3>
                            <p>
                                Get your work done significantly lower cost, save as much as 50% on cost .
                                * Help the next generation the way someone helped you
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className="bg-[#47c480] w-52 h-12 inline-flex justify-center items-center rounded-2xl mx-5 py-2">
                            <a href="https://teenlancer.funngro.com/login/?returnUrl=%2Fpages%2Fregister%2F" target="_blank" className="inline-flex gap-3 bg-[#47c480] justify-center items-center">
                                <div className='text-white'>Company Login</div>
                                <Image src='/rightarrow.svg' className='invert' height={24} width={24} alt='right arrow'/>
                            </a>
                        </div>
                        <div className="bg-light-black w-52 h-12 inline-flex justify-center items-center rounded-2xl mx-5 py-2 border-2 border-white">
                            <a href="https://api.whatsapp.com/send/?phone=918828410412&text&type=phone_number&app_absent=0" target="_blank" className="inline-flex gap-3 bg-light-black justify-center items-center">
                                <div className='text-white'>Talk to us</div>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="featured-in-header margin-bottom margin-large mt-48">
                    <div className="text-align-center">
                        <div className="margin-bottom margin-small">
                            <h2 className=" text-white flex justify-center">We are Featured in</h2>
                            <p className="text-color-grey text-white p-4">The world is talking about Funngro, check out what everyone is saying</p>
                        </div>
                    </div>
                </div>


                <div data-delay="4000" data-animation="slide" className="featured-in-slider w-slider mt-10 relative">
                    <div className="mask w-slider-mask flex gap-3 justify-around w-[1233px] overflow-hidden mx-5" id="w-slider-mask-0">

                        <div className="featured-in-slide w-slide transition-all duration-[0.5s]" aria-label="1 of 7">
                            <a href="https://businessnewsweek.in/business/teens-mean-business-funngro-offers-real-world-work-experience-to-teenagers-through-its-revolutionary-platform/" target="_blank" className="w-inline-block" tabindex="-1" aria-hidden="true">
                                <Image sizes="(max-width: 479px) 100vw, (max-width: 767px) 15vw, (max-width: 991px) 96px, 8vw" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778e6c4c837fc2ef89c_Business%20News%20week%20new%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778e6c4c837fc2ef89c_Business%20News%20week%20new%20logo.png 512w" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778e6c4c837fc2ef89c_Business%20News%20week%20new%20logo.png" loading="lazy" alt="Teens financial empowerment, Learning with earning, Prepaid card, Freelance, Experience with real companies, project based jobs" className="featured-in-image" aria-hidden="true" width={84} height={84} />
                            </a>
                        </div>

                        <div className="featured-in-slide w-slide transition-all duration-[0.5s]" aria-label="2 of 7">
                            <a href="https://www.fmlive.in/teens-mean-business-funngro-offers-real-world-work-experience-to-teenagers-through-its-revolutionary-platform/" target="_blank" className="w-inline-block" tabindex="-1" aria-hidden="true">
                                <Image alt="image feature" loading="lazy" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a029eed4fdce11c2d34e80_FM%20live%20logo.png" className="featured-in-image" aria-hidden="true" width={84} height={84} />
                            </a>
                        </div>

                        <div className="featured-in-slide w-slide transition-all duration-[0.5s]" aria-label="3 of 7">
                            <a href="https://ibsintelligence.com/ibsi-news/funngro-launches-money-management-program-for-teenagers/" target="_blank" className="w-inline-block" tabindex="-1" aria-hidden="true">
                                <Image sizes="(max-width: 479px) 100vw, (max-width: 767px) 15vw, (max-width: 991px) 96px, 8vw" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778a3f4b8074b9bf839_IBS%20Intelligence%20new%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778a3f4b8074b9bf839_IBS%20Intelligence%20new%20logo.png 512w" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778a3f4b8074b9bf839_IBS%20Intelligence%20new%20logo.png" loading="lazy" alt="Teens financial empowerment, Learning with earning, Prepaid card, Freelance, Experience with real companies, project based jobs" className="featured-in-image" aria-hidden="true" width={84} height={84} />
                            </a>
                        </div>

                        <div className="featured-in-slide w-slide transition-all duration-[0.5s]" aria-label="4 of 7">
                            <a href="https://timesofindia.indiatimes.com/blogs/voices/importance-of-financial-literacy-for-teens/" target="_blank" className="w-inline-block" tabindex="-1" aria-hidden="true">
                                <Image alt="featured in image" loading="lazy" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a02a16a363596ec9c5eefb_Times%20of%20India%20logo.png" className="featured-in-image" aria-hidden="true" width={84} height={84} /></a>
                        </div>

                        <div className="featured-in-slide w-slide transition-all duration-[0.5s]" aria-label="5 of 7" >
                            <a href="https://thedailybrunch.com/2022/07/28/teens-mean-business-funngro-offers-real-world-work-experience-to-teenagers-through-its-revolutionary-platform/" target="_blank" className="w-inline-block">
                                <Image sizes="(max-width: 479px) 100vw, (max-width: 767px) 15vw, (max-width: 991px) 96px, 8vw" srcSet="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c7787f63ad6273e07ba9_The%20Daily%20Brunch%20new%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c7787f63ad6273e07ba9_The%20Daily%20Brunch%20new%20logo.png 512w" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c7787f63ad6273e07ba9_The%20Daily%20Brunch%20new%20logo.png" loading="lazy" alt="Teens financial empowerment, Learning with earning, Prepaid card, Freelance, Experience with real companies, project based jobs" className="featured-in-image" width={84} height={84} />
                            </a>
                        </div>

                        <div className="featured-in-slide w-slide transition-all duration-[0.5s]" aria-label="6 of 7">
                            <a href="https://entrackr.com/2022/12/funngro-helps-teens-with-essential-financial-education-valuable-work-experience/" target="_blank" className="w-inline-block" tabindex="-1" aria-hidden="true">
                                <Image alt="Teens financial empowerment, Learning with earning, Prepaid card, Freelance, Experience with real companies, project based jobs" loading="lazy" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a029286e97ee36926d7bbf_Entracker.png" className="featured-in-image" aria-hidden="true" width={84} height={84} />
                            </a>
                        </div>

                        <div className="featured-in-slide w-slide transition-all duration-[0.5s]" aria-label="7 of 7">
                            <a href="https://thedailybrunch.com/2022/07/28/teens-mean-business-funngro-offers-real-world-work-experience-to-teenagers-through-its-revolutionary-platform/" target="_blank" className="w-inline-block" tabindex="-1" aria-hidden="true">
                                <Image alt="featured in image" loading="lazy" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a0293fe9b4746ced4246a3_Mda.png" className="featured-in-image" aria-hidden="true" width={84} height={84} />
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="left-arrow w-slider-arrow-left absolute left-[45%] top-[110px]" role="button" tabindex="0" onClick={() => showSlidesTranslatePrev(featuredInSlideNumber, setFeaturedInSlideNumber, 'featured-in-slide')}>
                            <Image alt="Arrow Left" loading="lazy" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6390183d71afe76c7e7bc767_Vector%2058.svg" width={40} height={16} className="custom-arrow-icon" />
                        </div>

                        <div className="right-arrow w-slider-arrow-right absolute top-[117px] left-[52%]" role="button" tabindex="0" onClick={() => showSlidesTranslateNext(featuredInSlideNumber, setFeaturedInSlideNumber, 'featured-in-slide')}>
                            <Image alt="Arrow Right" loading="lazy" src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6390183d1279b312ac061558_Vector%2057.svg" width={40} height={16} className="custom-arrow-icon" />
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


                <div className="earnings-steps-header margin-bottom margin-large mt-48 px-5">

                    <div className="text-align-center flex flex-col gap-3">

                        <div className="margin-bottom margin-small"><h2 className="text-color-light-blue text-white flex justify-center text-3xl">Working with Teenagers
                        </h2>

                        </div>
                        <p className="text-color-grey text-white">Simple steps to start working with Talented Teenagers</p>
                    </div>
                </div>


                <div className="process-wrapper-earning-steps flex mt-10 relative px-5 mx-3">
                    <div className="absolute top-[49px] z-0 left-[170px]">
                        <svg width="100%" height="2" viewBox="0 0 937 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 1H936.5" stroke="#07AB67" stroke-width="2" stroke-dasharray="7 7"></path>
                        </svg>
                    </div>
                    <div className="process-line mobile w-embed m-4 hidden absolute">
                        <svg width="2" height="100%" viewBox="0 0 2 3000" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 3000L1 1.14441e-05" stroke="#07AB67" stroke-width="2" stroke-dasharray="7 7"></path>
                        </svg>
                    </div>
                    <div className="div-block flex flex-col items-center gap-3 z-10 min-w-48">
                        <div className="process-icon w-embed">
                            <Image src="/OneCircle.svg" alt="earning steps images" width={98} height={98} />
                        </div>
                        <div>
                            <h3 className="text-white flex justify-center">Register</h3>
                            <p className="text-color-grey text-white">Register on Funngro</p>
                        </div>
                    </div>
                    <div className="process-arrow w-embed flex flex-col justify-center w-[28px] h-[98px]" >
                        <Image src="/RightArrow.svg" alt="earning steps images" width={13} height={26} />
                    </div>
                    <div className="div-block flex flex-col items-center gap-3 z-10">
                        <div className="process-icon w-embed">
                            <Image src="/TwoCircle.svg" alt="earning steps images" width={98} height={98} />
                        </div>
                        <div>
                            <h3 className="text-white flex justify-center">Add Projects</h3>
                            <p className="text-white">Add projects in a simple process that will take no more than 2 min</p>
                        </div>
                    </div>
                    <div className="process-arrow w-embed w-[28px] h-[98px] flex flex-col justify-center">
                        <Image src="/RightArrow.svg" alt="earning steps images" width={13} height={26} />
                    </div>
                    <div className="div-block flex flex-col items-center gap-3 z-10">
                        <div className="process-icon w-embed">
                            <Image src="/ThreeCircle.svg" alt="earning steps images" width={98} height={98} />
                        </div>
                        <div><h3 className="text-white flex justify-center">Get Applications</h3>
                            <p className="text-white">Funngro will share curated list of Teenagers interested in your project</p>
                        </div>
                    </div>
                    <div className="process-arrow w-embed w-[28px] h-[98px] flex flex-col justify-center">
                        <Image src="/RightArrow.svg" alt="earning steps images" width={13} height={26} />
                    </div>
                    <div className="div-block flex flex-col items-center gap-3 z-10">
                        <div className="process-icon w-embed">
                            <Image src="/FourCircle.svg" alt="earning steps images" width={98} height={98} />
                        </div>
                        <div><h3 className="text-white flex justify-center">Select Teens</h3>
                            <p className="text-white">Review profiles, past work, experience and select Teenagers that fits your work</p>
                        </div>
                    </div>
                    <div className="process-arrow w-embed w-[28px] h-[98px] flex flex-col justify-center">
                        <Image src="/RightArrow.svg" alt="earning steps images" width={13} height={26} />
                    </div>
                    <div className="div-block flex flex-col items-center gap-3 z-10">
                        <div className="process-icon w-embed">
                            <Image src="/FiveCircle.svg" alt="earning steps images" width={98} height={98} />
                        </div>
                        <div><h3 className="text-white flex justify-center">Project Delivered</h3>
                            <p className="text-white">On Successful completion, release payment to Teenager and post your next project</p>
                        </div>
                    </div>
                </div>


                <div className="faq-section-header margin-bottom margin-large mt-48">
                    <div className="text-align-center">
                        <div className="margin-bottom margin-small text-white"><h2 className="text-color-light-blue text-3xl flex justify-center">Frequently Asked Questions</h2>
                        </div><p className="text-color-grey text-white p-6">Part of being successful is asking the right questions and listening to the answers</p>
                    </div>
                </div>


                <div className="w-layout-grid faq6_component text-white flex gap-5 p-4">

                    <div className="fs_accordion-1_component flex flex-col w-[677px] h-[382px] gap-5">
                        <div className="fs_accordion-1_item">
                            <div aria-expanded="false" tabindex="0" role="button" className="fs_accordion-1_header rounded-lg h-[60px] py-[22px] px-[10px] flex bg-[#585e76] justify-between items-center">
                                <div className="fs_accordion-1_label">How do we start working with Teenagers?

                                </div>
                                <div className="fs_accordion-1_arrow-wrapper" onClick={(event) => handleAccordionClick(event)}>

                                    <div className="faq6_icon w-embed">
                                        <Image src="/Plus.svg" alt="plus img" width={32} height={32} id="accordion-icon-1" className="invert" />
                                    </div>
                                </div>
                            </div>
                            <div aria-labelledby="accordion-header-1" id="fs_accordion-1_content" className="w-full h-0 transition-all duration-[0.5s] bg-[#364353]">
                                <div className="fs_accordion-1_body w-full h-full">
                                    <p className="fs_accordion-1_paragraph w-full h-full overflow-hidden">
                                        Login to Funngro, add project, select Teenager from our curated list and start working with smart and talented Teens
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="fs_accordion-2_item">
                            <div aria-expanded="false" tabindex="0" role="button" className="fs_accordion-2_header rounded-lg h-[60px] py-[22px] px-[10px] flex bg-[#585e76] justify-between items-center">
                                <div className="fs_accordion-1_label">How does Funngro help us in finding right talent?

                                </div>
                                <div className="fs_accordion-2_arrow-wrapper" onClick={(event) => handleAccordionClick(event)}>
                                    <div className="faq6_icon w-embed">
                                        <Image src="/Plus.svg" alt="plus img" width={32} height={32} id="accordion-icon-2" className="invert" />
                                    </div>
                                </div>
                            </div>
                            <div aria-labelledby="accordion-header-1" id="fs_accordion-2_content" className="w-full transition-all duration-[0.5s] h-0 bg-[#364353]">
                                <div className="fs_accordion-1_body w-full h-full">
                                    <p className="fs_accordion-1_paragraph w-full h-full overflow-hidden">From a pool of thousands of teenager we curate the list basis their experience, past work and commitment levels before we suggest potential candidates for your project. </p>
                                </div>
                            </div>
                        </div>
                        <div className="fs_accordion-3_item">
                            <div aria-expanded="false" tabindex="0" role="button" className="fs_accordion-3_header rounded-lg h-[60px] py-[22px] px-[10px] flex bg-[#585e76] justify-between items-center">
                                <div className="fs_accordion-1_label">Are there any legalities around working with Teens?

                                </div>
                                <div className="fs_accordion-3_arrow-wrapper" id="accordion-3" onClick={(event) => handleAccordionClick(event)}>
                                    <div className="faq6_icon w-embed">
                                        <Image src="/Plus.svg" alt="plus img" width={32} height={32} id="accordion-icon-3" className="invert" />
                                    </div>
                                </div>
                            </div>
                            <div aria-labelledby="accordion-header-1 hidden" id="fs_accordion-3_content" className="w-full h-0 transition-all duration-[0.5s] bg-[#364353]">
                                <div className="fs_accordion-1_body w-full h-full">
                                    <p className="fs_accordion-1_paragraph w-full h-full overflow-hidden">Yes, you can only work with Teens aged 14 and above. We do seek information regards age and parental approval before allowing Teens to apply to any of your projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="faq6_content flex flex-col bg-[#585e76] justify-around w-[508px] h-[301px] p-5 rounded-lg">
                        <div>Have a Question?

                        </div>
                        <div className="max-width-small text-4xl"><h3>Check out our answers to frequently asked questions</h3>
                        </div>
                        <a href="/faq" className="button is-icon w-inline-block flex gap-4 items-center justify-around bg-[#47c480] rounded-3xl w-[200px] h-[50px]">
                            <div>View More FAQs
                            </div>
                            <div className="icon-1x1-small w-embed">
                                <Image src="/rightarrow.svg" alt="right arrow" width={16} height={17} className="invert" />
                            </div>
                        </a>
                    </div>
                </div>




            </div>
        </main>
    )
}

export default page
