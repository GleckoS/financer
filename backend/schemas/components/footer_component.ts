import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "footer_component",
  title: "Footer",
  type: "object",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Text under logo",
      type: "markdown",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link_columns_list",
      type: "array",
      title: "Links columns",
      of: [
        defineArrayMember({
          name: "column",
          type: "object",
          title: "Column",
          fields: [
            defineField({
              name: "column_title",
              title: "Column title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "column_links",
              title: "Column links",
              type: "array",
              validation: (Rule) => Rule.required(),
              of: [
                defineArrayMember({
                  name: "column_link",
                  title: "Link",
                  type: "cta_component",
                }),
              ],
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "social_media_title",
      type: "string",
      title: "Social media title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "social_media_list",
      type: "array",
      title: "Social media list",
      of: [
        defineArrayMember({
          name: "column",
          type: "object",
          title: "Column",
          fields: [
            defineField({
              name: "social_media_icon",
              title: "Icon",
              type: "image",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "social_media_link",
              title: "Link",
              type: "string",
              validation: (Rule) =>
                Rule.custom((value) => {
                  if (!value || !value.startsWith("https://")) {
                    return "Wrong URL.";
                  }
                  return true;
                }).required(),
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "languages_title",
      type: "string",
      title: "Languages title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "languages_columns_list",
      type: "array",
      title: "Links columns",
      of: [
        defineArrayMember({
          name: "column",
          type: "object",
          title: "Column",
          fields: [
            defineField({
              name: "column_title",
              title: "Column title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "column_links",
              title: "Column links",
              type: "array",
              validation: (Rule) => Rule.required(),
              of: [
                defineArrayMember({
                  name: "column_language",
                  title: "Languages",
                  type: "object",
                  fields: [
                    defineField({
                      name: "flag",
                      title: "Flag",
                      type: "image",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "language",
                      title: "Language",
                      type: "string",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "annotation",
      type: "markdown",
      title: "Annotation",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "additional_links",
      title: "Additional links",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          name: "link",
          title: "Link",
          type: "cta_component",
        }),
      ],
    }),
    defineField({
      name: "copyright",
      type: "string",
      title: "Copyright",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
