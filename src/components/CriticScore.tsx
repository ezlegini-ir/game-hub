import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 85 ? "green" : score > 80 ? "yellow" : "red";

  return (
    <Badge
      colorScheme={color}
      borderRadius={"5px"}
      paddingX={2}
      fontSize={"14px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
