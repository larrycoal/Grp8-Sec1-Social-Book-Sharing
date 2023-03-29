import React, { useEffect, useCallback, useState } from "react";
import api from "../../api";

const mybooks = () => {
  const [mybooks, setMyBooks] = useState([]);

  const fetchUserBook = useCallback(async () => {
    try {
      const resp = await api.getUserBooks();
      if (resp) {
        const books = resp.data;
        console.log(books)
        setMyBooks(() => {
          return books;
        });
      }
    } catch (error) {
      console.log(err);
    }
  });

  useEffect(() => {
    fetchUserBook();
  }, []);
  return (
    <div className="mybooks_wrapper">
      <table className="table table-hover">
        <thead>
          <tr>
            <td>S/N</td>
            <td>Image</td>
            <td>Title</td>
            <td>Author</td>
            <td>Genre</td>
          </tr>
        </thead>
        <tbody>
          {mybooks?.map((book,idx) => (
            <tr key={idx}>
                <td>{idx+1}</td>
              <td>
                <img
                  src={book?.bookId?.image}
                  alt=""
                  height="20px"
                  width="20px"
                />
              </td>
              <td>{book?.bookId?.title}</td>
              <td>{book?.bookId?.authors[0]}</td>
              <td>{book?.bookId?.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default mybooks;
