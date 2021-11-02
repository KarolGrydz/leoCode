import { useContext } from "react";

import { UserContext } from "../context/UserContext";
import { useGetUsers } from "./useGetUsers";

export const useSearchUser = () => {
  const { handleUpdateState } = useContext(UserContext);
  const { data } = useGetUsers();

  const handleSearchUser = (e: string) => {
    const newData = data?.filter(({ name }) =>
      name.toUpperCase().includes(e.toUpperCase())
    );
    handleUpdateState!(newData);
  };

  return { handleSearchUser };
};
