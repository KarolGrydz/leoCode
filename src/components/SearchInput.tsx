import React from "react";
import { useSearchUser } from "../hooks/useSearchUser";
import { useGetUsers } from "../hooks/useGetUsers";
import { UserContext } from "../context/UserContext";

import "../styles/SearchInput.css";

export const SearchInput: React.FC = () => {
  const { handleSearchUser } = useSearchUser();
  const { handleUpdateState } = React.useContext(UserContext);
  const { data } = useGetUsers();

  React.useEffect(() => {
    if (handleUpdateState) handleUpdateState(data);
  }, [data]);
  return (
    <div>
      <input
        className="Input"
        placeholder="Search by user name..."
        onChange={(e) => handleSearchUser(e.target.value)}
      />
    </div>
  );
};
