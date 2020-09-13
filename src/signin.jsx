import React, { useState } from 'react';
import FormInput from './components/formSignIn';
import CustomButton from './CustomButton';
import { auth } from './Firebaseapp/firebase.utils';
import {
    Main,
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './signin.styles';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = async event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {;
            this.props.history.push(`/`);
            console.log('done');
        }
        )
        .catch(e => {
            console.log('err');
        })
    };
    
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
        
    };

    render() {
        return (
            <Main>
            <SignInContainer>
            <SignInTitle>Admin Signup</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput
                name='email'
                type='email'
                handleChange={this.handleChange}
                value={this.state.email}
                label='email'
                required
                />
                <FormInput
                name='password'
                type='password'
                value={this.state.password}
                handleChange={this.handleChange}
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
}

export default SignIn;
