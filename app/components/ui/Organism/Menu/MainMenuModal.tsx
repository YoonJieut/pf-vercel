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
    <div className="fixed right-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-64 p-6 bg-white border border-gray-300 shadow-lg rounded-lg">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="block mb-3 text-gray-700 hover:text-blue-500"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default MainMenuModal;
