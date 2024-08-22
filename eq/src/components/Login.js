import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import {
    PageContainer, LeftContainer, RightContainer, Logo, RightInnerContainer, HeightContainer,
    FormContainer, FormTitle, Footer, BackgroundOverlay, InputContainer, Input, InputIcon, Button
} from './StyledComponents';
import logo from '../Assets/eq-logo.png';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        
        // Retrieve the stored user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem('user'));
        axios.post("http://127.0.0.1:3000/Login",{"email":email,"password":password }).then(res=>{
            console.log(res)
            if(res.data['data']!=null){
                localStorage.setItem("eq_token","bearer " + res.data['data'])
                navigate('/Dashboard')
            }
            
        }).catch(err=>{
            console.log(err)
         })
        // Check if storedUser exists and if the email and password match
        // if (storedUser) {
        //     console.log('Stored user data:', storedUser);
    
        //     if (storedUser.email === email && storedUser.password === password) {
        //         alert('Login successful!');
        //         navigate('/dashboard'); // Redirect to dashboard
        //     } else {
        //         alert('Invalid email or password. Please try again.');
        //     }
        // } else {
        //     alert('No user found. Please sign up first.');
        // }
    };
    
    const handleSuccess = (response) => {
        console.log('Google Login Success:', response);
        navigate('/dashboard');
    };

    const handleFailure = (error) => {
        console.error('Google Login Failure:', error);
    
       
    };
    

    return (
        <PageContainer>
            <LeftContainer>
                <BackgroundOverlay />
                <FormContainer >
                    <HeightContainer>
                        <FormTitle>Login to Your Account</FormTitle>
                        <InputContainer>
                            <label>Email</label>
                            <InputIcon><FaUser /></InputIcon>
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </InputContainer>
                        <InputContainer>
                            <label>Password</label>
                            <InputIcon><FaLock /></InputIcon>
                            <Input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />                             
                        </InputContainer>
                        <Button type="button" onClick={handleLogin} >Login</Button>
                        <Link to="/reset-password" className="auth-link">
                           <p>Forgot password?</p> 
                        </Link> 
                        {/* <OAuth onSuccess={handleSuccess} onFailure={handleFailure} />                                   */}
                        <Footer>
                            <p>Don't have an account?</p>
                            <Button type="submit" as={Link} to="/signup">Sign Up</Button>
                        </Footer>
                    </HeightContainer>
                </FormContainer>
            </LeftContainer>
            <RightContainer>
                <RightInnerContainer>
                    <Logo>
                        <img src={logo} alt="EQ of AI Logo" />
                    </Logo>             
                    <h3>Protect Privacy !!</h3>
                    <h3>Prompt Smartly !!</h3>
                </RightInnerContainer>
            </RightContainer>
        </PageContainer>
    );
};

export default Login;
