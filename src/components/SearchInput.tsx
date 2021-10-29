import React from "react";
import { useSearchUser } from "../hooks/useSearchUser";

import "../styles/SearchInput.css";

export const SearchInput: React.FC = () => {
  const { handleSearchUser } = useSearchUser();
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
