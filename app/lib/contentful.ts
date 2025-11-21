import { Document, BLOCKS } from "@contentful/rich-text-types";

// Type for Contentful Rich Text document
export interface RichTextDoc {
  nodeType: string;
  data: {};
  content: any[];
}

// Contentful client configuration (you'll need to add your space ID and access token)
import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});
