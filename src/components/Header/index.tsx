import { Text } from "../Text";
import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Text opacity={0.9} size={14}>
        Bem vindo(a) ao
      </Text>
      <Text size={24} weight={"700"}>
        WAITER<Text size={24}>APP</Text>
      </Text>
    </Container>
  );
};
