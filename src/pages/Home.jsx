import TypewriterEffect from "../components/Text-generate"
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Slider from "../components/Slider";
import { motion } from "framer-motion";


import Contact from "../components/Contact";



const Home = () => {
  const title = ["AngRod"].map(word => ({ text: word }));


  const [isChargen, setIsChargen] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setIsChargen(false)

    }, 500);

    setTimeout(() => {
      setIsVisible(false)
    }, 2000);
  }, [])

  return (
    <>
    
      <div className={`relative h-screen flex flex-col justify-center md:justify-normal  md:pt-40 items-center cursor-default ${!isChargen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <Contact/>
        {!isChargen && (
          <div className="flex ">
            <TypewriterEffect className={` whitespace-pre text-gray-300   covered-by-your-grace-regular text-[min(16rem,20vw)] ${!isChargen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} words={title} />


            {!isVisible && (
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  type: "tween",  
                  ease: "linear", 
                  duration: 1.5 
                }}
                className={` covered-by-your-grace-regular text-[min(16rem,20vw)] text-cyan-500 neon-text-cyan ${!isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
              >
                Sx
              </motion.h1>
            )}
          </div>
        )}

        {!isVisible && (<>
          <div className="flex items-center flex-col">
            <motion.p
            initial={{ y: 20, opacity: 1 }}
            animate={{ y: 0, opacity: 1, x: [0, 0, 0] }}
            transition={{ 
              type: "tween",  
              ease: "linear", 
              duration: 1.5
            }}
            className={` relative neon-text-black   pb-2 px-10  text-white  montserrat sm:text-xl text-xl  text-center  `}
          >
            Software Engineer | FrontEnd Development
          </motion.p> 
          
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, x: [0, 0, 0] }}
            transition={{ 
              type: "tween",  
              ease: "linear", 
              duration: 1.5 
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 }  
            }}
            whileTap={{
              scale: 1.1,
              transition: { duration: 0.2 } 
            }}
            exit={{
              scale: 1,  
              transition: { duration: 0 }  
            }}
            
          >
            <Link to="page3" smooth={true} duration={500} className={`text-white uppercase bg-cyan-600 hover:bg-cyan-400 rounded-lg  text-center montserrat  text-xl py-2 px-5  hover:neon-text-cyan shadow-lg`} >Go to Projects!</Link>
          </motion.button>

        </div>
        <Slider />
        </>)}
        
      </div>

    </>
  )

}


export default Home