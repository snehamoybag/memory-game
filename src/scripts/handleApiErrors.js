const alertApiErrors = (responseStatus) => {
  switch (responseStatus) {
    case 404:
      alert(new Error("404, content not found"));
      break;

    case 500:
      alert(new Error("500, internal server error"));
      break;

    default:
      alert(new Error("Fetch", responseStatus));
      break;
  }
};

export default alertApiErrors;
