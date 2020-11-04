import React, {useState} from 'react'; 
import CustomerActions from '../functions/CustomerActions';
import {useHistory} from 'react-router-dom';

export default function AddCustomerPage() {
    const history = useHistory();
    const [name, setName] = useState(null); 
    const [orgNr, setOrgNr] = useState(null); 
    const [vatNr, setVatNr] = useState(null); 
    const [ref, setRef] = useState(null);
    const [paymentTerm, setPaymentTerm] = useState(null); 
    const [website, setWebsite] = useState(null); 
    const [email, setEmail] = useState(null); 
    const [phone, setPhone] = useState(null); 

    const customerActions = new CustomerActions();

    const handleSaveCustomer = async () => {
        const payload = {
            name: name, 
            organisationNr : orgNr, 
            vatNr: vatNr, 
            reference: ref, 
            paymentTerm: paymentTerm, 
            website: website, 
            email: email, 
            phoneNumber: phone
        }
        await customerActions.addCustomer(payload);
        history.push("/home");
    }

    return (
        <div className="container">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="orgNr">Organisation Number</label>
                    <input type="text" className="form-control" id="orgNr" onChange={(e) => setOrgNr(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="vatNr">Vat number</label>
                    <input type="text" className="form-control" id="vatNr" onChange={(e) => setVatNr(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="ref">Reference</label>
                    <input type="text" className="form-control" id="ref" onChange={(e) => setRef(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="PaymentTerm">PaymentTerm</label>
                    <input type="number" className="form-control" id="PaymentTerm" onChange={(e) => setPaymentTerm(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="web">Website</label>
                    <input type="url" className="form-control" id="web" onChange={(e) => setWebsite(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" className="form-control" id="phone" onChange={(e) => setPhone(e.target.value)}/>
                </div>
            <button className="btn btn-info" onChange={handleSaveCustomer}>Save</button>
        </div>
    )
}
