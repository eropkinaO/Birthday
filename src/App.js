import { Gift } from './Birthday';
import cakes from './photo-1.avif';
import ballons from './photo-2.avif';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container"> 
      <img src={ cakes } width="350px" alt="cake"/>
      </div>
      <Gift />
      <div className="container">
      <img src={ ballons } width="350px" alt="baloon"/>
      </div>
      
    </div>
  );
}

export default App;
