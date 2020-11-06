import React, {useState, useEffect, useContext} from 'react'; 
import {useLocation, useHistory} from 'react-router-dom';
import CustomerActions from '../functions/CustomerActions';
import {UserContext} from '../context/userContext';
import {DataContext} from '../context/dataContext';
import styled from 'styled-components';

import Container from '../styles/Container';
import Title from '../styles/Title';
import Button from '../styles/Button';

export default function CustomerDetailPage(props) {
    const [customer, setCustomer] = useState(null);
    const {user} = useContext(UserContext);
    const {setData} = useContext(DataContext);
    const location = useLocation();
    const history = useHistory();
    const customerActions = new CustomerActions();

    useEffect(() => {
        if(location.data){
            setCustomer(location.data.customer);
        }
        else {
            history.push("/home");
        }
    }, [])
    
    const handleDeleteCustomer = async () => {
        await customerActions.deleteCustomer({token: user.token, id: customer.id}); 
        const data = await customerActions.getCustomers({token: user.token});
        setData(data);
        history.push("/home");
    }

    const handleEditCustomer = async () => {
        history.push({
            pathname: "/customer-form", 
            data: {customer: customer}
        });
    }

    return (
        <Container>
            {customer && <Card>
                <Title>Detail Page</Title>
                <ImageContainer>
                    <Img src="https://www.agencegenevievechampagne.com/wp-content/uploads/2019/03/generic-avatar-1.jpg"/>
                </ImageContainer>
                <DetailsContainer>
                    <TextContainer>
                        <Label>Name:</Label>
                        <Text> {customer.name}</Text>
                    </TextContainer>
                    <TextContainer>
                        <Label>Organisation Number:</Label>
                        <Text>{customer.organisationNr}</Text>
                    </TextContainer>
                    <TextContainer>
                        <Label>VAT Number: </Label>
                        <Text>{customer.vatNr}</Text>
                    </TextContainer>
                    <TextContainer>
                        <Label>Reference:</Label>
                        <Text>{customer.reference}</Text>
                    </TextContainer>
                    <TextContainer>
                        <Label>Payment Term:</Label>
                        <Text>{customer.paymentTerm}</Text>
                    </TextContainer>
                    <TextContainer>
                        <Label>Website:</Label>
                        <Text>{customer.website}</Text>
                    </TextContainer>
                    <TextContainer>
                        <Label>Email:</Label>
                        <Text>{customer.email}</Text>
                    </TextContainer>
                    <TextContainer>
                        <Label>Phone Number:</Label>
                        <Text>{customer.phoneNumber}</Text>
                    </TextContainer>
                </DetailsContainer>
                <ButtonContainer>
                    <Button onClick={handleDeleteCustomer}>Delete Customer</Button>
                    <Button onClick={handleEditCustomer}>Edit Customer</Button>
                </ButtonContainer>
            </Card>}
        </Container>
    )
}

const TextContainer = styled.div`
    display: flex; 
    justify-content: space-between
`

const Label = styled.p`
    font-size: 1.2rem;  
    color: #ccc;
`

const Text = styled.p`
    font-size: 1.2rem; 
`

const DetailsContainer = styled.div`
    grid-column: 2; 
    margin-top: 1rem;
    width: 70%;
`

const ImageContainer = styled.div`
    grid-column: 1;
    justify-self: center;
`

const Img = styled.img`
    width: 350px; 
    height: 400px;
    max-width: 80%; 
    max-height: 70%; 
    margin: 1rem; 
`

const Card = styled.div`
    justify-self: center; 
    width: 100%; 
    height: 70%;
    grid-column: 2;
    padding: 1rem;
    color: white;
    display: grid; 
    grid-template-columns: 50% 50%;
    margin: 2rem;
    `
const ButtonContainer = styled.div`
    display: flex; 
    justify-content: space-around; 
    grid-column: 1/ span 2;
    height: 3rem; 
`