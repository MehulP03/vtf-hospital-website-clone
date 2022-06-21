import './App.css';
import Assistance from './components/Assistance';
import Features from './components/Features';
import Caresafely from './components/Caresafely'
import Featurestories from './components/Featurestories';
import Morenews from './components/Morenews';
import SliderImg from './components/Sliderimg';
function App() {
  return (
    <div>
      <h3> Hospital CLone</h3>
      <Features />
      <Assistance />
      <Caresafely />
      <SliderImg/>
      <Featurestories/>
      <Morenews/>
    </div>

  );
}

export default App;
