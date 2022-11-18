import Logo from "../assets/todo.png";
import { Fragment } from "react";

const Header = () => {
  return (
    <>
      <header>
        <img src={Logo} alt=" " />
        <h1>TodoList</h1>
      </header>
      <div className="owner">
        <p className="ownerText">
          Made with ❤️ by
          <a href="https://www.linkedin.com/in/shikshit-rana">Shikshit Rana</a>
        </p>
      </div>
    </>
  );
};

export default Header;
