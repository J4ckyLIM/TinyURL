import { useCreateTinyUrlMutation } from "../../api/tinyUrl";
import { TinyUrl } from "../../types/tinyUrl";
import { DetailView } from "./DetailView";
import { Box, Button, HStack, Input, VStack } from "@chakra-ui/react";
import { FC, useState } from "react";
import { toast } from "sonner";

const HomeView: FC = () => {
  const [urlToShorten, setUrlToShorten] = useState<string | null>(null);
  const [tinyUrl, setTinyUrl] = useState<TinyUrl | null>(null);
  const [isDetailViewOpen, setIsDetailViewOpen] = useState<boolean>(false);

  const createTinyUrlMutation = useCreateTinyUrlMutation();

  const validateUrl = (url: string) => {
    // Regular expression for URL validation
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  };

  const handleCreateTinyUrl = () => {
    if (!urlToShorten) return;
    const isValidUrl = validateUrl(urlToShorten);
    if (!isValidUrl) {
      toast.error("Please enter a valid URL");
      return;
    }
    createTinyUrlMutation.mutate({
      url: urlToShorten,
      onSuccess: (data) => {
        toast.success("URL shortened successfully");
        setTinyUrl(data);
        setIsDetailViewOpen(true);
      },
      onError: () => {
        toast.error("An error occurred while shortening the URL");
      },
    });
  };

  return (
    <Box w="full" h="full" display="flex" justifyContent="center">
      {tinyUrl && isDetailViewOpen ? (
        <DetailView
          tinyUrl={tinyUrl}
          onClose={() => setIsDetailViewOpen(false)}
        />
      ) : (
        <VStack w="40%" justifyContent="center">
          <HStack p="5" border="3px solid grey" w="full" borderRadius="10px">
            <VStack p="8" alignItems="flex-start" w="full">
              <h3>Your URL to shorten</h3>
              <Input
                placeholder="Enter your URL"
                onChange={(event) => {
                  setUrlToShorten(event.target.value);
                }}
              />
              <Button disabled={!urlToShorten} onClick={handleCreateTinyUrl}>
                Shorten URL
              </Button>
            </VStack>
          </HStack>
        </VStack>
      )}
    </Box>
  );
};

export default HomeView;
