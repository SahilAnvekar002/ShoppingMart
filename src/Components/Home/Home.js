import React, { useContext, useEffect } from 'react'
import './home.css'
import customerContext from '../../context/customers/customerContext'
import user from './user.png'
import { useNavigate } from "react-router-dom";

function Home() {
    const context = useContext(customerContext);
    const { customers, fetchCustomers, setId } = context;
    const navigator = useNavigate();

    useEffect(() => {
        fetchCustomers();
    }, [])

    const handleClick =(id)=>{
        setId(id); 
        localStorage.setItem('id', id);
        navigator('/customerdetails');
    }

    return (
        <section id='home' className='home'>
            <div className="container">
                <h2 className='cust_heading'>Customer List</h2>
                {customers.length != 0 ? customers.map((customer) => {
                    return <div className="customerDetails" key={customer.id} onClick={()=>handleClick(customer.id)}>
                        <div className='wrapper'>
                            <img src={user} alt="User image" className='profile' />
                            <div className="details">
                                <h3 className='name'>{customer.first_name} {customer.last_name}</h3>
                                <p className='email'>{customer.email}</p>
                            </div>
                        </div>
                        <div className="orderscount">
                            <p>{customer.orders_count}</p>
                            <p>Orders Count</p>
                        </div>
                        <div className="tags">
                            <p>{customer.tags}</p>
                            <p>Tags</p>
                        </div>
                    </div>
                }) : <h1>No Customers to display</h1>}
            </div>
        </section>
    )
}

export default Home
