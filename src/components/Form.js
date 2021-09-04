import React, { useState } from 'react';

function Form(props) {
  //console.log(props)
  const [name, setName] = useState('');

  function handleSubmit(e) {
    console.log('typing');
    e.preventDefault();
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input 
          htmlFor="name" 
          type="text" 
          className="searchBox"
          value={name}
          onChange={handleChange}
        />
        <button className="btn">Search</button>
      </form>
    </>
  );
} 

export default Form;