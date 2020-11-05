import React, {useState, useContext, useEffect} from 'react'; 
import CustomerActions from '../functions/CustomerActions';
import {useHistory, useLocation} from 'react-router-dom';
import {UserContext} from '../context/userContext';
import {DataContext} from '../context/dataContext';

import Container from '../styles/Container';

export default function AddCustomerPage() {
    const [customer, setCustomer] = useState(null);
    const history = useHistory();
    const location = useLocation();
    const {user} = useContext(UserContext);
    const {setData} = useContext(DataContext);
    const [name, setName] = useState(""); 
    const [orgNr, setOrgNr] = useState(""); 
    const [vatNr, setVatNr] = useState(""); 
    const [ref, setRef] = useState("");
    const [paymentTerm, setPaymentTerm] = useState(""); 
    const [website, setWebsite] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [phone, setPhone] = useState(""); 

    const customerActions = new CustomerActions();

    useEffect(() => {
        if(location.data){
            if(!customer) setCustomer(location.data.customer);
            if(customer) {
            setName(customer.name); 
            setOrgNr(customer.organisationNr); 
            setVatNr(customer.vatNr); 
            setRef(customer.reference); 
            setPaymentTerm(customer.paymentTerm); 
            setWebsite(customer.website); 
            setEmail(customer.email); 
            setPhone(customer.setPhone);
        }
        }
    }, [customer])

    const handleSaveCustomer = () => {
        if(customer) {
            handleEditCustomer();
        }
        else {
            handleAddCustomer();
        }
    }

    const handleAddCustomer = async () => {
        const payload = {
            token: user.token,
            payload: {
            name: name, 
            organisationNr : orgNr, 
            vatNr: vatNr, 
            reference: ref, 
            paymentTerm: paymentTerm, 
            website: website, 
            email: email, 
            phoneNumber: phone
            }
        }
        await customerActions.addCustomer(payload);
        const data = await customerActions.getCustomers({token: user.token}); 
        setData(data);
        history.push("/home");
    }

    const handleEditCustomer = async () => {
        const payload = {
            id: customer.id,
            token: user.token,
            payload: {
            name: name, 
            organisationNr : orgNr, 
            vatNr: vatNr, 
            reference: ref, 
            paymentTerm: paymentTerm, 
            website: website, 
            email: email, 
            phoneNumber: phone
            }
        }
        await customerActions.editCustomer(payload);
        const data = await customerActions.getCustomers({token: user.token}); 
        setData(data);
        history.push("/home");
    }

    return (
        <div className="container">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="orgNr">Organisation Number</label>
                    <input type="text" className="form-control" id="orgNr" value={orgNr} onChange={(e) => setOrgNr(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="vatNr">Vat number</label>
                    <input type="text" className="form-control" id="vatNr" value={vatNr} onChange={(e) => setVatNr(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="ref">Reference</label>
                    <input type="text" className="form-control" id="ref" value={ref} onChange={(e) => setRef(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="PaymentTerm">PaymentTerm</label>
                    <input type="number" className="form-control" id="PaymentTerm" value={paymentTerm} onChange={(e) => setPaymentTerm(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="web">Website</label>
                    <input type="url" className="form-control" id="web" value={website} onChange={(e) => setWebsite(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </div>
            <button className="btn btn-info" onClick={handleSaveCustomer}>Save</button>
        </div>
    )
}
