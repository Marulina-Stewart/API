import React from "react";
import { Link } from "react-router-dom";

import "./UserList.css";

const UserList = ({ users }) => {
  return (
    <div>
      <ul className="fullList">
        {users.map((user) => (
          <li className="List">
            <img
              className="profilpicture"
              src="https://static.thenounproject.com/png/1081856-200.png"
              alt=""
            />
            <hr />
            <div className="userdetails">
              <span className="name">{user.name}</span>
              <Link key={user.id} to={`/${user.name}`}>
                <button className="btn"> About me </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
