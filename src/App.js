import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import List from './components/List';
//import Animala from './components/Animals';

function App() {
  const key = 'ZEWjRc5xybl8QtBNgfb7KeLMlxKDJQl5C9owWvxgDeYymORjJ3';
  const secret = 'rHPHoqH0S9KGHnU8GRZ4pCA01nEqOyv1cTpSBWMR';
  //const baseURL = 'api.petfinder.com/v2';
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
        //console.log(data);
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
    
    const listItems = data.map((animal) =>  
      <List 
        id = {animal.id}
        key = {animal.id}
        photos= {animal.photos}
        gender= {animal.gender}
        age= {animal.age}
        name= {animal.name}
        breeds = {animal.breeds.primary}
        contact= {animal.contact}
      />,
    );

  return (
    <div>
      <Form data={data} />
      <hr className="linebreaker" />
      <section className="section">
      {listItems}
      </section>
    </div>
  );
}

export default App;
