import { getURL } from "./api";

export function getMedia(media) {
  const { url } = media?.data?.attributes ?? {};
  const imageUrl = url?.startsWith("/") ? getURL(url) : url;
  return imageUrl;
}
