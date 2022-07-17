import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUsers, selectStatus } from "../../../reducers/usersSlice";
import "./UsersList.scss";

const UsersList = ({ selectUserHandler, deleteUserHandler }) => {
  const users = useSelector(selectUsers);
  const requestStatus = useSelector(selectStatus);

  return (
    <div className="UsersList">
      {requestStatus === "failed" && (
        <p> The request failed, please try again</p>
      )}
      {users.length > 0 &&
        users.map((user) => (
          <div class="UsersList__User">
            <h2>Name: {user.name}</h2> <p>Username: {user.username}</p>
            <p> Email: {user.email}</p>
            <div class="UsersList__buttons-container">
              <button
                className="UsersList__button"
                onClick={() => {
                  selectUserHandler(user.id);
                }}
                class="UsersList__button"
              >
                View or edit
              </button>
              <button
                className="UsersList__button"
                onClick={() => {
                  deleteUserHandler(user.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UsersList;
