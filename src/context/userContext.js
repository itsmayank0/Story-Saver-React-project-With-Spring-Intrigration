import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, userLoggedIn: true, userInfo: action.payload };

    case "LOGOUT":
      return { ...state, userLoggedIn: false };

    case "INITIAL_DATA":
      return { ...state, userData: action.payload };

    case "POSTNEW":
      return { ...state, userData: [...state.userData, action.payload] };

    case "DELETEPOST":
      return {
        ...state,
        userData: state.userData.filter((el) => el.id !== action.payload),
      };
    
      case "EDIT":
        return { ...state, userData: [...state.userData, action.payload] };

    default:
      console.log("There is some error with action.type");
      return state;
  }
}

const initialState = {
  userLoggedIn: false,
  userInfo: {},
  userData: [],
};

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
