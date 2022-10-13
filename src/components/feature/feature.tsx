import { ReactElement } from 'react';
import { Flex, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

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

  const handleGo = (url: string) => {
    const regex = /\d+/gm;
    const results = regex.exec(url); // url.match('\d+\');
    console.log('results', url, results);
    let planetId = '';
    if (results !== null) planetId = results[0];
    navigate(`/planets/${planetId}`);
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
        onClick={isHomeworld ? () => handleGo(text) : () => {}}
      >
        {text}
      </Text>
    </Stack>
  );
};
