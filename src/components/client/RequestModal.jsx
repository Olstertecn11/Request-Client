
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
import { Link } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import PetitionService from '../../services/PetitionService';
import Swal from 'sweetalert2'

const RequestModal = ({ isOpen, onClose }) => {
  const [anonymus, setAnonymus] = useState(false);
  const emptyPetition = {
    name: '',
    email: '',
    phone: '',
    content: ''
  };
  const [petition, setPetition] = useState(emptyPetition);

  const anonymusChange = (event) => {
    setAnonymus(event.target.checked);
  }


  const sendEmail = () => {
    emailjs.send(
      'service_c21k7ks',
      'template_mso7hle',
      { from_name: petition.name, from_email: petition.email, message: petition.content },
      'Z0xX7AfW29CPEZpTU'
    ).then((result) => {
      Swal.fire({
        title: 'Accion ralizada',
        text: 'Petición enviada correctamente, revisa tu correo',
        icon: 'success'
      });
    }).catch((err) => {
      console.error("Error: ", err.text);
      Swal.fire({
        title: 'Accion denegada',
        text: 'Error al enviar la peticion',
        icon: 'error'
      });
    });
  }


  const handleSend = async () => {
    onClose();
    sendEmail();
    const response = await PetitionService.save(petition);
    console.log(response);
  }


  const handleChange = (event) => {
    const { name, value } = event.target;
    setPetition((prev) => ({ ...prev, [name]: value }))
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

          </Flex>
          {!anonymus && (
            <div>
              <FormControl>
                <FormLabel color='#3182ce' fontWeight='bold'>Nombre</FormLabel>
                <Input placeholder={'Oliver López'} name="name" onChange={handleChange} value={petition.name} type='text' />
              </FormControl>
              <FormControl className='mt-4'>
                <FormLabel color='#3182ce' fontWeight='bold'>Correo</FormLabel>
                <Input placeholder={'juanperez@gmail.com'} name="email" value={petition.email} onChange={handleChange} type='email' />
              </FormControl>
              <FormControl className='mt-4'>
                <FormLabel color='#3182ce' fontWeight='bold'>Teléfono</FormLabel>
                <Input placeholder={'59621085'} name="phone" value={petition.phone} onChange={handleChange} type='text' />
              </FormControl>
            </div>
          )}
          <FormLabel mt="4">¿Anónimo?</FormLabel>
          <Switch isChecked={anonymus} onChange={anonymusChange} />
          <FormControl mt={4} >
            <FormLabel color='#3182ce' fontWeight='bold'>Contenido</FormLabel>
            <Textarea placeholder='Pido al señor por...' bg='gray.200' padding={2} name="content" value={petition.content} onChange={handleChange} />
            <Link color='green.500' href='#' float='right' mt={2} textDecoration='underline' fontSize={12} >
              Términos & Condiciones
            </Link>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={handleSend}>
            Enviar Petición
          </Button>
          <Button onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal >
  );
}

export default RequestModal;

