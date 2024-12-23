import { defineConfig, SchemaTypeDefinition } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { colorInput } from "@sanity/color-input";
import { documentInternationalization } from "@sanity/document-internationalization";
import { markdownSchema } from "sanity-plugin-markdown";
import { media } from "sanity-plugin-media";
import { schemaTypes } from "./schemas";
import { deskStructure } from "./desc.structure";
import { CustomMarkdownInput } from "./components/markdown";

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
    documentInternationalization({
      supportedLanguages: [
        { id: "en", title: "English" },
        { id: "es", title: "Spanish" },
      ],
      schemaTypes: ["home_page", "global"],
    }),
  ],

  schema: {
    types: schemaTypes as SchemaTypeDefinition[],
  },
});

export default config;
