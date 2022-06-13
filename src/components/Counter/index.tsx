import {
  Container, CounterContent, CounterTitle, CounterText,
} from "./styles";

export function Counter() {
  return (
    <Container>
      <CounterContent>
        <CounterTitle>15k</CounterTitle>
        <CounterText>Happy customers</CounterText>
      </CounterContent>
      <CounterContent>
        <CounterTitle>150k</CounterTitle>
        <CounterText>Monthly visitors</CounterText>
      </CounterContent>
      <CounterContent>
        <CounterTitle>15</CounterTitle>
        <CounterText>Countries worldwide</CounterText>
      </CounterContent>
      <CounterContent>
        <CounterTitle>100+</CounterTitle>
        <CounterText>Top partners</CounterText>
      </CounterContent>
    </Container>
  );
}
