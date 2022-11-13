import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import { click } from "@testing-library/user-event/dist/click";

//title must be wrapped in curly brackets, title aka a prop
const Header = ({title, onAdd, showAdd}) => {

    // const onClick = () => {
    //     console.log("he dado un click jilipollas")
    // }

  return (
    <header className="header">
      <h1>{title}</h1>

      <Button
        color={showAdd ? "green" : "black"}
        text={showAdd ? "Add" : "Close"}
        onClick={onAdd}
      ></Button>
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
