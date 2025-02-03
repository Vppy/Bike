import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white text-black py-4 border shadow-xl">
      <div className="w-full flex justify-between items-center px-6  ">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link className="hover:text-gray-800 " href="/">
            My Bike Rental
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link className="hover:text-gray-700" href="/">
            Home
          </Link>
          <Link className="hover:text-gray-700" href="/about">
            About
          </Link>
          <Link className="hover:text-gray-700" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
