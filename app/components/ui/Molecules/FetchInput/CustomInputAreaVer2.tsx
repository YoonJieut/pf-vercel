"use client";

import { Menu } from "@/app/_interfaces/common/Menu";
import { checkWordInArray } from "@/app/_utils/checkWordInArray";
import fetchJSON from "@/app/_utils/frontend/fetch/fetchJSON";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TipComp from "../etc/TipComp";

const placeholders = ["Type here.", "Type here..", "Type here..."];
const localMenuData: Menu[] = require("@/app/_constants/menu/menu.json");

export const CustomInputAreaVer2 = (): JSX.Element => {
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // 라우트 전용
  const router = useRouter();
  function moveToPage(page: string) {
    // 다른 페이지로 이동
    router.push(page);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholderIndex(
        (prevIndex) => (prevIndex + 1) % placeholders.length
      );
    }, 700);
    // 언마운트 될 때 나오는 cleanup 함수
    return () => clearInterval(interval);
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // 페치로 배열 가져오기
      fetchJSON("/api/cmdArray")
        .then((data) => {
          handleInput(data);
        })
        .catch((error) => {
          console.error(
            "데이터를 불러오는데 실패했습니다. Local Data를 활용합니다.",
            error
          );
          handleInput(localMenuData);
        });
    }
  };

  const handleInput = (data: Menu[]) => {
    const menuItem = data.find(
      (item) => item.name.toLowerCase() === inputValue.toLowerCase()
    );
    if (menuItem) {
      moveToPage(menuItem.href);
    } else {
      moveToPage("/main");
    }
  };

  return (
    <div className="w-full ml-10">
      <label htmlFor="customInput" title="주소 이동 입력창">
        ㄹ
        <TipComp message="가고 싶은 메뉴를 입력해주세요">
          <input
            id="customInput"
            style={{
              background: "transparent",
              fontSize: "257px",
              textAlign: "left",
              letterSpacing: "-0.03em",
              outline: "none",
              padding: "0px",
            }}
            className="koulen w-3/4 font-sub-1"
            placeholder={placeholders[currentPlaceholderIndex]}
            onKeyPress={handleKeyPress}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus
          />
        </TipComp>
      </label>
    </div>
  );
};
