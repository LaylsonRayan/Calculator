import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-end items-center px-4 py-5">
      <ul className="flex list-none">
        <li className="mr-3">
          <Link href="/">
            <a className="text-decoration-none px-2 py-1 transition duration-400 border-b-2 border-transparent hover:border-black">
                Home
            </a>
          </Link>
        </li>
        <li className="mr-3">
          <Link href="/about">
            <a className="text-decoration-none px-2 py-1 transition duration-400 border-b-2 border-transparent hover:border-black">
                About
            </a>
          </Link>
        </li>
        <li className="mr-3">
          <Link href="/socials">
            <a className="text-decoration-none px-2 py-1 transition duration-400 border-b-2 border-transparent hover:border-black">
                Socials
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}