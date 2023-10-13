import React from "react";

import { Box, Button, Flex, TextField } from "@radix-ui/themes";
import { Link2Icon } from "@radix-ui/react-icons";
import { api } from "@app/utils/api";

const GenerateLinkCard: React.FC = () => {
  const generateMutation = api.example.generateEasyLink.useMutation({
    onSuccess: () => {
      window.location.reload();
    },
  });

  return (
    <Box
      style={{
        backgroundColor: "var(--gray-a2)",
      }}
      p={"5"}
    >
      <Flex gap={"4"}>
        <Flex width={"100%"}>
          <TextField.Root
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField.Slot>
              <Link2Icon width={16} height={16}></Link2Icon>
            </TextField.Slot>
            <TextField.Input radius="full" size={"3"} placeholder="Long Url" />
          </TextField.Root>
        </Flex>

        <Button
          onClick={() => {
            generateMutation.mutate(
              {
                originalLink: "www.google.com",
              },
              {},
            );
          }}
          size={"3"}
          variant="soft"
        >
          Generate Easy Url
        </Button>
      </Flex>
    </Box>
  );
};
export default GenerateLinkCard;
