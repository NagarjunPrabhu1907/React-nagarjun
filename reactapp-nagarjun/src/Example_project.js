import React, { useState,useEffect,useRef } from "react";

export default function Example_project() {
    const [NameValue, setName] = useState(' ');
    const [emailValue, setEmail] = useState(' ');
    const [CompanyValue, setCompany] = useState(' ');
    const [locationValue, setLocation] = useState(' ');

    function Reset() {
        setName("")
        setEmail("")
        setCompany("")
        setLocation("")
    }
    useEffect (()=> {
        const storedName = localStorage.getItem("name");
        const storedEmail = localStorage.getItem("email" || "");
        const storedCompany = localStorage.getItem("company name" || "");
        const storedLocation = localStorage.getItem("location" || "");
       
        
        setName(storedName); 
        setEmail(storedEmail);
        setCompany(storedCompany);
        setLocation(storedLocation);
    },[])

    const ref = useRef();
    useEffect(()=>{
        ref.current.focus();
    },[]);
    function saveToLocalStorage() {
        localStorage.setItem("name", NameValue)
        localStorage.setItem("email", emailValue)
        localStorage.setItem("company name", CompanyValue)
        localStorage.setItem("location", locationValue)
        window.alert('Data saved successfully');
    }

    const containerStyle = {
        display: 'flex',
        // flexDirection: 'column',
      };
    const inputStyle = {
        marginBottom: '8px'
    }
    const labelStyle = {
        marginRight: '8px',
      };
    

    return (
        <div>
            <h1> new project</h1>
            
            <div style={containerStyle}>
                <label style={labelStyle}>  Name : </label>
                <input
                    type="text"
                    value={NameValue}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                    ref={ref}
                />
            </div>
            <br />        
            <div style={containerStyle}>
            <label style={labelStyle}> Email : </label>
                <input
                    type="text"
                    value={emailValue}
                    placeholder="Email ID"
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                    
                />
            </div>
            <br />
            
            <div style={containerStyle}>
            <label style={labelStyle}> Company : </label>
                <input
                    type="text"
                    value={CompanyValue}
                    placeholder="Company Name"
                    onChange={(e) => setCompany(e.target.value)}
                    style={inputStyle}
                />
            </div>
            <br />
            
            <div style={containerStyle}>
            <label style={labelStyle}> Location : </label>
                <input
                    type="text"
                    value={locationValue}
                    placeholder="Location"
                    onChange={(e) => setLocation(e.target.value)}
                    style={inputStyle}
                />
                <br />
            </div>
            <br/>
            <br/>
            <br/>
            <button onClick={saveToLocalStorage}>submit</button>
            <button onClick={Reset} > clear </button>
            <button>next page </button>

        </div>
    )
}
