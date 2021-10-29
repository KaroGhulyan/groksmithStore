import axios from 'axios';
import { Dispatch } from 'react';
import { signUpUrl, signInUrl } from '../config/config.json'
import { SignIn } from '../interfaces';
import { UserAction, UserActionType } from './types';

interface Token {
  token: string
}

const signIn = (data: SignIn) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.post<Token>(signInUrl, data);
      const token = response.data.token
      console.log(token);
      localStorage.setItem('token', token)

      dispatch({
        type: UserActionType.isLoggedIn,
        payload: token
      })

    } catch (error) {
      dispatch({ type: UserActionType.getUserError, payload: 'Error' })
    }

  }
}


const signUp = async (data: any) => {
  try {

    const response = await axios.post(signUpUrl, data);
    console.log(response.data);


  } catch (error) {
  }

}
export {
  signIn,
  signUp
}