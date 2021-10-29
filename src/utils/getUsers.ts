import axios from "axios";
import { UrlData } from "../types/utils";

export const getUsers = (url: string): Promise<UrlData[]> => {
  return axios
    .get(url)
    .then(({ data }) => data)
    .catch((err) => err);
};
