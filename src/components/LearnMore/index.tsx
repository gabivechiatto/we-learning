import { LearnMoreImage } from "../../assets/LearnMoreImage";
import { SimpleArrow } from "../../assets/SimpleArrow";
import {
  Container,
  HeaderContent,
  Title,
  Subtitle,
  Button,
  Divider,
  ImageContent,
} from "./styles";

export function LearnMore() {
  return (
    <Container>
      <HeaderContent>
        <Divider />
        <Title>Every Cliente Matters</Title>
        <Subtitle>
          Problems trying to resolve the conflict between
          the two major realms of Classical physics:
          Newtonian mechanics.
        </Subtitle>
        <Button>
          Learn more
          {" "}
          <SimpleArrow />
        </Button>
      </HeaderContent>
      <ImageContent>
        <LearnMoreImage />
      </ImageContent>
    </Container>
  );
}
