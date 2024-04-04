import { AuthenticationContext } from "../contexts/AuthenticationProvider";
import { useContext } from "react";

export const useAuth = () => {
  const { accessToken, user, login, register, logout } = useContext(
    AuthenticationContext
  );
  return {
    accessToken,
    user,
    login,
    register,
    logout,
  };
};
