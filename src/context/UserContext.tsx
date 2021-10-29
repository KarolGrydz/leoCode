import { createContext, useState, useEffect } from "react";
import { UrlData, UserAPIData } from "../types/utils";
import { useGetUsers } from "../hooks/useGetUsers";

export const UserContext = createContext<Partial<UserAPIData>>({});

export const UserContextController: React.FC = ({ children }) => {
  const { data } = useGetUsers();
  const [state, setState] = useState<UrlData[] | []>(data);

  useEffect(() => {
    setState(data);
  }, [data]);

  const handleUpdateState = (value: [] | UrlData[]) => {
    setState(value);
  };

  const UserAPI: UserAPIData = {
    state,
    handleUpdateState,
  };

  return (
    <UserContext.Provider value={UserAPI}>{children}</UserContext.Provider>
  );
};
