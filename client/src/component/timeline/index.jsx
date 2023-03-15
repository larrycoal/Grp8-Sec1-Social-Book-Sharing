import React from 'react';
import { useEffect, useState } from 'react';
import "./timeline.scss"
import api from "../../api";
import { Link, useNavigate, useLocation } from "react-router-dom";

const index = () => {

    const [allBooks, setAllBooks] = useState([]);
    const navigate = useNavigate();
    // const location = useLocation();
    // const { term } = location.state;


    useEffect(() => {
        // Update the document title using the browser API
        async function callBooks() {
            try {
                const resp = await api.getAllBooks();
                if (resp.ok) {
                    setAllBooks(resp.data);
                } else {

                }
            } catch (err) {
                console.log(err);
            }
        }
        callBooks();
        // console.log("get",term);

    }, []);

    const showBooks = allBooks.map((book) => {

        const handleClick = (e) => {
            e.preventDefault();
            console.log("in", book);
            navigate('/description', { state: { bookdata: book } })
        }
        return (
            <div key={book.id} className="container p-4" onClick={handleClick} >
                <div className="row">
                    <div className="col-md-2">
                        <img src={book.image} />
                    </div>
                    <div className="col-md-8">
                        <div className="row">{book.title}</div>
                        <div className="row">by {book.authors[0]}</div>
                    </div>
                </div>
            </div>
        )
    })

    return (<div>
        {showBooks}
    </div>)

};

export default index;