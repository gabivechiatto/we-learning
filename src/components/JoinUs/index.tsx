import { CircleOne } from "../../assets/CircleOne";
import { CircleThree } from "../../assets/CircleThree";
import { CircleTwo } from "../../assets/CircleTwo";
import {
  Container,
  HeaderContent,
  Title,
  Subtitle,
  ImageContent,
  ButtonContent,
  Button,
  CardsContent,
  Cards,
  CardTitle,
  CardPhrase,
  Divider,
} from "./styles";

export function JoinUs() {
  return (
    <>
      <Container>
        <HeaderContent>
          <Title>25K+ STUDENTS TRUST US</Title>
          <Subtitle>
            Every day brings with it a fresh set of learning possibilities.
          </Subtitle>
          <ButtonContent>
            <Button>Get Quote Now</Button>
            <Button>Learn More</Button>
          </ButtonContent>
        </HeaderContent>
        <ImageContent>
          <img src="/images/background.png" alt="background" />
        </ImageContent>
      </Container>
      <CardsContent>
        <Cards>
          <CircleOne />
          <CardTitle>Expert instruction</CardTitle>
          <Divider />
          <CardPhrase>
            The gradual accumulation of information about atomic and small-scale
            behaviour...
          </CardPhrase>
        </Cards>
        <Cards>
          <CircleTwo />
          <CardTitle>Training courses</CardTitle>
          <Divider />
          <CardPhrase>
            The gradual accumulation of information about atomic and small-scale
            behaviour...
          </CardPhrase>
        </Cards>
        <Cards>
          <CircleThree />
          <CardTitle>Prepared professionals</CardTitle>
          <Divider />
          <CardPhrase>
            The gradual accumulation of information about atomic and small-scale
            behaviour...
          </CardPhrase>
        </Cards>
      </CardsContent>
    </>
  );
}
