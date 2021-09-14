import React, { useState } from 'react';

function Form(props) {
 
  const [input, setInput] = useState('');    //or query
  function handleSubmit(e) {
    e.preventDefault();
    setInput('');
  }

  function handleSearch(e) {
    //console.log('typing')
    setInput(e.target.value);
    props.filteredData(e.target.value);
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

export default Form;