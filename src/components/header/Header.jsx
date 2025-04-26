import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // You can use any icon library you like

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={1000}
          className="cursor-pointer"
        >
          <div className="text-2xl font-bold text-blue-600">Sachin Kolhe</div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="about"
            smooth={true}
            duration={1000}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={1000}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              to="about"
              smooth={true}
              duration={1000}
              onClick={toggleMenu}
              className="cursor-pointer hover:text-blue-600 transition"
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              onClick={toggleMenu}
              className="cursor-pointer hover:text-blue-600 transition"
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={1000}
              onClick={toggleMenu}
              className="cursor-pointer hover:text-blue-600 transition"
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              onClick={toggleMenu}
              className="cursor-pointer hover:text-blue-600 transition"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
