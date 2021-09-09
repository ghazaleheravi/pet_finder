import React from 'react';

function List(props) {
  //console.log('listprops:', props);
  return (
    <> 
      <ul className="list">
        <li 
          className="list" 
          onClick={props.onToggle} 
          data-id={props.id} 
          data-gender={props.gender} 
          data-age={props.age} 
          data-species={props.species} 
          data-breeds={props.breeds}
          data-email={props.contact}
        >
          {props.photos.length !== 0 ? <img src={props.photos[0]['small']} width={200} hieght={200}/> : 'Click to see information'}
        </li>
      </ul>
    </>
  );
}

export default List;
