import Image from "next/image";
import { SanityImageAsset } from "@sanity-types";

const defaultPlaceholder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP89eVDPQAJLQNfkP/zaAAAAABJRU5ErkJggg==";

type ImgProps = (
  | {
      data: {
        // TODO: fix types
        asset?: SanityImageAsset;
      };
      src?: never;
      width?: number;
      height?: number;
      alt?: string;
    }
  | {
      data?: never;
      src: string;
      width: number;
      height: number;
      alt: string;
    }
) & {
  sizes: string;
  priority?: boolean;
} & React.HTMLAttributes<HTMLImageElement | null>;

const Img = ({
  data,
  src,
  width,
  height,
  alt,
  sizes,
  priority,
  ...props
}: ImgProps) => {
  const placeholder = data?.asset?.metadata?.lqip || defaultPlaceholder;
  if (data) {
    src = data.asset!.url;
    width = width || data.asset!.metadata!.dimensions!.width;
    height = width || data.asset!.metadata!.dimensions!.height;
    alt = alt || data.asset!.altText;
  }

  return (
    <Image
      src={src!}
      width={width}
      height={height}
      alt={alt || ""}
      sizes={sizes}
      priority={priority}
      {...((width! > 40 || height! > 40) && {
        blurDataURL: placeholder,
        placeholder: "blur",
      })}
      {...props}
    />
  );
};

export default Img;

export const Img_Query = `
  asset -> {
    url,
    altText,
    metadata {
      lqip,
      dimensions {
        width,
        height,
      },
    },
  }
`;
