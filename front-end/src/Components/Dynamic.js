import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Dynamic = () => {
    const [user, setUser] = useState([]);
    const { id } = useParams();
    const userUrl = `http://localhost:7000/getonid/${id}`;
    const listOfUsers = async () => {
        let result = await fetch(userUrl);
        result = await result.json();
        setUser(result);
    };
    useEffect(() => {
        listOfUsers();
    },);
    return (
        <div className='d-flex align-items-center justify-content-center flex-column'>
            <>
            <h1 className='text-center mt-5 text-info'>Single user detail</h1>
            <table className='table table-bordered table-striped mt-5  '>
                    <thead className='text-center'>
                        <tr>
                            <th>USER-ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                            <tr> 
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.contact}</td>
                            </tr>
                    </tbody>
                </table>
                
            </>
        </div>
    );
};

export default Dynamic;