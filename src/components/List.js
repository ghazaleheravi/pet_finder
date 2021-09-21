import React from 'react';
import PropTypes from 'prop-types';

function List({
  id,
  photos,
  gender,
  age,
  species,
  breeds,
  email,
  city,
  onToggle
  }) {
  
  return (
    <> 
      <ul className="list">
        <li 
          className="mylist" 
          onClick={onToggle} 
          data-id={id} 
          data-gender={gender} 
          data-age={age} 
          data-species={species} 
          data-breeds={breeds}
          data-email={email}
          data-city={city}
        >
          {photos.length !== 0 ? <img className="img" src={photos[0]['small']} alt="animal" /> : 'Can I be one of your family member?🐶🐱'}
        </li>
      </ul>
    </>
  );
}

List.propTypes = {
  id: PropTypes.number,
  gender: PropTypes.string,
  age: PropTypes.string,
  species: PropTypes.string,
  breeds: PropTypes.string,
  email: PropTypes.string,
  city: PropTypes.string,
  onToggle: PropTypes.function,
  photos: PropTypes.array
};

export default List;
