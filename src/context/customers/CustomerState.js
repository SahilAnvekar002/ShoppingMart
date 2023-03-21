import { useState } from 'react';
import CustomerContext from './customerContext'

const CustomerState = (props) => {
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState({});
    const [order, setOrder] = useState([]);
    const [id, setId] = useState(undefined);

    const fetchCustomers = async () => {
        let url = 'http://localhost:5000/getcustomers';
        let data = await fetch(url);
        let json = await data.json();
        setCustomers(json.customers);
    }

    const fetchSingleCustomer = async () => {
        let url = `http://localhost:5000/getcustomerdetails/${id}`;
        let data = await fetch(url);
        let json = await data.json();
        setCustomer(json.customer);
        console.log(json.customer);
    }

    const fetchOrderDetails = async () => {
        let url = `http://localhost:5000/getorderdetails`;
        let data = await fetch(url);
        let json = await data.json();
        setOrder(json.orders);
        console.log(json.orders)
    }

    return (
        <CustomerContext.Provider value={{ customers, fetchOrderDetails, fetchCustomers, setId, id, fetchSingleCustomer, customer, order }}>
            {props.children}
        </CustomerContext.Provider>
    )
}

export default CustomerState;