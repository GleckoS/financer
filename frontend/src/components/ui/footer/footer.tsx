import sanityFetch from "@/utils/sanity.fetch";
import styles from "./footer.module.scss";
import type { Footer_component, Global } from "@sanity-types";
import { Footer_Query } from ".";
import { groq } from "next-sanity";
import Img from "../image";

const Footer = async () => {
  const data = await query();
  return (
    <footer className={styles["footer"]}>
      <div className="container">
        {/* Use images like this, don't look at error - i'll fix types later */}
        <Img data={data.logo} sizes="180px" />
      </div>
    </footer>
  );
};

export default Footer;

const query = async (): Promise<Footer_component> => {
  const data = await sanityFetch<Global>({
    query: groq`
      *[_type == 'global' && language == $language][0] {
        language,
        footer{  
          ${Footer_Query}
        }
      }`,
    params: {
      language: "en",
    },
    tags: ["global"],
  });

  return data.footer!;
};
