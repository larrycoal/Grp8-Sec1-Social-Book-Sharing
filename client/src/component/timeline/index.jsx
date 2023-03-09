import React from 'react';
import { useEffect,useState } from 'react';
import "./timeline.scss"
import api from "../../api";

const index = () => {

    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        // Update the document title using the browser API
        // console.log("on load");
        async function callBooks(){
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

    });

    const showBooks = allBooks.map((book) => {
        return (
            <div key={book.id} className="container p-4" >
                <div className="row">
                    <div className="col-md-2">
                        <img src={book.imgthumbnail}/>
                    </div>
                    <div className="col-md-8">
                        <div className="row">{book.title}</div>
                        <div className="row">by {book.authors[0]}</div>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div>
            Home page
            <div>{showBooks}</div>
        </div>
    );
};

export default index;