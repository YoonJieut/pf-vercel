// app/(pages)/posts/page.tsx
// 해당 페이지는 게시물 목록을 보여주는 페이지입니다.

"use client";
import PostTitle from "@/app/components/ui/design/PostTitle";
// import { useState } from "react";

// todo : 상호작용 이펙트 수정할 필요가 있어보임
export default function PostsPage(PostTable: any) {
  // const [selectedText, setSelectedText] = useState("| 게시물 분류");

  // const handleLiClick = (text: string) => {
  //   setSelectedText(`| ${text}`);
  // };

  return (
    <>
      <PostTitle />
    </>
  );
}
