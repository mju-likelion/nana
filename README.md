# 멋쟁이 사자처럼 홍보 사이트 nana

## Before Start

- 이 프로젝트는 패키지 매니저로 yarn을 권장합니다

## Start Project

```bash
yarn dev
# or
npm run dev

# Error
'next'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.
발생시 git bash에서 `yarn upgrade`를 해주세요


# yarn dev 실행 후
http://localhost:3000에 접속해 보세요
```

## Tech Stack

- React, Next.js
- styled-components, styled-reset

## Convention
### commit message
```
feature: 기능 추가

refactoring: 리팩토링, 기능을 그대로 하고 코드의 최적화, 재구조화

fix: 버그 수정

style: 기능에 지장 가지 않는 스타일 변경

setting: eslint 변경, 라이브러리 설치

document: 주석 추가삭제, readme 변경
```
### branch naming
```
├── main
│-----------hotfix
│-----------relese
└── develop
    └── feature

```
