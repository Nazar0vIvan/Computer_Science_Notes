import axios from "axios";

export async function getContents(contentsName, options) {
  return axios.get("./api/db.json", options).then((response) => {
    switch (contentsName) {
      case "react":
        return response.data.reactContents;
      default:
        break;
    }
  });
}
