import React, { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import "./bookdetail.scss";

const index = () => {
  const { id } = useParams();
  const [bookOwner, setBookOwner] = useState({});
  const getBookandOwner = useCallback(async () => {
    try {
      const resp = await api.getBookOwner({ bookId: id });
      if (resp) {
        setBookOwner(() => {
          return { ...resp.data };
        });
      }
    } catch (err) {
      console.log(err);
    }
  });
  useEffect(() => {
    getBookandOwner();
  }, []);
  return (
    <div className="bookdetail_wrapper">
      <section className="top">
        <div className="left">
          <img src={bookOwner?.book?.image} alt={bookOwner?.book?.title} />
        </div>
        <div className="right">
          <div className="title">{bookOwner?.book?.title}</div>
          <div className="subtitle">
            <span>authors:{bookOwner?.book?.authors[0]}</span>
          </div>
          <div className="desc">{bookOwner?.book?.description}</div>
        </div>
      </section>
      <section className="bottom">
        <h4>Owners</h4>
        <table>
            <thead>
                <tr>
                    <td>S/N</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Gender</td>
                </tr>
            </thead>
            <tbody>
                {
                    bookOwner?.owners?.map((owner,idx)=>(
                        <tr>
                            <td>{idx + 1}</td>
                            <td>{owner.firstName}</td>
                            <td>{owner.lastName}</td>
                            <td>{owner.gender}</td>
                            <td><button>Request</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </section>
    </div>
  );
};

export default index;
