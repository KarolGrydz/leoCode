import axios, { CancelTokenSource } from "axios";
import { UrlData } from "../types/utils";

export const getUsers = (
  url: string,
  token: CancelTokenSource
): Promise<UrlData[]> => {
  return axios
    .get(url, { cancelToken: token.token })
    .then(({ data }) => data)
    .catch((err) => err);
};
