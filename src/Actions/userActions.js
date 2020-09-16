import { auth } from "../Firebaseapp/firebase.utils";
import Cookie from 'js-cookie';
import { USER_SIGNIN_SUCCESS, USER_SIGNIN_REQUEST, USER_SIGNIN_FAIL } from "../Constants/userConstants";

const signInWithreduce = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST});
    
    try {
      await auth.signInWithEmailAndPassword(email, password);
      const user = true;
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: user });
      Cookie.set('userInfo', JSON.stringify(user));
      //Cookie.set('userInfo', JSON.stringify(user));
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    }
  }

  const signOutreduce = () => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST});
    try {
      console.log('outtie')
      await auth.signOut();
      const user = false;
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: user });
      Cookie.set('userInfo', JSON.stringify(user));
      //Cookie.set('userInfo', JSON.stringify(user));
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    }
  }

  export {signInWithreduce, signOutreduce};