import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaApple,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    linux: FaLinux,
    mac: FaApple,
    xbox: FaXbox,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={"10px"}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          color={"gray.500"}
          as={iconMap[platform.slug]}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
