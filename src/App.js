import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/Heading";
import InputOTP from "./components/InputOTP";
import Card from "./components/Card";
import GetLocation from "./components/GetLoation";
import NetBankingDetails from "./components/NetBankingDetails";
export default function App() {
  return (
    <div class="container position-relative">
      <div className="row d-lg-flex justify-content-around">
        <span
          className="position-absolute"
          style={{ top: "0px", right: "0px", color: "red" }}
        >
          X
        </span>
        <div className="column col-lg-4">
          <Heading />
          <InputOTP />
          <Card />
          <GetLocation />
        </div>
        <div className="col-lg-8">
          <NetBankingDetails />
        </div>
      </div>
    </div>
  );
}
