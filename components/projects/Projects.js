import ProjectCard from "./ProjectCard";

const Projects = () => {

    const projects = [
        {
            id: 1,
            title: "Social media application",
            image: "/images/instagram.jpg",
            visit: "https://linkup-people.herokuapp.com/",
            source: "https://github.com/timothyKinuthia/linkup-social-media",
            description: "Social media application using Mongodb, Expressjs, Reactjs Nodejs, redux and tailwindcss"

        },
        {
            id: 2,
            title: "E-commerce web application",
            image: "/images/shop4.jpg",
            code: "https://github.com/timothyKinuthia/timtech-ecom-app",
            source: "https://github.com/timothyKinuthia/timtech-ecom-app",
            description: "Ecommerce web application using Mongodb, Expressjs, Reactjs Nodejs, redux, firebase and Ant Design"

        }

    ]
    return (
        <div className="relative z-10 mt-10 flex flex-col items-center" id="projects">
            <h3 style={{color: "transparent"}} className="py-4 text-transparent text-3xl font-bold bg-clip-text bg-gradient-to-r from-bluegray-50 to-truegray-300 border-b-4 border-truegray-600" >Projects</h3>
            <div className="mt-10 w-full  lg:w-3/4 px-4 sm:px-2 md:px-0 space-y-4 md:space-y-0 md:flex md:space-x-6 lg:space-x-10">
                {projects.map((proj) => (
                   <ProjectCard key={proj.id} project={proj} />
               ))} 
            </div>
        </div>
    )
}

export default Projects
