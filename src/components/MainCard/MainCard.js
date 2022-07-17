import React, { useState } from "react";
import UsersTabView from "./UsersTabView";
import AddUserTabView from "./AddUserTabView";
import AboutUsTabView from "./AboutUsTabView";
import "./MainCard.scss";
import AsistensiImage from "../../assets/Asistensi_logotipo.svg";

const navBarOptions = ["About Us", "Users", "Add User"];

const MainCard = () => {
  const [viewToDisplay, setViewToDisplay] = useState("About Us");

  const changeViewHandler = (option) => {
    setViewToDisplay(option);
  };

  const goBackHandler = () => {
    setViewToDisplay("About Us");
  };

  return (
    <div className="MainCard">
      <div className="MainCard__navbar">
        <img
          className="MainCard__company-logo"
          src={AsistensiImage}
          alt="Asistensi"
          onClick={goBackHandler}
        />
        <div className="MainCard__options-container">
          {navBarOptions.map((option) => (
            <button
              onClick={() => changeViewHandler(option)}
              className={`MainCard__option ${
                option === viewToDisplay && "MainCard__option--active"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      {/* I would have preferred to use React Router, but given the time constraint I am 
      implenting it like this */}
      {viewToDisplay === "About Us" && <AboutUsTabView />}
      {viewToDisplay === "Users" && <UsersTabView />}
      {viewToDisplay === "Add User" && (
        <AddUserTabView goBack={goBackHandler} />
      )}
    </div>
  );
};

export default MainCard;
