import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-[#02232d] text-white p-3 flex justify-between items-center px-10">
      <h1 className="font-bold text-3xl">
        <Link href="/">BLOG.</Link>
      </h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="" className="cursor-not-allowed">
          About
        </Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="" className="cursor-not-allowed">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
