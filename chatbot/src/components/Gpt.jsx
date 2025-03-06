import React, { useState } from 'react';

function InputBox() {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    alert(`You entered: ${userInput}`);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter your text here"
        style={styles.inputBox}
      />
      <button onClick={handleSubmit} style={styles.button}>
        Submit
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
  },
  inputBox: {
    padding: '10px',
    margin: '10px',
    border: '2px solid #ccc',
    borderRadius: '5px',
    width: '250px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default InputBox;
