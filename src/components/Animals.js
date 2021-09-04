import React from 'react';

function Animals(props) {
  console.log(props);

  return (
    <>
      <dt>name</dt>
      <dd>{props.name}</dd>
      <dt>gender</dt>
      <dd>{props.gender}</dd>
      <dt>age</dt>
      <dd>{props.age}</dd>
      <dt>location</dt>
      <dd>{props.location}</dd>
    </>
  );
}

export default Animals;