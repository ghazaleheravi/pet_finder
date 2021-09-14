import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import Display from './components/Display';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';


function App() {
  /*--------------------------fetching data from rest API---------------------------*/
  const key = 'YOUR_KEY';
  const secret = 'YOUR_SECRET';
  
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

  /*-----------------------popOvering handlers/Material-UI--------------------------------*/
  
  const [detail, setDetail] = useState({
    species: null,
    age: null,
    gender: null,
    breeds: null,
    email: null,
    city: null,
    id: null
  }); 
  
  const [open, setOpen] = React.useState(false);  
  
  const handleOpen = (e) => {
    setOpen(true); 
    /*e.target refers to the element that triggered the event (i.e. the element the user clicked on).
    e.currentTarget refers to the element that the event listener is attached to.
    In our case, e.currentTarget will always return the #parent element, but e.target will return whatever element the user directly interacted with. */
    setDetail({
      species: e.currentTarget.dataset.species,   //or --> e.target.getAttribute('data-name')
      age:  e.currentTarget.dataset.age,    // or --> e.target.attributes.getNamedItem('data-name').value
      gender: e.currentTarget.dataset.gender,
      breeds: e.currentTarget.dataset.breeds,
      email: e.currentTarget.dataset.email,
      city: e.currentTarget.dataset.city,
      id: e.currentTarget.dataset.id
    });
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  /*-----------------------------------------------------------------------------------*/
  var listItems = data.map((animal) =>  
    <List 
      id = {animal.id}
      key = {animal.id}
      photos= {animal.photos}
      gender= {animal.gender}
      age= {animal.age}
      species= {animal.species}
      breeds = {animal.breeds.primary}
      email= {animal.contact.email}
      city= {animal.contact.address.city}
      description= {animal.description}
      onToggle= {handleOpen}
    />,
  ); 
 
  const [searchResult, setSearchResult] = useState(null);
  
  var filteredData = function(input) {
    let myInput = input.toLowerCase();
    let reducer = listItems.reduce((acc, cur) => {
      if((cur.props.species.toLowerCase() === myInput) || (cur.props.breeds.toLowerCase() === myInput)) {  
        acc.push(cur);
      }
      return acc;
    }, []);
    if (reducer.length === 0) {
      setSearchResult('Nothing found!');
    } else {
      setSearchResult(reducer);
    }
  }

    /*---------------------------using material_ui to get popOver--------------------------*/
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
      width: 500,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid yellow',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Display data={detail} />
    </div>
  );
     /*------------------------------------------------------------------------------*/

  return (
    <div>
      <p className="header">Click on each picture to see more information 🧐</p>
      <Form data={data} filteredData={filteredData}/>
      <hr className="linebreaker" />
      <section className="bigDisplay">
        {(searchResult !== null) ? searchResult : listItems}
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {body}
      </Modal>
    </div>
  );
}

export default App; 
