import { defineField, defineType } from "sanity";

export default defineType({
  name: "global",
  title: "Global parameters",
  type: "document",
  icon: () => "🌍",
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "footer",
      type: "footer_component",
      title: "Footer",
      options: { collapsible: true, collapsed: true },
    }),
    defineField({
      name: "seo",
      type: "seo_component",
      title: "Global SEO",
    }),
  ],
});
