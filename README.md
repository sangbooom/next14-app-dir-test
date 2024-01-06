## Test Playground

### 서버컴포넌트는 비동기라서 작업이 완료될 때까지 컴포넌트가 차단된다. fetch api 응답시간에 영향을 받기 때문에 그떄까지 로딩을 보여줘야 사용자 경험이 증가한다.
`npx json-server --watch -p 9999 db.json --delay 5000` 로 모든 api에 5초 딜레이를 주면 그만큼 로딩 시간이 길어짐

![스크린샷 2024-01-06 오후 11 03 14](https://github.com/sangbooom/next14-app-dir-test/assets/43921054/c4bf4b28-e2e5-4e03-be57-6ba8b4c54e3a)

### RSC payload에는 fetch 결과가 입혀져 완성된 html이 다 담긴 채 저장되어 있다.
![스크린샷 2024-01-06 오후 11 21 29](https://github.com/sangbooom/next14-app-dir-test/assets/43921054/4fd9ea0f-bae9-4540-8d33-0b868e9ed717)

### {segment}/?_rsc={hash}를 두번 호출하는 이유는? 모르겠음, 핵심은 두번째꺼.

### 클라이언트 컴포넌트도 서버 컴포넌트에 담긴채 렌더링 된 후에 hydrate 된다
> [참고](https://velog.io/@gustjq4146/Next.js%EC%9D%98-%EB%A0%8C%EB%8D%94%EB%A7%81%EC%97%90-%EA%B4%80%ED%95%98%EC%97%AC#%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%90%A0%EA%B9%8C)

![스크린샷 2024-01-07 오전 1 14 32](https://github.com/sangbooom/next14-app-dir-test/assets/43921054/ed428ab2-e80e-4608-83f8-3b2e69fa29f7)
