import { BASE_URL } from "../../api/fetchApi";
import { TinyUrl } from "../../types/tinyUrl";
import { CloseIcon, CopyIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Input, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { toast } from "sonner";

interface DetailViewProps {
  tinyUrl: TinyUrl;
  onClose: () => void;
}

export const DetailView: FC<DetailViewProps> = ({ tinyUrl, onClose }) => {
  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(`${BASE_URL}/${tinyUrl.slug}`);
    toast.success("Copied to clipboard");
  };
  return (
    <Box w="full" h="full" display="flex" justifyContent="center">
      <VStack w="40%" justifyContent="center">
        <HStack
          p="5"
          border="3px solid grey"
          w="full"
          alignItems="flex-start"
          borderRadius="10px"
        >
          <VStack p="8" alignItems="flex-start" w="full">
            <h3>Original URL</h3>
            <Input value={tinyUrl.originalUrl} disabled />
            <h3>Your shortened URL</h3>
            <Input value={`${BASE_URL}/${tinyUrl.slug}`} disabled />
            <Button onClick={copyToClipboard}>
              <CopyIcon />
            </Button>
          </VStack>
          <Button>
            <CloseIcon onClick={onClose} />
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};
