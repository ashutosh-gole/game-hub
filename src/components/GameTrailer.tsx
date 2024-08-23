import { SimpleGrid } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <SimpleGrid columns={1} marginBottom={2}>
      <video src={first.data[480]} poster={first.preview} controls />
    </SimpleGrid>
  ) : null;
};

export default GameTrailer;
