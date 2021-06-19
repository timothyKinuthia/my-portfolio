import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-20 px-4 py-4 lg:flex justify-center">
      <div className="lg:w-3/4 lg:flex justify-between items-center border-t-2 border-bluegray-800 px-4 py-10">
        <div className="flex items-center px-4 py-6 flex-1 lg:text-lg text-truegray-200 font-medium">
          <div className="">
            <Link href="tel:+254-775-672-127">
              <a className="flex flex-col space-y-1 hover:text-truegray-400">
                <span>Call</span>
                <span>+254-775-672-127</span>
              </a>
            </Link>
          </div>

          <div >
            <Link href="mailto:timothy9369@gmail.com">
              <a className="ml-24 flex flex-col space-y-1 hover:text-truegray-400">
                <span>Email</span>
                <span>timothy9369@gmail.com</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="px-6 py-4 flex items-center space-x-4 text-truegray-200">
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
    </div>
  );
};

export default Footer;
