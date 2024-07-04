"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Menu {
  name: string;
  href: string;
}

const MainMenuModal = () => {
  const [menuItems, setMenuItems] = useState<Menu[]>([]);

  useEffect(() => {
    // require를 사용
    const menuData: Menu[] = require("@/app/_constants/menu/menu.json");
    setMenuItems(menuData);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-32 p-6 bg-var(--color-main-1) border-gray-300 shadow-lg rounded-lg">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="block mb-3 font-main-1 hover: font-sub-1"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default MainMenuModal;
