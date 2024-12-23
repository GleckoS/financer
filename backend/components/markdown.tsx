import React, { useMemo } from "react";
import { MarkdownInput, MarkdownInputProps } from "sanity-plugin-markdown";

export function CustomMarkdownInput(props: MarkdownInputProps) {
  const reactMdeProps: MarkdownInputProps["reactMdeProps"] = useMemo(() => {
    return {
      options: {
        toolbar: ["bold", "italic", "link", "|", "preview"],
        minHeight: "30px",
        placeholder: "**Bold** text",
      },
    };
  }, []);

  return <MarkdownInput {...props} reactMdeProps={reactMdeProps} />;
}
