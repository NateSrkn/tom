import React from "react";
import Link from "./Link";
import { SiInstagram, SiBehance, SiLinkedin } from "react-icons/si";
import { BsFillEnvelopeFill } from "react-icons/bs";
const Socials = () => {
  return (
    <ul className="flex gap-6 items-center">
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
        <Link href="https://www.linkedin.com/in/thomas-blankenship-a54916190/">
          <SiLinkedin />
        </Link>
      </li>
      <li>
        <Link href="mailto:hi@tombdesign.com">
          <BsFillEnvelopeFill />
        </Link>
      </li>
    </ul>
  );
};
export default Socials;
