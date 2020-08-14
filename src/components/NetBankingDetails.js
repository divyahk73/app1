import React from "react";
function NetBnkingDetails() {
  return (
    <div className="container">
      <div className="d-sm-flex justify-content-end mx-2 my-3">
        <button
          type="button"
          className="btn btn-light"
          style={{ TextColor: "#000466" }}
        >
          Rs.399
        </button>
      </div>
      <div className="card mx-2 my-3" style={{ width: "43rem" }}>
        <h5
          className="card-header"
          style={{ backgroundColor: "#000466", color: "#ffffff" }}
        >
          NetBanking
        </h5>
        <div className="card-body">
          <input
            type="text"
            style={{ borderRadius: "5px", borderColor: "#bfc0df" }}
            placeholder="Enter bank name"
          />
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-outline-primary btn-color mx-2 mt-3"
        >
          Credit/Debit
        </button>
        <button
          type="button"
          className="btn btn-outline-primary btn-color mx-2 mt-3"
        >
          paypal
        </button>
        <button
          type="button"
          className="btn btn-outline-primary btn-color mx-2 mt-3"
        >
          UPI
        </button>
        <button
          type="button"
          className="btn btn-outline-primary btn-color mx-2 mt-3"
        >
          Cash
        </button>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          style={{ backgroundColor: "#000466" }}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
export default NetBnkingDetails;
