import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers, deleteUser } from "../../../reducers/usersSlice";
import UsersList from "../UsersList/UsersList";
import styles from "./UsersTabView.scss";
import axios from "axios";
import User from "../User/User";

const UserTabView = ({}) => {
  const dispatch = useDispatch();
  const [currentUserScreen, setCurrentUserScreen] = useState("UsersList");
  const [currentUserId, setCurrentUserId] = useState(-1);

  const selectUserHandler = (currentUserIn) => {
    setCurrentUserId(currentUserIn);
    setCurrentUserScreen("DisplayOne");
  };

  const goBackHandler = () => {
    setCurrentUserScreen("UsersList");
    setCurrentUserId(-1);
  };

  const deleteUserHandler = (userId) => {
    dispatch(deleteUser({ userId }));
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      {currentUserScreen === "DisplayOne" && (
        <User userId={currentUserId} goBack={goBackHandler} />
      )}
      {currentUserScreen === "UsersList" && (
        <UsersList
          selectUserHandler={selectUserHandler}
          deleteUserHandler={deleteUserHandler}
        />
      )}
    </div>
  );
};

export default UserTabView;
