import { motion } from "framer-motion";

const Slider = () => {
  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1, x: [0, 0, 0] }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 3,
        }}
      >
        <div className=" absolute flex bottom-0 left-0 right-0  justify-end items-baseline bg-gradient-to-b from-transparent   to-cyan-500/90  backdrop-blur-noneborder-0 -z-20">
          <div className="slider  ">
            <div className="slider-track">
              {/*Loop 1*/}
              <div className="slide items-center justify-center flex">
                <img src="React_wordmark_light.svg" alt="" />
              </div>
              <div className="slide items-center justify-center flex">
                <img src="javascript.svg" alt="" />
                <p className=" text-white ml-2 font-bold text-sm">JavaScript</p>
              </div>

              <div className="slide items-center justify-center flex">
                <img src="nodejs.svg" alt="" />
                <p className=" text-white ml-2 font-bold text-sm">Node.js</p>
              </div>
              <div className="slide items-center justify-center flex">
                <img src="tailwindcss-wordmark-dark.svg" alt="" />
              </div>

              <div className="slide items-center justify-center flex">
                <img src="expressjs_dark.svg" alt="" />
                <p className=" text-white ml-2 font-bold text-sm">Express.js</p>
              </div>
              <div className="slide  items-center justify-center flex">
                <img className="w-8" src="python.svg" alt="" />
                <p className=" text-white ml-2 font-bold text-sm">Python</p>
              </div>
              <div className="slide  items-center justify-center flex">
                <img src="mongodb.svg" alt="" />
              </div>
              <div className="slide  items-center justify-center flex">
                <img className="w-8" src="mysql.svg" alt="" />
                <p className=" text-white ml-2 font-bold text-sm">MySql</p>
              </div>

              {/*Loop 2*/}

              <div className="slide items-center justify-center flex">
                <img src="React_wordmark_light.svg" alt="" />
              </div>
              <div className="slide items-center justify-center flex">
                <img src="javascript.svg" alt="" />
                <p className=" text-white ml-2 font-bold text-sm">JavaScript</p>
              </div>

              <div className="slide items-center justify-center flex">
                <img src="nodejs.svg" alt="" />
                <p className=" text-white ml-2 font-bold text-sm">Node.js</p>
              </div>
              <div className="slide items-center justify-center flex">
                <img src="tailwindcss-wordmark-dark.svg" alt="" />
              </div>

              <div className="slide items-center justify-center flex">
                <img src="expressjs_dark.svg" alt="" />
                <p className=" text-white ml-2 font-bold text-sm">Express.js</p>
              </div>
              <div className="slide  items-center justify-center flex">
                <img className="w-8" src="python.svg" alt="" />
                <p className=" text-white ml-2 font-bold text-sm">Python</p>
              </div>
              <div className="slide  items-center justify-center flex">
                <img src="mongodb.svg" alt="" />
              </div>
              <div className="slide  items-center justify-center flex">
                <img className="w-8" src="mysql.svg" alt="" />
                <p className=" text-white ml-2 font-bold text-sm">MySql</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Slider;
