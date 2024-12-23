import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "loan-compare_component",
  title: "Loan compare",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "markdown",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "list",
      type: "array",
      title: "Benefits list",
      of: [
        defineArrayMember({
          name: "benefit",
          title: "Benefit",
          type: "markdown",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "compare_block_title",
      type: "markdown",
      title: "Compare block title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "compare_block_annotation",
      type: "markdown",
      title: "Compare block annotation",
    }),
    defineField({
      name: "compare_min_amount",
      type: "number",
      title: "Compare minimal amount",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "compare_max_amount",
      type: "number",
      title: "Compare maximal amount",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "compare_cta",
      type: "cta_component",
      title: "Call to action",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
