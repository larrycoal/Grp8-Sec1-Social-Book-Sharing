import React from 'react';
import api from "../../api";
import { useEffect, useState } from "react";

const mybooks = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        async function callBooks() {
          try {
            const resp = await api.getUserBooks();
            if (resp.ok) {
                setAllBooks(resp.data);
            } else {
            }
          } catch (err) {
            console.log(err);
          }
        }
        callBooks();
      }, []);

      const showBooks = allBooks.map((book) => {
        return (
          <ul key={book.id} className="book_list">
            <li className="book">
              <div>
                <img src={book.image} alt={book.title} />
              </div>
              <div>
                <h4 className="title">{book.title}</h4>
                <div className="subtitle">
                  <span className="genre">Genre:{book.genre}</span>
                  <span className="pagecount">Page count:{book.pageCount}</span>
                </div>
                <p className="description">{book.description}</p>
              </div>
            </li>
          </ul>
        );
      });

    return (
        <div>
         {showBooks}
        </div>
    );
};

export default mybooks;