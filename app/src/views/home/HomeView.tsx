import { Box, HStack } from "@chakra-ui/react";
import { FC } from "react";

const HomeView: FC = () => {
  return (
    <Box border="1px solid green" w="full" h="full" display="flex">
      <HStack
        flex="66%"
        height="100%"
        w="full"
        border="1px solid blue"
        backgroundColor="#F1F1F1"
        justifyContent="center"
      >
        Your content goes here
      </HStack>
    </Box>
  );
};

export default HomeView;
