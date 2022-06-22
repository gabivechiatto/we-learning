import { Counter } from "../../components/Counter";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { JoinUs } from "../../components/JoinUs";
import { LearnMore } from "../../components/LearnMore";
import { Newsletter } from "../../components/Newsletter";
import { Team } from "../../components/Team";
import { } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <JoinUs />
      <Counter />
      <LearnMore />
      <Team />
      <Newsletter />
      <Footer />
    </>
  );
}
