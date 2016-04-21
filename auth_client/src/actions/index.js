import axios from 'axios'
import { browserHistory } from 'react-router'
import {
	AUTH_USER,
	AUTH_ERROR
} from './types'

const ROOT_URL = 'http://localhost:3090'

export function signinUser ({ email, password }) {
	return function (dispatch) {
		// submit email/password to the server
		// { email: email, password:password  }
		axios.post(`${ROOT_URL}/signin`, { email, password })
			.then(response => {
				// If request is good...

				// 1. Update state to indicate user is authenticated
				dispatch({ type: AUTH_USER })
				// 2. Save the jwt token
				localStorage.setItem('token', response.data.token);

				// 3. Redirect to the route '/feature'
				browserHistory.push('/feacture')
			})
			.catch(() => {
				// If reques is bad...
				// Show an error to the user
				dispatch(authError('Bad login info'))

			})
	}

}

export function authError (error) {
	return {
		type: AUTH_ERROR,
		payload: error
	}
}
