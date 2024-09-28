import React from 'react';
import {
  Box,
  IconButton,
  VStack, Text,
  useColorModeValue,
  Button,
  Accordion,
  Stack,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { FaBoxOpen, FaPlus, FaMinus, FaEdit, FaListAlt, FaFileInvoiceDollar } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { FaHome, FaUserAlt, FaCog, FaSignOutAlt, FaTimes, FaShoppingCart, FaComments } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaFilePdf } from "react-icons/fa6";
import { TiExport } from "react-icons/ti";

const Sidebar = ({ toggleSidebar }) => {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('gray.900', 'gray.100');
  const history = useNavigate();


  const redirect = (link) => {
    toggleSidebar();
    history(link);
  }

  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      w="250px"
      h="100vh"
      bg={bg}
      overflowY={'auto'}
      boxShadow="lg"
      p={5}
      css={{
        '&::-webkit-scrollbar': {
          width: '2px',
        },
        '&::-webkit-scrollbar-track': {
          width: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#D53F8C',
          borderRadius: '24px',
        },
      }}
    >
      <VStack spacing={4} align="stretch" justifyContent="flex-start">
        {/* Botón para cerrar el sidebar */}
        <IconButton
          icon={<FaTimes />}
          aria-label="Cerrar Sidebar"
          fontSize="12px"
          alignSelf="flex-end"
          color='gray.300'
          bg='gray.100'
          _hover={{ color: 'gray.400', bg: 'gray.200' }}
          onClick={toggleSidebar}
        />

        <Text fontSize="2xl" fontWeight="bold" color={'teal.600'} mb={8}>
          DivasOnline
        </Text>

        <Accordion allowToggle>
          <AccordionItem border='none' mt={2} color='teal.600'>
            <AccordionButton>
              <Box flex="1" textAlign="left" display="flex" alignItems="center" >
                <FaHome style={{ marginRight: '8px' }} />
                Inicio
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Button
                variant="ghost"
                colorScheme="teal"
                justifyContent="flex-start"
                w="100%"
                onClick={() => redirect('/admin/dashboard')}
              >
                Inicio
              </Button>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem border='none' mt={2} color='teal.600'>
            <AccordionButton>
              <Box flex="1" textAlign="left" display="flex" alignItems="center" >
                <TiExport style={{ marginRight: '8px' }} />
                Exportar Información
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Button
                variant="ghost"
                colorScheme="teal"
                justifyContent="flex-start"
                w="100%"
                onClick={() => redirect('/admin/dashboard')}
              >
                Generar PDF
              </Button>
              <Button
                variant="ghost"
                colorScheme="teal"
                justifyContent="flex-start"
                w="100%"
                onClick={() => redirect('/admin/dashboard')}
              >
                Generar Audio
              </Button>

            </AccordionPanel>
          </AccordionItem>
          <AccordionItem border='none' mt={2} color='teal.600'>
            <AccordionButton>
              <Box flex="1" textAlign="left" display="flex" alignItems="center" >
                <TiExport style={{ marginRight: '8px' }} />
                Semanas
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Button
                variant="ghost"
                colorScheme="teal"
                justifyContent="flex-start"
                w="100%"
                onClick={() => redirect('/admin/weekends')}
              >
                Ver todas
              </Button>
            </AccordionPanel>
          </AccordionItem>


        </Accordion>
      </VStack>
    </Box>
  );
};

export default Sidebar;
