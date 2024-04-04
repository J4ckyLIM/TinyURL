import { LogoIcon } from "../../assets";
import AuthenticationForm from "../../components/forms/AuthenticationForm";
import { useAuth } from "../../hooks/useAuth";
import { AuthenticationType } from "../../types/auth/types";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

export interface AuthenticationFormHandlerProps {
  email: string;
  password: string;
  name: string;
  type: AuthenticationType;
}

const AuthenticationView: FC = () => {
  const { login, register } = useAuth();

  const onSubmitHandler = ({
    email,
    password,
    name,
    type,
  }: AuthenticationFormHandlerProps) => {
    if (type === AuthenticationType.LOGIN) {
      login(email, password);
    } else {
      register(email, password, name);
    }
  };

  return (
    <Flex height={"100vh"} width={"100%"} justifyContent="center">
      <VStack p="7" justifyContent="center">
        <img src={LogoIcon} alt={"logo"} style={{ paddingLeft: 15 }} />
        <Flex h="full" w="full" justifyContent="center">
          <AuthenticationForm onSubmit={onSubmitHandler} />
        </Flex>
      </VStack>
    </Flex>
  );
};

export default AuthenticationView;
