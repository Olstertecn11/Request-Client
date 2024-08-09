import { useState, useEffect } from "react";
import PetitionService from "../../services/PetitionService";
import { Card, CardHeader, Heading, StackDivider, CardBody, SimpleGrid, Button, Box } from "@chakra-ui/react";
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
    <div className="container">
      <div className="row">
        <div className="col-md-12 mx-auto">
          <div className="row">
            <Card className="m-4">
              <CardHeader>
                <Heading size='md'>Peticiones</Heading>
              </CardHeader>
              <CardBody>
                <SimpleGrid columns={[1, 2, 3]} spacing='4'>
                  {currentItems && currentItems.length !== 0 ? (
                    currentItems.map((item, index) => (
                      <PetitionCard key={index} name={item.nombre} description={item.contenido} date={item.fecha} />
                    ))
                  ) : ''}
                </SimpleGrid>
                <Box mt={4} display="flex" justifyContent="center">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <Button
                      key={index + 1}
                      onClick={() => paginate(index + 1)}
                      isActive={currentPage === index + 1}
                      mx={1}
                    >
                      {index + 1}
                    </Button>
                  ))}
                </Box>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

