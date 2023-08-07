import * as React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";

export const TokenModal = ({
  data,
  isOpen,
  onClose,
}: {
  data: any;
  isOpen: any;
  onClose: any;
}) => {
  const { name, description, market_cap_rank, symbol, market_data } = data;
  const { en: englishDescription } = description;
  const { market_cap, circulating_supply, max_supply, total_supply } =
    market_data;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Box padding={2}>
              <Heading size="sm">Symbol</Heading>
              <Text>{symbol}</Text>
            </Box>
            <Box padding={2}>
              <Heading size="sm">Rank</Heading>
              <Text>{market_cap_rank}</Text>
            </Box>
            <Box padding={2}>
              <Heading size="sm">Rank</Heading>
              <Text>{market_cap_rank}</Text>
            </Box>
            <Box padding={2}>
              <Heading size="sm">Circulating Supply</Heading>
              <Text>{`${circulating_supply} ${symbol}`} </Text>
            </Box>
            <Box padding={2}>
              <Heading size="sm">total Supply</Heading>
              <Text>{`${total_supply} ${symbol}`} </Text>
            </Box>

            <Box padding={2}>
              <Heading size="sm">Description</Heading>
              <Text noOfLines={10}>{englishDescription}</Text>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
