import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import OAuth from '../components/OAuth';
import {
    PageContainer, LeftContainer, RightContainer, Logo, Title, RightInnerContainer,
    FormContainer, FormTitle, InputContainer, Input, InputIcon, Footer, BackgroundOverlay, Button
} from './StyledComponents';
import logo from '../Assets/eq-logo.png';
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const userData = { "email":email, "name":username, "password":password };

        // Save user data to localStorage
       // localStorage.setItem('user', JSON.stringify(userData));
         axios.post('http://127.0.0.1:3000/SignUp',userData).then(res=>{
            console.log(res)
            navigate('/Login')
         }).catch(err=>{
            console.log(err)
         })
       // alert('Signup successful!');
        //navigate('/dashboard');
    };

    const handleSuccess = (response) => {
        console.log('Google Signup Success:', response);
        navigate('/dashboard');
    };

    const handleFailure = (error) => {
        console.error('Google Signup Failure:', error);
    };

    return (
        <PageContainer>
            <LeftContainer>
                <BackgroundOverlay />
                <FormContainer onSubmit={handleSignup}>
                    <FormTitle>Create your Account</FormTitle>
                    <InputContainer>
                        <label>Email</label>
                        <InputIcon><FaEnvelope /></InputIcon>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </InputContainer>
                    <InputContainer>
                        <label>Username</label>
                        <InputIcon><FaUser /></InputIcon>
                        <Input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                    <InputContainer>
                        <label>Confirm Password</label>
                        <InputIcon><FaLock /></InputIcon>
                        <Input
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </InputContainer>
                    <Button type="submit">Signup</Button>
                    <OAuth onSuccess={handleSuccess} onFailure={handleFailure} />
                    <Footer>
                        <p>Already have an account?</p>
                        <Button type="submit" as={Link} to="/login">Login</Button>
                    </Footer>
                </FormContainer>
            </LeftContainer>
            <RightContainer>
                <RightInnerContainer>
                    <Logo>
                        <img src={logo} alt="EQ of AI Logo" />
                    </Logo>
                    <Title></Title>
                    <h3>Protect Privacy !!</h3>
                    <h3>Prompt Smartly !!</h3>
                </RightInnerContainer>
            </RightContainer>
        </PageContainer>
    );
};

export default Signup;
