import React from 'react';
import dog from '../dog.jpg';
import Display from './Display';

function List(props) {
  //console.log('listprops:', props);
  return (
    <> 
      <ul className="list">
        <li 
          className="mylist" 
          onClick={props.onToggle} 
          data-id={props.id} 
          data-gender={props.gender} 
          data-age={props.age} 
          data-species={props.species} 
          data-breeds={props.breeds}
          data-email={props.email}
          data-city={props.city}
        >
          {props.photos.length !== 0 ? <img className="img" src={props.photos[0]['small']} /> : 'click to see the information'}
        </li>
      </ul>
    </>
  );
}

export default List;
