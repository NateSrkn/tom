import Link from "./Link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  const ActiveLink = ({ href, children }) => (
    <Link href={href}>
      <span className={router.pathname === href ? "border-b border-black" : ""}>
        {children}
      </span>
    </Link>
  );
  return (
    <header className="max-w-screen-xl mx-auto flex pt-8 md:pt-12 pb-8 justify-between items-center mb-12 md:mb-24">
      <Link href="/">
        <div className="max-w-[40px] sm:max-w-[240px] ">
          <img src={"/tomb.png"} className="hidden sm:block" />
          <img src={"/tomb_mobile.png"} className="block sm:hidden" />
        </div>
      </Link>
      <ul className="flex gap-4">
        <li>
          <ActiveLink href="/">About</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/projects">Projects</ActiveLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
