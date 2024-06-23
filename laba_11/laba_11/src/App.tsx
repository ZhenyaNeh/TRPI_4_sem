import './style/App.css';
import FilterableProductTable from './components/FilterableProductTable';
import { PRODUCTS } from './resources/Products';

function App() {
  return (
    <FilterableProductTable products={PRODUCTS}/>
  );
}

export default App;
