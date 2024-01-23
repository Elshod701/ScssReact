import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Intro from "./Layouts/Intro/Intro";
import About from "./Layouts/About/About";
import Discuss from "./Layouts/Discuss/Discuss";
import Orange from "./Layouts/Orange/Orange";
import "./index.css";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Intro />
        <About />
        <Discuss />
        <Orange />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
