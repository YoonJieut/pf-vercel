"use client";

import useMenuNavigation from "@/app/_hook/portfolio/useMenuNavigation";
import PfItemsLayout from "./PfItemsLayout";

const MenuComp = () => {
  const { currentIndex, prevIndex, nextIndex } = useMenuNavigation();

  return (
    <div className="menuPart">
      <PfItemsLayout
        prevIndex={prevIndex}
        nextIndex={nextIndex}
        currentIndex={currentIndex}
      />
    </div>
  );
};

export default MenuComp;
