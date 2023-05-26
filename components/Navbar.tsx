import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-black p-4 px-10 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-white">
        <Link href="/">FEAR.</Link>
      </h1>

      <ul className="text-white flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/blogs">Blogs</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
