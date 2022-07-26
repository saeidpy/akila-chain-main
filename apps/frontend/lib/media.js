
export function getMedia(media) {
  const { url } = media?.data?.attributes ?? {};
  const imageUrl = url?.startsWith("/")
    ? process.env.NEXT_PUBLIC_API_URL_CLIENT + url
    : url;
  return imageUrl;
}
