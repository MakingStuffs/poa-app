import { getStrapiURL } from "./api";
import { MediaObject } from "../types";

export function getStrapiMedia(media: MediaObject): string {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
  return imageUrl;
}
