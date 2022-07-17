import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../../../reducers/usersSlice";
import "./AddUserTabView.scss";

const AddUserTabView = ({ selectUserHandler, goBack }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const createUserHandler = (e) => {
    e.preventDefault();
    dispatch(createUser({ username, email, phone, name }));
    goBack();
  };

  return (
    <div className="AddUser">
      <button className="AddUser__go-back-button" onClick={goBack}>
        Atras
      </button>
      {/* A form library could have been implemmented, not done becaus of time constraints */}
      <form className="AddUser__form" onSubmit={createUserHandler}>
        <div className="AddUser__form-element">
          <label> Nombre de usuario: </label>
          <input
            id="username"
            type="text"
            onChange={(value) => {
              setUsername(value.target.value);
            }}
          />
        </div>
        <div className="AddUser__form-element">
          <label> Nombre: </label>
          <input
            id="username"
            type="text"
            onChange={(value) => {
              setName(value.target.value);
            }}
          />
        </div>
        <div className="AddUser__form-element">
          <label> Email: </label>
          <input
            id="email"
            type="text"
            onChange={(value) => {
              setEmail(value.target.value);
            }}
          />
        </div>
        <div className="AddUser__form-element">
          <label> Telefono: </label>
          <input
            id="phone"
            type="tel"
            onChange={(value) => {
              setPhone(value.target.value);
            }}
          />
        </div>
        <button class="AddUser__submit-button" type="submit">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default AddUserTabView;
