import react, { useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./mybooks.scss"

const index = () => {

    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const searchBook = async (e) => {
        e.preventDefault();
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyAfrYdZ0hf5vuUPIcKPzCzQDYUh9RiL43M' + '&maxResults=40')
            .then(res => { setData(res.data.items); console.log(res.data.items) })
            .catch(err => console.log(err))
    };
    // const searchBook = (evt) => {
    //     console.log("evt", evt.key, search);
    //     if (evt.key === "Enter") {
    //         axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyAfrYdZ0hf5vuUPIcKPzCzQDYUh9RiL43M' + '&maxResults=40')
    //             .then(res => { setData(res.data.items); console.log(res.data.items) })
    //             .catch(err => console.log(err))
    //     }
    // }

    return (
        <div className="container-fluid p-5 mr-4">
            <h2>Find Your Book</h2>
            <div className="search d-flex">
                <input type="text" placeholder="Enter Book Name"
                    value={search} onChange={e => setSearch(e.target.value)}
                    className="form-control  me-sm-2" />
                <button class="btn btn-secondary" type="submit" onClick={searchBook}>Search</button>
            </div>
            <div className="row">
                <Card book={bookData} />
            </div>
        </div>
    );
};

export default index;