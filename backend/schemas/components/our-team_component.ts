import { defineField, defineType } from "sanity";

export default defineType({
  name: "our-team_component",
  title: "Our team",
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
    // TODO: Add highlighted team member
    // TODO: Add selection of team members
    defineField({
      name: "compare_cta",
      type: "cta_component",
      title: "Call to action",
    }),
  ],
});
