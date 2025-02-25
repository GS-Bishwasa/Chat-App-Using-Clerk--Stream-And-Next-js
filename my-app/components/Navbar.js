"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
// import { useUser } from "@clerk/nextjs";

const Navbar = () => {
  // const user = useUser()
  // console.log(user.user?.id)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
        ∑ Chart
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/forums">Forums</NavLink>
          <NavLink href="/chat">UserChat</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink className='flex justify-center items-center' href="#">
            <UserButton/>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 py-4 space-y-3">
          <NavLink href="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink href="/forums" onClick={() => setIsOpen(false)}>Forums</NavLink>
          <NavLink href="/chat" onClick={() => setIsOpen(false)}>UserChat</NavLink>
          <NavLink href="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink className='flex justify-center items-center' href="#">
            <UserButton/>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

// Reusable NavLink Component
const NavLink = ({ href, children, onClick }) => {
  return (
    <Link href={href} className="hover:text-gray-400 transition duration-200" onClick={onClick}>
      {children}
    </Link>
  );
};

export default Navbar;
