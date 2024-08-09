import { Card, Button, Heading, Text, CardBody } from '@chakra-ui/react'

const PetitionCard = ({ name, description, date }) => {
  return (
    <Card variant='elevated' size='sm' height={'auto'} >
      <CardBody padding={4}>
        <Heading size='md'> {name}</Heading>
        <Text>{description}</Text>
        <small className='text-muted'>{date.substring(0, 10)}</small>
      </CardBody>
    </Card>
  )
}

export default PetitionCard;
