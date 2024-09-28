
import { useState, useEffect } from "react";
import { useToast, Tag, Card, CardHeader, Heading, CardBody, SimpleGrid, Button, Box, Text, Input, Flex, Stack, Divider, AbsoluteCenter } from "@chakra-ui/react";
import PetitionCard from "../../components/admin/PetitionCard";
import Loader from "../../components/common/Loader";
import PetitionService from "../../services/PetitionService";
import SemanaService from "../../services/SemanaService";


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

