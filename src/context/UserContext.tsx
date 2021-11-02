import { createContext, useState, useEffect } from "react";
import { UrlData, UserAPIData } from "../types/utils";

export const UserContext = createContext<Partial<UserAPIData>>({});

export const UserContextController: React.FC = ({ children }) => {
  const [state, setState] = useState<UrlData[] | []>([]);

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
