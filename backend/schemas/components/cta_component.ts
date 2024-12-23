import { defineField, defineType } from "sanity";

export default defineType({
  name: "cta_component",
  title: "Call to action",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      title: "Link",
      type: "string",
      description: "Link relative or absolute (https://)",
      validation: (Rule) =>
        Rule.custom((value) => {
          if (
            value &&
            !value.startsWith("/") &&
            !value.startsWith("https://")
          ) {
            return "Wrong URL.";
          }
          return true;
        }).required(),
    }),
  ],
  preview: {
    select: {
      title: "text",
      subtitle: "href",
    },
  },
});
