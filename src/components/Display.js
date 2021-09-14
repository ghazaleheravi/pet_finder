import React from 'react';


function Display(props) { 
  
  return (
    <>
      <table>
      <tr>
        <td>species:</td>
        <td>{props.data.species}</td>
      </tr>
      <tr>
        <td>gender:</td>
        <td>{props.data.gender}</td>
      </tr>
      <tr>
        <td>age:</td>
        <td>{props.data.age}</td>
      </tr>
      <tr>
        <td>email:</td>
        <td>{props.data.email}</td>
      </tr>
      <tr>
        <td>city:</td>
        <td>{props.data.city}</td>
      </tr>
      </table>
    </>
  );
   
}

export default Display;