import React, { useState } from 'react';

import Form from './Form';

import './App.css';

function App() {

  const [teamMember, setTeamMember] = useState([
    
    {
        id: 0,
        name: "Maurice Moss",
        email: "moss@itcrowd.com",
        role: "IT Technician"
      },
      {
        id: 1,
        name: "Roy Trenneman",
        email: "roy@itcrowd.com",
        role: "IT Technician"
      },
      {
        id: 2,
        name: "Jen Barber",
        email: "jen@itcrowd.com",
        role: "Director of IT"
      },
      {
        id: 3,
        name: "Richmond Avenal",
        email: "richmond@itcrowd.com",
        role: "Backend Engineer "
      },
      {
        id: 4,
        name: "Douglas Reynholm",
        email: "ladiesman@itcrowd.com",
        role: "Boss"
      }
    
   
  ])

  return (
    <div className="App">
      <h1>My Team</h1>

      <Form teamMember={teamMember} setTeamMember={setTeamMember} />

      {teamMember.map((member, index) => (
        <div className="member" key={index}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>  
      ))}
    </div>
  );
}

export default App;