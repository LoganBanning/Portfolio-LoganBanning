import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my World',
        description: "",
        buttonText: '',
        buttonLink: ''
    }
]
const PortfolioLanding = () => {
    let title = 'About Me',
        description = "I am a Full-Stack Web Developer who has recently graduated from Devmountain.  Before becoming a Web Developer, I worked in a few different sales roles. Being in that competitive environment, I knew I had to show up each day and work hard. I also love being able to be creative in making websites or solving any problems that come up. I'm a willing worker that enjoys continually learning new skills.";
    return (
        <div className="active-dark">
            <Helmet pageTitle="Portfolio Landing" />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image headshot-logan.jpg" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">Hi, I’m Logan Banning <br/>
                                            <TextLoop>
                                                <span>React</span>
                                                <span>JavaScript</span>
                                                <span>Node.js</span>
                                                <span>HTML & CSS</span>
                                                <span>SQL</span>
                                            </TextLoop>{" "}
                                            </h1>
                                            <h2>Full Stack Web Developer</h2>
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/bg/headshot-logan.jpg" alt="Picture of Logan Banning"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End About Area */}

            {/* Start Portfolio Area */}
            <div id="portfolio" className="fix">
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                        <h2 className="title">My Latest Projects</h2>
                                        <p>All projects were built with React and Node.js</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio Area */}
            
            {/* Start COntact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--1">
                    <ContactThree contactImages="/assets/images/bg/Logan-picture-AF.jpg" contactTitle="Hire Me." />
                </div>
            </div>
            {/* End COntact Area */}

            <FooterTwo />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
        </div>
    )
}

export default PortfolioLanding;
