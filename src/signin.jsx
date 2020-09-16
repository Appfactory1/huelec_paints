import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithreduce } from './Actions/userActions';
import FormInput from './components/formSignIn';
import CustomButton from './CustomButton';
import {
    Main,
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './signin.styles';


function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector((state) => state.userSignin);
    const { user} = userSignin;
    const dispatch = useDispatch();

    const handleSubmit = async event => {
        event.preventDefault();
        dispatch(signInWithreduce(email, password));
    };
    
    const handleChangePassword = event => {
        const { value } = event.target;
        setPassword(value);
    };

    const handleChangeEmail = event => {
        const { value } = event.target;
        setEmail(value);
        
    };

    useEffect(() => {
        console.log(user);
        if (user) {
            
          props.history.push('/');
        }
          return () => {
          
          };
        }, [user]);

        return (
            <Main>
            <SignInContainer>
            <SignInTitle>Admin Signup</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                name='email'
                type='email'
                handleChange={handleChangeEmail}
                value={email}
                label='email'
                required
                />
                <FormInput
                name='password'
                type='password'
                value={password}
                handleChange={handleChangePassword}
                label='password'
                required
                />
                <ButtonsBarContainer>
                <CustomButton type='submit'> Sign in </CustomButton>
                </ButtonsBarContainer>
            </form>
            </SignInContainer>
            </Main>
        );
}

export default SignIn;
