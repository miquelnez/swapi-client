import {
  Container,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { BsFillHouseFill, BsFillPersonFill } from 'react-icons/bs';
import { FaRocket } from 'react-icons/fa';

interface SearchNavbarProps {
  testId?: string;
  searchByName: string;
  searchByPlanet: string;
  searchByStarship: string;
  setSearchByName: (value: string) => void;
  setSearchByPlanet: (value: string) => void;
  setSearchByStarship: (value: string) => void;
}

const SearchNavbar = ({
  searchByName,
  searchByPlanet,
  searchByStarship,
  setSearchByName,
  setSearchByPlanet,
  setSearchByStarship,
  testId = 'search-navbar',
}: SearchNavbarProps) => {
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchByName(event.target.value);
  const handlePlanetChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchByPlanet(event.target.value);
  const handleStarshipChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchByStarship(event.target.value);

  return (
    <Container
      display="flex"
      maxW="100%"
      centerContent
      data-test={`${testId}-container`}
      data-testid={`${testId}-container`}
    >
      <HStack w={'xl'} spacing={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={
              <Icon as={BsFillPersonFill} w={5} h={5} color={'yellow.500'} />
            }
          />
          <Input
            onChange={handleNameChange}
            placeholder="Name"
            value={searchByName}
          />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={
              <Icon as={BsFillHouseFill} w={5} h={5} color={'yellow.500'} />
            }
          />
          <Input
            onChange={handlePlanetChange}
            placeholder="Homeworld"
            value={searchByPlanet}
          />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={FaRocket} w={5} h={5} color={'yellow.500'} />}
          />
          <Input
            onChange={handleStarshipChange}
            placeholder="Starship"
            value={searchByStarship}
          />
        </InputGroup>
      </HStack>
    </Container>
  );
};

export default SearchNavbar;
