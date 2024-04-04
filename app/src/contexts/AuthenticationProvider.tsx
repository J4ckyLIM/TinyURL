import { useMutationLogin, useMutationRegister } from "../api/auth";
import { AuthResult, User } from "../types/auth/types";
import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface AuthenticationConfig {
  accessToken: string | null;
  user: User | null;
  login: (email: string, password: string) => void;
  register: (email: string, password: string, name: string) => void;
  logout: () => void;
}

export const AuthenticationContext = createContext<AuthenticationConfig>({
  accessToken: null,
  user: null,
  login: () => {},
  register: () => {},
  logout: () => {},
});

export const AuthenticationProvider = ({ children }: { children: any }) => {
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  const loginMutation = useMutationLogin();

  const registerMutation = useMutationRegister();

  const saveAuthResult = ({ access_token, user }: AuthResult) => {
    localStorage.setItem("token", access_token);
    setAccessToken(access_token);
    setUser(user);
  };

  const onLoginError = (error: Error) => {
    toast.error(error.message);
  };

  const onRegisterError = (error: Error) => {
    toast.error(error.message);
  };

  const login = async (email: string, password: string) => {
    loginMutation.mutate({
      email,
      password,
      onSuccess: saveAuthResult,
      onError: onLoginError,
    });
  };

  const register = async (email: string, password: string, name: string) => {
    registerMutation.mutate({
      email,
      password,
      name,
      onSuccess: saveAuthResult,
      onError: onRegisterError,
    });
  };

  const logout = async () => {
    localStorage.removeItem("token");
    setAccessToken(null);
    setUser(null);
  };

  const contextValues = useMemo(() => {
    return {
      accessToken,
      user,
      login,
      register,
      logout,
    };
  }, [accessToken, login, register, user]);

  useEffect(() => {
    if (!accessToken || !user) {
      navigate("/auth");
    } else {
      navigate("/");
    }
  }, [accessToken, user, navigate]);

  return (
    <AuthenticationContext.Provider value={contextValues}>
      {children}
    </AuthenticationContext.Provider>
  );
};
