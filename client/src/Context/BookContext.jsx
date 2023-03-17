import React, { createContext, useEffect, useState } from "react";
import api from "../api";

const BookContext = createContext({});

const BookProvider = ({ children }) => {

    const [bookData, setAllBooks] = useState([]);
    const [term, setTerm] = useState("");

    const getAllbooks = async () => {
        // Update the document title using the browser API
        // console.log("on load");
        try {
            const resp = await api.getAllBooks();
            if (resp.ok) {
                setAllBooks(resp.data);
            } else {
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("send", term);
      }

    getAllbooks();

    return (
        <BookContext.Provider
            value={{
                bookData,getAllbooks
            }}
        >
            {children}
        </BookContext.Provider>
    );
};

export { BookContext, BookProvider };