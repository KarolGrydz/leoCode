import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { UrlData } from "../types/utils";

import "../styles/SearchList.css";

const ListElement = React.memo(({ id, name, username }: UrlData) => {
  return (
    <li key={id}>
      <div className="item">
        <p>{name}</p> <span>@{username}</span>
      </div>
    </li>
  );
});

export const SearchList: React.FC = () => {
  const { state } = useContext(UserContext);
  return (
    <div className="root">
      <ol>
        {state?.map(({ id, name, username }) => (
          <ListElement id={id} name={name} username={username} />
        ))}
      </ol>
    </div>
  );
};
