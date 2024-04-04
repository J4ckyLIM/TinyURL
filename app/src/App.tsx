import { queryClient } from "./queryClient";
import routes from "./router";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Toaster } from "sonner";

const App = () => {
  const elements = useRoutes(routes);

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Suspense>{elements}</Suspense>
      </QueryClientProvider>
      <Toaster position="top-right" richColors />
    </ChakraProvider>
  );
};

export default App;
