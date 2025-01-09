import type { Config } from "@react-router/dev/config";

const config = {
  ssr: true, // Server-side render by default, to enable SPA mode set this to `false`
  appDirectory: "./src/app",
} satisfies Config;

export default config;
