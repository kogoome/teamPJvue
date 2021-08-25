## 프로젝트 의존성
번들러 : 웹팩(복잡한 라이브러리 사용에 대한 안정성이 좋음)

바벨 : es6이상의 문법을 es5로 컴파일

뷰

뷰 라우터

eslint : 린트

prettier : 포매터

typescript 잘못된 타입연결 오류를 미리 잡아줌

sass scss 사용가능

### 웹팩 설정
/src 폴더 별칭 : `~` 등록 '~/index.html' == '/src/index.html'

## 프로젝트 버전제거 복사하기
워크스페이스 경로 터미널에서

```
npx degit kogoome/vueproject 프로젝트명
```

실행하면 새로운 프로젝트명으로 복사

## 프로젝트 다운 받고 난 후
```
ncu -u
npm ci
npm install
```

순으로 실행하면 package.json에 모듈들이 업데이트, 다운로드


## vscode에서
플러그인 prettier 설치

플러그인 eslint 검색 후 설치

`ctrl` + `shift` + `p` > settings > preferences : Open Settings (JSON) 클릭

```json
"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
}
```
을 추가하면 저장과 동시에 eslint 권장문법 자동적용됨

## 서버시작
```
npm run dev
```

## 깃허브 netlify 서버

https://agitated-mccarthy-a948f7.netlify.app

뷰페이지
