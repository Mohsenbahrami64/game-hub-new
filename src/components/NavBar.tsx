import { Box, HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between">
        <Image src={Logo} boxSize="60px" />

        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
