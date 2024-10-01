
import { useState, useEffect } from "react";
import { useToast, Tag, Card, CardHeader, Heading, CardBody, SimpleGrid, Button, Box, Text, Input, Flex, Stack, Divider, AbsoluteCenter, useDisclosure } from "@chakra-ui/react";
import PetitionCard from "../../components/admin/PetitionCard";
import Loader from "../../components/common/Loader";
import PetitionService from "../../services/PetitionService";
import SemanaService from "../../services/SemanaService";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'


// Types Peticiones:  Salud, Educacion, Economia, Familia, Espiritualidad, Trabajo


const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [recentData, setRecentData] = useState([]);
  const [olderData, setOlderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();
  const [week, setWeek] = useState(false);
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  });

  const initialState = { title: 'La salud', content: 'Beneficios del ejercicio', conclution: 'El ejercicio ayuda a la salud' };
  const [modalContent, setModaContent] = useState(initialState);


  const { isOpen, onOpen, onClose } = useDisclosure();

  const createWeek = async () => {
    const response = await SemanaService.create();
    checkEmptyWeek();
  }

  const checkEmptyWeek = async () => {
    const response = await SemanaService.getLast();
    setWeek(response.data[0]);
  }

  const getWeekDate = () => {
    return (
      <div>
        <Tag colorScheme="green">
          {
            week.fh_inicio.substring(0, 10)
          }
        </Tag>
        /
        <Tag colorScheme="red">
          {

            week.fh_final.substring(0, 10)
          }
        </Tag>
      </div>
    );
  }

  const fetch = async () => {
    setIsLoading(true);
    const response = await PetitionService.all();
    console.log(response);
    const today = new Date(selectedDate);
    const eightDaysAgo = new Date(today);
    eightDaysAgo.setDate(today.getDate() - 8);

    const recentPeticiones = response.filter(item => {
      const petitionDate = new Date(item.fecha);
      return petitionDate >= eightDaysAgo && petitionDate <= today && item.estado > 0;
    });

    const olderPeticiones = response.filter(item => {
      const petitionDate = new Date(item.fecha);
      return petitionDate < eightDaysAgo || item.estado === 0;
    }).sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    setRecentData(recentPeticiones);
    setOlderData(olderPeticiones);
    setIsLoading(false);
  };


  useEffect(() => {
    fetch();
    checkEmptyWeek();
  }, [selectedDate]);

  useEffect(() => {
    // makeChatGptRequest();
    // if (recentData.length > 0) {
    // }
    console.log(modalContent);
  }, []);

  const makePetitionsString = () => {
    const petitions = recentData.map(item => `${item.contenido}`).join(', ');
    makeChatGptRequest(petitions);
    // onOpen();
  }


  const makeChatGptRequest = async (petitions) => {
    setIsLoading(true);
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    try {
      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4',
          messages: [{
            role: 'user', content: `Te daré una serie de peticiones separadas por coma, necesito que me determines en base a los
            siguientes 6 tipos de peticiones que tipo es que el que mas se repite en todas ellas, solamente devuelveme el nombre,
            los tipos son: Salud, Educacion, Economia, Familia, Espiritualidad, Trabajo, las peticiones a analizar son: ${petitions},
            necesito que me retornes unicamente un json con title,content y conclution, en ellos colocaras como un pequeño contenido,
            segun el tipo de peticion que determines, como un pequeño tema que podriamos realizar para ayudar a las personas con 
            ese tipo de peticion, recuerda, unicamente retorname ese json
          ` }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      // console.log(result.data.choices[0].message.content);
      const response = extraerJSONDelTexto(result.data.choices[0].message.content);
      setModaContent(response);
      setIsLoading(false);
      onOpen();
    } catch (error) {
      console.error('Error al llamar a la API de OpenAI:', error);
    }
  }

  const generateVoice = () => {
    const _str_final = `Deseamos que como hermanos en cristo podamos tener en cuenta estas peticiones y asi poder orar por nuestros hermanos, 
    que Dios les bendiga, feliz sábado`;
    const petitions = recentData.map(item => `${item.nombre} tiene la siguiente peticion ${item.contenido}`).join(', ') + _str_final;
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(petitions);
      utterance.lang = 'es-ES';
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Lo siento, tu navegador no soporta la síntesis de voz.');
    }
  }


  function extraerJSONDelTexto(textoPlano) {
    const jsonStart = textoPlano.indexOf('{');
    const jsonEnd = textoPlano.lastIndexOf('}');

    if (jsonStart === -1 || jsonEnd === -1) {
      console.error("No se encontró un objeto JSON en el texto proporcionado.");
      return null;
    }
    const jsonString = textoPlano.substring(jsonStart, jsonEnd + 1);

    try {
      const jsonObject = JSON.parse(jsonString);
      return jsonObject;
    } catch (error) {
      console.error("Error al parsear el JSON:", error);
      return null;
    }
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = olderData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(olderData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  const changeStatus = async () => {
    if (recentData.length === 0 || recentData.length == 0) {
      toast({
        title: 'Error',
        description: 'No hay peticiones a validar',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      });
      return;
    }
    const promises = recentData.map(item => PetitionService.statusUpdate(0, item.id));
    try {
      const responses = await Promise.all(promises);
      toast({
        title: 'Éxito',
        description: 'Peticiones Validadas',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      });
      fetch();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Error al validar peticiones',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      });
      console.error('Error updating status:', error);
    }
  };


  return (
    <Box className="container" p={6}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalContent.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {modalContent.content}
            <hr />
            <small style={{ textAlign: 'center' }}>
              {modalContent.conclution}
            </small>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box className="row">
        <Box className="col-md-12 mx-auto">
          <Card m={4} boxShadow="xl" borderRadius="lg">
            <CardHeader bg="teal.500" borderRadius={0} p={4}>
              <Heading size='lg' color="white">Peticiones</Heading>
            </CardHeader>
            <CardBody p={6}>
              <Loader isLoading={isLoading} />
              <Flex mb={4} justify="flex-end">
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  max={new Date().toISOString().split('T')[0]}
                  size="md"
                />
              </Flex>

              <Heading size="md" mb={4}>Peticiones recientes (últimos 8 días) {week ? getWeekDate() : ''}</Heading>
              <SimpleGrid columns={[1, 2, 3]} spacing={6} bg={'gray.100'} p={4} maxH={'860px'} overflowY={'auto'} borderRadius={8}>

                {recentData && recentData.length !== 0 ? (
                  recentData.map((item, index) => (
                    <PetitionCard key={index} name={item.nombre} description={item.contenido} date={item.fecha} />
                  ))
                ) : (
                  <Text>No hay peticiones recientes disponibles</Text>
                )}
              </SimpleGrid>

              <Stack display='flex' direction="row" mt={4} >
                {!week || week.length === 0 ?
                  <Button bg="yellow.600" _hover={{ bg: 'yellow.500' }} color='white' mt={4} onClick={createWeek}>Generar Semana</Button> : ''
                }
                <Button bg="blue.100" mt={4} onClick={changeStatus}>Peticiones Atendidas</Button>
                <Button bg="green.400" color='white' _hover={{ bg: 'green.600', color: 'white' }} mt={4} onClick={makePetitionsString}>Realizar Análisis</Button>
                <Button bg="teal.400" color='white' _hover={{ bg: 'teal.600', color: 'white' }} mt={4} onClick={generateVoice}>Leer Peticiones</Button>
              </Stack>

              <Box position='relative' padding='10'>
                <Divider />
                <AbsoluteCenter bg='white' px='4'>
                  ...
                </AbsoluteCenter>
              </Box>
              <Heading size="md" mt={8} mb={4}>Peticiones anteriores</Heading>
              <SimpleGrid columns={[1, 2, 3]} spacing={6} >
                {currentItems && currentItems.length !== 0 ? (
                  currentItems.map((item, index) => (
                    <PetitionCard key={index} name={item.nombre} description={item.contenido} date={item.fecha} />
                  ))
                ) : (
                  <Text>No hay peticiones disponibles</Text>
                )}
              </SimpleGrid>

              <Box mt={8} display="flex" justifyContent="center">
                {Array.from({ length: totalPages }, (_, index) => (
                  <Button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    isActive={currentPage === index + 1}
                    bg={currentPage === index + 1 ? "teal.500" : "gray.200"}
                    color={currentPage === index + 1 ? "white" : "black"}
                    _hover={{ bg: currentPage === index + 1 ? "teal.600" : "gray.300" }}
                    mx={2}
                    borderRadius="full"
                  >
                    {index + 1}
                  </Button>
                ))}
              </Box>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminDashboard;

