import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage'; 
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerFormPage from './pages/CustomerFormPage';
import DataProvider from './context/dataContext';
import UserProvider from './context/userContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <DataProvider>
          <Switch>
            <Route exact component={HomePage} path="/home"/>
            <Route exact component={CustomerDetailPage} path="/customer"/>
            <Route exact component={CustomerFormPage} path="/customer-form"/>
            <Route exact component={LoginPage} path="/"/>
          </Switch>
        </DataProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
