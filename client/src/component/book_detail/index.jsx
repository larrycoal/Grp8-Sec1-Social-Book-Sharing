import React, { useEffect, useCallback, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";
import { UserContext } from "../../Context/UserContext";
import Button from "../../utils/Button";
import { toastHandler } from "../../utils/Toast";
import "./bookdetail.scss";

const index = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookOwner, setBookOwner] = useState({});
  const [searchCity, setSearchCity] = useState("");
  const [bookOwnercopy, setBookOwnercopy] = useState({});
  const { currentUser } = useContext(UserContext);

  const getBookandOwner = useCallback(async () => {
    try {
      const resp = await api.getBookOwner({ bookId: id });
      if (resp) {
        setBookOwner(() => {
          return { ...resp.data };
        });
        setBookOwnercopy(() => {
          return { ...resp.data };
        });
      }
    } catch (err) {
      console.log(err);
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("bookownercopy", bookOwnercopy);
    if (searchCity == "") {
      setBookOwner(bookOwnercopy);
    } else {
      var newArray = bookOwnercopy.owners?.filter(function (item) {
        console.log("inss", searchCity, item.title);
        return item.city.toLowerCase().includes(searchCity.toLowerCase());
      });
      if (newArray.length == 0) {
        setBookOwner({ ...bookOwnercopy, owners: [] });
      } else {
        setBookOwner({ ...bookOwnercopy, owners: newArray });
      }
    }
    console.log("ece", searchCity);
  };

  const handleChange = (e) => {
    setSearchCity(e.target.value);
  };
  useEffect(() => {
    getBookandOwner();
  }, []);

  const handleMakeRequest = async (bookId, ownerId) => {
    try {
      const resp = await api.makeRequest({ ownerId, bookId });
      if (resp.ok) {
        toastHandler("Request made succesfully");
        navigate("/");
      } else {
        toastHandler(resp.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bookdetail_wrapper">
      <section className="top">
        <div className="left">
          <img src={bookOwner?.book?.image} alt={bookOwner?.book?.title} />
        </div>
        <div className="right">
          <h4 className="title">{bookOwner?.book?.title}</h4>
          <p className="subtitle">
            <span>Authors:</span>
            <span>{bookOwner?.book?.authors[0]}</span>
            <span>Genre:</span>
            <span>{bookOwner?.book?.genre}</span>
            <span>Pages:</span>
            <span>{bookOwner?.book?.pageCount}</span>
          </p>
          <p className="synopsis">Synopsis:</p>
          <div className="desc">{bookOwner?.book?.description}</div>
        </div>
      </section>
      <section className="bottom">
        <h4>Owners</h4>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-8"></div>

            <div className="col-md-2">
              <b>Search by City Name</b>{" "}
            </div>
            <div className="col-md-1">
              <input
                placeholder="Enter City Name"
                value={searchCity}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
        <table className="table table-hover">
          <thead>
            <tr>
              <td>S/N</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Gender</td>
              <td>City</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {bookOwner?.owners?.map((owner, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{owner.firstName}</td>
                <td>{owner.lastName}</td>
                <td>{owner.gender}</td>
                <td>{owner.city}</td>
                {currentUser.email !== owner.email ? (
                  <td>
                    <Button
                      disable={currentUser.subscribed}
                      text="Request"
                      action={() =>
                        handleMakeRequest(bookOwner.book._id, owner.id)
                      }
                    />
                  </td>
                ) : (
                  <td></td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default index;
