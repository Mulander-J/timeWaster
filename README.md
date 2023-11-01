# TimeWaster 

Various tech stack practice projects.

![timeWaster-logo](./docs/logo.gif)

## Tech Stack

1. Lang: JavaScript / TypeScript / AssemblyScript / Rust
2. Frameworks: Vue2 / Vue3 / React / Svelte
3. CSS: Sass / Less / WindiCSS / Tailwind / UnoCSS
4. ToolKit: SvelteKit / Tauri / Ratatui
5. Plugins: Pug
6. Bundle: Webpack / Vite / Turbo
7. Lint: Prettier / Eslint / Husky

## Build Setup

``` bash
# install dependencies
pnpm install

# serve with hot reload at localhost:8080
pnpm run dev

# build for production with minification
pnpm run build

# build for production and view the bundle analyzer report
pnpm run build --report

# serve via rust
cargo run
```

## [Versions](https://github.com/Mulander-J/timeWaster/releases) (Latest `v6.0.0`)

> If the old version is displayed, you can empty cache & hard reload or unregister the service-worker.

### `v6.0.0`

- [Rust](https://www.rust-lang.org/)
- [ratatui/tui](https://ratatui.rs/)

```bash
cagro run
cagro build
```

![twaster@v6-1](./docs/twaster@v6_1.png)
![twaster@v6-2](./docs/twaster@v6_2.png)

### `v5.0.0`

- [Tauri](https://tauri.app/zh-cn/) + [Svelte](https://svelte.dev/) + [Rust](https://www.rust-lang.org/)
- SvelteKit + Vite

```bash
# set vs_BuildTools
rustup toolchain install stable-x86_64-pc-windows-msvc
rustup default stable-x86_64-pc-windows-msvc
# serve via tauri
pnpm tauri dev
# build release
pnpm tauri build
# build release with target  
pnpm tauri build --target x86_64-pc-windows-msvc
```

![twaster@v5-1](./docs/twaster@v5_1.png)
![twaster@v5-2](./docs/twaster@v5_2.gif)

### `v4.0.0`

- AssemblyScript
- ReactApp + Vite
- TailwindCSS + Framer Motion + Emotion
- TS + Prettier + Eslint + Husky

![twaster@v4-1](./docs/twaster@v4_1.png)
![twaster@v4-2](./docs/twaster@v4_2.gif)

### `v3.0.0`

- Vue3 + Pug
- TS + Vite + Turbo
- UnoCSS + Sass

![twaster@v3-1](./docs/twaster@v3_1.png)
![twaster@v3-2](./docs/twaster@v3_2.png)

### `v2.0.0`

Vue3 + Vite + WindiCSS

![twaster@v2](./docs/twaster@v2.png)

### `v1.0.0`

Vue2

![twaster@v1-1](./docs/twaster@v1_1.png)
![twaster@v1-2](./docs/twaster@v1_2.png)
