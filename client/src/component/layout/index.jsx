import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import { UserContext } from "../../Context/UserContext";
import { BookContext } from "../../Context/BookContext";
import "./layout.scss";

const index = ({ children }) => {
  // const [term, setTerm] = useState("");

  const { signout } = useContext(UserContext);
  const { term, getSearchTerm, filterBooks } = useContext(BookContext);
    const [fontSize, setfontSize] = useState(4);

  const navigate = useNavigate();

  const handleSignout = () => {
    signout();
    navigate("/login");
  };

  const SearchFormSubmit = (event) => {
    event.preventDefault();
    navigate("/");
    filterBooks(term);
    console.log("send", term);
  };
const increaseFontSize = () => {
  if (fontSize >= 1 && fontSize < 8) {
    setfontSize(fontSize + 1);
  }
};

const decreaseFontSize = () => {
  if (fontSize < 8 && fontSize >= 1) {
    setfontSize(fontSize - 1);
  }
};

  return (
    <div className={`layout_wrapper size_${fontSize}`}>
      <header className="header_wrapper">
        <nav>
          <div className="logo">
            <img src="/src/assets/images/capstonelogo6.1.png" alt="site-logo" />
          </div>
          <div className="searchbar">
            <form onSubmit={SearchFormSubmit}>
              <input
                type="text"
                name="searchbar"
                placeholder="Search for books"
                onChange={getSearchTerm}
                value={term}
              />
            </form>
          </div>
          <div className="accesbilitybar">
            <button
              className="fontBtn"
              onClick={increaseFontSize}
              style={{ padding: "5px" }}
            >
              +
            </button>
            <button
              className="fontBtn"
              onClick={() => setfontSize(4)}
              style={{ padding: "5px" }}
            >
              reset
            </button>
            <button
              className="fontBtn"
              onClick={decreaseFontSize}
              style={{ padding: "5px" }}
            >
              -
            </button>
          </div>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
              </svg>
              <Link to="/">Home</Link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-gear"
                viewBox="0 0 16 16"
              >
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
              </svg>
              <Link to="/settings">Settings</Link>
            </li>
            <li onClick={handleSignout}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-box-arrow-in-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
                />
                <path
                  fillRule="evenodd"
                  d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                />
              </svg>
              Logout
            </li>
          </ul>
          <div className="hamburger">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
        </nav>
      </header>
      <div className="content">{children}</div>

      <footer class="footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                className="footerimg"
                src="/src/assets/images/capstonelogo6.1.png"
                alt="logo"
              />
              <p className="para">
                Worlds First digtial De-centeralised Library. Buy, Sell and
                discover exclusive books
              </p>
            </div>
            <div className="col">
              <h6 className="qq">Legal</h6>
              <ul>
                <li className="list">Privacy Notice</li>
                <li className="list">Terms of Use</li>
              </ul>
            </div>
            <div className="col">
              <h4 className="heading">Follow Us</h4>
              <ul className="icons">
                <li>
                  <SocialIcon
                    url="https://twitter.com/jaketrent"
                    bgColor="white"
                  />
                </li>
                <li>
                  <SocialIcon
                    url="https://facebook.com/jaketrent"
                    bgColor="white"
                  />
                </li>
                <li>
                  <SocialIcon
                    url="https://linkedin.com/in/jaketrent"
                    bgColor="	white"
                  />
                </li>
                <li>
                  <SocialIcon
                    url="https://instagram.com/in/jaketrent"
                    bgColor="white"
                  />
                </li>
              </ul>
              {/* <h6>Subcription for Book Keeper</h6>
              <input type={'email'} placeholder='Enter Book Name'></input>
              <button className="button">Enter</button>
              <p className="para1">Discover, Read and Collect Exclusive Books</p> */}
            </div>
          </div>
          <div>
            <p className="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by
              <img
                className="footerwhitelogo"
                src="/src/assets/images/capstonelogo6.1.png"
                alt="logo"
              />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default index;
