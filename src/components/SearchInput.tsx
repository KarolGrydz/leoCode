import React from "react";
import { useSearchInput } from "../hooks/useSearchInput";
import { SearchList } from "./SearchList";

import "../styles/SearchInput.css";
import { useGetUsers } from "../hooks/useGetUsers";

export const SearchInput: React.FC = () => {
  const { users, handleSearch } = useSearchInput();
  const { isPending } = useGetUsers();

  return (
    <div>
      <input
        className="Input"
        placeholder="Search by user name..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      {!isPending ? <SearchList users={users!} /> : <div>Loading...</div>}
    </div>
  );
};
