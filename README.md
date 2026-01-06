# pf-vercel

## 프로젝트 한눈에 보기

- Next.js 14(App Router) + Express를 결합한 포트폴리오/블로그 서비스
- MySQL 기반 게시글 CRUD와 소개/포트폴리오 섹션을 제공하는 풀스택 구성

## 핵심 기능 요약

- 메인/Introduce/About Me/Portfolio 화면으로 이력과 작업물 소개
- 게시글 목록/상세 조회 및 생성·수정·삭제 API (Express 커스텀 서버)
- 관리자용 명령 리스트 조회 API(`/api/cmdArray`), DB 연결 상태 체크(`/api/db-check`)

## 사용 기술

- Frontend: Next.js 14, React 18, Tailwind CSS, FontAwesome
- Backend: Express, MySQL, dotenv, TS 기반 커스텀 서버(`server.ts`)
- 언어/도구: TypeScript, ts-node, nodemon, eslint

## 빠른 실행법

- 요구사항: Node.js 18+, MySQL 인스턴스
- 환경변수(`.env.local`): `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME`, 선택 `PORT`(기본 3000)
- 설치: `npm install`
- 개발 서버: `npm run dev` (Next) / `npm run nodemon-dev` (Express+Next TS 실행)
- 프로덕션 빌드/실행: `npm run build` 후 `npm start`

## 배포·환경설정

- Vercel 배포용 설정 포함(`.vercel/`), 동일한 환경변수 키를 Vercel 프로젝트에 지정
- 커스텀 서버 사용 시 호스팅 환경에서 `PORT` 개방 및 MySQL 보안그룹/방화벽 허용 필요

## 주요 화면·데모 링크

- 메인/포트폴리오/블로그 데모 URL: [ERP 프로젝트 포트폴리오 뷰](https://pf-vercel-snowy.vercel.app/main/introduce/erp)
- 관리자/포스트 관리 뷰 URL: [관리자 시점 포스즈 작성 뷰](https://pf-vercel-snowy.vercel.app/admin)

## API·데이터 흐름

- Express API: `/api/posts`(GET/POST), `/api/posts/:id`(GET/PATCH/DELETE), `/api/users`, `/api/cmdArray`, `/api/db-check`
- 데이터베이스: `app/_utils/dbConnect.ts`에서 MySQL 커넥션 풀 생성 후 각 쿼리 유틸 호출
- 프론트 요청 유틸: `app/_utils/frontend/fetch/*` 의 fetch 래퍼 사용

## 테스트·품질 관리

- 정적 검사: `npm run lint`
- 수동 점검: `/api/db-check`로 DB 연결 확인, 포스트 CRUD 엔드포인트 호출
- 별도 자동화 테스트는 아직 없음(추가 필요)

## 현재 한계와 개선 계획

- 인증/권한 분리 미흡 → 관리자 전용 라우트 보호 필요
- 입력 검증·에러 핸들링 보강 필요(특히 게시글 CRUD)
- 배포 환경별 DB 구성 문서화 및 헬스체크 자동화 TODO

## 연락처·레퍼런스

- 포트폴리오: [포트폴리오 노션](https://www.notion.so/5fb3fd57ed1544c6b379ec0856dff540)
- 이메일 : yoonjieut@gmail.com
