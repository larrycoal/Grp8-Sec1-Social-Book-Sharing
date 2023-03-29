import React from "react";
import { useEffect, useState, useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import "./timeline.scss";
import api from "../../api";
import { useNavigate } from "react-router-dom";

const index = () => {
  // const [allBooks, setAllBooks] = useState([]);
  const navigate = useNavigate();
  const { term, bookData, getAllbooks,filterGenre } = useContext(BookContext);
  const [genreSelected, setGenreSelected] = useState([]);
  let showBooks;

  useEffect(() => {
    // Update the document title using the browser API
    getAllbooks();
    console.log("term", term, bookData);
  }, []);


  const handleBookDetail = (id) => {
    navigate(`/detail/${id}`);
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
    )
  }
  else {

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

  let genres = [" Dark Fantasy", " Contemporary", " Epic", " Women", " Literary"]

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
        const updatedGenres = [
          ...genreSelected,
          genre
        ]
        setGenreSelected(updatedGenres);
      }
    };

    return (
      <li style={genreSelected.includes(genre) ? {backgroundColor:'#452B5B', color:'white',cursor:'pointer'}: {backgroundColor:'#f0e8e8',cursor: 'pointer'}} onClick={handleSelectGenres}>{genre}</li>
    )
  })

  return (
    <div className="timeline_wrapper">
      <div className="left container">{showBooks}</div>
      <div className="right">
        <div className="filter_wrapper">
          <p>Filter Genre</p>
          <ul>
            {genresDisplay}
          </ul>
          <button onClick={handlefilterBooks}>Filter Books</button>
          {/* {genreSelected} */}
        </div>
      </div>
    </div>
  );
};

export default index;
