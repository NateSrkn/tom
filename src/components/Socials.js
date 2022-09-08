import React from "react";
import Link from "./Link";
import { SiInstagram, SiTwitter, SiBehance } from "react-icons/si";
const Socials = () => {
  return (
    <ul className="flex gap-6">
      <li>
        <Link href="http://instagram.com/tomb.design">
          <SiInstagram />
        </Link>
      </li>
      <li>
        <Link href="https://www.behance.net/tomb-design">
          <SiBehance />
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com/TmBlnknshp">
          <SiTwitter />
        </Link>
      </li>
    </ul>
  );
};
export default Socials;
