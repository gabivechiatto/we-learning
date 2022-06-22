import { Facebook } from "../../assets/Facebook";
import { Instagram } from "../../assets/Instagram";
import { Twitter } from "../../assets/Twitter";
import {
  Container,
  HeaderContent,
  Title,
  Subtitle,
  CardContainer,
  Card,
  CardTitle,
  CardSubtitle,
  CardSocial,
} from "./styles";

export function Team() {
  return (
    <Container>
      <HeaderContent>
        <Title>Our Professional Team</Title>
        <Subtitle>
          Meet some of our team, made by the best professionals in the world
        </Subtitle>
      </HeaderContent>
      <CardContainer>
        <Card>
          <CardTitle>Julian Jamerson</CardTitle>
          <CardSubtitle>Marketing and Social Media Area</CardSubtitle>
          <CardSocial>
            <Facebook />
            <Instagram />
            <Twitter />
          </CardSocial>
        </Card>
        <Card>
          <CardTitle>Anna Smith</CardTitle>
          <CardSubtitle>Administration and Financial Area</CardSubtitle>
          <CardSocial>
            <Facebook />
            <Instagram />
            <Twitter />
          </CardSocial>
        </Card>
        <Card>
          <CardTitle>Richard Anderson</CardTitle>
          <CardSubtitle>Technology Area</CardSubtitle>
          <CardSocial>
            <Facebook />
            <Instagram />
            <Twitter />
          </CardSocial>
        </Card>
        <Card>
          <CardTitle>Rebecca James</CardTitle>
          <CardSubtitle>People and Culture Area</CardSubtitle>
          <CardSocial>
            <Facebook />
            <Instagram />
            <Twitter />
          </CardSocial>
        </Card>
      </CardContainer>
    </Container>
  );
}
