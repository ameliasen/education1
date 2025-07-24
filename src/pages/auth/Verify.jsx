import React, { useRef } from "react";
import "./auth.css";

const OtpVerification = () => {
  const inputRefs = Array.from({ length: 4 }, () => useRef(null));

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
    if (value === "" && index > 0 && e.nativeEvent.inputType === "deleteContentBackward") {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otp = inputRefs.map((ref) => ref.current.value).join("");
    console.log("Entered OTP:", otp);
    // Add verify logic here
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <div className="icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
            alt="shield"
          />
        </div>
        <h2 className="otp-head">Enter OTP Code</h2>
        <form onSubmit={handleSubmit}>
          <div className="otp-inputs">
            {inputRefs.map((ref, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                ref={ref}
                onChange={(e) => handleInputChange(e, index)}
              />
            ))}
          </div>
          <button type="submit"><a href="/">Verify</a></button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
