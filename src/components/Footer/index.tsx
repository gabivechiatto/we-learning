import { Facebook } from "../../assets/Facebook";
import { Instagram } from "../../assets/Instagram";
import { Twitter } from "../../assets/Twitter";
import {
  Container, Title, Content, FooterContent, Social,
} from "./styles";

export function Footer() {
  const infos = [
    {
      title: "Company Info",
      contentOne: "About us",
      contentTwo: "Carrier",
      contentThree: "We are hiring",
      contentFour: "Blog",

    },
    {
      title: "Features",
      contentOne: "Business marketing",
      contentTwo: "User analytics",
      contentThree: "Live Chat",
      contentFour: "Blog",

    },
    {
      title: "Resources",
      contentOne: "iOS & Android",
      contentTwo: "Watch a demo",
      contentThree: "Customers",
      contentFour: "API",

    },
    {
      title: "Get in touch",
      contentOne: "(480) 555-0103",
      contentTwo: "4517 Washington Ave. Manchester, Kentucky 39495",
      contentThree: "contact@we-learning.com",

    },
  ];

  return (
    <Container>
      {infos.map(info => (
        <FooterContent>
          <Title>{info.title}</Title>
          <Content>{info.contentOne}</Content>
          <Content>{info.contentTwo}</Content>
          <Content>{info.contentThree}</Content>
          <Content>{info.contentFour}</Content>
        </FooterContent>
      ))}
      <Social>
        <Facebook />
        <Instagram />
        <Twitter />
      </Social>
    </Container>
  );
}
