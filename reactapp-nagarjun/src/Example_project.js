import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import NextPage from "./NextPage";


export default function Example_project() {
    const [nameValue, setName] = useState('');
    const [emailValue, setEmail] = useState('');
    const [companyValue, setCompany] = useState('');
    const [locationValue, setLocation] = useState('');
    const navigate = useNavigate();
    const [dataEntries,setdataEntries]=useState([]);


    function Reset() {
        setName("")
        setEmail("")
        setCompany("")
        setLocation("")
    }
     useEffect (()=> {
        const storedName = localStorage.getItem("name");
        const storedEmail = localStorage.getItem("email");
        const storedCompany = localStorage.getItem("company name");
        const storedLocation = localStorage.getItem("location");
      
        // if (nameValue !== storedName || companyValue!== storedCompany || emailValue!==storedEmail || locationValue!==storedLocation){
        //     window.alert("data changed in local storage")
        // }

    //    setName(storedName); 
    //     setEmail(storedEmail);
    //     setCompany(storedCompany);
    //     setLocation(storedLocation);
     },[])

    const ref = useRef();
    useEffect(() => {
        ref.current.focus();
    }, []);

//     useEffect(() => {
// window.alert("default name")
//     }, [nameValue]);
    function saveToLocalStorage() {
       // localStorage.setItem("name", nameValue)
       // localStorage.setItem("email", emailValue)
       // localStorage.setItem("company name", companyValue)
        //localStorage.setItem("location", locationValue)
        // navigate('/next-page', {
        //     state: {
        //         name: nameValue,
        //         email: emailValue,
        //         companyName: companyValue,
        //         location1: locationValue,
        //     }
        // });
    const dataBox = 
    {
        name : nameValue,
        email: emailValue,
        companyname : companyValue,
        location1 : locationValue
    };
    setdataEntries([...dataEntries,dataBox]);

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

// const setDefaultName = () =>{
//     setName("default");
// }
  

    return (
        <div>
            <h1> Application</h1>

            <div style={containerStyle}>
                <label style={labelStyle}>  Name : </label>
                <input
                    type="text"
                    value={nameValue}
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
                    value={companyValue}
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

            <button style={{ marginLeft: "20px" }} onClick={Reset} > CLEAR </button>
            <button style={{ marginLeft: "25px" }} onClick={saveToLocalStorage} disabled = {!nameValue.trim()||!emailValue.trim()||!companyValue.trim()||!locationValue.trim()}> SUBMIT </button>
            {/* <button style={{ marginLeft: "20px" }} onClick={setDefaultName} > setDefault Name </button> */}
            <br />
            <br />

            <div>
           <h3>Data entered :</h3>
           <ul>
            {dataEntries.map((data,index)=>(
                <li> key={index}
                <br/>
                name :{data.name},Email: {data.email}, Company: {data.companyname}, Location: {data.location1}
                </li>
            )
            
            )}



           </ul>


            </div>
        </div>
    )
}
