import { defineField, defineType } from "sanity";

export default defineType({
  name: "flex-content_component",
  title: "Flexible content",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "markdown",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "markdown",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cta",
      type: "cta_component",
      title: "Call to action",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image_position",
      title: "Image Position",
      type: "string",
      initialValue: "right",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
      },
    }),
  ],
});
