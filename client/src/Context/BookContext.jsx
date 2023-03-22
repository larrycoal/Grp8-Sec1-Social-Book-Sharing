import React, { createContext, useEffect, useState } from "react";
import api from "../api";

const BookContext = createContext({});

const BookProvider = ({ children }) => {

    const [bookData, setAllBooks] = useState([]);
    const [booksdatabase, setBooksDatabase] = useState([]);
    const [term, setTerm] = useState("");

    const valueToShare = {
        term,
        bookData,
        getAllbooks: async () => {
            try {
                const resp = await api.getAllBooks();
                if (resp.ok) {
                    setAllBooks(resp.data);
                    setBooksDatabase(resp.data);
                } else {
                }
            } catch (err) {
                console.log(err);
            }
        },
        filterBooks: async (term) => {
            if (term == "") {
                setAllBooks(booksdatabase);
            } else {
                var newArray = booksdatabase.filter(function (item) {
                    console.log("inss", term, item.title)
                    return item.title.toLowerCase().includes(term.toLowerCase());
                });
                console.log("newarr", newArray);
                setAllBooks(newArray);
            }
        },
        getSearchTerm: (event) => {
            setTerm(event.target.value);
        },
    };

    return (
        <BookContext.Provider
            value={valueToShare}>
            {children}
        </BookContext.Provider>
    );
};

export { BookContext, BookProvider };