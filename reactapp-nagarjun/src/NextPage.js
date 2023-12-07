
import React from 'react';
import { useLocation } from 'react-router-dom';


const NextPage = () => {
  
  const location = useLocation();


  const { name, email, companyName, location1 } = location.state;

  return (
    <div>
      <h2>Next Page</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Company Name: {companyName}</p>
      <p>Location: {location1}</p>
    </div>
  );
};

export default NextPage;
