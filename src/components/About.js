const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#E25822] ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Jeremiah, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              A self-taught fullstack developer who is able to realise fully
              responsive, mobile first projects from the ground up. I am well
              versed in all the key languages in the MERN stack. I am a talented
              individual with industrious and systematic approach to learning
              new technology. I am an open and clear worker with disciplined execution
              and methodical nature. I am also a motivated individual with formal
              knowledge gained through excellent classroom performance. I offer
              excellent communication and organizational abilities along with
              fluency in virtual work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
