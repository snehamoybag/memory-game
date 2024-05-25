function getIdFromPokiUrl(url) {
  // Split the URL by '/' and filter out any empty strings from the array
  const parts = url.split("/").filter((part) => part !== "");
  // The ID is the last element in the parts array
  const id = parts[parts.length - 1];
  return id;
}

export default getIdFromPokiUrl;
