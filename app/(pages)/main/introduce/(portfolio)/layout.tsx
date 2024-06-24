import dynamic from "next/dynamic";

const MenuComp = dynamic(() => import("./@menuComp/page"), { ssr: false });

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-11/12 flex">
      <section className="portfolioLeftSection w-1/2 h-full">
        <MenuComp />
      </section>

      <section className="portfolioRightSection w-1/2  flex flex-col gap-[300px] overflow-x-hidden overflow-y-scroll text-[0.875rem] leading-[120%]">
        {children}
      </section>
    </div>
  );
}
