import Image from "next/image";
import Link from "next/link"

const ProjectCard = ({ project: { title, image, description, visit, source, code } }) => {

  return (
    <div style={{boxShadow: "3px 3px 20px rgba(80, 78, 78, 0.5)"}} className="md:flex-1 text-white pb-4 md:mx-2 overflow-hidden rounded-md">
      <div className="w-full h-72">
        <img className="w-full h-full object-cover" src={image} alt="icon" />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl text-center text-truegray-300 font-semibold py-2">{title}</h3>
        <span className="mt-2 block bg-gradient-to-r from-bluegray-700 via-bluegray-500  to-bluegray-300 w-1/4 h-2 rounded-full"></span>
      </div>
      <div className="mt-4 space-y-4">
        <p className="text-lg text-gray-400 font-medium px-4">{description} </p>
        <div className="flex px-4 justify-between">
        <Link href={code ? code : visit}>
            <a className="w-1/3 py-1 text-center text-truegray-400 border font-semibold bg-gradient-to-r  rounded-full border-bluegray-700 hover:bg-gray-800">{ code ? "Code" : "Visit"}</a>
        </Link>
        <Link href={source}>
          <a className=" w-1/3 py-1 text-center border border-bluegray-700 text-truegray-400 font-semibold rounded-full hover:bg-gray-800">Source</a>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
