import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './components/Form';

function App() {
  const key = 'your_key';
  const secret = 'your_secret';
  //const baseURL = 'api.petfinder.com/v2';
  let urlAuth = "https://api.petfinder.com/v2/oauth2/token";

  const [data, setData] = useState([]);
  console.log(data);

  let status = 'adoptable';
  let breed = 'pug';
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
        console.log(data);
        return fetch('https://api.petfinder.com/v2/animals?breed=' + breed + '&status=' + status, {
          headers: {
            'Authorization': data.token_type + ' ' + data.access_token,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(function(res) {
            return res.json();
        }).then(function(json) {
            setData(json);
        }).catch(function(err) {
            console.log('somthing went wrong', err.name);
        })
      })
    }, []);
  

  return (
    <div>
      <Form data={data}/>
      <hr className="linebreaker" />
      <section className="section">
        <ul className="list">
          <li className="list">
            image1
          </li>
          <li className="list">
            image2
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
