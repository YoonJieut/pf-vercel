// pages/aboutme.tsx
"use client";
import portfolioMessage from "@/app/_constants/portfolio/portfolioMessage";
import type { NextPage } from "next";
import PortfolioItem from "@/app/components/ui/Molecules/Lists/PortfolioItem";

const AboutMePf: NextPage = () => {
  return (
    <div className="w-1/4 h-full relative bg-darkgray [backdrop-filter:blur(10px)] box-border overflow-y-scroll overflow-hidden flex flex-col items-start justify-start p-[1.25rem] gap-[3.75rem_0rem] text-left text-[1rem] text-lightgray font-noto-sans-kr border-[1px] border-solid border-lightgray">
      <div className="w-[10rem] relative h-[1.688rem]">
        <div className="absolute h-[3.7%] w-full top-[96.3%] right-[0%] bottom-[0%] left-[0%] bg-lightgray" />
        <b className="absolute top-[0%] left-[0%] leading-[101%]">포트폴리오</b>
      </div>
      {portfolioMessage.map((item, index) => (
        <PortfolioItem
          key={index}
          name={item.name}
          path={item.path}
          stack={item.stack}
          imgUrl={item.imgUrl}
          imgAlt={item.imgAlt}
          content={item.introduce.content}
        />
      ))}
    </div>
  );
};

export default AboutMePf;
