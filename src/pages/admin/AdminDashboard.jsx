
import { useState, useEffect } from "react";
import PetitionService from "../../services/PetitionService";
import { Card, CardHeader, Heading, CardBody, SimpleGrid, Button, Box, Text, Input, Flex } from "@chakra-ui/react";
import PetitionCard from "../../components/admin/PetitionCard";
import Loader from "../../components/common/Loader";

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [recentData, setRecentData] = useState([]);
  const [olderData, setOlderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  });

  const fetch = async () => {
    setIsLoading(true);
    const response = await PetitionService.all();
    const today = new Date(selectedDate);
    const eightDaysAgo = new Date(today);
    eightDaysAgo.setDate(today.getDate() - 8);

    const recentPeticiones = response.filter(item => {
      const petitionDate = new Date(item.fecha);
      return petitionDate >= eightDaysAgo && petitionDate <= today;
    });

    const olderPeticiones = response.filter(item => {
      const petitionDate = new Date(item.fecha);
      return petitionDate < eightDaysAgo;
    }).sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    setRecentData(recentPeticiones);
    setOlderData(olderPeticiones);
    setIsLoading(false);
  };

  useEffect(() => {
    fetch();
  }, [selectedDate]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = olderData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(olderData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

              <Heading size="md" mb={4}>Peticiones recientes (últimos 8 días)</Heading>
              <SimpleGrid columns={[1, 2, 3]} spacing={6}>

                {recentData && recentData.length !== 0 ? (
                  recentData.map((item, index) => (
                    <PetitionCard key={index} name={item.nombre} description={item.contenido} date={item.fecha} />
                  ))
                ) : (
                  <Text>No hay peticiones recientes disponibles</Text>
                )}
              </SimpleGrid>

              <Heading size="md" mt={8} mb={4}>Peticiones anteriores</Heading>
              <SimpleGrid columns={[1, 2, 3]} spacing={6}>
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

