import React from "react";
import NextLink from "next/link";

const Link = ({ href, children, forceNewTab = false, ...props }) => {
  const isNewTab = forceNewTab || href.startsWith("http");
  const rel = isNewTab ? "noopener noreferrer" : undefined;
  const target = isNewTab ? "_blank" : "_self";
  return (
    <NextLink href={href} passHref {...props} rel={rel} target={target}>
      {children}
    </NextLink>
  );
};

export default Link;
