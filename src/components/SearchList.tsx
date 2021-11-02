import React from "react";
import { UrlData, SearchListProps } from "../types/utils";

import "../styles/SearchList.css";

const ListElement = React.memo(({ name, username }: UrlData) => (
  <li>
    <div className="item">
      <p>{name}</p> <span>@{username}</span>
    </div>
  </li>
));

export const SearchList: React.FC<SearchListProps> = ({ users }) => (
  <div className="root">
    <ol>
      {users?.map(({ id, name, username }) => (
        <ListElement key={id} name={name} username={username} />
      ))}
    </ol>
  </div>
);
