import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    alias: {
      // Make sure to also update aliases in the ts config file of the tests
      "@src": new URL("./src", import.meta.url).pathname,
    },
  },
});
