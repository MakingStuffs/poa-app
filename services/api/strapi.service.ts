import { MediaObject } from "types";

// Return a Strapi endpoint with the provided path
export function getStrapiURL(path: string = ""): string {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string): Promise<object> {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

// Return the url of a strapi media object
export function getStrapiMedia(media: MediaObject): string {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
  return imageUrl;
}
