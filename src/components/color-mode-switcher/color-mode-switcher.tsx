import * as React from 'react';
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  // eslint-disable-next-line import/named
  IconButtonProps,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      ml="2"
      color="current"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      data-test="color-mode-switcher"
      data-testid="color-mode-switcher"
      icon={<SwitchIcon />}
      onClick={toggleColorMode}
      size="md"
      variant="ghost"
      {...props}
    />
  );
};

export default ColorModeSwitcher;
