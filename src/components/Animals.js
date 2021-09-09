import React from 'react';

function Animals({ id }) {
  console.log(id);
  console.log('test');
  return (
    <>
      <dt>name</dt>
      <dd>name</dd>
      <dt>gender</dt>
      <dd>gender</dd>
      <dt>age</dt>
      <dd>age</dd>
      <dt>location</dt>
      <dd>location</dd>
    </>
  );
}

export default Animals;