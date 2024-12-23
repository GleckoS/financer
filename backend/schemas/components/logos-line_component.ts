import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "logos-line_component",
  title: "Logos line",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "list",
      type: "array",
      title: "Logos",
      of: [
        defineArrayMember({
          name: "logo",
          type: "image",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
});
