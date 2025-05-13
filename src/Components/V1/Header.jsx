import { AlignLeft, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/Home/logo.png";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(isScrolled);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);
  return (
    <>
      <div
        className="fixed w-full flex justify-between items-center px-6 lg:px-10 z-10 -top-1"
        style={{
          backgroundColor: isScrolled ? "white" : "transparent",
          boxShadow: isScrolled ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div className="flex items-center" style={{ width: "12%" }}>
          <img
            src={logo}
            alt="logo"
            className="h-25"
            style={{ width: "100%" }}
          />
        </div>
        <div className="flex items-center gap-4 md:gap-8 font-semibold text-sm">
          <div
            className="header-menu-items lg:flex gap-8 items-center hidden"
            style={{ color: isScrolled ? "black" : "white" }}
          >
            <Link to={"/"}>Products</Link>
            <Link to={"/"}>Services</Link>
            <Link to={"/"}>Work</Link>
            <Link to={"/"}>Process</Link>
            <Link to={"/"}>Insights</Link>
            <Link to={"/"}>FATbit</Link>
            <Link to={"/"}>Hire Our Experts</Link>
          </div>
          <Link
            to={"/"}
            className="bg-[#3F4CCC] px-6 py-3 font-medium text-white rounded-sm"
          >
            Contact Us
          </Link>
          <div>
            <AlignLeft
              strokeWidth={3}
              color="black"
              className="block lg:hidden cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 z-30 w-80 h-full bg-white shadow-lg p-6 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-zinc-800">Menu</h3>
          <X className="cursor-pointer" onClick={closeMenu} />
        </div>

        <nav className="flex flex-col gap-6 text-lg font-semibold">
          <Link href="/" onClick={closeMenu}>
            Products
          </Link>
          <Link href="/" onClick={closeMenu}>
            Services
          </Link>
          <Link href="/" onClick={closeMenu}>
            Work
          </Link>
          <Link href="/" onClick={closeMenu}>
            Process
          </Link>
          <Link href="/" onClick={closeMenu}>
            Insights
          </Link>
          <Link href="/" onClick={closeMenu}>
            FATbit
          </Link>
          <Link href="/" onClick={closeMenu}>
            Hire Our Experts
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Header;
