import React, {useState}from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import LoginForm from '../../components/Home/LoginForm';
import UserDashboard from '../../components/Home/UserDashboard';
import Logo from '../../assets/pipiLogo.png';

const Home = props => {

    const[withoutCode, setWithoutCode]=useState(false);
    const[logged,setLogged]=useState(false)

    const loginHandler = ()=>{
        setLogged(!logged);
    }

    return (
        <div style={{
            height:'30vh',
            width:'100%',
            margin:'10vh',
            textAlign:'center',
        
            }}
            >
            <img src={Logo} style={{
                borderRadius:'50%',
                height:'40vh'
            }}/>

            <Button onClick={()=>loginHandler()}>LOG</Button>

            {logged==false ? <><p>not logged</p><LoginForm/></>:
            <><p>logged</p><UserDashboard/></>}
        
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;