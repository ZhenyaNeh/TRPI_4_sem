import './App.css';
import Catalog from './componrnts/Catalog';
import { MovieLibrary } from './info/MovieLibrary';

function App() {
  return (
    <>
      <Catalog movieLib={MovieLibrary} />
    </>
  );
}

export default App;
