import { Children } from "react";

import React from "react";

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </React.Fragment>
  );
};
