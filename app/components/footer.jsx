// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t border-transparent bg-[#0d1224]/80 backdrop-blur-md text-white"
      style={{
        borderImage: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), rgba(236,72,153,0.3), rgba(22,242,179,0.3), transparent) 1",
      }}
    >
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">
            © Developer Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/abhishekkumar4444/" className="text-[#16f2b3] hover:text-pink-400 transition-colors duration-300">Abhishek kumar</Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/Abhishekkumar4444/my-profile"
              className="flex items-center gap-2 uppercase text-gray-400 hover:text-[#16f2b3] transition-all duration-300 hover:drop-shadow-[0_0_6px_rgba(22,242,179,0.4)]"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/Abhishekkumar4444/my-profile/fork"
              className="flex items-center gap-2 uppercase text-gray-400 hover:text-[#16f2b3] transition-all duration-300 hover:drop-shadow-[0_0_6px_rgba(22,242,179,0.4)]"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;