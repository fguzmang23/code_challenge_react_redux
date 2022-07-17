import React, { useState } from "react";
import "./User.scss";
import { selectUserById, updateUser } from "../../../reducers/usersSlice";
import { useSelector, useDispatch } from "react-redux";

const User = ({ userId, goBack }) => {
  const user = useSelector((state) => selectUserById(state, userId));
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const updateUserHandler = (event) => {
    event.preventDefault();
    dispatch(updateUser({ userId: userId, username, email, phone, name }));
    goBack();
  };

  return (
    <div className="User">
      <button className="User__go-back-button" onClick={goBack}>
        Go Back
      </button>
      <form className="User__form" onSubmit={updateUserHandler}>
        <div className="User__form-element">
          <label> Username: </label>
          <input
            id="username"
            type="text"
            defaultValue={user.username}
            onChange={(value) => {
              setUsername(value.target.value);
            }}
          />
        </div>
        <div className="User__form-element">
          <label> Name: </label>
          <input
            id="username"
            type="text"
            defaultValue={user.name}
            onChange={(value) => {
              setName(value.target.value);
            }}
          />
        </div>
        <div className="User__form-element">
          <label> Email: </label>
          <input
            id="username"
            type="text"
            defaultValue={user.email}
            onChange={(value) => {
              setEmail(value.target.value);
            }}
          />
        </div>
        <div className="User__form-element">
          <label> Phone number: </label>
          <input
            id="phone"
            type="tel"
            defaultValue={user.phone}
            onChange={(value) => {
              setPhone(value.target.value);
            }}
          />
        </div>
        <button class="User__submit-button" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default User;
