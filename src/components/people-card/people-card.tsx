import {
  Heading,
  Avatar,
  Box,
  Center,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  StackDivider,
  Icon,
} from '@chakra-ui/react';
import {
  BsArrowUp,
  BsArrowDown,
  BsFillEyeFill,
  BsCalendar,
  BsFillHouseFill,
} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { getId } from '../../helpers/get-id';

import { People } from '../../types/types';
import { Feature } from '../feature/feature';

interface PeopleCardProps {
  testId?: string;
  person: People;
  // onClickAdd: (product: ProductType) => void;
}

export default function PeopleCard({
  person,
  testId = 'people-card',
}: PeopleCardProps) {
  const navigate = useNavigate();

  const handleGoPlanet = (url: string) => {
    const id = getId(url);
    navigate(`/planets/${id}`);
  };

  const handleGoStarship = (url: string) => {
    const id = getId(url);
    navigate(`/starships/${id}`);
  };

  return (
    <Center
      py={6}
      data-test={`${testId}-container`}
      data-testid={`${testId}-container`}
    >
      <Box
        w={'full'}
        maxW={'320px'}
        p={6}
        textAlign={'center'}
        bg={useColorModeValue('white', 'gray.900')}
        shadow={'2xl'}
        rounded={'lg'}
      >
        <Avatar
          pos={'relative'}
          mb={4}
          size={'xl'}
          src={`https://loremflickr.com/250/250/${person.name}`}
        />
        <Heading fontFamily={'body'} fontSize={'2xl'}>
          {person.name}
        </Heading>

        <Stack
          pt={5}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            />
          }
          spacing={4}
        >
          <Feature
            fontWeight={600}
            fontSize={'sm'}
            // isHomeworld={true}
            cursor={'pointer'}
            onClick={() => handleGoPlanet(person.homeworld)}
            icon={
              <Icon as={BsFillHouseFill} w={5} h={5} color={'yellow.500'} />
            }
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={person.homeworld}
          />
          <Feature
            icon={<Icon as={BsArrowUp} w={5} h={5} color={'yellow.500'} />}
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={person.height}
          />
          <Feature
            icon={<Icon as={BsArrowDown} w={5} h={5} color={'yellow.500'} />}
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={person.mass}
          />
          <Feature
            icon={<Icon as={BsFillEyeFill} w={5} h={5} color={'yellow.500'} />}
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={person.eye_color}
          />
          <Feature
            icon={<Icon as={BsCalendar} w={5} h={5} color={'yellow.500'} />}
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={person.birth_year}
          />
        </Stack>

        <Stack align={'center'} justify={'center'} mt={6}>
          {person &&
            person.starships &&
            person.starships.map((starship: any, index) => (
              <Badge
                key={index}
                px={2}
                py={1}
                fontWeight={'400'}
                bg={'gray.250'}
                cursor={'pointer'}
                onClick={() => handleGoStarship(starship)}
              >
                {starship}
              </Badge>
            ))}
        </Stack>

        <Stack direction={'row'} mt={8} spacing={4}>
          <Button
            flex={1}
            color={'white'}
            fontSize={'sm'}
            bg={'blue.400'}
            shadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
            rounded={'full'}
          >
            Follow
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
