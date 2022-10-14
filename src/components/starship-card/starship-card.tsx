import {
  Heading,
  Avatar,
  Box,
  Center,
  Stack,
  Badge,
  useColorModeValue,
  StackDivider,
  Icon,
} from '@chakra-ui/react';
import { BsWrench, BsGear, BsFillHouseFill } from 'react-icons/bs';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getId } from '../../helpers/get-id';

import { Starship } from '../../types/types';
import { Feature } from '../feature/feature';

interface StarshipCardProps {
  testId?: string;
  starship: Starship;
  // onClickAdd: (product: ProductType) => void;
}

export default function StarshipCard({
  starship,
  testId = 'starship-card',
}: StarshipCardProps) {
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
          src={`https://loremflickr.com/250/250/${starship.name}`}
        />
        <Heading fontFamily={'body'} fontSize={'2xl'}>
          {starship.name}
        </Heading>
        <Heading fontFamily={'body'} fontSize={'xl'}>
          {starship.model}
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
            icon={<Icon as={BsWrench} w={5} h={5} color={'yellow.500'} />}
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={starship.manufacturer}
          />
          <Feature
            icon={<Icon as={FaMoneyBillAlt} w={5} h={5} color={'yellow.500'} />}
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={starship.cost_in_credits}
          />
          <Feature
            icon={<Icon as={BsGear} w={5} h={5} color={'yellow.500'} />}
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={starship.starship_class}
          />
          <Feature
            icon={
              <Icon as={BsFillHouseFill} w={5} h={5} color={'yellow.500'} />
            }
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={starship.crew}
          />
        </Stack>

        <Stack align={'center'} justify={'center'} mt={6}>
          {starship &&
            starship.pilots &&
            starship.pilots.map((pilot: string, index) => (
              <Badge
                key={index}
                px={2}
                py={1}
                fontWeight={'400'}
                bg={'gray.250'}
                cursor={'pointer'}
                onClick={() => handleGoPeople(pilot)}
              >
                {pilot}
              </Badge>
            ))}
        </Stack>
      </Box>
    </Center>
  );
}
