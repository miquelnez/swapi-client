import { ReactElement } from 'react';
import { Flex, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getId } from '../../helpers/get-id';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
  fontWeight?: number;
  fontSize?: string;
  isHomeworld?: boolean;
}

export const Feature = ({
  text,
  icon,
  iconBg,
  fontWeight = 600,
  fontSize = 'md',
  isHomeworld = false,
}: FeatureProps) => {
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
    <Stack align={'center'} direction={'row'}>
      <Flex
        align={'center'}
        justify={'center'}
        w={8}
        h={8}
        bg={iconBg}
        rounded={'full'}
      >
        {icon}
      </Flex>
      <Text
        fontSize={fontSize}
        fontWeight={fontWeight}
        onClick={isHomeworld ? () => handleGoPlanet(text) : () => {}}
      >
        {text}
      </Text>
    </Stack>
  );
};
