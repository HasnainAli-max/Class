import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
    const [user, setUser] = useState([]);
    const userUrl = "http://localhost:7000/list";

    const Handledelete = async (id) => {
        const response = await fetch(`http://localhost:7000/delete-user/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        alert(data.Message);
        listOfUsers();
    };


    const listOfUsers = async () => {
        let result = await fetch(userUrl);
        result = await result.json();
        setUser(result);
    };

    useEffect(() => {
        listOfUsers();
    }, []); // Dependency array ensures this runs only once when the component mounts

    return (
        <>
            <h1 className='text-center my-4 text-danger fw-bold'>List Of Users</h1>
            <div className='container w-75'>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>USER-ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((ele, index) => (
                            <tr key={ele.id}> {/* Added a unique key for each row */}
                                <th scope='row'>{index + 1}</th>
                                <td>{ele._id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.address}</td>
                                <td>{ele.contact}</td>
                                <td className='d-flex gap-3 align-item-center justify-content-center'>
                                    <button className='btn btn-success'>Edit</button>
                                    <button className='btn btn-danger' onClick={() => Handledelete(ele._id)}>Delete</button>
                                    <Link to={`/user/${ele._id}`}> {/* Link to the dynamic user view */}
                                        <button className='btn btn-info'>View</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default User;