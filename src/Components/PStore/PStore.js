import React, { useState } from "react";

import Header from "./Header";
import HeadersBottom from "./HeadersBottom";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

export default function PStore() {
  return (
    <>
      <Topbar />
      <Navbar />

      <Header />
      <HeadersBottom />
    </>
  );
}
