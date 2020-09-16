import React from 'react';
import { useDispatch } from 'react-redux';
import { signOutreduce } from './Actions/userActions';

function SignOut() {

    const dispatch = useDispatch();

    const signout = () => {
        dispatch(signOutreduce());
    }

    return(
        <div onClick={signout}>Sign Out</div>
    )
}

export default SignOut;