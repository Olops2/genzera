import react from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <body>
      <header className="Header">
        <div className="logo">
          <img
            src="../public/genzera-head.png"
            alt="Logo"
            width="120px"
            height="21px"
          />
        </div>
        <div className="icons icon1">
          <FontAwesomeIcon icon={faBars} size="lg" />{" "}
        </div>
        <div className="icons icon2">
          <FontAwesomeIcon icon={faTags} size="lg" />{" "}
        </div>
        <div className="icons icon3">
          <FontAwesomeIcon icon={faBell} className="fa-shake" size="lg" />{" "}
        </div>
        <div className="search-box">
          <input className="search" type="text" placeholder="Search..." />
          <button className="search-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </header>
      <div className="wrapper">
        <div className="box box-top"></div>
        <div className="circle"></div>
        <div className="box box-bottom"></div>
      </div>
      <a href="https://facebook.com">browse facebook</a>
    </body>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);
