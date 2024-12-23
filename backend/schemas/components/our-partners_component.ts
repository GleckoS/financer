import { defineField, defineType } from "sanity";

export default defineType({
  name: "our-partners_component",
  title: "Our partners",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "markdown",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "markdown",
      validation: (Rule) => Rule.required(),
    }),
    // TODO: Add selection of partners
    defineField({
      name: "compare_cta",
      type: "cta_component",
      title: "Call to action",
    }),
  ],
});
