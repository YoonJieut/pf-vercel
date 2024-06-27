"use client";
import React from "react";
import MainFooter from "@/app/components/ui/Organism/Footer/MainFooter";
import PostsHeader from "@/app/components/ui/Organism/Header/PostsHeader";

export default function RootLayout({
  children,
  postsTable,
}: {
  children: React.ReactNode;
  postsTable: React.ReactNode;
}) {
  return (
    <div className="postsRoot w-screen h-screen flex flex-col overflow-hidden pb-[10px]">
      <PostsHeader />
      <main className="postsMain w-full h-full flex justify-between bg-main overflow-hidden mb-[10px]">
        <div className="w-5/12 ">{children}</div>
        <div className="w-7/12 pt-5">{postsTable}</div>
      </main>
      <MainFooter />
    </div>
  );
}
