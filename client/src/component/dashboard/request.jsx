import React, { useCallback, useEffect, useState } from "react";
import api from "../../api";
import Button from "../../utils/Button";

const request = () => {
  const [allRequest, setAllRequest] = useState([]);
  const fetchRequest = useCallback(async () => {
    try {
      const resp = await api.getRequests();
      if (resp.ok) {
        setAllRequest(resp.data);
      }
    } catch (error) {}
  });
  useEffect(() => {
    fetchRequest();
  }, []);
  return (
    <div className="request_wrapper">
      <table className="table table-hover">
        <thead>
          <tr>
            <td>S/N</td>
            <td>FirstName</td>
            <td>LastName</td>
            <td>Book</td>
            <td>Gender</td>
            <td>Location</td>
            <td>Status</td>
            <td>Type</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {allRequest?.map((request, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{request.firstName}</td>
              <td>{request.lastName}</td>
              <td>{request.book}</td>
              <td>{request.gender}</td>
              <td>{request.location}</td>
              <td>{request.status}</td>
              <td>{request.type}</td>
              <td>{request.type === "Incoming"? <Button text="Approve"/>:null}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default request;
