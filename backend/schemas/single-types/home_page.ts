import { defineField, defineType } from "sanity";

export default defineType({
  name: "home_page",
  title: "Homepage",
  type: "document",
  icon: () => "",
  fields: [
    defineField({
      name: "loan_compare",
      type: "loan-compare_component",
      title: "Loan compare",
    }),
    defineField({
      name: "seo",
      type: "seo_component",
      title: "SEO",
    }),
  ],
});
