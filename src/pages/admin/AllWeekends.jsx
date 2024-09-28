
import SemanaService from "../../services/SemanaService";
import { useState, useEffect } from "react";
import { Box, Heading, Text, SimpleGrid, Card, CardBody, Flex } from "@chakra-ui/react";

const AllWeekends = () => {
  const [semanas, setSemanas] = useState([]);

  const fetch = async () => {
    const response = await SemanaService.getAllSemanas();
    setSemanas(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  const groupedSemanas = semanas.reduce((acc, semana) => {
    if (!acc[semana.semana_id]) {
      acc[semana.semana_id] = {
        fh_creacion: semana.fh_creacion,
        fh_inicio: semana.fh_inicio,
        fh_final: semana.fh_final,
        peticiones: []
      };
    }
    acc[semana.semana_id].peticiones.push({
      peticion_id: semana.peticion_id,
      nombre: semana.nombre,
      correo: semana.correo,
      telefono: semana.telefono,
      contenido: semana.contenido,
      fecha: semana.fecha,
      estado: semana.estado
    });
    return acc;
  }, {});

  return (
    <Box p={4} style={{ height: '100vh', overflowY: 'auto' }}>
      <Heading mb={6}>Semanas y Peticiones</Heading>

      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {Object.keys(groupedSemanas).length > 0 ? (
          Object.keys(groupedSemanas).map((semanaId) => {
            const semana = groupedSemanas[semanaId];
            return (
              <Card key={semanaId} boxShadow="md" borderRadius="md" w={'100vw'} display={'flex'} flexDir={'row'}>
                <CardBody>
                  <Heading size="md" mb={4}>Semana {semanaId}</Heading>
                  <Text><strong>Creación:</strong> {new Date(semana.fh_creacion).toLocaleDateString()}</Text>
                  <Text><strong>Inicio:</strong> {new Date(semana.fh_inicio).toLocaleDateString()}</Text>
                  <Text><strong>Final:</strong> {new Date(semana.fh_final).toLocaleDateString()}</Text>

                  <Heading size="sm" mt={4}>Peticiones:</Heading>

                  {/* Aquí está el cambio, usamos Flex para organizar horizontalmente */}
                  <Flex mt={2} gap={4} wrap="wrap">
                    {semana.peticiones.map((peticion, index) => (
                      <Box key={index} p={4} border="1px" borderColor="gray.200" borderRadius="md" width="300px">
                        <Text><strong>Nombre:</strong> {peticion.nombre}</Text>
                        <Text><strong>Correo:</strong> {peticion.correo}</Text>
                        <Text><strong>Teléfono:</strong> {peticion.telefono}</Text>
                        <Text><strong>Contenido:</strong> {peticion.contenido}</Text>
                        <Text><strong>Fecha:</strong> {new Date(peticion.fecha).toLocaleDateString()}</Text>
                        <Text><strong>Estado:</strong> {peticion.estado === 1 ? 'Atendida' : 'Pendiente'}</Text>
                      </Box>
                    ))}
                  </Flex>
                </CardBody>
              </Card>
            );
          })
        ) : (
          <Text>No hay semanas disponibles.</Text>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default AllWeekends;

