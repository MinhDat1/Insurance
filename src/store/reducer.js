

export const initialState = {
  email: "",
  password: "",
  loading: false,
  message: null,
  name: null,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
        message: "Failed"
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        email: action.payload.email,
        password: action.payload.password,
        message: "Success", 
        loading: false,
        name: action.payload.name
      };
    case "LOGOUT":
      return {
        ...initialState,
        email: "",
        password: "",
        message: "logout",
        loading: false
      };
      case "FAILURE":
      return {
        ...initialState,
        email: "",
        password: "",
        message: action.payload,
        loading: true
      }

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        message: action.error
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// thông thường khi mà đăng nhập nó lưu cái state(email, passwd) vô localStorage 
// khi render <Login /> thì vô localStorage kiểm tra cái state(email, passwd)

// => có thì render thẳng vô dashboard
// => render <Login />

