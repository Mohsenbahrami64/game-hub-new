import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Hide, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCart = (props: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={props.game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{props.game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCart;
