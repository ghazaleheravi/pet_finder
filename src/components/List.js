import React from 'react';
import Animals from './Animals';

function List(props) {
  //console.log('List props:', props);

  function handleClick(e) {
    console.log('clicked');
    if (e.target.id === props.id) {
      <Animals details={props} />
    }
    
  }
  
  return (
    <> 
      <ul className="list">
        <li className="list" onClick={handleClick} id={props.id}>
          {props.photos.length !== 0 ? <img src={props.photos[0]['small']} width={200} hieght={200}/> : 'No Photos availabe'}
        </li>
      </ul>
    </>
  );
}

export default List;
