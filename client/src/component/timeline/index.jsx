import React, { useEffect, useState, useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import { useNavigate } from "react-router-dom";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./timeline.scss";
import api from "../../api";
import Button from "../../utils/Button";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";
const index = () => {
  // const [allBooks, setAllBooks] = useState([]);
  const navigate = useNavigate();
  const { term, bookData, getAllbooks, filterGenre,booksdatabase} = useContext(BookContext);
  const [genreSelected, setGenreSelected] = useState([]);
  let showBooks;
  const { fetchUser, currentUser } = useContext(UserContext);

  useEffect(() => {
    // Update the document title using the browser API
    getAllbooks();
    fetchUser()
  }, []);

  const handleBookDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleDownloadReceipt = async () => {
    try {
      const resp = fetch(
        `http://localhost:3000/receipt?user=${JSON.stringify(currentUser)}`
      )
        .then((resp) => resp.arrayBuffer())
        .then((buffer) => {
          const blob = new Blob([buffer], { type: "application/pdf" });
          const fileUrl = window.URL.createObjectURL(blob);
          let alink = document.createElement("a");
          alink.href = fileUrl;
          alink.download = "Receipt";
          alink.click();
        });
    } catch (err) {
      console.log(err);
    }
  };
  // const getUniqueGenres = () => {
  //   if(bookData.indexOf(item) === -1) {
  //     this.items.push(item);
  //     console.log(this.items);
  // }
  // }
  if (bookData.length == 0) {
    showBooks = "No search results found";
    return (
      <div>
        <h3>{showBooks} </h3>
      </div>
    );
  } else {
    showBooks = bookData.map((book) => {
      return (
        <ul
          key={book.id}
          onClick={() => handleBookDetail(book._id)}
          className="book_list"
        >
          <li className="book">
            <div>
              <img src={book.image} alt={book.title} />
            </div>
            <div>
              <h4 className="title">{book.title}</h4>
              <div className="subtitle">
                <p className="details">
                  <span>Authors:</span>
                  <span>{...book.authors}</span>
                  <span>Genre:</span>
                  <span>{book.genre}</span>
                  <span>Pages:</span>
                  <span>{book.pageCount}</span>
                </p>
              </div>
              <p className="synopsis">Synopsis:</p>
              <p className="description">{book.description}</p>
            </div>
          </li>
        </ul>
      );
    });
  }

  let genres = []
  const getUniqueGenres = () => {
    for (let i = 0; i < booksdatabase.length; i++) {
      if(!(genres.includes(booksdatabase[i].genre))){
        genres.push(booksdatabase[i].genre)
      }
    }
  }

  getUniqueGenres();

  const handlefilterBooks = () => {
    filterGenre(genreSelected);
  }

  const genresDisplay = genres.map((genre) => {
    const handleSelectGenres = () => {
      if (genreSelected.includes(genre)) {
        const updateGenres = genreSelected.filter((genres, index) => {
          return genre !== genres;
        });
        setGenreSelected(updateGenres);
      } else {
        const updatedGenres = [...genreSelected, genre];
        setGenreSelected(updatedGenres);
      }
    };

    return (
      <li
        style={
          genreSelected.includes(genre)
            ? { backgroundColor: "#452B5B", color: "white", cursor: "pointer" }
            : { backgroundColor: "#f0e8e8", cursor: "pointer" }
        }
        onClick={handleSelectGenres}
      >
        {genre}
      </li>
    );
  });

  return (
    <div className="timeline_wrapper">
      <div className="left container">{showBooks}</div>
      <div className="right">
        <section className="filter_wrapper">
          <p>Filter Genre</p>
          <ul>{genresDisplay}</ul>
          {/* {genreSelected} */}
          <Button text="Filter Books" action={handlefilterBooks} />
        </section>
        <section className="membership_wrapper">
          <p>Become a gold member with just 10.00CAD to enjoy the following</p>
          <ul>
            <li>Unlimited book request</li>
            <li>Email notification for new books</li>
            <li>Priority access to request</li>
          </ul>
          {!currentUser?.subscribe ? (
            <PayPalScriptProvider
              options={{
                "client-id": import.meta.env.VITE_ClientId,
                currency: "CAD",
              }}
            >
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: "10.00",
                          currency_code: "CAD",
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then(async (details) => {
                    try {
                      const resp = await api.subscribe();
                      if (resp) {
                        await fetchUser();
                      }
                    } catch (error) {}
                    console.log(details.payer.name.given_name);
                  });
                }}
              />
            </PayPalScriptProvider>
          ) : (
            <>
              <p>You are a Gold Member</p>
              <Button text="View Receipt" action={handleDownloadReceipt} />
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default index;

//sb-wu2tf25331737@personal.example.com
//O$0uU9cS
