import React, { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';


const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        const token=localStorage.getItem('eq_token')
        if(token==null){
            navigate('/Login')
        }
    })
    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            <p>Here is your dashboard content.</p>
        </div>
    );
};

export default Dashboard;
