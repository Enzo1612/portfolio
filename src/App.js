import Profile from "./components/Profile";
import FirstPage from "./components/FirstPage";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div id="firstPage">
        <NavBar />
        <FirstPage />
      </div>
      <div className="descriptionContainer">
        <Profile />
      </div>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
