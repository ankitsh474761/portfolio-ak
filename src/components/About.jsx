import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          As a passionate and detail-oriented MERN Stack Developer, I specialize
          in creating responsive, visually appealing, and user-centric web
          applications. With a strong proficiency in HTML, CSS, JavaScript,
          TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB, and Git,
          I focus on delivering seamless user experiences and optimized
          performance. I enjoy tackling challenges, writing clean code, and
          continuously learning new technologies to stay ahead in this dynamic
          field.
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
