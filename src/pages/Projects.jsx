import Card from "../components/Card"

const Projects = () => {

  return (
    <>
      <div className=" relative min-h-screen pt-24 lg:pt-20 bg-gradient-to-b from-transparent   to-cyan-500/90  backdrop-blur-sm cursor-default">
        <div className="text-white text-center">
          <h1 className="mb-2 covered-by-your-grace-regular text-[min(6rem,15vw)]">My <span className="text-cyan-400 neon-text-cyan">Projects</span></h1>
          <p className=" montserrat "> Collection of proyects I&apos;ve done</p>
        </div>
        <div className="container mx-auto  p-10 lg:p-18 grid grid-cols-1 xl:grid-cols-3  md:grid-cols-2 gap-10">

          <Card url={"bg-[url('/worldsxmap.png')]"} githubLink={'https://github.com/AngRodSt/World-Map-Frontend-V.2'} webLink={'https://worldsxmapv2.vercel.app/'} title={'WorldsxMap'} type={'Full Stack App'} description={'A dynamic and interactive web application featuring a world map where each country serves as a clickable, customizable element. Users can select countries, change their colors, and attach personalized notes to document experiences, conversations, or future travel plans. Designed for travelers, researchers, and global enthusiasts, this platform transforms the map into a personal canvas for storytelling, planning, and exploration.'} tecnologys={'React | Next.js | Express | MongoDB | Tailwindcss'}/>

          <Card url={"bg-[url('/Veterinary.png')]"} githubLink={'https://github.com/AngRodSt/APV-Frontend'} webLink={'https://apvveterinarymanager.netlify.app/'} title={"Veterinary Patients Manager"} type={'Full Stack App'} description={"Web application for managing veterinary clinic patients. It enables veterinarians to register, update, and manage appointments efficiently. It features secure authentication, password recovery, and data storage in MongoDB Atlas. Its intuitive design enhances the user experience, streamlining patient and appointment management."} tecnologys={'React | Express | MongoDB | Node.js | Tailwindcss |'} />
          <Card url={"bg-[url('/angrodSearch.png')]"} githubLink={'https://github.com/AngRodSt/AnimeLibrary'} webLink={'https://animesearchangrod.azurewebsites.net/'} title={'Anime Library App'} type={'Full Stack App'} tecnologys={'Python | Flask | MySQL'} description={'A web application to manage your favorite anime collection. It allows users to create a simple account and save anime to a personalized list. The search bar features jQuery autocomplete for a smoother experience. Designed with a functional approach, making it easy to organize and access your favorite content.'} />
          <Card url={"bg-[url('/AgenciaViajes.png')]"} githubLink={'https://github.com/AngRodSt/agencia_de_viajes'} webLink={'https://agencia-de-viajes-mr4r.onrender.com/'} title={'Travel Agency'} type={'Full Stack App'} tecnologys={'Node.js | Express | Tailwind | Pug | Sequelize |'} description={'This travel agency simulation, allows managing and dynamically displaying travel information stored in a database. Users can explore destinations and add testimonials through a form, with the data being saved to the database and displayed on the website. The application uses Pug for dynamic rendering and Sequelize as an ORM to handle data persistence, providing a smooth and interactive experience.'} />

          <Card url={"bg-[url('/Courpany.png')]"} title={'Online Course Store '} webLink={'https://courpany-as.netlify.app/'} githubLink={'https://github.com/AngRodSt/Shopping-Cart'} type={"UI Mockup"} description={"A clean and responsive mockup for an online course store. It includes a landing page, course listing and a functional shopping cart that stores items in localStorage, it's ready for dynamic data integration and full functionality."} tecnologys={'HTML | JavaScript | Css | '} />

          <Card url={"bg-[url('/APVTypescript.png')]"} webLink={'https://apv-type-script.vercel.app/'} githubLink={'https://github.com/AngRodSt/APV-TypeScript'} title={'VPM Migrated Typescript'} type={'FronEnd App'} description={'Is a web application designed to efficiently organize and manage pet appointments. It allows users to add, edit, and delete appointments while keeping records accessible for future reference. The intuitive interface ensures a smooth user experience, making it easy for veterinary clinics to streamline their scheduling process.'} tecnologys={'HTML | TypeScript | Tailwindcss |'} />

          <Card url={"bg-[url('/Cryptos.png')]"} githubLink={'https://github.com/AngRodSt/Cripto-Finder'} webLink={'https://cripto-finder-gamma.vercel.app/'} type={'FrontEnd App'} title={'Crypto Finder'} description={'Practical application that allows users to query real-time cryptocurrency values through an API. Users can select different currencies and view their updated exchange rates in a simple and intuitive interface.'} tecnologys={'HTML | JavaScript | Tailwindcss |'} />

          <Card url={"bg-[url('/pictureFinder.png')]"} webLink={'https://picture-finder-lyart.vercel.app/'} githubLink={'https://github.com/AngRodSt/Picture-Finder'} title={'PixaBay API Finder'} type={'FrontEnd App'} description={'Web that allows users to search and explore high-quality images using the Pixabay API. With a simple interface, users can enter keywords to find related images and view them instantly.'} tecnologys={'HTML | JavaScript | Tailwindcss |'} />

          <Card url={"bg-[url('/Weather.png')]"} githubLink={'https://github.com/AngRodSt/Weather-FetchApi'} webLink={'https://weather-fetch-api.vercel.app/'} title={'Weather Search App'} type={'FrontEnd App'} description={'Web that allows users to check the current weather, displaying the maximum and minimum temperatures for a specific location, all retrieved via a weather API. The interface is simple and easy to use, providing quick and accurate temperature details.'} tecnologys={'HTML | JavaScript | Tailwindcss | '} />

          <Card url={"bg-[url('/Recipes.png')]"} webLink={'https://recipe-finder-pi-lac.vercel.app/'} githubLink={'https://github.com/AngRodSt/Recipe-Finder'} title={'Recipes Finder App'} type={'FrontEnd App'} description={'Web application that enables users to browse recipes by categories using an API. It showcases a range of dishes, providing detailed information on how to prepare them, including ingredients and instructions, all within a simple and intuitive interface.'} tecnologys={'HTML | JavaScript | Tailwindcss | Bootstrap'} />

        </div>

      </div>

    </>

  )
}

export default Projects