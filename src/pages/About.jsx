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
      <div className="relative min-h-screen pt-24 lg:pt-20 bg-gradient-to-b from-transparent to-cyan-500/90 backdrop-blur-sm cursor-default">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-4 covered-by-your-grace-regular">
            About <span className="text-cyan-400 neon-text-cyan">Me</span>
          </h1>
          <p className="text-xl text-gray-300 montserrat max-w-2xl mx-auto px-4 lg:px-0">
            Software Engineer & Full Stack Developer passionate about creating
            impactful digital experiences
          </p>
        </div>

        <div className="container mx-auto px-6 lg:px-8">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 px-4 lg:px-0">
            {/* Profile Section */}
            <div className="flex flex-col items-center" data-aos="fade-right">
              <div className="relative group mb-8">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <img
                  src="/myself.JPG"
                  alt="Sthefany Rodriguez - Software Engineer"
                  className="relative w-80 h-80 object-contain rounded-full border-4 border-white/10 shadow-2xl bg-white"
                />
              </div>

              {/* Quote */}
              <blockquote className="text-center">
                <p className="text-xl italic text-gray-200 playfair-display font-light leading-relaxed">
                  &quot;Keep pursuing perfection even though it cannot be
                  achieved&quot;
                </p>
                <cite className="text-cyan-400 text-sm font-semibold mt-2 block">
                  — Personal Philosophy
                </cite>
              </blockquote>
            </div>

            {/* Bio Content */}
            <div
              className="text-white montserrat space-y-6 mb-10"
              data-aos="fade-left"
            >
              <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-cyan-300">
                  Hello! I&#39;m Sthefany 👋
                </h2>

                <div className="space-y-4 text-gray-200 leading-relaxed">
                  <p>
                    I&#39;m a passionate{" "}
                    <span className="text-cyan-400 font-semibold">
                      Software Engineering student
                    </span>{" "}
                    and
                    <span className="text-orange-400 font-semibold">
                      {" "}
                      Full Stack Developer
                    </span>{" "}
                    with a deep love for creating innovative digital solutions.
                    My journey began with curiosity about how web applications
                    work, which evolved into a comprehensive skill set spanning
                    modern web and mobile technologies.
                  </p>

                  <p>
                    Through self-directed learning and intensive coursework,
                    I&#39;ve mastered technologies like
                    <span className="text-cyan-400">
                      {" "}
                      React, Next.js, TypeScript, and React Native
                    </span>
                    . I&#39;ve successfully delivered{" "}
                    <span className="font-semibold text-orange-400">
                      15+ projects
                    </span>{" "}
                    ranging from e-commerce platforms to IoT mobile
                    applications, always focusing on user experience and
                    performance.
                  </p>

                  <p>
                    What drives me is the intersection of{" "}
                    <span className="text-cyan-400 font-semibold">
                      problem-solving
                    </span>{" "}
                    and
                    <span className="text-orange-400 font-semibold">
                      {" "}
                      creative design
                    </span>
                    . I believe in writing clean, maintainable code while
                    delivering pixel-perfect interfaces that users love to
                    interact with.
                  </p>

                  <p className="text-lg font-medium text-white">
                    🚀 Currently expanding into{" "}
                    <span className="text-orange-400">AI integration</span> and
                    <span className="text-cyan-400">
                      {" "}
                      advanced mobile development
                    </span>{" "}
                    to stay at the forefront of technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
