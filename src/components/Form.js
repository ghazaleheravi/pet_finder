import React, { useState } from 'react';

function Form(props) {
  console.log(props)
  const [input, setInput] = useState('');
 // console.log('input:', input);
  //console.log(typeof input);
  function handleSubmit(e) {
    //console.log('submitted');
    e.preventDefault();
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
        />
        <button className="btn">Search</button>
      </form>
    </>
  );
} 

export default Form;