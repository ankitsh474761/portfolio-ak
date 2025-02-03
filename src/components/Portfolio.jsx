import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import components from "../assets/portfolio/components.png";
import solutionec from "../assets/portfolio/solutionec.png";
import ecommerce from "../assets/portfolio/ecommerce.png";
import blog from "../assets/portfolio/blog.png";
import foodapp from "../assets/portfolio/foodapp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: solutionec,
      link: "https://solutionec-dev.antino.ca/",
    },
    {
      id: 2,
      src: foodapp,
      link: "https://food-app-delta-nine.vercel.app",
    },
    {
      id: 3,
      src: ecommerce,
      link: "https://ecommerce-am.vercel.app",
    },
    {
      id: 4,
      src: blog,
      link: "https://blog-am-nine.vercel.app/add-blog",
    },
    {
      id: 4,
      src: components,
      link: "https://machine-interview-questions-3bh9.vercel.app",
    },
  ];
  
  const handleClick = (link)=>{
    console.log(link)
    window.open(link,'_blank');
  }

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg h-[270px]">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-[200px] object-fill"
              />
              <div className="flex items-center justify-center h-[70px]">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" 
                onClick={()=>handleClick(link)}>
                  Demo
                </button>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
