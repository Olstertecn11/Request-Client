
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

const RequestModal = ({ isOpen, onClose }) => {
  const [anonymus, setAnonymus] = useState(true);

  const anonymusChange = (event) => {
    setAnonymus(event.target.checked);
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
        <ModalHeader color={'blue.700'} fontWeight='bold'>Mi Petición</ModalHeader>
        <ModalCloseButton />
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
            <FormLabel>Contenido</FormLabel>
            <Textarea placeholder='Pido al señor por...' bg='gray.200' />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3}>
            Enviar Petición
          </Button>
          <Button onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default RequestModal;

