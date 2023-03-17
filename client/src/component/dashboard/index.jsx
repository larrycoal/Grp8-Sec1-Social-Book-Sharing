import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../api";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./dashboard.scss";
import Button from "../../utils/Button";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const [loading, setloading] = useState(false);

  const searchBook = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const resp = await api.findbooks({ title: search });
      if (resp.ok) {
        setloading(false);
        setData(resp.data);
      } else {
        setloading(false);
      }
    } catch (err) {
      setloading(false);
      console.log(err);
    }
  };
  const handleClick = async (book) => {
    console.log(book)
    try {
      const resp = await api.addbook({
        title: book.title,
        id: book.id,
      });
      if (resp.ok) {
        navigate("/")
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };
  const bookDataCard = (book,idx) => {
    return (
      <div className="container-fluid p-3 borderB" key={book.id}>
        <div className="row">
          <div className="col-md-1">
            <img src={book.img} style={{ width: "100%" }} />
          </div>
          <div className="col-md-9">
            <div className="row p-2" name="title" value={book.title}>
              {book.title}
            </div>
            <div className="row p-2">{book.authors[0]}</div>
            <div className="row">
              <button
                className="btn btn-primary addButton ml-2"
                type="submit"
                onClick={() => handleClick(book)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard_wrapper">
      <div className="introduction">
        <h4>Welcome to your dashboard</h4>
        <div className="subtitle">
          You can search for books and add them to your profile from your
          dashboard, also view all your books and requested books
        </div>
      </div>
      <div className="add_books">
        <div className="searchbooks">
          <input
            type="text"
            name="title"
            placeholder="Enter Book Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button text="Search" action={searchBook} loading={loading} />
        </div>
        <div className="search_result mt-4">
          {bookData.length > 0 ? (
            bookData.map((book) => bookDataCard(book))
          ) : (
            <p>Enter book title to add them to your profile</p>
          )}
        </div>
      </div>
      <div className="books_activities">
        <div className="tabs">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <Link
                className={
                  location.pathname === "/dashboard/Mybooks"
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                to="./Mybooks"
              >
                My books
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className={
                  location.pathname === "/dashboard/request"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="./request"
              >
                Request
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className={
                  location.pathname === "/dashboard/borrowed"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="./borrowed"
              >
                Borrowed
              </Link>
            </li>
          </ul>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
