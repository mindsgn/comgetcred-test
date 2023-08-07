import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  useDisclosure,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { CoinMarketData } from "./components/table";
import { TokenModal } from "./components/modal";

export const App = () => {
  const [data, setData] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const openModal = async (token: string) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${token}`,
        {
          method: "GET",
        }
      );
      const results = await response.json();
      setData(results);
    } catch (error) {}
  };

  useEffect(() => {
    if (data) {
      onOpen();
    }
  }, [data]);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack>
            <CoinMarketData openModal={openModal} />
          </VStack>
        </Grid>
        {data ? (
          <TokenModal data={data} isOpen={isOpen} onClose={onClose} />
        ) : null}
      </Box>
    </ChakraProvider>
  );
};
