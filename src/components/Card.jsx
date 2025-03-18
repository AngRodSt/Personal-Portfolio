import Github from "./GitHubL"
import LinkC from "./Link"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Card = ({ title, description, type, url, githubLink, webLink, tecnologys }) => {
    
    useEffect(() => {
            AOS.init({
              duration: 1000, 
              once: false,
            });
          }, []);
    
    return (
        <>
            
            <div data-aos="flip-right"  className="   bg-gray-100 rounded-lg  overflow-hidden hover:scale-110 transition ease-in-out" style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                
            }}>
                <div className="   grid grid-cols-1 grid-rows-1 relative w-full h-full overflow-hidden">
                    <div className={` ${url}`} style={{
                        display: "flex",
                        width: "100%",
                        height: "auto",


                        backgroundSize: "100%",
                        backgroundPosition: "top center",
                        backgroundRepeat: "no-repeat",

                        transition: "0.3s ease-in-out"
                    }}>
                        <div className=" mt-5 py-20  align-middle items-center">
                            <div className=" px-4  " style={{
                                background: " rgb(245, 245, 245)",
                                boxShadow: "rgb(245, 245, 245)  0px 0px 3rem 5rem",
                                marginTop: "30%",
                            }}>
                                <h3 className=" text-2xl  mt-5 ">{title}</h3>
                                <div className="font-light mt-2">
                                    <p className="mb-2 text-cyan-700  montserrat">| {type} |</p>
                                    <p className="mb-2">{description}</p>
                                    <p className="font-bold">{tecnologys}</p>
                                </div>
                                <div className="absolute bottom-3 gap-3 flex flex-row  z-10" style={{
                                    
                                }}>
                                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition ease-in-out z-0"><Github /></a>
                                    <a href={webLink} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition ease-in-out"><LinkC /></a>

                                    
                                </div>

                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Card