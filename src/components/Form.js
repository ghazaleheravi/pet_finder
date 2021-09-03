import React from 'react';

function Form() {
  return (
    <>
      <form className="form">
        <input htmlFor="name" type="text" className="searchBox"/>
        <button className="btn">Search</button>
      </form>
    </>
  );
} 

export default Form;