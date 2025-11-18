import React from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() 
{
     const [open, setOpen] = React.useState(false);

return ( 
<nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
     <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
         {/* Logo */} 
         <div className="flex items-center gap-2"> 
            <div className="w-10 h-10 bg-[#ff4d2d] rounded-full flex items-center justify-center text-white font-bold text-xl"> V </div>
             <span className="text-xl font-semibold text-[#ff4d2d]">Vingo</span> </div>

{/* Desktop Menu */}
    <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
      <li className="cursor-pointer hover:text-[#ff4d2d] transition"><a href="/"/>Home</li>
      <li className="cursor-pointer hover:text-[#ff4d2d] transition">About Us</li>
      <li className="cursor-pointer hover:text-[#ff4d2d] transition">Services</li>
      <li className="cursor-pointer hover:text-[#ff4d2d] transition">Contact</li>
      <li className="cursor-pointer hover:text-[#ff4d2d] transition">Menu</li>
    </ul>

    {/* Buttons */}
    <div className="hidden md:flex items-center gap-4">
      <a href="/signup" className="px-4 py-2 border border-[#ff4d2d] text-[#ff4d2d] rounded-lg hover:bg-[#ff4d2d] hover:text-white transition">Sign Up</a>
    </div>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden text-[#ff4d2d]"
      onClick={() => setOpen(!open)}
    >
      {open ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>

  {/* Mobile Dropdown Menu */}
  {open && (
    <div className="md:hidden bg-white w-full shadow-md animate-fadeIn">
      <ul className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-[#ff4d2d] transition">Home</li>
        <li className="cursor-pointer hover:text-[#ff4d2d] transition">About Us</li>
        <li className="cursor-pointer hover:text-[#ff4d2d] transition">Services</li>
        <li className="cursor-pointer hover:text-[#ff4d2d] transition">Contact</li>
        <li className="cursor-pointer hover:text-[#ff4d2d] transition">Menu</li>
        <a href="/signup" className="w-full px-4 py-2 border border-[#ff4d2d] text-[#ff4d2d] rounded-lg hover:bg-[#ff4d2d] hover:text-white transition mt-2">Sign Up</a>
      </ul>
    </div>
  )}
</nav>

); }