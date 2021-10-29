import { useEffect, useState } from "react";

import { USERS } from "../constants/url";
import { getUsers } from "../utils/getUsers";
import { UrlData } from "../types/utils";

export const useGetUsers = () => {
  const [data, setData] = useState<UrlData[] | []>([]);

  useEffect(() => {
    getUsers(USERS)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return { data };
};
