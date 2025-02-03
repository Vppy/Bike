import Link from 'next/link';

export default function NavbarPage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white text-black py-5">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="text-2xl font-extrabold text-red-500">
            <Link href="/">SpeedCraft</Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6 font-bold">
            <li>
              <Link href="/" className="hover:text-red-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/bike" className="hover:text-red-500 transition">
                Bikes
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-500 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/location" className="hover:text-red-500 transition">
                Location
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-500 transition">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
</div>
    );
    }
