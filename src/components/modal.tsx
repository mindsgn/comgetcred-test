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
  const { name, description, market_cap_rank, symbol } = data;
  const { en: englishDescription } = description;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Text>Symbol: {symbol}</Text>
            <Text>Rank: {market_cap_rank}</Text>
            <Text>Rank: {market_cap_rank}</Text>
          </Box>
          <Box>
            <Text>{englishDescription}</Text>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
