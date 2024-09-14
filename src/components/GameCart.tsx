import React from "react";
import useGames, { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  Heading,
  Hide,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import PlatformIconeList from "./PlatformIconeList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../Services/image-url";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  game: Game;
}

const GameCart = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack marginBottom={3} justifyContent="space-between">
            <PlatformIconeList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xm">{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCart;
