import Github from "./GitHubL"
import Instagram from "./InstagramL"
import LinkedIn from "./LinkedinL"


const Contact = () => {
  return (
   <>
   <div className=" sm:fixed sm:bottom-12 sm:left-0 sm:-mb-0 sm:right-0  -z-10">
          <div className="mx-10 py-5">
            <div className="cursor-pointe flex gap-5">
              <a target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition" href="https://github.com/AngRodSt"><Github color= "white" /></a>
              <a target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition" href="https://www.linkedin.com/in/sthefany-%C3%A1ngeles-rodr%C3%ADguez-6348642ba/"><LinkedIn /></a>
              <a target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition" href="https://www.instagram.com/angeles_sth/?hl=es"><Instagram /></a>

            </div>
          </div>
        </div>
   </>
  )
}

export default Contact