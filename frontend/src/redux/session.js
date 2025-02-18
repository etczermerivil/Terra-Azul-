
// export const thunkAuthenticate = () => async (dispatch) => {
// 	const response = await fetch("/api/auth/");
// 	if (response.ok) {
// 		const data = await response.json();
// 		if (data.errors) {
// 			return;
// 		}

// 		dispatch(setUser(data));
// 	}
// };



const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER
});

// export const thunkAuthenticate = () => async (dispatch) => {
// 	const response = await fetch("/api/auth/");
// 	if (response.ok) {
// 		const data = await response.json();
// 		if (data.errors) {
// 			return;
// 		}

// 		dispatch(setUser(data));
// 	}
// };

export const thunkAuthenticate = () => async (dispatch) => {
  const response = await fetch("/api/auth/", {
    credentials: "include",
  });

  if (response.ok) {
    const data = await response.json();
    console.log("thunkAuthenticate response:", data); // ✅ Log the response
    if (data.errors) return;
    dispatch(setUser(data));
  } else {
    console.log("thunkAuthenticate failed:", response.status);
  }
};


export const thunkLogin = (credentials) => async (dispatch) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",  // Ensure cookies are sent
    body: JSON.stringify(credentials)
  });

  if (response.ok) {
    const data = await response.json();
    // Dispatch the login response (if it contains useful data)
    dispatch(setUser(data));
    // Immediately authenticate to fetch complete user details
    dispatch(thunkAuthenticate());
  } else if (response.status < 500) {
    const errorMessages = await response.json();
    return errorMessages;
  } else {
    return { server: "Something went wrong. Please try again" };
  }
};

export const thunkSignup = (user) => async (dispatch) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",  // Ensure cookies are sent
    body: JSON.stringify(user)
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
    // Immediately authenticate to fetch complete user details
    dispatch(thunkAuthenticate());
  } else if (response.status < 500) {
    const errorMessages = await response.json();
    return errorMessages;
  } else {
    return { server: "Something went wrong. Please try again" };
  }
};

export const thunkLogout = () => async (dispatch) => {
  await fetch("/api/auth/logout", { credentials: "include" });
  dispatch(removeUser());
};


const initialState = { user: null };

function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case REMOVE_USER:
      return { ...state, user: null };
    default:
      return state;
  }
}

export default sessionReducer;
