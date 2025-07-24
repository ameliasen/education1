import React from "react";

const OtpInput = ({ value, valueLength, onChange }) => {
  const items = new Array(valueLength).fill("").map((_, i) => (
    <input
      key={i}
      type="text"
      maxLength={1}
      value={value[i] || ""}
      onChange={(e) => onChange(e, i)}
      style={{
        width: "40px",
        height: "40px",
        margin: "5px",
        fontSize: "20px",
        textAlign: "center",
      }}
    />
  ));

  return <div style={{ display: "flex", justifyContent: "center" }}>{items}</div>;
};

export default OtpInput;
