# TimeWaster `v2.0.0`

> waste your time reading this md which tells u how to waste time

![TimeWaster-logo](./docs/logo.gif)

## dependencies

- [Vite](https://github.com/vitejs/vite)
- [Vue3](https://v3.vuejs.org/)
- [typescript](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html)
- [tailwind](https://tailwindcss.com/docs)

## Exercise

- alias
- script setup
- ref
- reactive
- component(auto import)
- computed
- watchEffect
- hooks
- date extend
- random unsplash pic---[reference](https://github.com/ccbikai/vue-random-pic/blob/master/index.js)
- git/api issues
- git/token crypt


## Configure

config of github/api
```
//  ./package.json
{
    "config": {
        "owner": "Mulander-J",  //owner
        "repo": "timeWaster",   //repo
        "label": "heart"    //custom-label
    },
}
```
config of github/api/token
> require pubKey、priKey、token 
```
//  ./util/auth.ts
const pubKey = 'XXXXXXX' // 公钥地址-来自加密算法
const authText = 'XXXXXXX'  //  加密的token，来自github设置-创建token
```


## Build Setup

```bash
# install pnpm
npm install pnpm -g

# install dependencies
pnpm install

# serve with hot reload at localhost:8080
pnpm dev

# build for production with minification
pnpm build

```
