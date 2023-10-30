import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Portfolio Page</title>
          <meta property="og:title" content="Portfolio Page" />
        </Head>
        <div data-role="Header" className="home-navbar-container">
          <div className="home-navbar">
            <span className="Card-Heading home-heading">Logo</span>
            <div className="home-links-container">
              <span className="home-link Navbar-Link">About</span>
              <span className="home-link1 Navbar-Link">Experience</span>
              <span className="home-link2 Navbar-Link">Portofolio</span>
              <span className="Navbar-Link">Contact</span>
            </div>
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="home-mobile-menu">
              <div className="home-container01">
                <span className="Card-Heading home-heading1">Logo</span>
                <div data-role="CloseMobileMenu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-links-container1">
                <span className="home-link4 Navbar-Link">About</span>
                <span className="home-link5 Navbar-Link">Experience</span>
                <span className="home-link6 Navbar-Link">Portofolio</span>
                <span className="Navbar-Link">Contact</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator"></div>
        <div className="home-section-separator1"></div>
        <div className="home-container02">
          <div className="home-hero">
            <div className="home-hero-text-container">
              <h1 className="home-heading2 Section-Heading">
                I help startups deliver the right message to their customers
              </h1>
              <span className="home-text Section-Text">
                <span>
                  c. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                  nulla. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.
                </span>
              </span>
              <div className="home-cta-btn-container">
                <button className="home-cta-btn Anchor button">
                  <span className="home-text02">MY WORK</span>
                </button>
                <button className="home-cta-btn1 button Anchor">
                  ABOUT ME
                </button>
              </div>
            </div>
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="home-image"
            />
          </div>
        </div>
        <div className="home-features">
          <div className="home-heading-container">
            <h2 className="home-text03 Section-Heading">Deliverables</h2>
            <span className="home-text04 Section-Text">
              Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </span>
          </div>
          <div className="home-cards-container">
            <div className="home-card">
              <div className="home-icon-container">
                <svg
                  viewBox="0 0 1170.2857142857142 1024"
                  className="home-icon04"
                >
                  <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM1097.143 164.571v248.571c0 16-19.429 24.571-31.429 12.571l-69.143-69.143-361.714 361.714c-7.429 7.429-18.857 7.429-26.286 0l-133.143-133.143-237.714 237.714-109.714-109.714 334.286-334.286c7.429-7.429 18.857-7.429 26.286 0l133.143 133.143 265.143-265.143-69.143-69.143c-12-12-3.429-31.429 12.571-31.429h248.571c10.286 0 18.286 8 18.286 18.286z"></path>
                </svg>
              </div>
              <div className="home-content-container">
                <span className="home-heading3 Card-Heading">Diagrams</span>
                <span className="home-text05 Card-Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className="home-card1">
              <div className="home-icon-container1">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M810 128q34 0 60 26t26 60v256h-214l44-172-172 44v-214h256zM726 726l-44-172h214v256q0 34-26 60t-60 26h-256v-214zM342 554l-44 172 172-44v214h-256q-34 0-60-26t-26-60v-256h214zM128 214q0-34 26-60t60-26h256v214l-172-44 44 172h-214v-256z"></path>
                </svg>
              </div>
              <div className="home-content-container1">
                <span className="home-heading4 Card-Heading">Wireframes</span>
                <span className="home-text06 Card-Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className="home-card2">
              <div className="home-icon-container2">
                <svg
                  viewBox="0 0 865.7188571428571 1024"
                  className="home-icon08"
                >
                  <path d="M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"></path>
                </svg>
              </div>
              <div className="home-content-container2">
                <span className="home-heading5 Card-Heading">Design</span>
                <span className="home-text07 Card-Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-about">
          <div className="home-max-content-width-container">
            <div className="home-heading-container1">
              <h1 className="Section-Heading home-text08">
                Professional experience
              </h1>
            </div>
            <div className="home-content-container3">
              <div className="home-about-1">
                <div className="home-container03">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="home-text09 Card-Text">
                    Lorem ipsum dolor sit amet aulla quis sem at nibh elementum
                    imperdiet.
                  </span>
                </div>
                <div className="home-container04">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="home-text10 Card-Text">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  </span>
                </div>
                <div className="home-container05">
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="home-text11 Card-Text">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  </span>
                </div>
              </div>
              <div className="home-about-11">
                <div className="home-container06">
                  <svg viewBox="0 0 1024 1024" className="home-icon16">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="home-text12 Card-Text">
                    <span>
                      Lorem ipsum dolor sit amet aulla quis sem at nibh
                      elementum
                    </span>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
                <div className="home-container07">
                  <svg viewBox="0 0 1024 1024" className="home-icon18">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="home-text16 Card-Text">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  </span>
                </div>
                <div className="home-container08">
                  <svg viewBox="0 0 1024 1024" className="home-icon20">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="home-text17 Card-Text">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  </span>
                </div>
              </div>
            </div>
            <button className="home-button Anchor button">CHECK MY WORK</button>
          </div>
        </div>
        <div className="home-section-separator2"></div>
        <div className="home-clients">
          <div className="home-heading-container2">
            <h1 className="home-text18 Section-Heading">Clients</h1>
            <span className="home-text19 Section-Text">
              Here we will put your clients&apos; or partners&apos; logos
            </span>
          </div>
          <div className="home-logo-container">
            <img alt="image" src="/default-img.svg" className="home-logo" />
            <img alt="image" src="/default-img.svg" className="home-logo1" />
            <img alt="image" src="/default-img.svg" className="home-logo2" />
            <img alt="image" src="/default-img.svg" className="home-logo3" />
            <img alt="image" src="/default-img.svg" className="home-logo4" />
          </div>
        </div>
        <div className="home-pricing">
          <div className="home-heading-container3">
            <h1 className="home-text20 Section-Heading">Ask for a quote</h1>
            <span className="home-text21 Section-Text">
              Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </span>
          </div>
          <div className="home-pricing-card-container">
            <div className="home-card3">
              <div className="home-card-heading">
                <span className="home-type Anchor">Minimal</span>
                <span className="Section-Heading">Basic</span>
              </div>
              <div className="home-card-content">
                <div className="home-feature">
                  <span className="Card-Text">Feature one</span>
                  <span className="home-limit Card-Text">TBD</span>
                </div>
                <div className="home-feature1">
                  <span className="Card-Text">Feature two</span>
                  <span className="home-limit1 Card-Text">TBD</span>
                </div>
                <div className="home-feature2">
                  <span className="Card-Text">Feature three</span>
                  <span className="home-limit2 Card-Text">UNLIMITED</span>
                </div>
                <div className="home-feature3">
                  <span className="Card-Text">Feature four</span>
                  <span className="home-limit3 Card-Text">UNLIMITED</span>
                </div>
                <button className="home-choose button Anchor">CHOOSE</button>
              </div>
            </div>
            <div className="home-card4">
              <div className="home-card-heading1">
                <span className="home-type1 Anchor">medium</span>
                <span className="Section-Heading">Complex</span>
              </div>
              <div className="home-card-content1">
                <div className="home-container09">
                  <span className="Card-Text">Feature one</span>
                  <span className="home-text23 Card-Text">TBD</span>
                </div>
                <div className="home-container10">
                  <span className="Card-Text">Feature two</span>
                  <span className="home-text25 Card-Text">TBD</span>
                </div>
                <div className="home-container11">
                  <span className="Card-Text">Feature three</span>
                  <span className="home-text27 Card-Text">UNLIMITED</span>
                </div>
                <div className="home-container12">
                  <span className="Card-Text">Feature four</span>
                  <span className="home-text29 Card-Text">UNLIMITED</span>
                </div>
                <button className="home-button1 Anchor button">CHOOSE</button>
              </div>
            </div>
            <div className="home-card5">
              <div className="home-card-heading2">
                <span className="home-type2 Anchor">Premium</span>
                <span className="Section-Heading">Professional</span>
              </div>
              <div className="home-card-content2">
                <div className="home-container13">
                  <span className="Card-Text">Feature one</span>
                  <span className="home-text31 Card-Text">TBD</span>
                </div>
                <div className="home-container14">
                  <span className="Card-Text">Feature two</span>
                  <span className="home-text33 Card-Text">TBD</span>
                </div>
                <div className="home-container15">
                  <span className="Card-Text">Feature three</span>
                  <span className="home-text35 Card-Text">UNLIMITED</span>
                </div>
                <div className="home-container16">
                  <span className="Card-Text">Feature four</span>
                  <span className="home-text37 Card-Text">UNLIMITED</span>
                </div>
                <button className="home-button2 Anchor button">CHOOSE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator3"></div>
        <div className="home-section-separator4"></div>
        <div className="home-faqs">
          <h2 className="home-text38 Section-Heading">
            Check the most common questions
          </h2>
          <div className="home-content-container4">
            <div className="home-faq">
              <div className="home-question-container">
                <span className="home-question">
                  Here you would write a frequently asked question?
                </span>
              </div>
              <div className="home-answer-container">
                <span className="home-answer Card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet. Here you would give the
                  answer. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Integer nec odio. Praesent libero. Sed cursus ante
                  dapibus diam.c Sed nisi. Nulla quis sem at nibh elementum
                  imperdiet.
                </span>
                <span className="Card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className="home-faq1">
              <div className="home-question-container1">
                <span className="home-question1">
                  Here you would write a frequently asked question?
                </span>
              </div>
              <div className="home-answer-container1">
                <span className="home-answer2 Card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet.
                </span>
                <span className="Card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero.
                </span>
              </div>
            </div>
            <div className="home-faq2">
              <div className="home-question-container2">
                <span className="home-question2">
                  Here you would write a frequently asked question?
                </span>
              </div>
              <div className="home-answer-container2">
                <span className="home-answer4 Card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet.
                </span>
                <span className="Card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator5"></div>
        <div className="home-subscribe">
          <img alt="image" src="/default-img.svg" className="home-image1" />
          <div className="home-container17">
            <div className="home-heading-container4">
              <h1 className="home-text39 Section-Heading">
                Get our guide to crafting digital products
              </h1>
              <span className="Section-Text home-text40">
                We will send you our monthly freebies on your email. We will not
                share your email address or use it for promotional goals.
              </span>
            </div>
            <input
              type="text"
              required="true"
              placeholder="E-mail"
              className="home-textinput Section-Text input"
            />
            <button className="home-button3 Anchor button">SEND</button>
          </div>
        </div>
        <div className="home-section-separator6"></div>
        <div className="home-footer-container">
          <div className="home-footer">
            <div className="home-social-links">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon22">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon24">
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon26">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </div>
            <div className="home-copyright-container">
              <svg viewBox="0 0 1024 1024" className="home-icon28">
                <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
              </svg>
              <span className="Anchor">Copyright, 2021</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar-container {
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-navbar {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .home-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link {
            margin-right: var(--dl-space-space-tripleunit);
          }
          .home-link1 {
            margin-right: var(--dl-space-space-tripleunit);
          }
          .home-link2 {
            margin-right: var(--dl-space-space-tripleunit);
          }
          .home-burger-menu {
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon {
            width: 36px;
            height: 36px;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-tripleunit);
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: #fff;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon02 {
            width: 24px;
            height: 24px;
          }
          .home-links-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link4 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-link5 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-link6 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            margin-top: var(--dl-space-space-tenunits);
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-container02 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #f1f1f1;
          }
          .home-hero {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            background-color: #f1f1f1;
          }
          .home-hero-text-container {
            width: 45%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading2 {
            color: #040404;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-cta-btn-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-cta-btn {
            color: var(--dl-color-gray-white);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            margin-right: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: #c9c9c9;
          }
          .home-text02 {
            color: #101010;
          }
          .home-cta-btn1 {
            color: var(--dl-color-gray-black);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-white);
          }
          .home-image {
            width: 40%;
            object-fit: cover;
          }
          .home-features {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text03 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text04 {
            text-align: center;
          }
          .home-cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-card {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-icon04 {
            fill: var(--dl-color-gray-900);
            width: 100px;
            height: 100px;
            min-width: 100px;
            min-height: 100px;
          }
          .home-content-container {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading3 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text05 {
            text-align: center;
          }
          .home-card1 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-icon06 {
            fill: var(--dl-color-gray-900);
            width: 100px;
            height: 100px;
            min-width: 100px;
            min-height: 100px;
          }
          .home-content-container1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading4 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text06 {
            text-align: center;
          }
          .home-card2 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-icon08 {
            fill: var(--dl-color-gray-900);
            width: 100px;
            height: 100px;
            min-width: 100px;
            min-height: 100px;
          }
          .home-content-container2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading5 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text07 {
            text-align: center;
          }
          .home-about {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .home-max-content-width-container {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container1 {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-content-container3 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-about-1 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-self: stretch;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-900);
          }
          .home-container03 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .home-icon10 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text09 {
            text-align: left;
          }
          .home-container04 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .home-icon12 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text10 {
            text-align: left;
          }
          .home-container05 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .home-icon14 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text11 {
            text-align: left;
          }
          .home-about-11 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-self: stretch;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-900);
          }
          .home-container06 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .home-icon16 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text12 {
            text-align: left;
          }
          .home-container07 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .home-icon18 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text16 {
            text-align: left;
          }
          .home-container08 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .home-icon20 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text17 {
            text-align: left;
          }
          .home-button {
            color: var(--dl-color-gray-white);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .home-section-separator2 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-clients {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container2 {
            width: 45%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-text18 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text19 {
            text-align: center;
          }
          .home-logo-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-logo {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-logo1 {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-logo2 {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-logo3 {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-logo4 {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-pricing {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container3 {
            width: 45%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-text20 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text21 {
            text-align: center;
          }
          .home-pricing-card-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-card3 {
            width: 30%;
            display: flex;
            min-width: 350px;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .home-card-heading {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-type {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-card-content {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-feature {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-limit {
            color: var(--dl-color-gray-700);
          }
          .home-feature1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-limit1 {
            color: var(--dl-color-gray-700);
          }
          .home-feature2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-limit2 {
            color: var(--dl-color-gray-700);
          }
          .home-feature3 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-limit3 {
            color: var(--dl-color-gray-700);
          }
          .home-choose {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .home-card4 {
            width: 30%;
            display: flex;
            min-width: 350px;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .home-card-heading1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-type1 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-card-content1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-container09 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text23 {
            color: var(--dl-color-gray-700);
          }
          .home-container10 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text25 {
            color: var(--dl-color-gray-700);
          }
          .home-container11 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text27 {
            color: var(--dl-color-gray-700);
          }
          .home-container12 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-text29 {
            color: var(--dl-color-gray-700);
          }
          .home-button1 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .home-card5 {
            width: 30%;
            display: flex;
            min-width: 350px;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .home-card-heading2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-type2 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-card-content2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-container13 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text31 {
            color: var(--dl-color-gray-700);
          }
          .home-container14 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text33 {
            color: var(--dl-color-gray-700);
          }
          .home-container15 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text35 {
            color: var(--dl-color-gray-700);
          }
          .home-container16 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-text37 {
            color: var(--dl-color-gray-700);
          }
          .home-button2 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .home-section-separator3 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-section-separator4 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-faqs {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
          }
          .home-text38 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-content-container4 {
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-faq {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-question-container {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-question {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .home-answer-container {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-answer {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-faq1 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-question-container1 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-question1 {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .home-answer-container1 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-answer2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-faq2 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-question-container2 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-question2 {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .home-answer-container2 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-answer4 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-section-separator5 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-subscribe {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image1 {
            width: 50%;
            object-fit: cover;
          }
          .home-container17 {
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tenunits);
            padding-right: var(--dl-space-space-tenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-heading-container4 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text39 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-textinput {
            width: 50%;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-button3 {
            color: var(--dl-color-gray-white);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .home-section-separator6 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-footer-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .home-social-links {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon22 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-icon24 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-icon26 {
            width: 24px;
            height: 24px;
          }
          .home-copyright-container {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon28 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 991px) {
            .home-heading {
              text-align: center;
            }
            .home-heading1 {
              text-align: center;
            }
            .home-hero {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-hero-text-container {
              width: 80%;
              align-items: center;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading2 {
              text-align: center;
            }
            .home-text {
              text-align: center;
            }
            .home-image {
              width: 100%;
            }
            .home-text03 {
              text-align: center;
            }
            .home-pricing-card-container {
              justify-content: center;
            }
            .home-card3 {
              margin-right: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-card4 {
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .home-navbar {
              position: relative;
            }
            .home-links-container {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              padding: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-tripleunit);
              border-radius: var(--dl-radius-radius-radius4);
              background-color: var(--dl-color-gray-black);
            }
            .home-icon {
              fill: var(--dl-color-gray-white);
            }
            .home-cta-btn {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-cta-btn1 {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-heading-container {
              width: 100%;
            }
            .home-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .home-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-heading-container1 {
              width: 100%;
            }
            .home-text08 {
              text-align: center;
            }
            .home-content-container3 {
              flex-wrap: wrap;
              align-items: flex-start;
              justify-content: center;
            }
            .home-about-1 {
              width: 65%;
            }
            .home-about-11 {
              width: 65%;
            }
            .home-heading-container2 {
              width: 100%;
            }
            .home-heading-container3 {
              width: 100%;
            }
            .home-card3 {
              margin-right: 0px;
            }
            .home-content-container4 {
              width: 100%;
              flex-direction: column;
            }
            .home-faq {
              width: 100%;
            }
            .home-faq1 {
              width: 100%;
            }
            .home-faq2 {
              width: 100%;
            }
            .home-subscribe {
              flex-direction: column;
            }
            .home-image1 {
              width: 70%;
            }
            .home-container17 {
              width: 100%;
              align-items: center;
            }
            .home-heading-container4 {
              width: 100%;
            }
            .home-text39 {
              text-align: center;
            }
            .home-text40 {
              text-align: center;
            }
            .home-textinput {
              width: 100%;
            }
            .home-button3 {
              width: 70%;
            }
          }
          @media (max-width: 479px) {
            .home-burger-menu {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .home-hero-text-container {
              width: 100%;
            }
            .home-card {
              width: 100%;
            }
            .home-card1 {
              width: 100%;
            }
            .home-card2 {
              width: 100%;
            }
            .home-about-1 {
              width: 100%;
            }
            .home-about-11 {
              width: 100%;
            }
            .home-text18 {
              text-align: center;
            }
            .home-text20 {
              text-align: center;
            }
            .home-content-container4 {
              padding-left: 0px;
            }
            .home-image1 {
              width: 100%;
            }
            .home-container17 {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .home-button3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
