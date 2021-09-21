import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Form({ filteredData }) {
  
  const [input, setInput] = useState('');    //or query
  function handleSubmit(e) {
    e.preventDefault();
    setInput('');
  }
  function handleSearch(e) {
    setInput(e.target.value);
    filteredData(e.target.value);
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input 
          htmlFor="input" 
          type="text" 
          className="searchBox"
          value={input}
          onChange={handleSearch}
          placeholder='Searching Animal or Breed'
        />
        <button className="btn">Search</button>
      </form>
    </>
  );
} 

Form.propTypes = {
  filteredData: PropTypes.function
};

export default Form;