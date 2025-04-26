import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <div className=" relative min-h-screen md:pt-32 pt-44 bg-gradient-to-t from-transparent   to-cyan-500/90  backdrop-blur-sm cursor-default">
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 md:py-20  -mt-10  rounded-lg   "
        >
          <div className="flex flex-col justify-center items-center">
            <img
              src="/Perfil.png"
              alt="Profile image"
              className="object-cover w-full  "
            />
            <q className="  text-white playfair-display font-light neon-text-black ">
              Keep pursuing perfection even though it cannot be achieved
            </q>
          </div>

          <div className="text-white flex px-5  montserrat flex-col xl:w-[600px] w-full  justify-center">
            <h3 className="text-5xl my-5">
              <span className="text-cyan-300 neon-text-cyan">About</span> Me:
            </h3>

            <p className="mb-5">
              Hello! I&apos;m Sthefany, a software engineering student. I&apos;m
              a web development enthusiast who started my journey learning
              self-taught and through online courses. My passion for programming
              was born out of my curiosity to understand how web applications
              work and my desire to create useful and engaging digital
              experiences.
            </p>
            <p className="mb-5">
              I have invested time in courses mainly focused on JavaScript and
              Front-End technologies such as HTML, CSS, and React. Thanks to
              this, I have developed small applications and practical exercises
              to reinforce my knowledge.
            </p>
            <p className="mb-5">
              I consider myself a curious, resilient, and committed person when
              it comes to continuous learning. I believe that the best way to
              grow in this industry is to take on challenges and collaborate
              with other developers. My short-term goal is to establish myself
              as a Front-End Developer, and in the long run, I would love to
              expand into more areas of web development to become a Full Stack
              Developer.
            </p>
            <p className="">
              If you&apos;re interested in seeing my work or sharing ideas, I
              invite you to visit my Projects section or contact me to discuss
              potential collaborations. I&apos;m always eager to learn and bring
              my energy to new challenges!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
