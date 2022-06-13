import { Arrow } from "../../assets/arrow";
import {
  Container, Title, NavMenu, Link, Button,
} from "./styles";

export function Header() {
  return (
    <Container>
      <Title>We-Learning</Title>
      <NavMenu>
        <Link href="#">Home</Link>
        <Link href="#">Product</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">Contact</Link>
      </NavMenu>
      <NavMenu>
        <Link href="#">Login</Link>
        <Button>
          JOIN US
          {" "}
          <Arrow />
        </Button>
      </NavMenu>
    </Container>
  );
}
