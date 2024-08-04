import { BackgroundCircles, Rings, SideLines } from "@/Design/Header";
import { background } from "@/public/assets";
import React from "react";
import Image from "next/image";

function MobileNav() {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.03]">
       
      </div>

      <Rings />

      <SideLines />

      <BackgroundCircles />
    </div>
  );
}

export default MobileNav;
