import {
  Heading,
  Box,
  Center,
  Stack,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getId } from '../../helpers/get-id';

import { People } from '../../types/types';
import FollowIcon from '../follow-icon/follow-icon';

interface PeopleCardSimpleProps {
  testId?: string;
  person: People;
  // onClickAdd: (product: ProductType) => void;
}

export default function PeopleCardSimple({
  person,
  testId = 'people-card-simple',
}: PeopleCardSimpleProps) {
  const image = `https://loremflickr.com/500/500/${person.name}`;
  const navigate = useNavigate();

  const handleGo = (url: string) => {
    const id = getId(url);
    navigate(`/people/${id}`);
  };

  return (
    <Center py={12}>
      <Box
        pos={'relative'}
        zIndex={1}
        w={'full'}
        maxW={'330px'}
        p={6}
        bg={useColorModeValue('white', 'gray.800')}
        shadow={'2xl'}
        data-test={`${testId}-container`}
        data-testid={`${testId}-container`}
        role={'group'}
        rounded={'lg'}
      >
        <Box
          pos={'relative'}
          h={'230px'}
          mt={-12}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
          rounded={'lg'}
        >
          <Image
            w={282}
            h={230}
            objectFit={'cover'}
            rounded={'lg'}
            src={image}
          />
        </Box>
        <Stack align={'center'} direction={'row'} pt={4}>
          <Heading
            fontFamily={'body'}
            fontSize={'2xl'}
            fontWeight={500}
            cursor={'pointer'}
            onClick={() => handleGo(person.url)}
          >
            {person.name}{' '}
          </Heading>
          <FollowIcon following={true} bg="red.200" size="20px"></FollowIcon>
        </Stack>
      </Box>
    </Center>
  );
}
