import { useEffect, useState } from "react";
import axios from "axios";

import { USERS } from "../constants/url";
import { getUsers } from "../utils/getUsers";
import { UrlData } from "../types/utils";

export const useGetUsers = () => {
  const [data, setData] = useState<UrlData[] | []>([]);
  const [isPending, setIsPending] = useState<boolean>(false);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchUsers = async () => {
      setIsPending(true);
      try {
        await getUsers(USERS, source)
          .then((res) => {
            setData(res);
            setIsPending(false);
          })
          //W zaleności od logiki biznesowej mozna tutaj ponowić request/zapisać błąd itp.
          .catch((err) => {
            console.log(err);
            setIsPending(false);
          });
      } catch (error) {
        if (axios.isCancel(error)) throw error;
      }
    };

    fetchUsers();

    return () => {
      source.cancel();
    };
  }, []);

  return { data, isPending };
};
