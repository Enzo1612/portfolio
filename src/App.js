import Profile from "./components/features/Profile/Profile";
import FirstPage from "./components/features/FirstPage/FirstPage";
import NavBar from "./components/features/NavBar/NavBar";
import Skills from "./components/features/Skills/Skills";
import Projects from "./components/features/Projects/Projects";
import Footer from "./components/features/Footer/Footer";

const App = () => {
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
};

export default App;
