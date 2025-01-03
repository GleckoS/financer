"use server";
import { createClient, type QueryParams } from "next-sanity";
import {
  isPreviewDeployment,
  isProductionDeployment,
} from "./is-preview-deployment";

const projectId = process.env.SANITY_PROJECT_ID;
const token = process.env.SANITY_API_TOKEN;
const dataset = "production";
const apiVersion = "2022-03-07";

if (isPreviewDeployment && !token) {
  throw new Error("The `SANITY_API_TOKEN` environment variable is required.");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: isPreviewDeployment ? "previewDrafts" : "published",
  token,
});

/**
 * Performs a Sanity query in GROQ for fetching data.
 * @param {string} query - The GROQ query.
 * @param {string[]} [tags] - Recommended. The tags for Next Caching.
 * @param {QueryParams} [params={}] - Optional. Used to query dynamic pages, like blog posts.
 * @returns {Promise<QueryResponse>} Returns a promise of the page object.
 */
export default async function sanityFetch<QueryResponse>({
  query,
  tags,
  params = {},
}: {
  query: string;
  tags?: string[];
  params?: QueryParams;
}): Promise<QueryResponse> {
  return await client.fetch<QueryResponse>(query, params, {
    ...(!isProductionDeployment
      ? {
          cache: "reload",
        }
      : {
          ...(isPreviewDeployment || !tags
            ? {
                cache: "no-cache",
              }
            : {
                next: {
                  tags,
                },
              }),
        }),
  });
}
