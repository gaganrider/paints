import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between h-20 bg-blue-500 items-center px-7 ">
      <span>logo</span>
      <ul>
        <Link href="/" className="navbar-item">About</Link>
        <Link href="/" className="navbar-item">Category</Link>
        <Link href="/" className="navbar-item">Services</Link>
        <Link href="/" className="navbar-item">Colors</Link>
        <Link href="/" className="navbar-item">Downloads</Link>
        <Link href="/" className="navbar-item">Become a Dealer</Link>
        <Link href="/" className="navbar-item">Blogs</Link>
        <Link href="/" className="navbar-item" >Contact</Link>
        <Link href="/" className="navbar-item" >Enquire Now</Link>
      </ul>
    </nav>
  );
}
