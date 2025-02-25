import React from "react";
import HeroImage from "../assets/heroImage.JPG";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b md:pt-[58px] from-black via-black to-gray-800"
    >
      <div className="mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex md:w-1/2 items-center flex-col lg:pt-0 pt-[100px] justify-center h-full">
          <h2 className="text-4xl flex text-center sm:text-7xl font-bold text-white">
            I'm a MERN Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            With 1 year of experience in building and designing software, I
            specialize in creating dynamic and user-friendly web applications.
            Currently, I enjoy working on web applications using technologies
            like React.js, Tailwind CSS, Next.js, and JavaScript. I am also
            proficient in Node.js, Express.js, MongoDB, and Git, focusing on
            delivering seamless user experiences and optimized performance while
            continuously learning new technologies to stay ahead in this
            ever-evolving field.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-[84%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
