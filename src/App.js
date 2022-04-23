import logo from "./logo.svg";
import "./App.css";
import carss from "./carss.jpeg";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1 black", maxWidth: "100vw" }}>
        <h1 class="title red">outaiba</h1>

        <br />
        <img src={carss} alt="carss" />
        <br />
        <img src="/cars.jpeg" alt="cars" />
      </div>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/pdcNaGo9y-8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
