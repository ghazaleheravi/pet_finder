import React from 'react';
import PropTypes from 'prop-types';


function Display({data}) { 
  return (
    <>
      <table>
      <tbody>
      <tr>
        <td>species:</td>
        <td>{data.species}</td>
      </tr>
      <tr>
        <td>gender:</td>
        <td>{data.gender}</td>
      </tr>
      <tr>
        <td>age:</td>
        <td>{data.age}</td>
      </tr>
      <tr>
        <td>email:</td>
        <td>{data.email}</td>
      </tr>
      <tr>
        <td>city:</td>
        <td>{data.city}</td>
      </tr>
      </tbody>
      </table>
    </>
  );
   
}

Display.propTypes = {
  data: PropTypes.object,
  species: PropTypes.string,
  age: PropTypes.number,
  city: PropTypes.string,
  email: PropTypes.string,
  gender: PropTypes.string,
};

export default Display;