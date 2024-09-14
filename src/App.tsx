import {
  Button,
  Grid,
  GridItem,
  HStack,
  Show,
  useStatStyles,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelecter from "./components/PlatformSelecter";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside  main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...GameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            selectedGenre={GameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...GameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <GameHeading gameQuery={GameQuery} />
        <HStack spacing={5} paddingLeft={8}>
          <SortSelector
            sortOrder={GameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...GameQuery, sortOrder })
            }
          />
          <PlatformSelecter
            selectedPlatform={GameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...GameQuery, platform })
            }
          />
        </HStack>

        <GameGrid gameQuery={GameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
