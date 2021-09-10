import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import Display from './components/Display';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


function App() {
  const key = '';
  const secret = '';

  
  let urlAuth = "https://api.petfinder.com/v2/oauth2/token";

  const [data, setData] = useState([]);
  console.log('data:', data);

  let status = 'adoptable';
  
  useEffect(() => {
    fetch(urlAuth, {
      method: 'POST',
      body: `grant_type=client_credentials&client_id=${key}&client_secret=${secret}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        return fetch('https://api.petfinder.com/v2/animals?status=' + status, {
          headers: {
            'Authorization': data.token_type + ' ' + data.access_token,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(function(res) {
            return res.json();
        }).then(function(json) {
            setData(json.animals);
        }).catch(function(err) {
            console.log('somthing went wrong', err.name);
        })
      })
    }, []);

    /*--------------------- fetching data is done ------------------------------*/

  const [detail, setDetail] = useState({
    species: null,
    age: null,
    gender: null,
    breeds: null,
    email: null,
    id: null
  }); 
  //console.log('detail:', detail);

  const [open, setOpen] = React.useState(false);  
  
  const handleOpen = (e) => {
    setOpen(true);  
    setDetail({
      species: e.target.dataset.species,   //or --> e.target.getAttribute('data-name')
      age:  e.target.dataset.age,    // or --> e.target.attributes.getNamedItem('data-name').value
      gender: e.target.dataset.gender,
      breeds: e.target.dataset.breeds,
      email: e.target.dataset.email,
      id: e.target.dataset.id
    });
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  
  var filteredData = function(input) {
    let myInput = input.toLowerCase();
    var reducer = data.reduce((acc, cur) => {
      if((cur.species.toLowerCase() === myInput) || (cur.breeds.primary.toLowerCase() === myInput)) {  
        acc.push(cur);
      }
      return acc;
    }, []);
    return (reducer.length !== 0 ? reducer : 'Nothing found');
  }

  const listItems = data.map((animal) =>  
    <List 
      id = {animal.id}
      key = {animal.id}
      photos= {animal.photos}
      gender= {animal.gender}
      age= {animal.age}
      species= {animal.species}
      breeds = {animal.breeds.primary}
      contact= {animal.contact['email']}
      onToggle= {handleOpen}
    />,
  );

  function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Display data={detail} />
    </div>
  );

  return (
    <div>
      <Form data={data} filteredData={filteredData}/>
      <hr className="linebreaker" />
      <section className="bigDisplay">
        {listItems}
      </section>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </div>
  );
}

export default App; 
