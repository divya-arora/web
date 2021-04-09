import React, { Component, Fragment } from "react";
import ScrollToTop from "react-scroll-up";
import Particles from "react-particles-js";
import { FaReact, FaSass } from "react-icons/fa";
import {
  FiSmartphone,
  FiCode,
  FiDownload,
  FiCommand,
  FiHeadphones,
  FiBold,
  FiChevronUp
} from "react-icons/fi";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import HeaderThree from "../component/header/HeaderThree";
import BlogContent from "../elements/blog/BlogContent";
import ServiceList from "../elements/service/ServiceList";

const featureList = [
  {
    url: "https://ideafit.com/",
    title: "Front-End Architect",
    imageUrl: "idea.png",
    subtitle: [
      <li>Work with Data analyst in MYSQL database</li>,
      <li>Design UX/Ui for landing pages</li>,
      <li>
        Bootstrap/ Front-End Development knowledge employed on whatever task
      </li>,
      <li>Redmine Agile technology for workflow & code reviews</li>
    ]
  },
  {
    url: "https://www.knowcap.io/",
    imageUrl: "knowcap.jpg",
    title: "Full-Stack Engineer",
    subtitle: [
      <li>Improve Alexa rank to top 100k</li>,
      <li>Make Ubitiquious Modular MERN-stack apps</li>,
      <li>Work in Trello Agile environment for Code reviews</li>,
      <li>Consumption and utilization of numerous APIs</li>
    ]
  },
  {
    url: "https://www.amegoev.com/",
    imageUrl: "amego.png",
    title: "Canada's Best/Most Trusted E-bike Retailer",
    subtitle: [
      <li>LightSpeed CMS</li>,
      <li>Scaled From Shared Hosting Originally</li>,
      <li>Re-design UX/UI with the Liquid framework for HTML/CSS/JS</li>,
      <li>Had revenue skyrocket to 166k in May & June</li>,
      <li>Turnover was more than 600k for Q1 + Q2 of 2019</li>
    ]
  },
  {
    url: "https://www.anataarmy.com/",
    imageUrl: "army.png",
    title:
      "Designer : Offical Website : AnataArmy -- Ultimate Body Defender Mobile Title",
    subtitle: [
      <li>Design Website from Scratch to client's specifications</li>,
      <li>Static HTML/SCSS/JS/JQUERY site</li>,
      <li>Lead designer/Creative director of assets and User-Interface</li>
    ]
  },
  {
    url: "https://github.com/MatthewDuke1/Native_Running_App",
    imageUrl: "rooks.png",
    title: "Rooks : React Native (v --Stable 0.59) + Node.js App",
    subtitle: [
      <li>React Front-End and Node.js/ MongoDb Back-End</li>,
      <li>
        As a former Elite Athlete, I've designed an app geared towards
        beginners.
      </li>,
      <li>
        An algorithim of VO <superscript>2</superscript> MAX will be calculated
        and spit out the first four week schedule
      </li>,
      <li>
        Utilizing the new stable release of React Native, this full-stack
        application which will include GPS, scheduling and an online community
        for beginners
      </li>
    ]
  }
];

const singleDemo = [
  {
    url: "https://github.com/MatthewDuke1/Travel-Search-Engine-",
    imageUrl: "travel.png",
    title: "Travel Search Engine",
    description:
      "Vanilla Javascript + FourSquare API + APIXU = Kayak-like Search Engine",
    label: ""
  },
  {
    url: "https://github.com/MatthewDuke1/Yelp-API-",
    imageUrl: "yelp.png",
    title: "Yelp API",
    description:
      "Fully Articulated Yelp API. Search Businesses, gather ratings and more!",
    label: ""
  },
  {
    url: "https://github.com/MatthewDuke1/knuth_scramble_fun",
    imageUrl: "shuffle.png",
    title: "Knuth Scramble Fun",
    description:
      "Knuth Shuffle (also knowth as Fisher-Yates Shuffle) Innovated in a clever manner",
    label: ""
  },
  {
    url: "https://github.com/MatthewDuke1/Node.jsFLIX",
    imageUrl: "netflix.jpg",
    title: "Node.jsFLIX",
    description:
      "Did you know Netflix uses Node.js in their architecture? Well, this is example of what one of their modules might look like.",
    label: ""
  },
  {
    url: "https://www.samuelduke.com/",
    imageUrl: "portfolio.png",
    title: "Portfolio Website",
    description:
      "Designed the website of Stanford Mechanical Engineer, Samuel Duke",
    label: ""
  },
  {
    url: "https://github.com/MatthewDuke1/Story_Linting",
    imageUrl: "linting.jpg",
    title: "Python Computational Linguistics",
    description:
      "Simple story linting utilizing Python to find semantic patterns in speech",
    label: ""
  },

  {
    url: "https://github.com/MatthewDuke1/Emergent-Neural-Network-Concept",
    imageUrl: "nn.jpg",
    title: "Emergent Neural Network",
    description:
      "Vanilla Javascript + FourSquare API + APIXU = Kayak-like Search Engine",
    label: ""
  }
];

class Demo extends Component {
  render() {
    const PostList = BlogContent.slice(0, 3);

    return (
      <Fragment>
        <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
        {/* Start Banner Area  */}
        <div
          className="prv-banner-wrapper"
          style={{
            backgroundImage: `url("/assets/images/banner_bg.jpeg")`
          }}
        >
          <div className="container-fluid">
            <div className="plr--120">
              <div className="row">
                <div className="col-lg-8 col-xl-5">
                  <div className="inner">
                    <p className="title" style={{ fontSize: "3rem" }}>
                      Matthew J. Duke
                    </p>
                    <h4 style={{ marginBottom: "2rem" }}>
                      Web/ Software Dev/ Engineer
                    </h4>

                    <div className="purshase-btn">
                      <a href="/" className="rn-button-style--2 btn-solid">
                        Some Action
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fullscreen empty-div gradient-overlay"></div>
        {/* End Banner Area  */}

        {/* Start Preview Main Wrapper */}
        <div className="main-wrapper" id="demo">
          {/* Start Main Demo Area  */}
          <div className="home-demo-area bg_color--1 ptb--120">
            <div className="wrapper plr--120">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center pb--30">
                    <h2 className="theme-gradient">Projects</h2>
                  </div>
                </div>
              </div>
              <Tabs>
                <div className="row text-center" style={{ display: "none" }}>
                  <div className="col-lg-12">
                    <div className="tablist-inner">
                      <TabList className="pv-tab-button text-center">
                        <Tab>
                          <span>All Demo</span>
                        </Tab>
                      </TabList>
                    </div>
                  </div>
                </div>

                <TabPanel className="row">
                  {singleDemo.map((value, index) => (
                    // Start Single Demo
                    <div
                      key={index}
                      className="col-lg-4 col-md-6 col-sm-6 col-12"
                    >
                      <div className="single-demo">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`${value.url} `}
                        >
                          <img
                            src={`/assets/images/preview/${value.imageUrl}`}
                            alt="Images"
                            style={{maxHeight: '20rem'}}
                          />
                          <h3 className="title">{value.title}</h3>
                          <p className="info">{value.description}</p>
                          {value.label ? (
                            <div className="label-new">
                              <span>{value.label}</span>
                            </div>
                          ) : (
                            ""
                          )}
                        </a>
                      </div>
                    </div>
                    // End Single Demo
                  ))}
                </TabPanel>
              </Tabs>
            </div>
          </div>
          {/* End Main Demo Area  */}

          {/* Start Blog Area */}
          <div
            className="rn-blog-area pt--120 pb--80 bg_color--1"
            id="articles"
          >
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3">
                    <h2>Articles</h2>
                  </div>
                </div>
              </div>
              <div className="row mt--60">
                {PostList.map((value, i) => (
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <div className="blog blog-style--1 text-center">
                      <div className="thumbnail">
                        <a href="/blog-details">
                          <img
                            className="w-100"
                            src={`/assets/images/blog/blog-${value.images}.jpg`}
                            alt="Blog Images"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <p className="blogtype">{value.category}</p>
                        <h4 className="title">
                          <a href="/blog-details">{value.title}</a>
                        </h4>
                        <div className="blog-btn">
                          <a className="rn-btn text-white" href="/blog-details">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="view-more-btn mt--20 text-center">
                    <a className="rn-button-style--2 btn-solid" href="/blog">
                      <span>View More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Blog Area */}

          {/* Start Service Area  */}
          <div className="service-area pt--120 pb--50 bg_color--1">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30">
                    <h2 className="title">Skills</h2>
                  </div>
                </div>
              </div>
              <ServiceList
                item="6"
                column="col-lg-4 col-md-6 col-sm-6 col-12 text-center"
              />
            </div>
          </div>
          {/* End Service Area  */}

          {/* Start Feature Area  */}
          <div className="prv-feature service-area bg_color--4 ptb--120">
            <div className="wrapper plr--120">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center pb--30">
                    <h2 className="text-white">Past Work</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Start Single Feature  */}
                {featureList.map((value, i) => (
                  <div
                    className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12"
                    key={i}
                    
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`${value.url} `}
                    >
                    <div className="service service__style--2">
                      <div className="icon">{value.icon}
                        <img src={`/assets/images/preview/${value.imageUrl}`} alt="tech" />
                      </div>
                      <div className="content">
                        <h3 className="title">{value.title}</h3>
                        <p className="subtitle">{value.subtitle}</p>
                        {/* {value.subtitle.map((s,j) => (
                          <li key={j}>{s}</li>
                        ))} */}
                      </div>
                    </div>
                    </a>
                  </div>
                ))}
                {/* End Single Feature  */}
              </div>
            </div>
          </div>
          {/* End Feature Area  */}

          {/* Start Footer Area  */}
          <footer className="call-to-action-wrapper text-white-wrapper call-to-action ptb--120 with-particles">
            <div className="frame-layout__particles">
              <Particles
                params={{
                  particles: {
                    number: {
                      value: 50
                    },
                    size: {
                      value: 4
                    }
                  },
                  interactivity: {
                    events: {
                      onhover: {
                        enable: true,
                        mode: "repulse"
                      }
                    }
                  }
                }}
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="inner text-center">
                    
                    <h2>Contact Me Below</h2>
                    <a className="rn-button-style--2" href="mailto:matthewduke0@gmail.com">
                      <span>Contact Me</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* End Footer Area  */}
        </div>
        {/* End Preview Main Wrapper */}
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Fragment>
    );
  }
}
export default Demo;
