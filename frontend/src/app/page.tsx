import LoanCompare, { LoanCompare_Query } from "@/components/ui/loan-compare";
import sanityFetch from "@/utils/sanity.fetch";
// import { QueryMetadata } from '@/global/Seo/query-metadata';
import type { Home_page } from "@sanity-types";
import { groq } from "next-sanity";
// const page = { name: 'Homepage', path: '' };

const IndexPage = async () => {
  const { loan_compare } = await query();

  return (
    <>
      <LoanCompare {...loan_compare} />
    </>
  );
};

export default IndexPage;

// export async function generateMetadata() {
//   return await QueryMetadata('homepage', page.path);
// }

const query = async (): Promise<Home_page> => {
  const data = await sanityFetch<Home_page>({
    query: groq`
      *[_type == "home_page" && language == $language][0] {
        _id,
        ${LoanCompare_Query}
      }
    `,
    params: {
      language: "es"
    },
    tags: ["home_page"],
  });

  if (!data) {
    throw new Error("Failed data fetching");
  }

  return data;
};
