"use client";

import React, { useEffect, useState } from "react";
import {
  PostAuthorIdProps,
  PostContentProps,
  PostIdProps,
  PostTitleProps,
} from "@/app/_interfaces/dbInterfaces/PostTableProps";
import PostsTableItem from "@/app/components/ui/Molecules/Lists/PostsTableItem";

export interface Post
  extends PostIdProps,
    PostTitleProps,
    PostContentProps,
    PostAuthorIdProps {}

export default function PostsTable() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("api/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error: any) {
        console.error(error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="Loading w-full h-full flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="Error w-full h-full flex justify-center items-center">
        Error: {error}
      </div>
    );
  }

  return (
    <ul className="postsTable w-full h-full flex flex-col space-y-8 overflow-y-scroll overflow-x-hidden">
      {posts.map((post) => (
        <PostsTableItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
