import { UrlData } from "../types/utils";

export const handleSearchUser = (e: string, data: UrlData[]) =>
  data?.filter(({ name }) => name.toUpperCase().includes(e.toUpperCase()));
