import { Img_Query } from '../image';
import Footer from './footer';
export default Footer;

export const Footer_Query = `
  text,
  logo {
    ${Img_Query}
  },
  link_columns_list {
    column_title,
    column_links {
      text,
      href
    }
  }[],
  social_media_title,
  social_media_list {
    social_media_icon {
      ${Img_Query}
    },
    social_media_link
  }[],
  languages_title,
  languages_columns_list {
    column_title,
    column_links {
      flag {
        ${Img_Query}
      },
      language
    }
  }[],
  annotation,
  copyright,
  additional_links {
    text,
    href
  }[]
`;