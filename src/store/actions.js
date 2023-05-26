const ROOT_URL = 'http://localhost:3001';


export async function loginUser(dispatch, payload) {
  // const requestOptions = {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(loginPayload),
  // };

    dispatch({ type: 'REQUEST_LOGIN' }); // step 2
    let response = await fetch(`${ROOT_URL}/users`); // step 3
    let data = await response.json(); // step 4

    // console.log(data)

    // console.log(payload)
  
    // if (response.ok) {
    //   dispatch({ type: 'LOGIN_SUCCESS', payload: payload });
    //   return data
    // }
  
    const checkEmail = data.filter((data)=> data.email === payload.email); // arrray 3 cai 
    console.log(checkEmail);
    const passwordInput = payload.password;
    let valid;
    if(checkEmail.length > 0) {
       valid = checkEmail.find(x => x.password === passwordInput);
       dispatch({type: 'LOGIN_SUCCESS', payload: valid});
    } else {
      dispatch({type: 'FAILURE', payload: "Failure to login"})
    }
}

export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
}

// nếu cái reducer data có cái email với password trùng với db
// thì login thành công