import React, { useState } from 'react'

const Signup = () => {
    const [name,setname]=useState('')
    const getData = (e)=> {
        setname(e.target.value)
    }
  return (
    <div>
        <h1 className='text-success'> Sign-Up Component</h1>
      <input type='text' onChange={getData}/>
      <h1> Name is :{name}</h1>
    </div>
  )
}

export default Signup
