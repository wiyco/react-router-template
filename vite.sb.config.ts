import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

/**
 * Config for Using Storybook with React Router.
 * Error: The React Router Vite plugin requires the use of a Vite config file
 */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  process.env = { ...process.env, ...env };
  return {
    plugins: [tsconfigPaths()],
  };
});
