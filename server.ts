console.log("server.ts 시작");

// dotenv를 사용하여 .env 파일을 로드합니다.
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { Request, Response } from "express";
import next from "next";
import getTableAllData from "./app/_utils/backend/get/getTableAllData";
import getTableForIndex from "./app/_utils/backend/get/getTableIndexData";
import dbChecker from "./app/_utils/backend/test/dbChecker";
import postPostsContent from "./app/_utils/backend/post/postPostsContent";
import patchPostContent from "./app/_utils/backend/patch/patchPostContent";
import deletePostData from "./app/_utils/backend/delete/deletePostData";
import getAdminCommands from "./app/_utils/backend/get/getCmdArray";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";

// Express 애플리케이션 인스턴스입니다.
const app = next({ dev });
const handle = app.getRequestHandler();
//app.use(app.getRequestHandler()); 이것도 가능하다.
// * getRequestHandler() 함수는 Next.js 프레임워크에서 제공되는 함수로, Next.js 애플리케이션의 라우팅 및 페이지 처리를 담당합니다. 이 함수는 Express 애플리케이션과 함께 사용될 때, Express의 미들웨어로 동작하여 Next.js의 라우팅을 처리합니다.

// * 서버 라우팅 로직 규칙
// 1.  API 경로와 페이지 경로를 명확히 구분하고, API 라우트는 주로 /api/ 경로 아래에 위치시키는 것이 일반적이다.
// 2. Express 서버에서 CORS 정책을 설정하여, 클라이언트 사이드 애플리케이션의 요청을 안전하게 처리할 수 있도록 해야 합니다.

// * app.prepare() 함수는 Next.js 애플리케이션을 실행하기 전에 필요한 준비 작업을 수행하는 역할을 합니다.
// Next.js 라우팅 시스템을 설정하고 필요한 데이터를 미리 가져오는 등의 작업을 수행합니다.
app.prepare().then(() => {
  const server = express();
  server.use(express.json()); // JSON 요청 본문 파싱을 위해 express.json() 미들웨어를 사용합니다.
  console.log("server.ts 시작");

  // ! ------------------- API 테스트 라우트 -------------------
  // server는 nextjs에서 제공하는 서버 인스턴스라고 한다.
  // 데이터베이스 연결 확인 API
  server.get("/api/db-check", async (req, res) => {
    dbChecker(req, res);
  });

  // * ------------------- COMMANDS TABLE 관련 API 라우트 -------------------

  // 관리자 명령어 조회 API
  server.get("/api/cmdArray", async (req: Request, res: Response) => {
    getAdminCommands(req, res);
  });

  // 유저 조회 API
  server.get("/api/users", async (req: Request, res: Response) => {
    getTableAllData(req, res, "users");
  });

  // * ------------------- POSTS TABLE 관련 API 라우트 -------------------S

  // 포스트 조회 API
  server.get("/api/posts", async (req: Request, res: Response) => {
    getTableAllData(req, res, "posts");
  });

  // 포스트 등록 API
  // 요청 본문에서 title, content, authorId를 받아오면 작동합니다.
  server.post("/api/posts", async (req: Request, res: Response) => {
    postPostsContent(req, res);
  });

  //포스트 id로 조회 API
  server.get("/api/posts/:id", async (req: Request, res: Response) => {
    getTableForIndex(req, res);
  });

  // 포스트 수정 API
  // 내용을 업데이트합니다.
  server.patch("/api/posts/:id", async (req: Request, res: Response) => {
    const postId = req.params.id;
    const { title, content } = req.body;
    console.log("수정 라우트 -postId : ", postId);
    console.log("수정 라우트 -title : ", title);
    console.log("수정 라우트 -content : ", content);

    try {
      await patchPostContent(title, content, postId);
      res.status(200).json({ message: "Post content updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to update post content" });
    }
  });

  // 포스트 삭제 API
  // 해당 id의 포스트를 삭제합니다.
  server.delete("/api/posts/:id", async (req: Request, res: Response) => {
    const postId = req.params.id;
    console.log("삭제 라우트 -postId : ", postId);
    try {
      await deletePostData(req, res, postId);
    } catch (error) {
      console.error("server 에러 콘솔 : ", error);
    }
  });

  // 나머지 모든 요청은 Next.js 핸들러로 전달
  // 모든 HTTP 요청 메서드에 대해 미들웨어 함수를 등록하는 데 사용되는 .all() 메서드
  server.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
