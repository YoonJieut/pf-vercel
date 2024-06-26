"use client";

import MenuComp from "@/app/components/MenuComp";
import { useState } from "react";
import PortfolioPage from "./page";

export default function PortfolioLayout() {
  const [state, setState] = useState(1);

  const handleClick = () => {
    setState(state + 1);
  };

  return (
    <div className="w-full h-11/12 flex">
      <button type="button" onClick={handleClick}>
        Click me
      </button>
      <section className="portfolioLeftSection w-1/2 h-full">
        <MenuComp />
      </section>

      <section className="portfolioRightSection w-1/2  flex flex-col gap-[300px] overflow-x-hidden overflow-y-scroll text-[0.875rem] leading-[120%]">
        <PortfolioPage value={state} />
      </section>
    </div>
  );
}
