import React from "react"
import "./bookDescription.scss"
import { useLocation, useNavigate } from "react-router-dom";

const BookDescription = () => {

    const location = useLocation();
    const { bookdata } = location.state;
    const navigate = useNavigate();

   const handleClick = () => {
    navigate("/");
   }

    return (<div className="container p-5">
        <div className="row-md-1">
            <button className="btn btn-block btn-primary"onClick={handleClick}>Go back to Timeline</button>
        </div>
        <div className="row">
            <div className="col-md-3">
                <img src={bookdata.image} />
            </div>
            <div className="col-md-9">
                {/* <div className="row">{bookdata.title}</div>
                <div className="row mt-3">by {bookdata.authors[0]}</div>
                <div className="row mt-4">{bookdata.description}</div> */}
                <h3>{bookdata.title}</h3>
                <h5>{bookdata.authors[0]}</h5>
                <p>{bookdata.description}</p>
            </div>
        </div>


    </div>)

}

export default BookDescription;