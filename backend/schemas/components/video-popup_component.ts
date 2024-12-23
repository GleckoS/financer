import { defineField, defineType } from "sanity";

export default defineType({
  name: "video-popup_component",
  title: "Video popup",
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
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "open_button",
      title: "Open video button",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "video_url",
      title: "Video URL",
      type: "string",
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value || !value.startsWith("https://")) {
            return "Wrong URL.";
          }
          return true;
        }).required(),
    }),
    defineField({
      name: "sub_link",
      type: "cta_component",
      title: "Sub link",
    }),
    defineField({
      name: "background",
      type: "image",
      title: "Background image",
      validation: (Rule) => Rule.required(),
    })
  ],
});
