import react, { useState } from "react";
import Book from '../../../assets/images/sampleimg.jpg'
import "./card.scss"

const index = ({ book }) => {


    console.log("incardbook", book);
    return (
        <div className="container-fluid p-3 m-4 mt-5 ">
            {
                book.map((item) => {
                    const handleSubmit = async (e) => {
                        e.preventDefault();
                        const bookdetails = {
                          title: item.volumeInfo.title,
                          author: item.volumeInfo.authors[0]
                        };
                        console.log("book selected",bookdetails);
                      };
                
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let author = item.volumeInfo.authors[0] ;
                    let description = item.volumeInfo.description;
                    if (thumbnail != undefined && author != undefined) {
                        return (
                            <div className="row m-3 p-3 bordertop">
                                <div className="col-md-3">
                                    <img
                                        height="" width="121"
                                        src={thumbnail}
                                        class="imgbook"
                                        alt="book"
                                        srcset=""
                                    />
                                </div>
                                <div className="col-md-9">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="author">by {author}</p>
                                    <button class="btn btn-add" id="added" type="submit" onClick={handleSubmit}>Add</button>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
};

export default index;