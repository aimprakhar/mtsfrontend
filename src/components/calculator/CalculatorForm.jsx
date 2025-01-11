import React, { useState } from 'react';


function CalculatorForm() {
  // State to hold the values of the 5 inputs
  // const [values, setValues] = useState({
  //   input1: '',
  //   input2: '1',
  //   input3: '',
  //   input4: '2',
  //   input5:'2'
  // });


  const [input1, update1] = useState('');
  const [input2, update2] = useState('1');
  const [input3, update3] = useState('');
  const [input4, update4] = useState(2);
  const [input5, update5] = useState(2);
  const [input6, update6] = useState(0);
  const [minn, updateMinn] = useState(0);
  const [maxx, updateMaxx] = useState(0);
  const [result, setResult] = useState(0);


  const handleReset = () => {
    update1('');
    update2('1');
    update3('');
    update4(2);
    update5(2);
    update6(0)
    setResult(0);
    updateMaxx(0);
    updateMinn(0)

  };


  // State to hold the result of the calculation


  const brockerage = (amount) => {
    let defaultt = (0.118 * amount) / 100;
    if (defaultt < 2) {
      //min is 2
      return 2.36
    }
    else if (defaultt > 20) {
      // max is 20
      return 23.6
    }
    else {
      return defaultt;
    }
  }


  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    //     console.log(name)
    // console.log(value)
    // Update the corresponding state based on the name of the input field
    if (name === 'input1') {
      if (value > 0) {
        update1(value);
        update3(brockerage(value * input2));
        update6(16)
      }
      // console.log(input3)
    }
    else if (name === 'input2') {
      update2(value);
      update3(brockerage(input1 * value));
    }
    else if (name === 'input4') {
      update4(value);
    }
    else if (name === 'input5') {
      update5(value);
    }
    else if (name === 'input6') {
      update6(value);
    }

  };

  // Handle form submission and calculate the sum




  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert the input values to numbers and calculate the sum
    // Calculate sum
    let resultt = (input1 * input2) + parseFloat(input3) + parseFloat(input6);
    setResult(parseFloat(resultt)); // Set the calculated result
    updateMinn(parseFloat(resultt) - (input4 * parseFloat(resultt)) / 100)
    updateMaxx(parseFloat(resultt) + (input5 * parseFloat(resultt)) / 100)
  };

  return (
    <div className="About11">
      <h1>React Calculator Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Stock Price:</label>
          <input
            type="number"
            name="input1"
            value={input1}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Number (N):</label>
          <input
            type="number"
            name="input2"
            value={input2}
            onChange={handleChange}
          />
        </div>
        <br />

        <div>
          <label>Brockerage:</label>
          <input
            type="number"
            name="input3"
            value={input3}
            readOnly
          />
        </div>
        <br />
        <div>
          <label>MIN %:</label>
          <input
            type="number"
            name="input4"
            value={input4}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>MAX%:</label>
          <input
            type="number"
            name="input5"
            value={input5}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Others(DP):</label>
          <input
            type="number"
            name="input6"
            value={input6}
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit">Calculate</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      <h2>Final Price/N: {result/input2}</h2>
      <h2>MIN Price/N: {minn/input2}</h2>
      <h2>MAX Price/N: {maxx/input2}</h2>
    </div>
  );
}

export default CalculatorForm;
