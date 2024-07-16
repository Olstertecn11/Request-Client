
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex,
  Switch,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useState } from 'react';
import axios from 'axios';

const RequestModal = ({ isOpen, onClose }) => {
  const [anonymus, setAnonymus] = useState(true);

  const anonymusChange = (event) => {
    setAnonymus(event.target.checked);
  }


  const handleSend = async () => {
    axios.post("http://localhost:3000/", {
      "name": "Oliver",
      "email": "olstertecn597@gmail.com",
      "petition": "jfkldsajlfkasdklf"
    }).then((response) => {
      console.log(response);
    });
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay
        bg='#12245bb5'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
      <ModalContent>
        <ModalHeader bgColor={'#3182ce'} color={'white'} fontWeight='bold'>Mi Petición</ModalHeader>
        <ModalCloseButton color='white' />
        <ModalBody pb={6}>
          <Flex align="center" mb={4} justify="flex-end">
            <FormLabel mb="0">¿Anónimo?</FormLabel>
            <Switch isChecked={anonymus} onChange={anonymusChange} />
          </Flex>
          {!anonymus && (
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input placeholder={'Oliver López'} />
            </FormControl>
          )}
          <FormControl mt={4} >
            <FormLabel color='#3182ce'>Contenido</FormLabel>
            <Textarea placeholder='Pido al señor por...' bg='gray.200' padding={2} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={handleSend}>
            Enviar Petición
          </Button>
          <Button onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default RequestModal;

