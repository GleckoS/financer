import { defineField, defineType } from "sanity";

export default defineType({
  name: "image-cta_component",
  title: "Image CTA",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "markdown",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cta",
      type: "cta_component",
      title: "Call to action",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
