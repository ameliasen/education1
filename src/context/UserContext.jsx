import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [btnLoading, setBtnLoading] = useState(false);

  const verifyOtp = async (otp, navigate) => {
    setBtnLoading(true);
    try {
      const response = await fetch("http://localhost:5000/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp }),
      });

      const data = await response.json();

      if (data.success) {
        alert("OTP Verified");
        navigate("/dashboard");
      } else {
        alert("Invalid OTP");
      }
    } catch (err) {
      alert("Verification error");
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ btnLoading, verifyOtp }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
