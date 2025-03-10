"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const bio = [
  {
    id: 11,
    data: [
      { id: 1, type: "First Name", value: "Risky" },
      { id: 2, type: "Last Name", value: "Satria" },
      { id: 3, type: "Age", value: "35 Years" },
      { id: 4, type: "Nationality", value: "Indonesian" },
      { id: 5, type: "Freelance", value: "Available" },
    ],
  },
  {
    id: 12,
    data: [
      { id: 6, type: "Address", value: "Tangerang & Depok Cities (Indonesia)" },
      { id: 7, type: "Phone", value: "+62 877 8195 2898" },
      { id: 8, type: "Email", value: "riskysatria666@gmail.com" },
      // { id: 9, type: "Skype", value: "risky satria" },
      { id: 10, type: "Languages", value: "Indonesia (native), English (professional)" },
    ],
  },
];

const counters = [
  {
    id: 1,
    title: 'years of <span className="block">experience</span>',
    value: "10",
  },
  {
    id: 2,
    title: 'completed <span className="block">projects</span>',
    value: "30",
  },
  {
    id: 3,
    title: 'happy <span className="block">customers</span>',
    value: "20",
  },
  // { id: 4, title: 'awards <span className="block">won</span>', value: "0" },
];

const experiences = [
  {
    id: 1,
    date: "June 2024 - Present",
    title: "Product Manager promoted to Team Leader after probation periode",
    company: "PT Eversaas Power Technology",
    desc: "Assigned for being Product Manager for ERP, HRIS, Cybersecurity, Cloud Computing and IT Infra",
  },
  {
    id: 2,
    date: "May 2023 - May 2024",
    title: "Product Owner | Product Manager | Project Manager",
    company: "career break",
    desc: "Trying to evolving and be a better profesional in digital product development.",
  },
  {
    id: 3,
    date: "Jul 2022 - May 2023",
    title: "Product Owner assigned to Project Manager",
    company: "IFG Life (outsource by PT. Indocyber Global Teknologi)",
    desc: "I am assigned for ERP implementing initiation using Oracle E - Business Suite",
  },
  {
    id: 4,
    date: "Jul 2021 - Jun 2022",
    title: "Consultant",
    company: "PT Satu Nusantara Inklusif",
    desc: "Build a digital product with cutting edge technologies",
  },
  {
    id: 5,
    date: "Sep 2020 - Jun 2021",
    title: "Product Engineer",
    company: "career break",
    desc: "Reach a better perspective to achieve goals of professional development.",
  },
  {
    id: 6,
    date: "Jun 2020 - Aug 2020",
    title: "Frontend Developer",
    company: "OXXO Creative Digital Agency",
    desc: "ReactJs implementation and it's dependencies",
  },
  {
    id: 7,
    date: "Feb 2019 - Apr 2020",
    title: "Product Engineer",
    company: "GREDU",
    desc: " Help development for Gredu’s Platform",
  },
  {
    id: 8,
    date: "Apr 2018 - Feb 2019 ",
    title: "Information Technology Consultant",
    company: "BADAN PENGAWAS OBAT DAN MAKANAN REPUBLIK INDONESIA",
    desc: "CodeIgniter v 3 as a php framework implementation ",
  },
  {
    id: 9,
    date: "Feb 2018 - Feb 2019",
    title: "Full Stack Developer",
    company: "PT Candi Berkah Tehnologi",
    desc: "PHP for core language creating web app native",
  },
  {
    id: 10,
    date: "Sep 2016 - Feb 2017",
    title: "IT Staff(System Administrator and Infrastructure)",
    company: "PT. Niaga Karya Paramitra",
    desc: "Linux Administrator(CentOS) and Infrastructure(Server and it’s connection)",
  },
  {
    id: 11,
    date: "Dec 2013 - Jun 2014 ",
    title: "IT Staff(Developer)",
    company: "PT. Multi Selaras Abadi",
    desc: "Help development application with VB6 and Microsoft Access 98",
  },
];

const educations = [
  // Disable for this time
  // {
  //   id: 1,
  //   date: "2015",
  //   title: "Engineer Degree",
  //   unv: "Oxford University",
  //   desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  // },
  // {
  // Disable for this time
  //   id: 2,
  //   date: "2012",
  //   title: "Master Degree",
  //   unv: "Kiev University",
  //   desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  // },
  {
    id: 1,
    date: "2013 - 2017",
    title: "Bachelor of Computer Science",
    unv: "Indraprasta University PGRI - Jakarta (Indonesia)",
    desc: "Undergraduate with GPA = 2.9",
  },
];

const skills = [
  { id: 1, name: "html", value: "70" },
  { id: 2, name: "javascript", value: "80" },
  { id: 3, name: "css", value: "80" },
  { id: 4, name: "php", value: "85" },
  { id: 5, name: "wordpress", value: "80" },
  { id: 6, name: "jquery", value: "70" },
  // { id: , name: "angular", value: "0" },
  { id: 7, name: "react", value: "80" },
  { id: 8, name: "communication", value: "80" },
  { id: 9, name: "project management", value: "80" },
  { id: 10, name: "product management", value: "80" },
  { id: 11, name: "microsoft project", value: "80" },
  { id: 12, name: "jira", value: "80" },
];

const About = () => {
  const { dark } = useContext(TunisContext);
  return (
    <SectionContainer id="about">
      <div className="w-full">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"resume"}
          colorTitle={"me"}
          normalTitle={"about"}
        />
        {/* Section Title Ends */}
        <div className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto">
          <div className="flex flex-row down-lg:flex-col">
            {/* Personal Informations Starts */}
            <div className="xl:basis-1/2 lg:basis-5/12 down-lg:basis-full">
              <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-22 text-white font-semibold">
                personal infos
              </h3>
              <img
                className="hidden xs:block rounded-full border-4 border-solid border-black-3 w-230 h-230 mb-25 mx-auto"
                src="assets/img/Risky.JPG"
                alt=""
              />
              <div className="flex justify-between xs:justify-start font-Open-sans">
                {bio.map((item) => (
                  <div
                    className="basis-1/2 [&>div]:pb-20 [&>div:last-child]:pb-0 text-fs-15 xs:text-fs-14"
                    key={item.id}
                  >
                    {item.data.map((bio) => (
                      <div key={bio.id}>
                        <span className="opacity-80">{bio.type} : </span>
                        <span className="xs:block custom-md-2:block font-semibold">
                          {bio.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <a
                className="button group mt-30 overflow-hidden inline-block leading-lh-1.4 rounded-30 text-ellipsis text-center align-middle select-none transition-all duration-250 ease-in-out uppercase no-underline relative z-10 py-16 pr-70 pl-35 text-fs-15 font-semibold text-white bg-transparent outline-0 before:absolute before:-z-10 before:left-0 before:right-0 before:top-0 before:bottom-0 before:translate-x-full hover:before:translate-x-0 before:transition before:duration-300 before:ease-out"
                href="/assets/files/Risky Satria_CV_Updated_2024.pdf"
                target="_blank"
                download
              >
                <span
                  className={`relative z-20 text-${
                    dark
                      ? "white"
                      : "black-6 group-hover:text-white transition-all duration-300"
                  }`}
                >
                  download cv
                </span>
                <span className="absolute -right-px bottom-0 w-55 h-55 flex items-center justify-center rounded-full text-white text-fs-19 fa fa-download bg-accent" />
              </a>
            </div>
            {/* Personal Informations Ends */}
            {/* Facts Starts */}
            <div className="xl:basis-1/2 lg:basis-7/12 down-lg:basis-full down-lg:mt-50">
              <div className="flex down-lg:-mx-15 flex-wrap">
                {counters.map((counter) => (
                  <div className="w-1/2 px-15" key={counter.id}>
                    <div
                      className={`pt-20 xs:pt-15 pr-30 xs:pr-20 pb-25 xs:pb-20 pl-40 xs:pl-25 border border-${
                        dark ? "black-3" : "grey"
                      } rounded-5 mb-30 xs:mb-25`}
                    >
                      <h3 className="relative inline-block font-bold text-fs-50 xs:text-fs-40 text-accent leading-lh-1.2 after:content-['+'] after:absolute after:-right-24 after:text-fs-33 after:font-light after:top-2">
                        {counter.value}
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: counter.title,
                        }}
                        className="relative xs:text-fs-14 uppercase pl-45 xs:pl-0 xs:before:hidden font-Open-sans font-medium before:absolute before:left-0 before:top-13 before:w-30 before:h-1 before:bg-black-5"
                      ></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Facts Ends */}
          </div>
          <hr
            className={`border-t border-solid border-t-${
              dark ? "black-3" : "grey"
            } mx-auto max-w-40prcent mt-70 mb-55`}
          />
          <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-48 text-white font-semibold text-center">
            my skills
          </h3>
          {/* Skills Starts */}
          <div className="flex w-full flex-wrap">
            {skills.map((skill) => (
              <div
                className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16"
                key={skill.id}
              >
                <div
                  className={`c100 p${skill.value} float-none mx-auto ${
                    dark ? "bg-black-3" : "bg-light-grey after:!bg-white"
                  }`}
                >
                  <span className={dark ? "" : "!text-black-6"}>
                    {skill.value}%
                  </span>
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
                <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                  {skill.name}
                </h6>
              </div>
            ))}
          </div>
          {/* Skills Ends */}
          <hr
            className={`border-t border-solid border-t-${
              dark ? "black-3" : "grey"
            } mx-auto max-w-40prcent mt-35 mb-55`}
          />
          <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-48 text-white font-semibold text-center">
            experience &amp; education
          </h3>
          {/* Resume Starts */}
          <div className="flex down-sm:flex-col from-sm:mb-40">
            {/* Experience Starts */}
            <div className="w-1/2 down-sm:w-full">
              <ul>
                {experiences.map((experience) => (
                  <li
                    key={experience.id}
                    className={`relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-${
                      dark ? "black-4" : "grey"
                    } after:w-1 after:h-full`}
                  >
                    <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                      <i className="fa fa-briefcase"></i>
                    </div>
                    <span
                      className={`text-${
                        dark ? "white" : "black-6"
                      } text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-${
                        dark ? "black-3" : "light-grey"
                      } opacity-80 font-Open-sans uppercase`}
                    >
                      {experience.date}
                    </span>
                    <h5 className="uppercase text-fs-18 mt-7 mb-10">
                      {experience.title}
                      <span
                        className={`opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-${
                          dark ? "white" : "black-6"
                        } before:left-7 before:top-9 before:opacity-80`}
                      >
                        {experience.company}
                      </span>
                    </h5>
                    <p
                      className={`font-Open-sans ${
                        dark ? "text-light-grey" : ""
                      } text-fs-14`}
                    >
                      {experience.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="w-1/2 down-sm:w-full">
              <ul>
                {educations.map((education) => (
                  <li
                    key={education.id}
                    className={`relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-${
                      dark ? "black-4" : "grey"
                    } after:w-1 after:h-full`}
                  >
                    <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                      <i className="fa fa-graduation-cap"></i>
                    </div>
                    <span
                      className={`text-${
                        dark ? "white" : "black-6"
                      } text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-${
                        dark ? "black-3" : "light-grey"
                      } opacity-80 font-Open-sans uppercase`}
                    >
                      {education.date}
                    </span>
                    <h5 className="uppercase text-fs-18 mt-7 mb-10">
                      {education.title}
                      <span
                        className={`opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-${
                          dark ? "white" : "black-6"
                        } before:left-7 before:top-9 before:opacity-80`}
                      >
                        {education.unv}
                      </span>
                    </h5>
                    <p
                      className={`font-Open-sans ${
                        dark ? "text-light-grey" : ""
                      } text-fs-14`}
                    >
                      {education.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Education Ends */}
          </div>
          {/* Resume Ends */}
        </div>
      </div>
    </SectionContainer>
  );
};
export default About;
