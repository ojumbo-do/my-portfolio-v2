import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Socials() {
  return (
    <div className="fixed top-1/2 right-5 md:right-10 z-20 flex flex-col gap-3 transform -translate-y-1/2">
      <a
        href="http://www.linkedin.com/in/dancun-ojumbo-a5a278182"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl text-tertiary hover:text-secondary shadow-lg hover:scale-105 transition-all transform duration-300 ease-in-out"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/ojumbo-do"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl text-tertiary hover:text-secondary shadow-lg hover:scale-105 transition-all transform duration-300 ease-in-out"
      >
        <FaGithubSquare />
      </a>
    </div>
  );
}

export default Socials;
