import React, { useContext, useEffect, useState } from 'react'
import customerContext from '../../context/customers/customerContext';
import './customer.css'

function Customer() {
    const context = useContext(customerContext);
    const { fetchSingleCustomer, fetchOrderDetails, customer, order } = context;

    useEffect(() => {
        fetchSingleCustomer();
        fetchOrderDetails();
    }, [])

    return (
        <section className="customer" id="customer">
            {customer ? <div className="container">
                <div className="left">
                    <h1 className='main-heading'>{customer.first_name} {customer.last_name}</h1>
                    <div className="details-container">
                        <div className="personal">
                            <h4>Email:</h4>
                            <p>{customer.email}</p>
                            <h4>Phone Number:</h4>
                            <p>{customer.phone}</p>
                        </div>
                        <div className="right">
                            <h4>Created at</h4>
                            <p>{customer.created_at}</p>
                            <h4>Updated at</h4>
                            <p>{customer.updated_at}</p>
                            <h4>Note</h4>
                            <p>{customer.note? customer.note:'No notes'}</p>
                        </div>
                        <div className="right">
                            <h4 style={{marginBottom:'10px'}}>{customer.email_verified?'Email Verified':'Email Not Verified'}</h4>
                            <h4>Tags</h4>
                            <p>{customer.tag?customer.tag:'No tags'}</p>
                            <h4>Total Spent</h4>
                            <p>{customer.total_spent}</p>
                        </div>
                    </div>
                    <div className="orderdetails">
                        <h3>Order Details</h3>
                        <div className="order">
                            <h4>Order Number</h4>
                            <h4>Total Price</h4>
                            <h4>Total Tax</h4>
                            <h4>Discount</h4>
                            <h4>Currency</h4>
                        </div>
                        {order.length != 0 ? order.filter((e) => { return e.customer.id == customer.id }).map((item) => {
                            return <div className='order' key={item.id}>
                                <div className="details">
                                    <p className='orderNo'>{item.order_number}</p>
                                </div>
                                <div className="price">
                                    <p>{item.total_price}</p>
                                </div>
                                <div className="tax">
                                    <p>{item.total_tax}</p>
                                </div>
                                <div className="discount">
                                    <p>{item.total_discounts}</p>
                                </div>
                                <div className="currency">
                                    <p>{item.presentment_currency}</p>
                                </div>
                            </div>
                        }) : <h3>No orders to display</h3>}
                    </div>
                </div>
            </div> : <h1>Loading...</h1>}
        </section>
    )
}

export default Customer
