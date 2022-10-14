import {
  Heading,
  Avatar,
  Box,
  Center,
  Stack,
  Button,
  Badge,
  useColorModeValue,
  StackDivider,
  Icon,
} from '@chakra-ui/react';
import { BsArrowUp, BsFillCloudFill, BsFillHouseFill } from 'react-icons/bs';
import { AiOutlineArrowsAlt } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { getId } from '../../helpers/get-id';

import { Planet } from '../../types/types';
import { Feature } from '../feature/feature';

interface PlanetCardProps {
  testId?: string;
  planet: Planet;
  // onClickAdd: (product: ProductType) => void;
}

export default function PlanetCard({
  planet,
  testId = 'planet-card',
}: PlanetCardProps) {
  const navigate = useNavigate();

  const handleGoPeople = (url: string) => {
    const id = getId(url);
    navigate(`/people/${id}`);
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
          src={`https://loremflickr.com/250/250/${planet.name}`}
        />
        <Heading fontFamily={'body'} fontSize={'2xl'}>
          {planet.name}
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
            cursor={'pointer'}
            icon={
              <Icon as={AiOutlineArrowsAlt} w={5} h={5} color={'yellow.500'} />
            }
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={planet.rotation_period}
          />
          <Feature
            icon={<Icon as={BsArrowUp} w={5} h={5} color={'yellow.500'} />}
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={planet.orbital_period}
          />
          <Feature
            icon={
              <Icon as={AiOutlineArrowsAlt} w={5} h={5} color={'yellow.500'} />
            }
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={planet.diameter}
          />
          <Feature
            icon={
              <Icon as={BsFillCloudFill} w={5} h={5} color={'yellow.500'} />
            }
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={planet.climate}
          />
          <Feature
            icon={
              <Icon as={BsFillHouseFill} w={5} h={5} color={'yellow.500'} />
            }
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={planet.population}
          />
        </Stack>

        <Stack align={'center'} justify={'center'} mt={6}>
          {planet &&
            planet.residents &&
            planet.residents.map((resident: string, index) => (
              <Badge
                key={index}
                px={2}
                py={1}
                fontWeight={'400'}
                bg={'gray.250'}
                cursor={'pointer'}
                onClick={() => handleGoPeople(resident)}
              >
                {resident}
              </Badge>
            ))}
        </Stack>
      </Box>
    </Center>
  );
}
