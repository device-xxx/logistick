import { Advantages } from "./components/advantages/advantages";
import { Container } from "./components/container/container";
import { Footer } from "./components/footer/footer";
import { Gruz } from "./components/gruz/gruz";
import { Header } from "./components/header/header";
import { How } from "./components/how/how";
import { News } from "./components/news/news";
import { Slider } from "./components/slider/slider";

export default function Home() {
  return (
<>
<Header/>
<Slider/>
<News/>
<Gruz/>
<Container/>
<Advantages/>
<How/>
<Footer/>
</>
  );
}
