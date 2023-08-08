import logo from './logo.svg';
import './App.css';
import { ChessCourses } from "./components/ChessCourses";
import { VideoPlayer } from "./components/VideoPlayer";
import { ChessSubcription } from "./components/ChessSubcription";
import { Testimonials } from "./components/Testimonials";
import { InfoFooter } from "./components/InfoFooter";

function App() {
  return (
    <div className="App">
      <div className="h-full bg-gradient-to-r from-sky-500 to-indigo-500">
      <section className="flex-start flex-col">
        <section id="ChessCourses" className="section-fill">
          {" "}
          <ChessCourses />
        </section>
        <section id="VideoPlayer" className="section-fill">
          {" "}
          <VideoPlayer />
        </section>
        <section id="ChessSubcription" className="section-fill">
          <ChessSubcription />
        </section>
        <section id="Testimonials" className="section-fill">
          {" "}
          <Testimonials />
        </section>
        <section id="InfoFooter" className="section-fill">
          {" "}
          <InfoFooter />
        </section>
      </section>
    </div>
    </div>
  );
}

export default App;
