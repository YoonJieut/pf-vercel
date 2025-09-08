// aboutme에 있는 portfolio section에 들어갈 아이템입니다.

import Image from "next/image";
import Link from "next/link";

interface PortfolioItemProps {
  name: string;
  path: string;
  stack: string[];
  imgUrl: string;
  imgAlt: string;
  content: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  name,
  path,
  stack,
  imgUrl,
  imgAlt,
  content,
}) => {
  return (
    <Link href={path}>
      <div className="w-[21.063rem] flex flex-col items-start justify-start gap-[0.625rem]">
        <div className="w-full flex flex-col items-start justify-start gap-[0.313rem]">
          <b className="relative tracking-[-0.05em] leading-[101%]">{name}</b>
          <div className="relative text-[0.75rem] tracking-[-0.05em] leading-[114%] whitespace-pre-wrap">
            {content}
          </div>
        </div>
        <div className="w-[21.063rem] flex flex-row flex-wrap items-start justify-start gap-[0.625rem] text-[0.75rem]">
          {stack.map((tech, index) => (
            <div
              key={index}
              className="rounded-full overflow-hidden flex flex-row items-center justify-center py-[0.188rem] px-[0.688rem] border-[1px] border-solid border-gainsboro"
            >
              <div className="relative tracking-[-0.05em] leading-[101%]">
                {tech}
              </div>
            </div>
          ))}
        </div>
        <Image
          className="border-[1px] border-solid border-gainsboro"
          src={imgUrl}
          alt={imgAlt}
          width={350}
          height={200}
        />
      </div>
    </Link>
  );
};

export default PortfolioItem;
