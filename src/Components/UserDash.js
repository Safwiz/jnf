import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CommandsList from './CommandsList'
import './Styles/UserDash.css'

function UserDash(user) {
  
    const [commandes, setCommandes] = useState({});
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios({
            method: 'post',
            mode: 'no-cors',
            data: user,
            headers: { 
                'Access-Control-Allow-Origin' : '*',
            },
            url: 'http://localhost:4000/getCommandes',
          })
          console.log(response.data);
          setCommandes(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, []);
  
    return (
      <div className="UserDash">
        {commandes.length > 0 && <CommandsList commandList={commandes} />}
        {commandes.length == 0 && <div className="NoCommandes"><h1>No commandes</h1></div>}
      </div>
    );
  }
  
  export default UserDash;