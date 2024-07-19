import PetitionService from "../services/PetitionService";
import { useState, useEffect } from "react";
import { SimpleGrid, Card, CardHeader, Heading, CardBody, CardFooter, Button, Text, Stack } from "@chakra-ui/react";


const AdminDashboard = () => {


  const [petitions, setPetitions] = useState([]);

  const getPetitions = async () => {
    const response = await PetitionService.all();
    setPetitions(response);
  }

  useEffect(() => {
    getPetitions();
  }, []);

  const getDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB').replace(/(\d{2})\/(\d{2})\/(\d{4})/, (_, day, month, year) => `${day}/${month}/${year.slice(-2)}`);

  }

  return (
    <div className="container p-4">
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {petitions && petitions.lenght !== 0 ?
          (
            petitions.map((item, index) => (
              <Card key={item + index} bg='#002938'>
                <CardHeader>
                  <Heading size='sm' color="white">{item.nombre}</Heading>
                </CardHeader>
                <CardBody>
                  <Text color='white'>{item.contenido}</Text>
                </CardBody>
                <CardFooter>
                  <Stack spacing={2} align="center">
                    <Button>Ver Peticion</Button>
                    <small className="text-muted">{getDate(item.fecha)}</small>
                  </Stack>
                </CardFooter>
              </Card>

            ))
          ) : (
            'Sin peticiones'
          )
        }

      </SimpleGrid>
    </div>
  );

}



export default AdminDashboard;
