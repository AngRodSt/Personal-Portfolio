import { Link, Element } from "react-scroll"
import { useEffect, useState } from "react"

import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"



function App() {
  const [isVisible, setIsVisible] = useState(false)
  

  useEffect(()=>{
    setTimeout(() => {
      setIsVisible(true)
    }, 100);
  },[])

  return (
    <>

      <div className={`relative `}>

        <div className="fixed bg-gradient-to-b from-black to-transparent top-0 left-0 right-0  z-10 ">
        
          <div className=" container mx-auto py-5 flex lg:justify-between flex-col lg:flex-row justify-center items-center">
            <div className="mb-5 cursor-pointer">
              <Link to="page1" smooth={true} duration={500} className=" text-gray-200 covered-by-your-grace-regular text-4xl neon-text-black">AngRod<span className="text-cyan-500 neon-text-cyan">Sx</span></Link>
            </div>

            <nav className="  flex gap-5 montserrat text-gray-200  cursor-pointer">
              <Link to="page1" smooth={true} duration={500} className="hover:scale-125 transition hover:neon-text-cyan ">Home</Link>
              <Link to="page2" smooth={true} duration={500} className="hover:scale-125 transition hover:neon-text-cyan ">About</Link>
              <Link to="page3" smooth={true} duration={500} className="hover:scale-125 transition hover:neon-text-cyan ">Projects</Link>
            </nav>
            
          </div>
          
        </div>
        
       
        <div className={`absolute inset-0 h-full bg-[url(/pc.jpg)] bg-cover bg-no-repeat bg-fixed filter grayscale opacity-0  ${isVisible? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 -z-20  `}></div>
        <Element name="page1" className=" relative h-screen ">
          <Home />
        </Element>
      
        <Element name="page2" className=" ">
          <About  />
        </Element>
       
       
        <Element name="page3" className=" relative h-screen ">
          <Projects />
        </Element>
       

     
      </div>

    </>

  )
}

export default App
