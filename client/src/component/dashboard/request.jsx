import React, { useCallback, useEffect, useState } from "react";
import api from "../../api";
import Button from "../../utils/Button";
import { toastHandler } from "../../utils/Toast";

const request = () => {
  const [allRequest, setAllRequest] = useState([]);
  const fetchRequest = useCallback(async () => {
    try {
      const resp = await api.getRequests();
      if (resp.ok) {
        console.log(resp.data);

        setAllRequest(resp.data);
      }
    } catch (error) {}
  });
  useEffect(() => {
    fetchRequest();
  }, []);
  const handleApproveRequest = async (requestId) => {
    try {
      const resp = await api.approveRequest({ requestId });
      if (resp.ok) {
        fetchRequest();
        toastHandler(resp.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
              <td>
                {request.type === "Incoming" ? (
                  <Button
                    text="Approve"
                    disable={request.status === "Approved"}
                    action={() => handleApproveRequest(request.id)}
                  />
                ) : request.status === "Approved" ? (
                  <div>
                    <p>You can reach {request.firstName}</p>
                    <a href={"tel:"+ request.phoneNumber}>{request.phoneNumber}</a>
                  </div>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default request;
