"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const handelNavShow = () => setShowNav(true);
  const handelNavClose = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={handelNavShow} />
      <MobileNav showNav={showNav} closeNav={handelNavClose} />
    </div>
  );
};

export default ResponsiveNav;
