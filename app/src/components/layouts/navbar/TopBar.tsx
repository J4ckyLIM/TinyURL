import { LogoIcon } from "../../../assets";
import { Box, Flex, HStack } from "@chakra-ui/react";

const TopBar = () => {
  return (
    <>
      <Box px="6" py="2" w="full">
        <Flex h="16" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <img src={LogoIcon} />
          </Flex>
          <HStack
            display="flex"
            alignItems="center"
            justify="flex-end"
            spacing="4"
          ></HStack>
        </Flex>
      </Box>
    </>
  );
};

export default TopBar;
