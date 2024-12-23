import { defineField, defineType } from "sanity";

export default defineType({
  name: "calculators-listing_component",
  title: "Calculators listing",
  type: "object",
  fields: [
    defineField({
      name: "annotation",
      title: "Annotation above title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "markdown",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "load_more",
      title: "Load more",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "background",
      type: "image",
      title: "Background image",
      validation: (Rule) => Rule.required(),
    })
  ],
});
