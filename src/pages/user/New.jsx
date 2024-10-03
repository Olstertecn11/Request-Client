
import { Image, Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react'

export default function New({ newContent }) {
  console.log(newContent);
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      mt={'2rem'}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <h2 className='text-center'>{newContent.title}</h2>
      <Image src={newContent.image} boxSize={'70%'} objectFit={'cover'} />

      <Text fontSize={{ base: 'md', md: 'md' }} textAlign={'justify'} maxW={'3xl'}>
        {newContent.content}
      </Text>

      <Text fontSize='sm' color={'gray.500'} textAlign={'center'} maxW={'3xl'} >
        {newContent.conclution ?? newContent.conclusion}
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://www.escogidasparaservir.com/wp-content/uploads/2017/07/ellen_white_008.jpg'
          }
          mb={2}
        />

        <Text fontWeight={600}>Ellen IA</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Consejera Adventista
        </Text>
      </Box>
    </Stack>
  )
}
