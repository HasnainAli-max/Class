import React, { useState } from 'react'

const Formthree = () => {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [age, setage] = useState('')
    const [address, setaddress] = useState('')
    return (
        <div>
            <h1>Form three</h1>
            <h1>Name: {name}</h1>
            <input type='text' onChange={(e) => {
                setname(e.target.value)
            }} />
            <br />
            <h1>Email: {email}</h1>
            <input type='text' onChange={(e) => {
                setemail(e.target.value)
            }} />
            <br />
            <h1>Age: {age}</h1>
            <input type='text' onChange={(e) => {
                setage(e.target.value)
            }
            } />
            <br />
            <h1>Address: {address}</h1>
            <input type='text' onChange={(e) => {
                setaddress(e.target.value)
            }} />
            <br />
            <br />
        </div>
    )
}

export default Formthree
