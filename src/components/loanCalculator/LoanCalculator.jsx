import React, { useState } from 'react';
import "./loanCalculator.css"

const LoanCalculator = () => {
  const [actualPrice, setActualPrice] = useState(151000);  // Actual price of the bike
  const [downPayment, setDownPayment] = useState(0);       // Down payment
  const [emi, setEmi] = useState(10023);                    // EMI per month
  const [months, setMonths] = useState(18);                 // Number of months
  const [interestRate, setInterestRate] = useState(null);   // Calculated annual interest rate

  // Function to calculate interest rate
  const calculateInterestRate = () => {
    const P = actualPrice - downPayment;  // Principal loan amount
    const EMI = emi;                       // EMI value
    const n = months;                     // Loan tenure in months

    // Initializing variables for binary search to find the monthly interest rate 'r'
    let minRate = 0.0001;  // Lower bound for the interest rate
    let maxRate = 1;       // Upper bound for the interest rate
    let epsilon = 0.0001;  // Accuracy of the result

    let calculatedEMI;
    let rate = (minRate + maxRate) / 2;

    // Binary search loop to approximate the interest rate
    while (maxRate - minRate > epsilon) {
      rate = (minRate + maxRate) / 2; // Midpoint of the range
      calculatedEMI = (P * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);

      if (calculatedEMI < EMI) {
        minRate = rate;
      } else {
        maxRate = rate;
      }
    }

    // Calculate the annual interest rate from the monthly interest rate
    const annualRate = ((rate * 12) * 100).toFixed(2);
    setInterestRate(annualRate);  // Set the annual interest rate
  };

  return (
    <div className="calculator-container">
      <h1>Loan Interest Rate Calculator</h1>

      <div className="input-group">
        <label>Actual Price of Bike/Car: ₹</label>
        <input
          type="number"
          value={actualPrice}
          onChange={(e) => setActualPrice(e.target.value)}
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label>Down Payment: ₹</label>
        <input
          type="number"
          value={downPayment}
          onChange={(e) => setDownPayment(e.target.value)}
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label>EMI per Month: ₹</label>
        <input
          type="number"
          value={emi}
          onChange={(e) => setEmi(e.target.value)}
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label>Number of Months: </label>
        <input
          type="number"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
          className="input-field"
        />
      </div>

      <button onClick={calculateInterestRate} className="calculate-btn">
        Calculate Interest Rate
      </button>

      {interestRate !== null && (
        <div className="result">
          <h2>Calculated Annual Interest Rate: {interestRate}%</h2>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
