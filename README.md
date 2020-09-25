# Typechain
Learning Typescript by making a Blockchain with it

## Setting Typescript Up
```bash
$ yarn add -D typescript
$ npx tsconfig.json
```

## First steps with Typescript
?는 optional parameter

## Types in Typescript
typescript에서 타입은 변수명 또는 파라미터에 아래와 같이 표현할 수 있다.
```typescript
변수: 타입
파라미터: 타입
```

화살표 함수로 사용시 아래와 같이 표현할 수 있다.
```typescript
const 함수명 = (): 반환타입 => {};
```

tsc-watch를 이용하면 파일을 수정하면 바로 반영시킬 수 있다.
```bash
$ yarn add -D tsc-watch
```

## Interfaces on Typescript
새로운 타입을 선언할때 interface를 사용할 수 있다.
인터페이스는 여러 타입을 가지는 프로퍼티로 이루어진 새로운 타입을 정의하는 것과 유사하다.
