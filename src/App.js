import Home from "./components/home";
import Nav from "./components/nav";
import BrandCarousel from "./components/carousel";
import Story from "./components/Story";
import About from "./components/About";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <BrandCarousel />
      <Story />
      <Contacts />
    </div>
  );
}

export default App;
