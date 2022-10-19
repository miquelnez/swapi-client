import {
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { BsFillHouseFill, BsFillPersonFill } from 'react-icons/bs';
import { FaRocket } from 'react-icons/fa';

interface SearchNavbarProps {
  testId?: string;
}

const SearchNavbar = ({ testId = 'search-navbar' }: SearchNavbarProps) => {
  return (
    <HStack
      data-test={`${testId}-container`}
      data-testid={`${testId}-container`}
      spacing={4}
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={
            <Icon as={BsFillPersonFill} w={5} h={5} color={'yellow.500'} />
          }
        />
        <Input placeholder="Name" type="tel" />
      </InputGroup>

      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={
            <Icon as={BsFillHouseFill} w={5} h={5} color={'yellow.500'} />
          }
        />
        <Input placeholder="Homeworld" type="tel" />
      </InputGroup>

      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={FaRocket} w={5} h={5} color={'yellow.500'} />}
        />
        <Input placeholder="Starship" type="tel" />
      </InputGroup>
    </HStack>
  );
};

export default SearchNavbar;
