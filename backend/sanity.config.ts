import { defineConfig, SchemaTypeDefinition } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { colorInput } from "@sanity/color-input";
import { markdownSchema } from "sanity-plugin-markdown";
import { media } from "sanity-plugin-media";
import { schemaTypes, singleTypes } from "./schemas";
import { deskStructure } from "./desc.structure";
import { CustomMarkdownInput } from "./components/markdown";

const singletonTypes = new Set(singleTypes.map((type) => type.name));

const config = defineConfig({
  name: "default",
  title: "Financer",

  projectId: "10rwhj3k",
  dataset: "production",

  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool(),
    markdownSchema({ input: CustomMarkdownInput }),
    media(),
    colorInput(),
  ],

  schema: {
    types: schemaTypes as SchemaTypeDefinition[],
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
});

export default config;
