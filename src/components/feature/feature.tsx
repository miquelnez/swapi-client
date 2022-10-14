import { ReactElement } from 'react';
import { Flex, Stack, Text } from '@chakra-ui/react';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
  fontWeight?: number;
  fontSize?: string;
  isHomeworld?: boolean;
  [x: string]: any;
}

export const Feature = ({
  text,
  icon,
  iconBg,
  fontWeight = 600,
  fontSize = 'md',
  ...rest
}: FeatureProps) => {
  return (
    <Stack align={'center'} direction={'row'} {...rest}>
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
      <Text fontSize={fontSize} fontWeight={fontWeight}>
        {text}
      </Text>
    </Stack>
  );
};
