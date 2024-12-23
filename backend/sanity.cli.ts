import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "10rwhj3k",
    dataset: "production",
  },
  vite: (config) => {
    return {
      ...config,
      build: {
        ...config.build,
        target: "esnext",
      },
    };
  },
  autoUpdates: true,
});
