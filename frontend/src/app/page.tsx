import sanityFetch from "@/utils/sanity.fetch";
// import { QueryMetadata } from '@/global/Seo/query-metadata';
import type { Home_page } from "@sanity-types";
// const page = { name: 'Homepage', path: '' };

const IndexPage = async () => {
  const { content } = await query();

  return (
    <>
      {/* <Components data={content} /> */}
    </>
  );
};

export default IndexPage;

// export async function generateMetadata() {
//   return await QueryMetadata('homepage', page.path);
// }

const query = async (): Promise<Home_page> => {
  const data = await sanityFetch<Home_page>({
    query: /* groq */ `
      *[_type == "homepage"][0] {
        
      }
    `,
    tags: ["homepage"],
  });
  return data;
};
