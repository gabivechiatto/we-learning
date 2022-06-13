import {
  Container, Title, Subtitle, Content, Form, Input, Button,
} from "./styles";

export function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Subtitle>Watch our courses!</Subtitle>
      <Content>
        Problems trying to resolve the conflict between
        the two major realms of Classical physics: Newtonian mechanics
      </Content>
      <Form>
        <Input placeholder="Enter your email" />
        <Button>Subscribe</Button>
      </Form>
    </Container>
  );
}
