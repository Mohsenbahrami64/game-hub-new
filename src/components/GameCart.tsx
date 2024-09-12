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
      <Card width="300px" borderRadius={10} overflow="hidden">
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize="2xm">{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconeList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCart;
