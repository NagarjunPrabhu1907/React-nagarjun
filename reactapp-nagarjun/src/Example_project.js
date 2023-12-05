import React, { useState,useEffect,useRef } from "react";
import {useNavigate} from 'react-router-dom';
import NextPage from "./NextPage";


export default function Example_project() {
    const [NameValue, setName] = useState();
    const [emailValue, setEmail] = useState();
    const [CompanyValue, setCompany] = useState();
    const [locationValue, setLocation] = useState();
    const navigate = useNavigate();


    const [error1, setError1] = useState(null);
    const [error2, setError2] = useState(null);
    const [error3, setError3] = useState(null);
    const [error4, setError4] = useState(null);
    

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
      const handleName = e=>{
        if (!validateName(e.target.value)){
            setError1("name invalid")
            }else
            {
                setError1(null);
            }
            setName(e.target.value);
      }
      const handleEmail = e=>{
        if (!validateEmail(e.target.value)){
            setError2("email invalid")
            }else
            {
                setError2(null);
            }
            setEmail(e.target.value);
      }
      const handleCompanyName = e=>{
        if (!validateCompany(e.target.value)){
            setError3("company name invalid")
            }else
            {
                setError3(null);
            }
            setCompany(e.target.value);
      }
      const handleLocation = e=>{
        if (!validateLocation(e.target.value)){
            setError4("location invalid")
            }else
            {
                setError4(null);
            }
            setLocation(e.target.value);
      }
      

  const validateName = () => /^[A-Za-z\s]*$/.test(NameValue);
  const validateEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
 const validateCompany = () => /^[A-Za-z\s]*$/.test(CompanyValue);
  const validateLocation = () => /^[A-Za-z\s]*$/.test(locationValue);


    return (
        <div>
            <h1> Application</h1>
            
            <div style={containerStyle}>
                <label style={labelStyle}>  Name : </label>
                <input
                    type="text"
                    value={NameValue}
                    placeholder="Name"
                    onChange={handleName}
                    style={inputStyle}
                    ref={ref}
                     
                />
            </div>
            {error1 && <h2 style={{color: 'red'}}>{error1}</h2>}
            <br />        
            <div style={containerStyle}>
            <label style={labelStyle}> Email : </label>
                <input
                    type="text"
                    value={emailValue}
                    placeholder="Email ID"
                    onChange={handleEmail}
                    style={inputStyle}
                    

                />
            </div>
            {error2 && <h2 style={{color: 'red'}}>{error2}</h2>}
            <br />
            
            <div style={containerStyle}>
            <label style={labelStyle}> Company : </label>
                <input
                    type="text"
                    value={CompanyValue}
                    placeholder="Company Name"
                    onChange={handleCompanyName}
                    style={inputStyle}
                 
                />
            </div>
            {error3 && <h2 style={{color: 'red'}}>{error3}</h2>}
            <br />
            
            <div style={containerStyle}>
            <label style={labelStyle}> Location : </label>
                <input
                    type="text"
                    value={locationValue}
                    placeholder="Location"
                    onChange={handleLocation}
                    style={inputStyle}
                        
                     />
                <br />
            </div>
            {error4 && <h2 style={{color: 'red'}}>{error4}</h2>}
            <br/>
            <br/>
            <br/>
            <button style={{marginLeft:"10px"}} onClick={saveToLocalStorage}>submit</button>
            <button style={{marginLeft:"20px"}} onClick={Reset} > clear </button>
            <button style={{marginLeft:"25px"}} onClick={()=> navigate('/next-page')} disabled={!NameValue || !emailValue|| !CompanyValue || !locationValue} > next page </button>

        </div>
    )
}
