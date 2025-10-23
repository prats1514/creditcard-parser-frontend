import React from "react";
import "./ResultCard.css";

const ResultCard = ({ data }) => {
  const bankData = data?.data?.data || {};
  const bankName = data?.bank || "Unknown";

  return (
    <div className="result-card">
      <h2>Parsed Details</h2>
      <div className="result-item">
        <strong>Bank:</strong> {bankName.toUpperCase()}
      </div>
      <div className="result-item">
        <strong>Customer Name:</strong> {bankData["Customer Name"]}
      </div>
      <div className="result-item">
        <strong>Card Number:</strong> {bankData["Card Number"]}
      </div>
      <div className="result-item">
        <strong>Statement Period:</strong> {bankData["Statement Period"]}
      </div>
      <div className="result-item">
        <strong>Payment Due Date:</strong> {bankData["Payment Due Date"]}
      </div>
      <div className="result-item">
        <strong>Total Amount Due:</strong> {bankData["Total Amount Due"]}
      </div>
    </div>
  );
};

export default ResultCard;
