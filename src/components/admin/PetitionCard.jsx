import { Card, Button, Heading, Text, CardBody } from '@chakra-ui/react'
import '../../assets/styles/PetitionCard.css';

const PetitionCard = ({ name, description, date }) => {
  return (
    <Card variant='elevated' size='sm' height={'auto'} className='petition-card' borderBottom={'2px solid #319795'} >
      <CardBody padding={4}>
        <Heading size='md'> {name}</Heading>
        <Text>{description}</Text>
        <small className='text-muted'>{date.substring(0, 10)}</small>
      </CardBody>
    </Card>
  )
}

export default PetitionCard;
