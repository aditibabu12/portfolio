import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import aditi from "./assets/aditi_cropped.png";
import githubIcon from "./assets/github.png";
import linkedInIcon from "./assets/linkedin.png";

function App() {
  return (
    <>
      <Navbar />
      <div class="container">
        <div class="image-container">
          <img class="image" src={aditi} alt="" />
        </div>
        <div class="name-text">
          Hi, I'm <span class="pink-text-color">Aditi Babu</span>
        </div>
        <div className="positions-container">
          <div className="position">
            President, Android Club{" "}
            <span style={{ position: "relative", top: "-2px" }}>👑</span>
          </div>
        </div>
        <div class="social-icons">
          <a href="https://github.com/aditibabu125" target="_blank" rel="noopener noreferrer">
            <img class="social-icon" src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/aditi-babu-920444293" target="_blank" rel="noopener noreferrer">
            <img class="social-icon" src={linkedInIcon} alt="LinkedIn" />
          </a>
        </div>
        <div class="description-text">
          I'm a <span class="pink-text-color">sophomore</span> pursuing <span class="pink-text-color">Computer Science</span> at 
          VIT Chennai. With a passion for <span class="pink-text-color">baking</span> and a love for tackling new challenges,
          I'm always eager to learn, explore, and push my limits!
        </div>
      </div>
    </>
  );
}

export default App;
