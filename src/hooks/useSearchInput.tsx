import { useState, useEffect } from "react";
import { handleSearchUser } from "../utils/handleSearchUser";
import { UrlData } from "../types/utils";
import { useGetUsers } from "./useGetUsers";

export const useSearchInput = () => {
  const [users, setUsers] = useState<UrlData[]>();
  const { data } = useGetUsers();

  useEffect(() => {
    setUsers(data);
  }, [data]);

  const handleSearch = (e: string) => {
    setUsers(handleSearchUser(e, data));
  };

  return { users, handleSearch };
};
