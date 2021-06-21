const frontend = ["HTML", "CSS", "JavaScript", "ReactJS", "Redux", "Tailwindcss", "Typescript"];

const backend = ["Mongodb", "MongooseJS", "ExpressJS", "NodeJS"];

const Technology = () => {
  return (
    <div className="mt-20 px-8 flex justify-center" id="tech" onLost>
      <div className="lg:w-3/4">
        <div className="flex justify-between">
            <div className="w-1/4 h-2 bg-gradient-to-r from-teal-400 via-cyan-600 to-red-700 rounded-full"></div>
            <div className="w-1/4 h-2 bg-gradient-to-r from-teal-400 via-cyan-600 to-red-700 rounded-full"></div>
            <div className="w-1/4 h-2 bg-gradient-to-r from-teal-400 via-cyan-600 to-red-700 rounded-full"></div>
        </div>
        <h3 className="mt-6 text-3xl font-bold text-bluegray-300">Technologies</h3>
        <p className="my-6 text-2xl text-bluegray-400">
          I have experience with a range of tecnologies from frontend to backend and I have worked with the following technologies
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-2xl text-gray-100 font-semibold">Frontend</span>
            <div className="mt-2 space-y-4">
              {frontend.map((el, i) => (
                <div className="text-xl text-truegray-400 font-medium" key={i}>{el}</div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-2xl text-gray-100 font-semibold">Backend</span>
            <div className="mt-2 space-y-4">
              {backend.map((el, i) => (
                <div key={i} className="text-xl text-truegray-400 font-medium">{el}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
