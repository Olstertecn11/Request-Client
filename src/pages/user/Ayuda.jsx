import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react'
import RequestModal from '../../components/client/RequestModal';


const Ayuda = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = () => {
    onOpen();
  }

  return (
    <div>

      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                color={'#002938'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'red.500',
                  zIndex: -1,
                }}>
                Necesitas...
              </Text>
              <br />
              <Text as={'span'} color={'red.500'}>
                Oración?
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              En esta sección, puedes expresar tu motivo de oración. La iglesia lo tomará en cuenta para su plan sistemático de oraciones. Queremos orar por ti.
            </Text>
            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={'red.500'}
                onClick={handleClick}
                _hover={{ bg: 'red.600' }}>
                Realizar Petición
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
              >
                Asistencia
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <IconButton
                aria-label={'Play Button'}
                variant={'ghost'}
                _hover={{ bg: 'transparent' }}
                size={'lg'}
                color={'white'}
                position={'absolute'}
                left={'50%'}
                top={'50%'}
                transform={'translateX(-50%) translateY(-50%)'}
              />
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src='https://e1.pxfuel.com/desktop-wallpaper/225/266/desktop-wallpaper-crucial-power-of-intercessory-prayer-people-praying.jpg'
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
      <RequestModal isOpen={isOpen} onClose={onClose} />
    </div>
  )
}


export default Ayuda;

