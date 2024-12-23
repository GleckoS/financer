import { defineField, defineType } from "sanity";

export default defineType({
  name: "home_page",
  title: "Homepage",
  type: "document",
  icon: () => "",
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "loan_compare",
      type: "loan-compare_component",
      title: "Loan compare",
      options: { collapsible: true, collapsed: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logos_line",
      type: "logos-line_component",
      title: "Logos line",
      options: { collapsible: true, collapsed: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image_cta_first",
      type: "image-cta_component",
      title: "Image CTA",
      options: { collapsible: true, collapsed: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image_cta_second",
      type: "image-cta_component",
      title: "Image CTA",
      options: { collapsible: true, collapsed: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "video_popup",
      type: "video-popup_component",
      title: "Video popup",
      options: { collapsible: true, collapsed: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "calculators_listing",
      type: "calculators-listing_component",
      title: "Calculators listing",
      options: { collapsible: true, collapsed: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "flex_content",
      type: "flex-content_component",
      title: "Flex content",
      options: { collapsible: true, collapsed: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "our_team",
      type: "our-team_component",
      title: "Our team",
      options: { collapsible: true, collapsed: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "our_partners",
      type: "our-partners_component",
      title: "Our partners",
      options: { collapsible: true, collapsed: true },
      validation: (Rule) => Rule.required(),
    }),
    // LOANS SECTION
    // BLOG SECTION
    // NEWSLETTER SECTION
    defineField({
      name: "seo",
      type: "seo_component",
      title: "SEO",
      options: { collapsible: true, collapsed: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
