import "./App.css";
import "./style.css";
import image1 from "./assets/catSrc.jpg";
import video1 from "./assets/funnyCat.mp4";
function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Infos about cats</h1>
        <br />
        {/* Image from src folder */}
        <img
          className="image"
          width={320}
          height={240}
          src={image1}
          alt="cat1"
        />
        <br />
        {/* Image from public folder */}
        <img
          className="image"
          width={320}
          height={240}
          src="/assets/catPublic.jpg"
          alt="cat2"
        />
      </div>
      <br />
      {/* Video from src folder */}
      <video style={{ margin: "1%" }} width={560} height={315} controls>
        <source src={video1} type="video/mp4" />
      </video>
      <br />
      {/* Video from src internet */}
      <iframe
        width={560}
        height={315}
        src="https://www.youtube.com/embed/FtSd844cI7U"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default App;
