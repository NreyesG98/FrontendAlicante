import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>Home</h1>

      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/blog">Blog Post</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
