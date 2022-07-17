import qs from "qs";
/**
 * Get full URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full URL
 */
export function getURL(path = "") {
  return `${
    typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_API_URL_SERVER
      : process.env.NEXT_PUBLIC_API_URL_CLIENT || "http://localhost:1337"
  }${path}`;
}

/**
 * Helper to make GET requests to API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    // throw new Error(`An error occurred please try again`);
  }
  const data = await response.json();
  return data;
}
