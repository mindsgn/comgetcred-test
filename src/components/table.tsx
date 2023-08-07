import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  Heading,
  Tr,
  Thead,
  Th,
  Tbody,
  Td,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";

export const CoinMarketData = ({ openModal }: { openModal: any }) => {
  const [data, setData] = useState<any[] | null>(null);
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentData, setCurrentData] = useState<any[] | null>(null);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(2);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en",
        {
          method: "GET",
        }
      );
      const results = await response.json();
      console.log(data);

      setData(results);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data) {
      setTotalPages(Math.ceil(data.length / itemsPerPage));
      setCurrentData(data.slice(startIndex, endIndex));
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setStartIndex((currentPage - 1) * itemsPerPage);
    }
  }, [currentPage]);

  useEffect(() => {
    if (data) {
      setEndIndex(startIndex + itemsPerPage);
    }
  }, [startIndex]);

  useEffect(() => {
    if (data) {
      setCurrentData(data.slice(startIndex, endIndex));
    }
  }, [endIndex]);

  return (
    <Box>
      <Heading>Cryptocurrency Data</Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Rank</Th>
              <Th>Name</Th>
              <Th>Current Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentData &&
              currentData.map((item) => {
                return (
                  <Tr
                    cursor={"pointer"}
                    key={item.name}
                    onClick={() => {
                      openModal(item.id);
                    }}
                  >
                    <Td>{item.market_cap_rank}</Td>
                    <Td>{item.name}</Td>
                    <Td>{`R ${item.current_price}`}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex mt={4} justifyContent="center">
        {Array.from({ length: totalPages }).map((_, index) => (
          <Button
            key={index}
            variant={currentPage === index + 1 ? "solid" : "outline"}
            colorScheme="teal"
            onClick={() => handlePageChange(index + 1)}
            mx={1}
          >
            {index + 1}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};
