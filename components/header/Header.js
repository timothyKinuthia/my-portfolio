import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

const Header = ({dimension}) => {


  return (
    <div
      className="lg:flex justify-around items-center"
      
    >
      <nav className="lg:mt-4 w-full md:w-2/3 ">
        <ul
          className={
            dimension < 760
              ? "flex flex-col space-y-2 text-truegray-300 font-bold cursor-pointer"
              : "-ml-6 text-xl flex justify-around items-center sm:space-x-6 text-truegray-300 font-bold"
          }
        >
          <li className="pl-4 md:pl-0 ">
            <Link href="/">
              <a className="text-gray-300 block text-center">
                <span className="ml-2 text-2xl font-bold ">Portfolio</span>
              </a>
            </Link>
          </li>

          <li className={dimension < 760 && "px-4 hover:bg-bluegray-700 py-2"}>
            <Link href="#projects">
              <a className="hover:text-truegray-400 text-xl">Projects</a>
            </Link>
          </li>

          <li className={dimension < 760 && "px-4 hover:bg-bluegray-700 py-2"}>
            <Link href="#tech">
              <a className="hover:text-truegray-400">Technologies</a>
            </Link>
          </li>

          <li className={dimension < 760 && "px-4 hover:bg-bluegray-700 py-2"}>
            <Link href="#about">
              <a className="hover:text-truegray-400">About</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-4 ml-6  text-truegray-200 flex">
        <Link href="https://github.com/timothyKinuthia">
          <a className="hover:text-truegray-400">
            <AiFillGithub size="2.5rem" />
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/timothy-kinuthia-a53684214">
          <a className="ml-4 hover:text-truegray-400">
            <AiFillLinkedin size="2.5rem" />
          </a>
        </Link>

        <Link href="https://www.facebook.com/timothy.kinuthia.98">
          <a className="ml-4 hover:text-truegray-400">
            <AiFillFacebook size="2.5rem" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
