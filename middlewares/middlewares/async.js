export default function({ dispatch }){
	// return function(next){
	// 	return function(action){
	// 		console.log(action);
	// 		next(action)
	// 	}
	// }

	return next => action => {
		// if the action no have payload
		// or, the payload does not have a .thne property
		// we don care about it, send it on
		if(!action.payload || !action.payload.then) {
			return next(action)
		}

		// Make sure the action promise reloves
		action.payload
			.then(function(response){
				const newAction = { ...action, payload: response }
				dispatch(newAction)
			})
	}
}
