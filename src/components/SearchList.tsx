import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

import "../styles/SearchList.css";

export const SearchList: React.FC = () => {
  const { state } = useContext(UserContext);
  return (
    <div className="root">
      <ol>
        {state?.map(({ id, name, username }) => (
          <li key={id}>
            {console.log("redner")}
            <div className="item">
              <p>{name}</p> <span>@{username}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
