import { createContext } from "react";
// import jwt from "jsonwebtoken";

export const AuthContext = createContext({
  login: Promise.resolve(),
  register: Promise.resolve(),
  forgotPassword: Promise.resolve(),
});

function AuthProvider({ children }) {
  const login = () => {};

  const register = (values) => {
    localStorage.setItem("user", JSON.stringify(values));
    // jwt.sign({
    //   data: values
    // }, 'secret', { expiresIn: '1h' })
    localStorage.setItem("accessToken", JSON.stringify(values));
    return "User registered successfully";
  };

  const logout = () => {};
  const forgotPassword = () => {};

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        forgotPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
