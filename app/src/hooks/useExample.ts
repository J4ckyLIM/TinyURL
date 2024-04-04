import { ExampleContext } from "../contexts/ExampleProvider";
import { useContext } from "react";

export const useExample = () => {
  const { value } = useContext(ExampleContext);
  return {
    value,
  };
};
