import Link from "next/link"

const Hero = (props) => (
  <div className="mt-8 w-full flex">
    <div className="space-y-10 w-full px-2 lg:p-0 lg:flex justify-center items-center">
      <div className="lg:ml-8 xl:-ml-24">
        <h3
          style={{ color: "transparent" }}
          className="text-5xl font-bold bg-clip-text bg-gradient-to-r from-teal-600 via-teal-200 to-truegray-400"
        >
          Welcome to my portfolio website
        </h3>

        <p
          style={{ color: "transparent" }}
          className="mt-8 bg-clip-text bg-gradient-to-r from-truegray-400 to-truegray-500 text-3xl font-bold "
        >
          I develop awesome applications <br /> that help satisfy your business
          requirements and
          <br />
          improve your customer experience
        </p>
      </div>
      <Link href="mailto:timothy9369@gmail.com">
        <a className="py-2 px-4 text-lg font-bold bg-gradient-to-r from-teal-400 via-teal-600  to-cyan-800 focus:outline-none text-truegray-100 rounded-full">Hire Me</a>
      </Link>
    </div>
  </div>
);

export default Hero;
