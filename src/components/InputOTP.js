import React from "react";
function InputOTP() {
  const style = {
    color: "#050969",
    borderRadius: "5px",
    borderColor: "#a7a8ca",
    textAlign: "center",
    textColor: "#050969",
    width: "2rem"
  };
  return (
    <div>
      <input
        className="input my-3 mx-1"
        style={style}
        type="text"
        placeholder="8"
        size="1"
      />
      <input
        className="input my-3 mx-1"
        style={style}
        type="text"
        placeholder="8"
        size="1"
      />
      <input
        className="input my-3 mx-1"
        style={style}
        type="text"
        placeholder="8"
        size="1"
      />
      <input
        className="input my-3 mx-1"
        style={style}
        type="text"
        placeholder="8"
        size="1"
      />
      <input
        className="input my-3 mx-1"
        style={style}
        type="text"
        placeholder="8"
        size="1"
      />
      <input
        className="input my-3 mx-1"
        style={style}
        type="text"
        placeholder="8"
        size="1"
      />
      <a className="ml-1 my-1" href="#">
        Resend OTP
      </a>
    </div>
  );
}
export default InputOTP;
