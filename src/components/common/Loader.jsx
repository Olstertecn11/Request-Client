
import React from 'react';
import { Flex, Spinner, Text } from "@chakra-ui/react";

const Loader = ({ isLoading, message = "Cargando..." }) => {
  if (!isLoading) return null;

  return (
    <Flex
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100vh"
      justify="center"
      align="center"
      bg="rgba(255, 255, 255, 0.8)"
      zIndex={1000}
      direction="column"
    >
      <Spinner size="xl" color="blue.500" />
      <Text mt={4} fontSize="lg" color="gray.700">
        {message}
      </Text>
    </Flex>
  );
};

export default Loader;
