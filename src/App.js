import './App.css';
import Assistance from './components/Assistance';
import Features from './components/Features';
import Caresafely from './components/Caresafely'
import Featurestories from './components/Featurestories';
import Morenews from './components/Morenews';
import SliderImg from './components/Sliderimg';
import Landingpage from './components/Landingpage';
import Carring from './components/Carring';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Navbar/>
      <Landingpage/>
      <Features />
      <Assistance />
      <Carring />
      <Caresafely />
      <SliderImg/>
      <Featurestories/>
      <Morenews/>
    </div>

  );
}

export default App;
