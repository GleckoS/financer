/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Cta_component = {
  _type: "cta_component";
  text: string;
  href: string;
};

export type Loan_collection = {
  _id: string;
  _type: "loan_collection";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  seo?: Seo_component;
};

export type Global = {
  _id: string;
  _type: "global";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  footer?: Footer_component;
  seo?: Seo_component;
};

export type Footer_component = {
  _type: "footer_component";
  logo: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  text: string;
  link_columns_list: Array<{
    column_title: string;
    column_links: Array<{
      _key: string;
    } & Cta_component>;
    _type: "column";
    _key: string;
  }>;
  social_media_title: string;
  social_media_list: Array<{
    social_media_icon: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    social_media_link: string;
    _type: "column";
    _key: string;
  }>;
  languages_title: string;
  languages_columns_list: Array<{
    column_title: string;
    column_links: Array<{
      flag: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      };
      language?: string;
      _type: "column_language";
      _key: string;
    }>;
    _type: "column";
    _key: string;
  }>;
  annotation: string;
  additional_links: Array<{
    _key: string;
  } & Cta_component>;
  copyright: string;
};

export type TranslationMetadata = {
  _id: string;
  _type: "translation.metadata";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  translations?: Array<{
    _key: string;
  } & InternationalizedArrayReferenceValue>;
  schemaTypes?: Array<string>;
};

export type InternationalizedArrayReferenceValue = {
  _type: "internationalizedArrayReferenceValue";
  value?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "home_page";
  };
};

export type Home_page = {
  _id: string;
  _type: "home_page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  language?: string;
  loan_compare: LoanCompare_component;
  logos_line: LogosLine_component;
  image_cta_first: ImageCta_component;
  image_cta_second: ImageCta_component;
  video_popup: VideoPopup_component;
  calculators_listing: CalculatorsListing_component;
  flex_content: FlexContent_component;
  our_team: OurTeam_component;
  our_partners: OurPartners_component;
  seo: Seo_component;
};

export type Seo_component = {
  _type: "seo_component";
  og_Img?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type OurPartners_component = {
  _type: "our-partners_component";
  title: string;
  text: string;
  compare_cta?: Cta_component;
};

export type OurTeam_component = {
  _type: "our-team_component";
  title: string;
  text: string;
  compare_cta?: Cta_component;
};

export type FlexContent_component = {
  _type: "flex-content_component";
  title: string;
  content: string;
  cta: Cta_component;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  image_position?: "left" | "right";
};

export type CalculatorsListing_component = {
  _type: "calculators-listing_component";
  annotation: string;
  title: string;
  load_more: string;
  background: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type VideoPopup_component = {
  _type: "video-popup_component";
  title: string;
  text: string;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  open_button: string;
  video_url: string;
  sub_link?: Cta_component;
  background: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type ImageCta_component = {
  _type: "image-cta_component";
  title: string;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  cta: Cta_component;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type LogosLine_component = {
  _type: "logos-line_component";
  title: string;
  list?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "logo";
    _key: string;
  }>;
};

export type LoanCompare_component = {
  _type: "loan-compare_component";
  title: string;
  list?: Array<string>;
  compare_block_title: string;
  compare_block_annotation?: string;
  compare_min_amount: number;
  compare_max_amount: number;
  compare_cta: Cta_component;
};

export type InternationalizedArrayReference = Array<{
  _key: string;
} & InternationalizedArrayReferenceValue>;

export type Color = {
  _type: "color";
  hex?: string;
  alpha?: number;
  hsl?: HslaColor;
  hsv?: HsvaColor;
  rgb?: RgbaColor;
};

export type RgbaColor = {
  _type: "rgbaColor";
  r?: number;
  g?: number;
  b?: number;
  a?: number;
};

export type HsvaColor = {
  _type: "hsvaColor";
  h?: number;
  s?: number;
  v?: number;
  a?: number;
};

export type HslaColor = {
  _type: "hslaColor";
  h?: number;
  s?: number;
  l?: number;
  a?: number;
};

export type MediaTag = {
  _id: string;
  _type: "media.tag";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: Slug;
};

export type Slug = {
  _type: "slug";
  current: string;
  source?: string;
};

export type Markdown = string;

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Cta_component | Loan_collection | Global | Footer_component | TranslationMetadata | InternationalizedArrayReferenceValue | Home_page | Seo_component | OurPartners_component | OurTeam_component | FlexContent_component | CalculatorsListing_component | VideoPopup_component | ImageCta_component | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | LogosLine_component | LoanCompare_component | InternationalizedArrayReference | Color | RgbaColor | HsvaColor | HslaColor | MediaTag | Slug | Markdown;
export declare const internalGroqTypeReferenceTo: unique symbol;
