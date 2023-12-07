import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import NextPage from "./NextPage";


export default function Example_project() {
    const [NameValue, setName] = useState('');
    const [emailValue, setEmail] = useState('');
    const [CompanyValue, setCompany] = useState('');
    const [locationValue, setLocation] = useState('');
    const navigate = useNavigate();


    function Reset() {
        setName("")
        setEmail("")
        setCompany("")
        setLocation("")
    }
    // useEffect (()=> {
    //     const storedName = localStorage.getItem("name");
    //     const storedEmail = localStorage.getItem("email");
    //     const storedCompany = localStorage.getItem("company name");
    //     const storedLocation = localStorage.getItem("location");


    //    setName(storedName); 
    //     setEmail(storedEmail);
    //     setCompany(storedCompany);
    //     setLocation(storedLocation);
    // },[])

    const ref = useRef();
    useEffect(() => {
        ref.current.focus();
    }, []);
    function saveToLocalStorage() {
        localStorage.setItem("name", NameValue)
        localStorage.setItem("email", emailValue)
        localStorage.setItem("company name", CompanyValue)
        localStorage.setItem("location", locationValue)
        navigate('/next-page', {
            state: {
                name: NameValue,
                email: emailValue,
                companyName: CompanyValue,
                location1: locationValue,
            }
        });

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
    const handleName = e => {
        const a = e.target.value;
        const b = /^[A-Za-z]+$/.test(a);
        if (b) {
            setName(a);
        }
        else {
            setName('');
        }
    }

    const handleEmail = e => {
        const c = e.target.value;
        const d = /^[A-Za-z0-9@!#$%^&.]+$/.test(c);
        console.log("aaa", d);
        if (d) {
            setEmail(c);
        }
        else {
            setEmail('');
        }
    }
    const handleCompanyName = e => {
        const a = e.target.value;
        const b = /^[A-Za-z\s'-]+$/.test(a);

        if (b) {
            setCompany(a);
        }
        else {
            setCompany('');
        }
    }
    const handleLocation = e => {
        const a = e.target.value;
        const b = /^[A-Za-z\s'-]+$/.test(a);

        if (b) {
            setLocation(a);
        }
        else {
            setLocation('');
        }
    }


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

            <br />
            <br />
            <br />

            <button style={{ marginLeft: "20px" }} onClick={Reset} > clear </button>
            <button style={{ marginLeft: "25px" }} onClick={saveToLocalStorage} disabled = {!NameValue||!emailValue||!CompanyValue||!locationValue||" "}> next page </button>

        </div>
    )
}
