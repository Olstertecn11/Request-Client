import { useState, useEffect } from "react";
import PetitionService from "../../services/PetitionService";
import { Card, CardHeader, Heading, CardBody, SimpleGrid, Button, Box, Text } from "@chakra-ui/react";
import PetitionCard from "../../components/admin/PetitionCard";

const AdminDashboard = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Puedes ajustar el número de elementos por página aquí

  const fetch = async () => {
    const response = await PetitionService.all();
    setData(response);
  }

  useEffect(() => {
    fetch();
  }, []);

  // Calcular el índice de los elementos actuales
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Cambiar de página
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

