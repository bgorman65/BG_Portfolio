import Header from './components/header';
import Links from './components/links';
import About from './components/about';
import Education from './components/education';
import Work from './components/work';
import Projects from './components/projects';
import Tech from './components/tech';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="body">
        <Header />
        <Links />
        <About />
        <Education />
        <Work />
        <Projects />
        <Tech />
        <Footer />
    </div>
  );
}

export default App;
