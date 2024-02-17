import { useState } from "react"

const Nav=()=> {
const [menuOpen, setMenuOpen] = useState(false);
const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};
return (
    <div>
      {/* Navigation */}
    <nav className="bg-black p-4 relative">
        <div className="container mx-auto flex items-center justify-between">
        <div className="text-white">
            <h1 className="text-xl text-white font-bold">GHINIUD</h1>
        </div>
        <div className="hidden md:flex space-x-4 ">
            <a href="#" className="text-red-400">
            Home
            </a>
            <a href="#" className="text-white">
            About
            </a>
            <a href="#" className="text-white">
            Contact
            </a>
        </div>
        <div className="md:hidden">
            <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            >
            <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            </button>
        </div>
        </div>
    </nav>
      {/* Mobile Navigation Menu */}
    {menuOpen && (
        <div className="md:hidden bg-black p-4">
        <a href="#" className="block text-red-600 py-2">
            Home
        </a>
        <a href="#" className="block text-red-600 py-2">
            About
        </a>
        <a href="#" className="block text-red-600 py-2">
            Contact
        </a>
        </div>
    )}
    </div>
)
}

export default Nav