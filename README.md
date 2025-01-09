# react-router-template

[React Router](https://github.com/remix-run/react-router) framework starter repository 🐢

## Tech Stack

| Environments                | Languages                  | Linters                                                                     | Frameworks                          | Libraries                                                       | Testing                             | CI/CD                 |
| :-------------------------- | :------------------------- | :-------------------------------------------------------------------------- | :---------------------------------- | :-------------------------------------------------------------- | :---------------------------------- | :-------------------- |
| ![node-logo]<br>![npm-logo] | ![ts-logo]<br>![sass-logo] | ![eslint-logo]<br>![stylelint-logo]<br>![prettier-logo]<br>![lefthook-logo] | ![vite-logo]<br>![reactrouter-logo] | ![react-logo]<br>![tailwind-logo]<br>![zod-logo]<br>![rhf-logo] | ![vitest-logo]<br>![storybook-logo] | ![githubactions-logo] |

[node-logo]: https://img.shields.io/badge/-Node.js-5FA04E.svg?logo=nodedotjs&style=flat&logoColor=ffffff
[npm-logo]: https://img.shields.io/badge/-npm-CB3837.svg?logo=npm&style=flat&logoColor=ffffff
[eslint-logo]: https://img.shields.io/badge/-ESLint-4B32C3.svg?logo=eslint&style=flat&logoColor=ffffff
[stylelint-logo]: https://img.shields.io/badge/-Stylelint-263238.svg?logo=stylelint&style=flat&logoColor=ffffff
[prettier-logo]: https://img.shields.io/badge/-Prettier-F7B93E.svg?logo=prettier&style=flat&logoColor=000000
[lefthook-logo]: https://img.shields.io/badge/-Lefthook-FF1E1E.svg?logo=lefthook&style=flat&logoColor=000000
[ts-logo]: https://img.shields.io/badge/-TypeScript-3178C6.svg?logo=typescript&style=flat&logoColor=ffffff
[sass-logo]: https://img.shields.io/badge/-Sass-CC6699.svg?logo=sass&style=flat&logoColor=ffffff
[vite-logo]: https://img.shields.io/badge/-Vite-646CFF.svg?logo=vite&style=flat&logoColor=ffffff
[reactrouter-logo]: https://img.shields.io/badge/-React%20Router-CA4245.svg?logo=reactrouter&style=flat&logoColor=ffffff
[react-logo]: https://img.shields.io/badge/-React-61DAFB.svg?logo=react&style=flat&logoColor=000000
[tailwind-logo]: https://img.shields.io/badge/-Tailwind%20CSS-06B6D4.svg?logo=tailwindcss&style=flat&logoColor=ffffff
[zod-logo]: https://img.shields.io/badge/-Zod-3E67B1.svg?logo=zod&style=flat&logoColor=ffffff
[rhf-logo]: https://img.shields.io/badge/-React%20Hook%20Form-EC5990.svg?logo=reacthookform&style=flat&logoColor=ffffff
[vitest-logo]: https://img.shields.io/badge/-Vitest-6E9F18.svg?logo=vitest&style=flat&logoColor=ffffff
[storybook-logo]: https://img.shields.io/badge/-Storybook-FF4785.svg?logo=storybook&style=flat&logoColor=ffffff
[githubactions-logo]: https://img.shields.io/badge/-GitHub%20Actions-2088FF.svg?logo=githubactions&style=flat&logoColor=ffffff

### Other

- [@tanstack/react-query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [framer-motion](https://www.framer.com/motion)
- [tailwind-variants](https://www.tailwind-variants.org)
- [clsx & tailwind-merge](./src/utils/cn.ts)

## Development

1. [Required](#required)
2. [Environment Variables](#environment-variables)
3. [Commands](#commands)

### Required

```ini
node = ">=20.18"
npm = ">=10.9"
```

> [!TIP]
>
> See [`.prototools`](./.prototools) for more details.

### Environment Variables

```ini

```

> [!TIP]
>
> See [`.env.example`](./.env.example) for more details.

### Commands

#### Installing Packages

```sh
npm i
```

> [!IMPORTANT]
>
> After the initial installation (if the format-on-save feature is not working), restart VS Code (IDE).

> [!NOTE]
>
> In the future, I want to migrate the Linter and Formatter from ESLint and Prettier configurations to [Biome](https://biomejs.dev). However, I need to check compatibility by comparing the configuration options.

#### Start Development Server

```sh
npm run dev
```

#### Linting

```sh
npm run lint
```

#### Formatting Code

```sh
npm run format
```

#### Running Storybook (UI component tests)

```sh
npm run sb
```

#### Running Tests

```sh
npm run test
```

> [!TIP]
>
> See [scripts in `package.json`](./package.json) for more details.

> [!WARNING]
>
> I'm using Vite 5 because Vitest 2 is not compatible with Vite 6. According to [Vitest's release announcement](https://github.com/vitest-dev/vitest/releases/tag/v3.0.0-beta.1), compatibility will be added in v3.
