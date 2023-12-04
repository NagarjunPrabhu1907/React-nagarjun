import React ,{useState} from "react";

export default function Example_project() {
    const [NameValue, setName] = useState(' ');
    const [emailValue, setEmail] = useState(' ');
    const [CompanyValue, setCompany] = useState(' ');
    const [locationValue, setLocation] = useState(' ');
    
  function Reset (){
     setName("")
     setEmail("")
     setCompany("")
     setLocation("")
  }
 
  
  function saveToLocalStorage(){
    localStorage.setItem("name",NameValue)
    localStorage.setItem("email",emailValue)
    localStorage.setItem("company name",CompanyValue)
    localStorage.setItem("location",locationValue)
    window.alert('Data saved successfully');
  }

  return (
    <div>
      <h1> new project</h1>
    Name : <input
          type="text"
          value={NameValue}
          placeholder="Name"
          onChange={(e)=>setName(e.target.value)}
        />
        <br/>
    Email: <input
          type="text"
          value={emailValue}
          placeholder="Email ID"
          onChange={(e)=>setEmail(e.target.value)}
        />
         <br/>
    Company Name : <input
           type="text"
          value={CompanyValue}
          placeholder="Company Name"
          onChange={(e)=>setCompany(e.target.value)}
        />
          <br/>
    Location : <input
          type="text"
          value={locationValue}
          placeholder="Location"
          onChange={(e)=>setLocation(e.target.value)}
        />
        <br/>
        <button onClick = {saveToLocalStorage}>submit</button>

        <br/>
       <button onClick={Reset} > clear </button>

    </div>
  )
}
