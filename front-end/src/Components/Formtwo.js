import React, { useState } from 'react'

const Formtwo = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [age, setage] = useState('')
    const [address, setaddress] = useState('')

    
    const getName = (e) => {
        setname(e.target.value)
    }
    const getemail = (e) => {
        setemail(e.target.value)
    }
    const getage = (e) => {
        setage(e.target.value)
    }
    const getaddress = (e) => {
        setaddress(e.target.value)
    }
    return (
        <div>
            <h1>Form two</h1>
            <h1>Name: {name}</h1>
            <input type='text' onChange={getName} />
            <br />
            <h1>Email: {email}</h1>
            <input type='text' onChange={getemail} />
            <br />
            <h1>Age: {age}</h1>
            <input type='text' onChange={getage} />
            <br />
            <h1>Address: {address}</h1>
            <input type='text' onChange={getaddress} />
            <br />
            <br />
        </div>
    )
}

export default Formtwo
