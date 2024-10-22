import React, { useState } from 'react';

const Task = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:7000/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, address, contact }),
        headers: {
          'Content-Type':'application/json',
        },
      });
      const result = await response.json();
      alert(result.Message); // Log the result for debugging purposes
    } catch (error) {
      console.error(error); // Log any errors that occur
    }
  };
  return (
    <div className="container w-25  mt-5 ">
      <h2 className='mb-5 w-100 text-center'>Post Form </h2>
      <form className="bg-success p-4 d-flex flex-column rounded " onSubmit={registerUser}>
        <div className="mb-3">
          <label className="form-label w-100 text-center">Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-100"
          />
        </div>
        <div className="mb-3">
          <label className="form-label w-100 text-center">Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-100"
          />
        </div>
        <div className="mb-3">
          <label className="form-label w-100 text-center">Address</label>
          <br />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-100"
          />
        </div>
        <div className="mb-3">
          <label className="form-label w-100 text-center">Contact</label>
          <br />
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-100"
          />
        </div>
        <div className='w-100 d-flex align-items-center justify-content-center '>
        <button type="submit" className="btn btn-success w-25 " >
          Register
        </button>
        </div>
      </form>
    </div>
  );
};

export default Task;